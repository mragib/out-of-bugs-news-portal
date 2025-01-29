import PlainLayout from "@/components/master/PlainLayout";

import Hero from "@/components/news/Hero";
import NewsList from "@/components/news/NewsList";
import { PopularList } from "@/components/news/PopularList";
import { getLatestNews, getNews } from "@/lib/data-service";

export default async function Home() {
  const sliders = await getNews("Slider");
  const featured = await getNews("Featured");
  const popular = await getNews("Popular");
  const latest = await getLatestNews();
  return (
    <PlainLayout>
      <Hero sliders={sliders} featured={featured} />
      <div className="container mt-4">
        <h5>LATEST</h5>
        <hr />
        <div className="row">
          <div className="col-md-9 col-lg-9 col-sm-12 col-12 px-3">
            <NewsList latestNews={latest} />
          </div>
          <div className="col-md-3 col-lg-3 col-sm-12 col-12 px-3">
            <PopularList popularNews={popular} />
          </div>
        </div>
      </div>
    </PlainLayout>
  );
}
