import React from "react";
import Link from "next/link";
import { CgChevronDoubleRight } from "react-icons/cg";
import { Facebook, Instagram, Pintrest,Twitter } from "./icons";
function Footer() {
  return (
    <div
      className="container-fluid footer pt-5 px-0"
      style={{ background: "white" }}
    >
      <div className="container">
        <div className="row footerCont">
          <div className="col-lg-3 first-footer-column">
            <div className="footer-logo">
              <Link href="/">
                <img
                  src={process.env.FOOTER_LOGO}
                  style={{ cursor: "pointer" }}
                  className="footerClipperImg"
                  alt="..."
                />
              </Link>
              <div className="social-media mt-3" style={{ cursor: "pointer" }}>
                <a href="https://www.facebook.com/joinclipper" target="_blank">
                  <Facebook height="2rem" width="2rem" color="#0d6fa1" />
                </a>
                <a
                  href="https://www.instagram.com/joinclipper/"
                  target="_blank"
                >
                  <Instagram height="2rem" width="2rem" color="#0d6fa1" />
                </a>
                <a
                  href="https://in.pinterest.com/joinclipper2911/_saved/"
                  target="_blank"
                >
                 <Pintrest height="2rem" width="2rem" color="#0d6fa1" />
                </a>
                <a href="https://twitter.com/ClipperJoin" target="_blank">
                  <Twitter height="2rem" width="2rem" color="#0d6fa1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <h6 className="bottomHeading">FIND DEALS </h6>
            <Link href="/top-coupons" passHref>
              <div>
                <CgChevronDoubleRight color="" /> Top Coupons
              </div>
            </Link>
            <Link href="/deal-of-the-day" passHref>
              <div>
                <CgChevronDoubleRight /> Deal Of The Day
              </div>
            </Link>
            <Link href="/cyber-monday" passHref>
              <div>
                <CgChevronDoubleRight /> Cyber Monday Deals
              </div>
            </Link>
            <Link href="/black-friday" passHref>
              <div>
                <CgChevronDoubleRight /> Black Friday Deals
              </div>
            </Link>
          </div>
          <div className="col-lg-2">
            <h6 className="bottomHeading">LEGALS</h6>
            <Link href="/privacy-policy" passHref>
              <div>
                <CgChevronDoubleRight /> Privacy Policy
              </div>
            </Link>
            <Link href="/copyright" passHref>
              <div>
                {" "}
                <CgChevronDoubleRight /> Copyright
              </div>
            </Link>
            <Link href="/accessibility-statement" passHref>
              <div>
                <CgChevronDoubleRight /> Accessibility
              </div>
            </Link>
            <Link href="/do-not-sell-my-info" passHref>
              <div>
                <CgChevronDoubleRight /> Do not sell info
              </div>
            </Link>
            <Link href="/terms-of-use" passHref>
              <div>
                <CgChevronDoubleRight /> Terms of Use
              </div>
            </Link>
          </div>
          <div className="col-lg-2">
            <h6 className="bottomHeading">COMPANY</h6>
            <Link href="/clipper-coins" passHref>
              <div>
                <CgChevronDoubleRight /> Clipper Coins
              </div>
            </Link>
            <Link href="/about" passHref>
              <div>
                <CgChevronDoubleRight /> About
              </div>
            </Link>
            <Link href="/blog" passHref>
              <div>
                <CgChevronDoubleRight /> Blog
              </div>
            </Link>
            <Link href="/extension" passHref>
              <div>
                <CgChevronDoubleRight /> Extension
              </div>
            </Link>
            <Link href="/frequently-asked-questions" passHref>
              <div>
                <CgChevronDoubleRight /> FAQ&apos;s
              </div>
            </Link>
          </div>
          <div className="col-lg-3">
            <h6 className="bottomHeading">NEWSLETTER</h6>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "2",
                marginBottom: "10px",
              }}
            >
              You can get latest update from us by subscribing to our
              newsletter.
            </p>
            <input className="input_footer" type="text" />
            <button
              type="submit"
              className="btn btn-color mx-auto popularDealsBtn1"
            >
              {" "}
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-bar text-center mt-5 ">
        <p
          style={{ fontSize: "13px", lineHeight: "2" }}
          className="footerContP"
        >
          Clipper and RMN are registered trademarks of Clipper, Inc. Third-party
          trademarks are the property of their respective third-party owners.
          Presence of a third-party trademark does
          <br></br> not mean that Clipper has any relationship with that
          third-party or that the third-party endorses Clipper or its services.
        </p>
        <div className="image-bottom">
          <img
            src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1647512370098-androidclipper.png"
            style={{ cursor: "pointer" }}
            className="footerSecondImg"
            alt="..."
          />
        </div>
      </div>

      <div className="container-fluid bottom-footer text-center py-3">
        <small>© Copyright 2022, All Rights Reserved Clipper</small>
      </div>
    </div>
  );
}

export default Footer;
