import fs from "fs";
import path from "path";
import { z } from "zod";

const LinkSchema = z.object({
  label: z.string().min(1, "Link label cannot be empty"),
  url: z.string().url("Link URL must be a valid URL").refine((val) => val.startsWith("https://"), {
    message: "Link URL must start with https:// for security",
  }),
});

const ExperienceSchema = z.object({
  company: z.string().min(1, "Company name is required"),
  role: z.string().min(1, "Role title is required"),
  period: z.string().min(1, "Period is required"),
  summary: z.string().min(1, "Role summary is required"),
  evidence: z.array(z.string().min(1, "Evidence item cannot be empty")).min(1, "At least one evidence point is required"),
});

const ProjectSchema = z.object({
  name: z.string().min(1, "Project name is required"),
  description: z.string().min(1, "Project description is required"),
  skills: z.array(z.string().min(1, "Skill name cannot be empty")).min(1, "At least one skill is required"),
  url: z.string().optional().or(z.literal("")),
});

export const ProfileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  headline: z.string().min(1, "Headline is required"),
  location: z.string().min(1, "Location is required"),
  summary: z.string().min(1, "Summary is required"),
  links: z.array(LinkSchema),
  capabilities: z.array(z.string().min(1, "Capability cannot be empty")).min(1, "At least one capability is required"),
  experience: z.array(ExperienceSchema),
  projects: z.array(ProjectSchema),
});

export type ProfileData = z.infer<typeof ProfileSchema>;

export interface ValidationResult {
  success: boolean;
  data?: ProfileData;
  error?: string;
}

export function getProfile(): ValidationResult {
  try {
    const filePath = path.join(process.cwd(), "career-data", "profile.json");
    if (!fs.existsSync(filePath)) {
      return {
        success: false,
        error: "profile.json file is missing in career-data/ folder.",
      };
    }
    const fileContent = fs.readFileSync(filePath, "utf-8");
    let json: any;
    try {
      json = JSON.parse(fileContent);
    } catch (e: any) {
      return {
        success: false,
        error: `JSON syntax error: ${e.message}. Please check that you used double quotation marks and did not include trailing commas.`,
      };
    }

    const parseResult = ProfileSchema.safeParse(json);
    if (!parseResult.success) {
      const formattedErrors = parseResult.error.issues
        .map((err) => {
          const pathStr = err.path.join(".");
          return `• "${pathStr}": ${err.message}`;
        })
        .join("\n");
      return {
        success: false,
        error: `Validation failed:\n${formattedErrors}`,
      };
    }

    return {
      success: true,
      data: parseResult.data,
    };
  } catch (e: any) {
    return {
      success: false,
      error: `Unexpected error loading profile: ${e.message}`,
    };
  }
}
