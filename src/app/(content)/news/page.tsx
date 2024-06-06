import NewsList from "@/assets/NewsList/NewsList";
import NewsInterface from "@/interface/News";
import { getAllNews } from "@/utils/news";
const NewsPage = async () => {
  const news: NewsInterface[] = await getAllNews();
  return (
    <div>
      <h1>News</h1>
      <p>News page content</p>
      <NewsList newsList={news} />
    </div>
  );
};

export default NewsPage;
