export const SITE = {
  website: "https://terryli.hm/", // replace this with your deployed domain
  author: "Terry Li",
  profile: "",
  desc: "An AI practitioner who uses these tools daily, sees the hype and the reality, and thinks honestly about what it all means.",
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
  timezone: "Asia/Hong_Kong", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
