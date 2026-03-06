export const SITE = {
  website: "https://terryli.hm/", // replace this with your deployed domain
  author: "Terry Li",
  profile: "",
  desc: "AI practitioner in Hong Kong. Writing about production AI in financial services, agentic systems, and what it means to think alongside machines.",
  title: "TL;HM",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/terry-li-hm/blog/edit/main/",
  },
  showDate: false,
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
