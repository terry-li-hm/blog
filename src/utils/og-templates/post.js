import satori from "satori";
// import { html } from "satori-html";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

// const markup = html`<div
//       style={{
//         background: "#fefbfb",
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           position: "absolute",
//           top: "-1px",
//           right: "-1px",
//           border: "4px solid #000",
//           background: "#ecebeb",
//           opacity: "0.9",
//           borderRadius: "4px",
//           display: "flex",
//           justifyContent: "center",
//           margin: "2.5rem",
//           width: "88%",
//           height: "80%",
//         }}
//       />

//       <div
//         style={{
//           border: "4px solid #000",
//           background: "#fefbfb",
//           borderRadius: "4px",
//           display: "flex",
//           justifyContent: "center",
//           margin: "2rem",
//           width: "88%",
//           height: "80%",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             margin: "20px",
//             width: "90%",
//             height: "90%",
//           }}
//         >
//           <p
//             style={{
//               fontSize: 72,
//               fontWeight: "bold",
//               maxHeight: "84%",
//               overflow: "hidden",
//             }}
//           >
//             {post.data.title}
//           </p>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "100%",
//               marginBottom: "8px",
//               fontSize: 28,
//             }}
//           >
//             <span>
//               by{" "}
//               <span
//                 style={{
//                   color: "transparent",
//                 }}
//               >
//                 "
//               </span>
//               <span style={{ overflow: "hidden", fontWeight: "bold" }}>
//                 {post.data.author}
//               </span>
//             </span>

//             <span style={{ overflow: "hidden", fontWeight: "bold" }}>
//               {SITE.title}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>`;

export default async (post) => {
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
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "40px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "24px",
                      fontWeight: "500",
                      color: "rgba(0, 0, 0, 0.85)",
                      letterSpacing: "-0.01em",
                    },
                    children: SITE.title,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      width: "32px",
                      height: "2px",
                      background: "rgba(0, 0, 0, 0.15)",
                      borderRadius: "1px",
                    },
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "18px",
                      fontWeight: "400",
                      color: "rgba(0, 0, 0, 0.4)",
                      letterSpacing: "-0.01em",
                    },
                    children: "Article",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                maxWidth: "900px",
              },
              children: [
                {
                  type: "h1",
                  props: {
                    style: {
                      fontSize: "64px",
                      fontWeight: "500",
                      color: "rgba(0, 0, 0, 0.85)",
                      margin: "0",
                      lineHeight: "1.1",
                      letterSpacing: "-0.02em",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "3",
                      WebkitBoxOrient: "vertical",
                    },
                    children: post.data.title,
                  },
                },
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: "24px",
                      fontWeight: "400",
                      color: "rgba(0, 0, 0, 0.5)",
                      margin: "32px 0 0 0",
                      lineHeight: "1.3",
                      letterSpacing: "-0.01em",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                    },
                    children: post.data.description || "",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "40px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "18px",
                      fontWeight: "400",
                      color: "rgba(0, 0, 0, 0.4)",
                      letterSpacing: "-0.01em",
                    },
                    children: `by ${post.data.author || SITE.author}`,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "rgba(0, 0, 0, 0.3)",
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
      fonts: await loadGoogleFonts(post.data.title + (post.data.description || "") + post.data.author + SITE.title + SITE.website),
    },
  );
};
