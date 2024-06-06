import ModalBackdrop from "@/component/MainHeader/ModalBackdrop";
import { getNewsItem } from "@/utils/news";
import { notFound } from "next/navigation";
import React from "react";

const InterceptedImagePage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const news = await getNewsItem(params.slug);
  if (!news) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
