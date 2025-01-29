import PlainLayout from "@/components/master/PlainLayout";
import NewsList from "@/components/news/NewsList";
import { PopularList } from "@/components/news/PopularList";
import { getNews, searchNews } from "@/lib/data-service";
import React from "react";

const Search = async ({ searchParams }) => {
  const { keyword } = await searchParams;
  const search = await searchNews(keyword);
  const popular = await getNews("Popular");
  return (
    <PlainLayout>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
            <NewsList latestNews={search} />
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
            <PopularList popularNews={popular} />
          </div>
        </div>
      </div>
    </PlainLayout>
  );
};

export default Search;
