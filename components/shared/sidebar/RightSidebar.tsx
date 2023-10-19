import Image from "next/image";
import Link from "next/link";
import { RenderTag } from "../RenderTag";

export const RightSidebar = () => {
  const topQuestions = [
    "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    "Async/Await Function Not Handling ERrors Properly",
    "How do I use express as a custom server in NextJS?",
    "Cascading Deletes in SQLAlchemy?",
    "Redux Toolkit Not Updating State as Expected",
  ];

  const popularTags = [
    { tag: "NEXTJS", count: 2 },
    { tag: "JAVASCRIPT", count: 2 },
    { tag: "REACTJS", count: 2 },
    { tag: "GOLANG", count: 2 },
    { tag: "SQL", count: 2 },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex min-h-screen flex-col justify-start overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      {/* Top Question */}
      <div className="flex flex-col gap-7">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              href={`/questions/${question}`}
              key={question}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{question}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="right-arrow"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-7">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="flex w-full flex-col gap-4">
          {popularTags.map(({ tag, count }) => (
            <RenderTag
              key={tag}
              _id={count}
              totalQuestions={count}
              showCount
              name={tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
