import NewsInterface from "@/interface/News";
import Link from "next/link";
import React from "react";

const NewsList = ({ newsList }: { newsList: NewsInterface[] }) => {
  return (
    <ul className="news-list">
      {newsList.map((news: any) => {
        return (
          <li key={news.slug}>
            <Link href={`/news/${news.slug}`}>
              <img src={`/images/news/${news.image}`} alt={news.title} />
              <span>{news.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
