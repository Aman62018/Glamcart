import React from "react";
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  const { p } = props;
  console.log(p.category);

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {p.category} <img src={arrow_icon} alt="" /> {p.name}
    </div>
  );
};

export default Breadcrum;
