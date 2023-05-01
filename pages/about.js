import React from "react";
import Footer from "../components/shared/Footer";

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: "About us - Clipper | Online Coupons, Promo Code & Deals",
        description:
          "Clipper offer a pleasurable online shopping experience with millions of discount coupons and promo codes for over 45000 online stores",
        keywords:
          "coupon codes, code, discounts, coupons,promotional, promo, promotion, deal,promo code, offers, discount code, best deal offers, Clipper extension, Clipper coupon, how to use Clipper extension, Clipper login",
        pageUrl: "https://www.joinclipper.com/about",
        featuredImage: process.env.FAV_ICON,
      },
    },
  };
}

const about = () => {
  return (
    <>
      <img
        style={{ width: "100%" }}
        src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648814111293-about-us.jpeg"
        alt="about clipper"
      ></img>

      <div className="container-fluid bg-white  py-5">
        <div className="container py-5" style={{ lineHeight: "2" }}>
          <small>
            Clipper saves you time and effort by allowing you to look for
            coupons and discounts without having to trawl through the internet.
            While you're shopping online, this free tool automatically looks for
            and uses the most excellent money-saving promo coupons. Clipper is a
            valuable and user-friendly extension for people who enjoy shopping
            online. Thus, saving money when purchasing is as simple as clicking
            a button.
          </small>
          <small>
            Shopping becomes an extravagant spending spree for impulse buyers.
            However, with Clipper, you don't need to worry about spending too
            much. Since our automatic search applies money-saving coupons on its
            own, you can shop your heart out. Moreover, while shopping, we often
            get stuck because of price or payment issues. Thus, that's where the
            Clipper comes into the picture to save the day. Our tool has been
            designed in a way that is bound to help you in all ways possible.
            Therefore, start shopping and save money with Clipper.
          </small>
        </div>
      </div>
      <div className=" container">
        <div className="mt-5">
          <h2 className="text-center ext-title pb-5">What We Implement</h2>
          <div className="aboutPageSection">
            <div className="row about-pointer">
              <div className="col-lg-4">
                <div className="aboutPageP">
                  <img
                    src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648633320911-about-icon.gif"
                    alt="Automatic Search"
                  />
                  <h5 className="fw-bold text-center">Automatic Search</h5>
                  <p>
                    Clipper is independent once installed. Simply shop as usual
                    on websites, and this tool will automatically find the best
                    codes, compare them, and apply the best code at checkout.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="aboutPageP">
                  <img
                    src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648634781609-about-icon-4.gif"
                    alt="Automatic Search"
                  />
                  <h5 className="fw-bold text-center">Clipper Coins</h5>
                  <p>
                    Clipper Coins can be earned by shopping with Clipper.
                    Therefore, the more you shop, the more money you make.
                    Clipper coins can be redeemed for further savings at some
                    stores.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="aboutPageP">
                  <img
                    src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648634751122-about-icon-2.gif"
                    alt="Automatic Search"
                  />
                  <h5 className="fw-bold text-center">
                    45,000+ Shopping Websites
                  </h5>
                  <p>
                    Clipper searches for coupons and applies them to over 45,000
                    different purchasing websites. Shopping online has just
                    become a whole lot easier and less expensive, thanks to
                    Clipper.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-4 ">
              <div className="aboutPageP">
                <img
                  src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648634736047-about-icon-1.gif"
                  alt="Automatic Search"
                />
                <h5 className="fw-bold text-center">Free and Easy-to-use</h5>
                <p>
                  Clipper is entirely free, allowing you to save a significant
                  amount of money at no cost at all. Furthermore, because you
                  don't have to change anything, the extension is quite simple
                  to use.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aboutPageP">
                <img
                  src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1648634767101-about-icon-3.gif"
                  alt="Automatic Search"
                />
                <h5 className="fw-bold text-center">Shop Anything</h5>
                <p>
                  Clipper caters to all of your purchasing needs, from food to
                  flights, furnishings to footwear. You may be shopping for
                  anything, and Clipper will get you a deal on it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid know-way mt-5">
        <div className="container">
          <h2 className="text-center ext-title pb-4">Know Our Way</h2>
          <small>
            Every time you shop from our stores and get savings, we earn a
            commission. However, it's not in our business to share or sell your
            personal data or information with anyone. (Read our privacy policy
            here)
          </small>
          <br></br>
          <br></br>
          <small>
            Our goal is to help you shop better and save money. This eliminates
            the need to scour the internet for discounts. Clipper will function
            independently after being installed and supply you with the most
            fantastic promo codes and savings. Therefore, here's a place which
            gives you more for less even if there's nothing more for us. Does
            this sound better to you?
          </small>
        </div>
      </div>
      <div className="container">
        <div className="mt-5">
          <h2 className="text-center ext-title pb-4">Our Morals</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="aboutPageB">
                <h5 className="fw-bold mb-0 text-center">
                  Look for the fundamentals.
                </h5>
                <small>
                  We don't just handle the problems. We look for the causes. We
                  always ask questions, seek out different points of view, and
                  remain open to anything we find. Even if it takes us to
                  unexpected locations.
                </small>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aboutPageB">
                <h5 className="fw-bold mb-0 text-center">
                  Make the proper decision.
                </h5>
                <small>
                  No matter how major or minor, every choice we make is made
                  with our members' best interests in heart and mind. What's
                  best for members always takes precedence over what's
                  profitable.
                </small>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aboutPageB">
                <h5 className="fw-bold mb-0 text-center">
                  Make something that you're proud of.
                </h5>
                <small>
                  We're obsessive about perfecting our expertise to create
                  things that matter to us and others. We're proud of the level
                  of craftsmanship and how it's received by others. In the end,
                  we're part of the same community and together.
                </small>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aboutPageB">
                <h5 className="fw-bold mb-0 text-center">
                  Improve the lives of those around you.
                </h5>
                <small>
                  We have high expectations of ourselves and others. We
                  consistently explore and give feedback to others because we
                  believe that as each person develops, so does the rest of the
                  team. It's a definite plus.
                </small>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aboutPageB">
                <h5 className="fw-bold mb-0 text-center">
                  Take responsibility for the outcome.
                </h5>
                <small>
                  We recruit exceptional individuals who feel responsible for
                  pushing Clipper ahead. We all work with the best interests of
                  the firm and our members at heart. We keep ourselves and our
                  teams liable for any and all outcomes.
                </small>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aboutPageB">
                <h5 className="fw-bold mb-0 text-center">
                  Grow to your full potential.
                </h5>
                <small>
                  We're modest and challenging, particularly when it comes to
                  defeat. We push ourselves to the edge of our talents till we
                  become uncomfortable. That's where our comfort zone ends, and
                  the growth zone starts.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default about;
