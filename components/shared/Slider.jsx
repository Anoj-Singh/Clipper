import { React, useState } from "react";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "../cardflip/CardFlip2";
export default function Slider({ stores, trendingDeals, flipCard }) {
  const [trendingDealsArr] = useState(
    Object.values(trendingDeals).map((item) => JSON.parse(item))
  );
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-12 col-sm-12 mb-2"
            style={{ padding: "0", marginTop: "20px" }}
          >
            <Carousel
              className="carousel"
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={2000}
              swipeable={true}
              emulateTouch={true}
            >
              {trendingDealsArr.map((item) => (
                <div onClick={() => window.open(item.link)}>
                  <img src={item.bg_image} loading="lazy" alt="" />
                </div>
              ))}
            </Carousel>
            {/* <img src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1650276511803-clipperbanner1.jpeg" /> */}
          </div>
          <div className="col-lg-3 d-lg-block d-md-none d-none d-sm-none">
            <Card flipCard={flipCard} />
          </div>

          {/* </div> */}

          <div id="commission-msg">
            When you buy through links on Joinclipper we may earn a commission.{" "}
            <span className="text-decoration-underline me-1">
              <Link href={"/terms-of-use"}>Learn more</Link>
            </span>
            <br />
            <h1
              style={{ fontSize: "20px", fontWeight: "600", padding: "10px 0" }}
            >
              Get Authentic Coupons Promo Code and Deals to Shop your all
              Favourite Brands
            </h1>
            <p className={{ paddingBottom: "10px" }}>
              Shopping online is supposed to be fun, and if you are not having
              any while at it, you need us. With Join Clipper, revamp your
              average shopping skills and become a veteran. Furthermore, the
              hassle of searching for deals, bonuses, savings, and overall value
              ends here. We offer a pleasurable online shopping experience with
              millions of discount coupons and promo codes for over 45000 online
              stores and brands. Bid farewell to your regular time-consuming
              process and get things at more reasonable prices.
            </p>
            <p>
              {" "}
              We have a result-oriented extension named Join{" "}
              <a href="/extension">Clipper Extension</a> that automatically
              applies coupons and codes to your cart total. Therefore, you don’t
              have to put in the extra effort to find anything. All you have to
              do is shop more and save more with us. Furthermore, earn hefty and
              exciting rewards as <a href="/clipper-coins">Clipper Coins</a> ,
              which you can avail yourself of for more shopping or cashback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
