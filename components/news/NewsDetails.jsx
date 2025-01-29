import React from "react";
import parse from "html-react-parser";

const NewsDetails = ({ news }) => {
  return (
    <div className="container">
      <h4 className="my-3">{news.data.title}</h4>
      <hr className="" />
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <img className="w-100" src={news.data.img1} />
          {parse(news.data.long_des)}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
