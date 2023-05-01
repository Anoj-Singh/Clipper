import Footer from "../components/shared/Footer";
import Categories from "../components/AllCategory/Categories";

export async function getStaticProps() {
  
  return {
    props: {
      meta:{
        title:"Apply Online Coupons, Promo Code, Deals and Exclusive Offers | Clipper",
        description:"Save more with best Coupons, Promo Code, Deals & Offers available at Clipper ✔  Thousands of online stores ✔ Apply coupon at single click ✔ Get Extension",
        keywords:"coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Clipper extension, Clipper coupon, how to use Clipper extension, Clipper login",
        pageUrl:"https://www.joinclipper.com/all-categories",
        featuredImage:process.env.FAV_ICON
      }
    },
  };
}

export default function AllCategories() {
  return (
    <>
      <Categories />
      <Footer />
    </>
  );
}
