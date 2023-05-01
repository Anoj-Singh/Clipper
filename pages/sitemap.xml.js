import React from "react";

const sanitize = (slug) => {
  slug.includes("&") ? slug.replaceAll("&", "&amp;") : slug;
};

const createSitemap = (data) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
        <url>
            <loc>https://www.joinclipper.com/</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/all-stores</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/top-coupons</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/black-friday</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/privacy-policy</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/copyright</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/accessibility-statement</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/do-not-sell-my-info</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/terms-of-use</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/clipper-coins</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/about</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/frequently-asked-questions</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/deal-of-the-day</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/extension</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/blog/</loc>
        </url>
        <url>
            <loc>https://www.joinclipper.com/404/</loc>
        </url>
        ${
          data &&
          data.blog
            .map(({ slug }) => {
              return `
                    <url>
                        <loc>${`https://www.joinclipper.com/blog/${encodeURIComponent(
                          slug
                        )}`}</loc>
                    </url>
                `;
            })
            .join("")
        }
        ${
          data &&
          data.store
            .map(({ slug }) => {
              return `
                    <url>
                        <loc>${`https://www.joinclipper.com/all-stores/${encodeURIComponent(
                          slug
                        )}`}</loc>
                    </url>
                `;
            })
            .join("")
        }
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    try {
      const request = await fetch(`https://www.joinclipper.com/api/sitemap`);
      const data = await request.json();
      res.setHeader("Content-Type", "application/xml");
      res.write(createSitemap(data));
      res.end();
    } catch (err) {
    //   console.log({ err });
      res.write({ err: err.message });
      res.end();
    }
  }
}

export default Sitemap;
