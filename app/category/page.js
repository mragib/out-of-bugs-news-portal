import PlainLayout from "@/components/master/PlainLayout";
import NewsList from "@/components/news/NewsList";
import { PopularList } from "@/components/news/PopularList";
import { getNews, getNewsByCategory } from "@/lib/data-service";
import React from "react";

const Category = async ({ searchParams }) => {
  const { id } = await searchParams;
  const news = await getNewsByCategory(id);
  const popular = await getNews("Popular");
  return (
    <PlainLayout>
      <div className="container mt-4">
        <h5>LATEST</h5>
        <hr />
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
            <NewsList latestNews={news} />
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
            <PopularList popularNews={popular} />
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default Category;
