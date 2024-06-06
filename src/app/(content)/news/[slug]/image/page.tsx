import { DUMMY_NEWS } from "@/assets/dummy-news";
import { getNewsItem } from "@/utils/news";
import { notFound } from "next/navigation";
import React from "react";

const ImagePage = async ({ params }: { params: { slug: string } }) => {
  const news = await getNewsItem(params.slug);
  if (!news) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
};

export default ImagePage;
