import { env } from "@/env";
import { Version3Client } from "jira.js";

export function createJiraClient() {
  if (!env.JIRA_HOST || !env.JIRA_EMAIL || !env.JIRA_API_TOKEN) {
    return null;
  }
  const client = new Version3Client({
    host: `https://${env.JIRA_HOST}`,
    authentication: {
      basic: {
        email: env.JIRA_EMAIL,
        apiToken: env.JIRA_API_TOKEN,
      },
    },
  });
  return client;
}


