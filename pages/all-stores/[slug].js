import React from "react";
import Footer from "../../components/shared/Footer";
import stores from "../../data/stores";
import { skimLinksDeals, skimLinksStore } from "../../lib/affiliate";
import SlugStore from "../../components/AllStore/SlugStore";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  try {
    const slug = context.params.slug;
    const store = stores.find((item) => item.slug === slug);
    if (store) {
      const coupons = await skimLinksDeals({ storeId: store.id });
      const storeDetail = await skimLinksStore(store.id);
      const props = JSON.parse(JSON.stringify({ store: storeDetail, coupons,slug }));
      return {
        props,
        revalidate: 86400,
      };
    } else {
      return {
        props: {},
        notFound: true,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      redirect: {
        destination: "/all-stores",
        permanent: false,
      },
    };
  }
}

export default function StoreCoupons({ coupons, store,slug }) {
  return (
    <>
      <SlugStore coupons={coupons} store={store} slug={slug}/>
      <Footer />
    </>
  );
}
