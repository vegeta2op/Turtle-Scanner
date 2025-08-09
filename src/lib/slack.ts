import { WebClient } from "@slack/web-api";
import { env } from "@/env";

export function createSlackClient() {
  if (!env.SLACK_BOT_TOKEN) return null;
  return new WebClient(env.SLACK_BOT_TOKEN);
}


