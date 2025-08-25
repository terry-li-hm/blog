import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

export default async () => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px",
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                maxWidth: "800px",
              },
              children: [
                {
                  type: "h1",
                  props: {
                    style: {
                      fontSize: "96px",
                      fontWeight: "500",
                      color: "rgba(0, 0, 0, 0.85)",
                      margin: "0",
                      letterSpacing: "-0.02em",
                      lineHeight: "0.9",
                    },
                    children: SITE.title,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      width: "120px",
                      height: "2px",
                      background: "rgba(0, 0, 0, 0.15)",
                      margin: "60px 0",
                      borderRadius: "1px",
                    },
                  },
                },
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: "32px",
                      fontWeight: "400",
                      color: "rgba(0, 0, 0, 0.6)",
                      margin: "0",
                      lineHeight: "1.4",
                      maxWidth: "700px",
                      letterSpacing: "-0.01em",
                    },
                    children: SITE.desc,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      marginTop: "80px",
                      fontSize: "20px",
                      fontWeight: "400",
                      color: "rgba(0, 0, 0, 0.4)",
                      letterSpacing: "-0.01em",
                    },
                    children: new URL(SITE.website).hostname,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(SITE.title + SITE.desc + SITE.website),
    },
  );
};
