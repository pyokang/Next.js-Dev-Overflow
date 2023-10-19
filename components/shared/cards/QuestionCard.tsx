import Link from "next/link";

import { RenderTag } from "@/components/shared/RenderTag";
import { Metric } from "../Metric";

type TProps = {
  question: {
    id: number;
    title: string;
    tags: { id: number; name: string }[];
    author: { id: number; name: string; picture: string };
    upvotes: number;
    views: number;
    answers: object[];
    createdAt: Date;
  };
};

export const QuestionCard = ({ question }: TProps) => {
  const { id, title, tags, author, upvotes, views, answers, createdAt } =
    question;

  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      {/* TODO: If signed in and is author, add edit and delete */}
      <Link href={`/question/${id}`}>
        <h3 className="text-dark200_light900 sm:h3-bold base-semibold line-clamp-1">
          {title}
        </h3>
      </Link>

      {/* Tags */}
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag.id} _id={tag.id} name={tag.name} />
        ))}
      </div>

      {/* Author and views, upvotes and answers */}
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="Avatar"
          value={author.name}
          title=" - asked 1 hour ago"
          href={`/profile/${author.id}`}
          isAuthor
          textClassName="body-memdium text-dark400_light700"
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="Upvotes"
            value={upvotes}
            title=" Votes"
            textClassName="small-medium text-dark_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="Answers"
            value={answers.length}
            title=" Answers"
            textClassName="small-medium text-dark_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="Views"
            value={views}
            title=" Views"
            textClassName="small-medium text-dark_light800"
          />
        </div>
      </div>
    </div>
  );
};
