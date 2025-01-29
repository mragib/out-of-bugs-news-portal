import { getNews } from "@/lib/data-service";
import Link from "next/link";
import React from "react";
import Subscribe from "./Subscribe";

export const PopularList = async ({ popularNews }) => {
  return (
    <div className="row">
      <div className="bg-dark mt-2 rounded-1 text-white p-2">
        <span className="p-1">POPULAR</span>
      </div>
      <div className="col-12 py-1 px-0">
        {popularNews.data.map((news) => (
          <Link
            key={news.id}
            href={"/details?id=" + news.id}
            className=" card bg-white shadow-sm"
          >
            <div className="row">
              <div className="col-md-5">
                <img
                  className=" rounded-start-1 w-100 h-100"
                  src={news.img4}
                  alt={news.title}
                />
              </div>
              <div className="col-md-7 p-3">
                <h6>{news.title}</h6>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-dark mt-2 rounded-1 text-white p-2">
        <span className="p-1">SUBSCRIBE</span>
      </div>
      <div className="col-12 py-1 px-0">
        <Subscribe />
      </div>
    </div>
  );
};
