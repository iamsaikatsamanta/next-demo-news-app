import NewsList from "@/assets/NewsList/NewsList";
import { getLatestNews } from "@/utils/news";

const LatestPage = async () => {
  const latestNews = await getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList newsList={latestNews} />
    </>
  );
};

export default LatestPage;
