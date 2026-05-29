import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://www.patrickyao.top/",
    title: "Patrick的笔记",
    description: "记录思考，沉淀成长。.",
    author: "Patrick Yao",
    profile: "https://www.patrickyao.top",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/pyao12" },
    { name: "mail",     url: "mailto:patrick25yao@outlook.com" },
  ]
});