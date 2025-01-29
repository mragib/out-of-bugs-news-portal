import { getLatestNews } from "@/lib/data-service";
import Link from "next/link";
import React from "react";

const NewsList = async ({ latestNews }) => {
  return (
    <div className="row">
      {latestNews.data.map((news) => (
        <div key={news.id} className="p-2 col-md-4">
          <div className="card bg-white shadow-sm">
            <img className="card-img-top" src={news.img3} alt={news.title} />
            <div className="card-body">
              <h6 className="card-title">{news.title}</h6>
              <p>{news.short_des}</p>
              <p className="my-2 fw-bold p-0">
                <i className="bi bi-clock"></i> 3 Days Ago
              </p>
              <Link
                href={"/details?id=" + news.id}
                className="btn mt-2 btn-sm btn-outline-danger"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
