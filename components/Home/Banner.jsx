import React from "react";

function Banner() {
  return (
    <div>
      <h3 className="text-center" style={{ fontSize: "24px" }}>
        {" "}
        Authentic Coupons & Deals to Shop your favourite Brands
      </h3>
      <div className="container my-5">
        <img
          className="img-fluid w-100"
          src="https://super-dashboard-images-cdn.s3.amazonaws.com/images/1647859910938-clipper-extension.jpeg"
          alt="clipper extension"
        />
      </div>
    </div>
  );
}

export default Banner;
