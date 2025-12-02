import React from "react";
import "./Title.css";

const Title = ({ title, title2, subTitle }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
      <h2 className="title2">{title2}</h2>
      <p>{subTitle}</p>
    </div>
  );
};

export default Title;
