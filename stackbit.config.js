import { defineStackbitConfig } from "@stackbit/types";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "18",
  contentSources: [
    {
      name: "contentful",
      type: "contentful",
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
      previewToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    }
  ],
  models: []
});
