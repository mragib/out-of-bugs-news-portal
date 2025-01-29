import PlainLayout from "@/components/master/PlainLayout";
import CommentsList from "@/components/news/Comments-List";
import NewsDetails from "@/components/news/NewsDetails";
import { PopularList } from "@/components/news/PopularList";
import { getComments, getNews, getNewsDetails } from "@/lib/data-service";

import React from "react";

const Details = async ({ searchParams }) => {
  const { id } = await searchParams;
  const news = await getNewsDetails(id);
  const popular = await getNews("Popular");
  const comments = await getComments(id);

  return (
    <PlainLayout>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
            <div className="card">
              <NewsDetails news={news} />
              <CommentsList comments={comments} postID={id} />
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
            <PopularList popularNews={popular} />
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default Details;
