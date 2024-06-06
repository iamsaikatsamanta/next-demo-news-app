import { DUMMY_NEWS } from "@/assets/dummy-news";
import { getNewsItem } from "@/utils/news";
import Link from "next/link";
import { notFound } from "next/navigation";

const SingleNewsPage = async ({ params }: { params: { slug: string } }) => {
  const singleNews = await getNewsItem(params.slug);
  if (!singleNews) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${params.slug}/image`}>
          <img
            src={`/images/news/${singleNews?.image}`}
            alt={singleNews?.title}
          />
        </Link>
        <h1>{singleNews?.title}</h1>
        <time dateTime={singleNews?.date}>{singleNews?.date}</time>
      </header>
      <p>{singleNews?.content}</p>
    </article>
  );
};

export default SingleNewsPage;
