import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(16),
  APP_BASE_URL: z.string().url(),
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url().optional(),
  GITLAB_BASE_URL: z.string().url().default("https://gitlab.com"),
  GITLAB_TOKEN: z.string().optional(),
  GITHUB_TOKEN: z.string().optional(),
  JIRA_HOST: z.string().optional(),
  JIRA_EMAIL: z.string().email().or(z.string().length(0)).optional(),
  JIRA_API_TOKEN: z.string().optional(),
  SLACK_BOT_TOKEN: z.string().optional(),
  SLACK_SIGNING_SECRET: z.string().optional(),
  OPENAI_API_KEY: z.string().optional(),
});

export const env = envSchema.parse(process.env);


