import type { Props } from "astro";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconHackerNews from "@/assets/icons/IconHackerNews.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconMail from "@/assets/icons/IconMail.svg";
import IconReddit from "@/assets/icons/IconReddit.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/terrylihm/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/terry-li-hm",
    linkTitle: `${SITE.title} on GitHub`,
    icon: IconGitHub,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    linkTitle: `Share this post on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Reddit",
    href: "https://reddit.com/submit?url=",
    linkTitle: `Share this post on Reddit`,
    icon: IconReddit,
  },
  {
    name: "HackerNews",
    href: "https://news.ycombinator.com/submitlink?u=",
    linkTitle: `Share this post on Hacker News`,
    icon: IconHackerNews,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
