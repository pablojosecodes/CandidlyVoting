import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";


const isProd = process.env.NODE_ENV === "production";

const appUrl = "https://go.votecandidly.com"
// const appUrl = "http://localhost:3000"
export const global_app = appUrl


export const pageOrder = [
  "analysis", "tools", "recommendations", "favorites", "profiles", "youtube", "tiktok", "email", "account", "billing"
]




export { appUrl, isProd };
