
const isProd = process.env.NODE_ENV === "production";


// 
// const appUrl = !isProd ? "http://localhost:3000" : "YOUR_DEPLOYED_SITE_URL";

const appUrl = "https://votecandidly.com/"
export const global_app = ""


export const pageOrder = [
  "analysis", "tools", "recommendations", "favorites", "profiles", "youtube", "tiktok", "email", "account", "billing"
]

export {  appUrl, isProd };