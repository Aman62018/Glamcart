import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descripionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website the ultimate online marketplace where fashion
          lovers buy and sell stylish clothing with confidence. Whether you're
          looking to refresh your wardrobe or give your pre-loved pieces a new
          life, we make it simple, secure, and sustainable. <br /> discover
          thousands of unique styles — from everyday wear to one-of-a-kind
          designer finds. Shop new and gently-used clothing for men, women, and
          kids at unbeatable prices. Every item is quality-checked for a great
          shopping experience. <br /> Turn your closet into cash! List your
          items in just a few steps, set your prices, and reach thousands of
          shoppers. We offer tools to help you manage your listings, track
          sales, and ship effortlessly.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
