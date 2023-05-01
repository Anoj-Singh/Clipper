import React from "react";
import Link from "next/link";
import Footer from "../components/shared/Footer";

export async function getStaticProps() {
  return {
    props: {
      noHeader: true,
      meta:{
        title:"Earn Clipper Coin at Your Favourite Stores | Clipper",
        description:"Clipper members earn Clipper Coin every day when shopping online at stores like Best Buy, Walmart, and more. Don't wait, earn cash today!",
        keywords:"coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Clipper extension, Clipper coupon, how to use Clipper extension, Clipper login",
        pageUrl:"https://www.joinclipper.com/clipper-coins",
        featuredImage:process.env.FAV_ICON
      }
    },
  };
}

export default function ClipperCoins() {
  return (
    <>
      <div className="container-fluid bg-white p-3 clippercoin-p">
        <Link href="/" passHref>
          <img
            src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648028812332-clipper-logo.png"
            style={{ cursor: "pointer", width: "120px" }}
            alt="clipper"
          />
        </Link>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-5">
              <h1 className="clipper-title">Shop More Earn More.</h1>
              <p className="pt-2 clipper-sub">
                As you already know, Clipper finds the best coupons and applies
                them automatically to your shopping cart. But did you know that
                you can earn while shopping from Clipper? Yes, you can earn
                Clipper coins depending on where and how much you shop. You can
                redeem those clipper coins as real cash or use them for further
                discounts on more shopping. This is the best thing that will
                ever happen to all the shopaholics to shop and earn
                simultaneously.
              </p>
              <button
                className="btn my-3 text-white py-2 px-3 popularDealsBtn1"
                style={{ backgroundColor: "#0d6fa1" }}
              >
                Start Earning Now
              </button>
            </div>
            <div className="col-lg-6 py-5">
              <video width="100%" height="100%" autoPlay loop muted>
                <source
                  src="https://super-dashboard-images-cdn.s3.amazonaws.com/videos/1648297584399-clippercoinsvideo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="howcoinwork">
          <div className="container py-4">
            <h2 className="text-center my-4 coins-heading">
              How Clipper Coins Work?
            </h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
              <div className="col">
                <div className="card h-100 borderRemove py-3 shadow">
                  <img
                    src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648814765194-clipper-coins-icon.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title borderRemoveh5">
                      1. Create Account
                    </h5>
                    <p className="card-text borderRemoveP">
                      Create a free account by signing up and getting a personal
                      dashboard to track how many clipper coins you have earned.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 borderRemove py-3 shadow">
                  <img
                    src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648814758657-clipper-coins-icon.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title borderRemoveh5">
                      2. Shop And Earn
                    </h5>
                    <p className="card-text borderRemoveP">
                      The more you shop, the more you earn. Therefore, on all
                      your purchases, you will earn clipper coins which will
                      keep adding to your clipper wallet.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 borderRemove py-3 shadow">
                  <img
                    src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648814750563-clipper-coins-icon.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title borderRemoveh5">
                      3. Redeem Your Clipper Coins
                    </h5>
                    <p className="card-text borderRemoveP">
                      You can redeem your collected clipper coins as real cash
                      or more discounts on different stores while shopping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="my-5 text-center">
            <h2 className="mb-4 coins-heading">
              The Best Place For Earning Rewards
            </h2>
            <p >
              We are here to make online shopping special and exciting for our
              customers. Not only do we provide automated coupon searches and
              apply them to your cart, but we also give you rewards on your
              purchases. Via clipper coins, you can earn more money even while
              shopping.
            </p>

            <img id="clipper-laptop" src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648811529582-clipper-laptop.jpeg" alt="clipper-coins" />
          </div>
          <div
            className="row row-cols-1 row-cols-md-2 g-4 "

          >
            <div className="col">
              <div className="card border">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    <span style={{
                      background: "#0e71a2",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      marginRight: "10px",
                      color: "white"
                    }}>1</span>
                    Different Stores, Different Rewards
                  </h5>
                  <p className="card-text ">
                    You can shop from any possible store, and we will help you
                    save money. Hence, keep shopping and earning clipper coins
                    on your eligible purchases from different shops. However,
                    the number of clipper coins gained differs with each store
                    depending on how much you shop.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                  <span style={{
                      background: "#0e71a2",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      marginRight: "10px",
                      color: "white"
                    }}>1</span>
                    More Coins, More Dollars
                  </h5>
                  <p className="card-text">
                    You can also redeem your Clipper coins as real cash. You can
                    track your clipper coins on your dashboard every time you
                    shop. Every 1000 clipper coins are worth $1. Therefore, the
                    more coins you collect, the more dollars you get. You can
                    withdraw your cash anytime you want.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                  <span style={{
                      background: "#0e71a2",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      marginRight: "10px",
                      color: "white"
                    }}>3</span>
                    More Coins, More Discounts
                  </h5>
                  <p className="card-text">
                    When you collect clipper coins, there’s no restriction on
                    how you use them. Therefore, you can use your earned coins
                    on further shopping and get more discounts to save money.
                    However, every store will have a different discount
                    redemption amount for a different number of coins.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                  <span style={{
                      background: "#0e71a2",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      marginRight: "10px",
                      color: "white"
                    }}>4</span>
                    Occassional Clipper Coin Bouns
                  </h5>
                  <p className="card-text">
                    Once you start collecting clipper coins, Your clipper coins pile up faster than you know.
                    Therefore, you keep shopping, and your clipper coins keep
                    increasing in numbers. However, keep an eye on occasional
                    bonuses you might get through Clipper. You never know when
                    you might get free clipper coins.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-5 pt-5">
            <h3 className="coins-heading text-center">
              Top Stores Means Bigger Deals{" "}
            </h3>
            <p className="text-center">
              Clipper looks out and applies money-saving coupon codes on more
              than 30,000 stores worldwide. Hence, it works in a way that you
              don’t have to do anything other than shop. Apart from that, while
              you’re shopping, it increases the number of clipper coins on your
              dashboard. You can keep an eye on how many coins you have earned
              on your dashboard and redeem them however you like later.
              Therefore, keep in mind that the bigger the store, the bigger the
              deal and the bigger the number of clipper coins.
            </p>
          </div>

          <div className="container text-center pb-5">
            <img
              src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648814772434-clipper-coins-icon.png"
              alt="clipper coin"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
