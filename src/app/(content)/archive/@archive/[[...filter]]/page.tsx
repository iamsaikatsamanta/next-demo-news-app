import NewsInterface from "@/interface/News";
import NewsList from "@/assets/NewsList/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/utils/news";
import Link from "next/link";
import React, { Suspense } from "react";

const FilteredNews = async ({
  year,
  month,
}: {
  year: number;
  month: number;
}) => {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }
  if (!news) return <p>No news found</p>;

  return <NewsList newsList={news} />;
};

const YearPage = async ({ params }: { params: { filter: any } }) => {
  let links = await getAvailableNewsYears();
  const year = params.filter?.[0];
  const month = params.filter?.[1];
  let news: NewsInterface[] = [];
  if (year && !month) {
    news = await getNewsForYear(year);
    links = await getAvailableNewsMonths(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
    links = [];
  }
  const years = await getAvailableNewsYears();
  if (
    (year && !years.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid Path Segment");
  }
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = year
                ? `/archive/${year}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <FilteredNews year={year} month={month} />
      </Suspense>
    </>
  );
  // const news = getNewsForYear(params.year);
  // return ;
};

export default YearPage;
