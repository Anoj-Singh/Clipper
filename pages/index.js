import Banner from "../components/Home/Banner";
import Footer from "../components/shared/Footer";
import Coupon from "../components/shared/Coupon";
import stores from "../data/stores";
import Head from "next/head";
import dynamic from "next/dynamic";
import PopularCoupons from "../components/Home/PopularCoupons";
import { skimLinksDeals } from "../lib/affiliate";
import db from "../config/db";
import Component from "../models/component";
import HomeContent from "../components/Home/HomeContent";
import { useEffect } from "react";

const Slider = dynamic(() => import("../components/shared/Slider"), {
  ssr: false,
});
const PopularDeals = dynamic(
  () => import("../components/shared/PopularDeals"),
  {
    ssr: false,
  }
);

export async function getStaticProps() {
  await db();
  const component = await Component.findOne({
    site: process.env.SITE_ID,
    slug: "home-trending-deals",
  });
  const flipCard = await Component.findOne({
    site: process.env.SITE_ID,
    slug: "flip-card",
  });
  const skimLinkPromise = await skimLinksDeals({ limit: 28 });
  return {
    props: {
      stores: stores.slice(0, 10),
      posts: skimLinkPromise,
      trendingDeals: JSON.parse(JSON.stringify(component.contents)),
      flipCard: JSON.parse(JSON.stringify(flipCard)),
      meta: {
        title:
          "Apply Online Coupons, Promo Code, Deals and Exclusive Offers | Clipper",
        description:
          "Save more with best Coupons, Promo Code, Deals and Offers available at Clipper ✔  Thousands of online stores ✔ Apply coupon at single click ✔ Get Extension",
        keywords:
          "coupon codes, code, discounts, best deal online, coupons, promotional, promo, promotion, deal, promo code, offers, discount code, best deal offers, Clipper extension, Clipper coupon, how to use Clipper extension, Clipper login",
        pageUrl: "https://www.joinclipper.com/",
        featuredImage: process.env.FAV_ICON,
      },
    },
    revalidate: 86400,
  };
}

export default function Home({ stores, posts, trendingDeals, flipCard }) {
  useEffect(() => {
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
      OneSignal.init({
        appId: "268028f3-c8b6-4571-bd28-667cebdebd0b",
        notifyButton: {
          enable: true,
        },

        allowLocalhostAsSecureOrigin: true,
      });
    });
    return () => {
      window.OneSignal = undefined;
    };
  }, []);
  const coupons = posts.filter((post) => post.code);
  return (
    <>
      <Head>
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
      </Head>

      {/* <GlassCards trendingDeals={trendingDeals} /> */}

      <Slider
        stores={stores}
        trendingDeals={trendingDeals}
        flipCard={flipCard}
      />
      <Coupon posts={posts.slice(0, 8)} />
      <Banner />
      <PopularDeals posts={posts.slice(8, 16)} />
      <PopularCoupons posts={coupons} />
      <HomeContent />
      <Footer />
    </>
  );
}
