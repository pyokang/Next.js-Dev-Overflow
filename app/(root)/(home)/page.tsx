import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Filter } from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import { LocalSearch } from "@/components/shared/search/LocalSearch";
import { HomeFilters } from "@/components/app/home/HomeFilters";
import { NoResult } from "@/components/shared/NoResult";
import { QuestionCard } from "@/components/shared/cards/QuestionCard";

const allQuestions = [
  {
    id: 1,
    title: "How to use TypeScript with React?",
    tags: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "React" },
    ],
    author: { id: 101, name: "John Doe", picture: "john-doe.jpg" },
    upvotes: 15,
    views: 150,
    answers: [],
    createdAt: new Date("2023-01-10"),
  },
  {
    id: 2,
    title: "Best practices for REST API design?",
    tags: [
      { id: 3, name: "API" },
      { id: 4, name: "Best Practices" },
    ],
    author: { id: 102, name: "Jane Smith", picture: "jane-smith.jpg" },
    upvotes: 20,
    views: 200,
    answers: [],
    createdAt: new Date("2023-02-15"),
  },
  {
    id: 3,
    title: "How to deploy a Node.js application to AWS?",
    tags: [
      { id: 5, name: "Node.js" },
      { id: 6, name: "AWS" },
    ],
    author: { id: 103, name: "Bob Johnson", picture: "bob-johnson.jpg" },
    upvotes: 12,
    views: 120,
    answers: [],
    createdAt: new Date("2023-03-20"),
  },
  {
    id: 4,
    title: "Introduction to Machine Learning algorithms",
    tags: [
      { id: 7, name: "Machine Learning" },
      { id: 8, name: "Algorithms" },
    ],
    author: { id: 104, name: "Alice Williams", picture: "alice-williams.jpg" },
    upvotes: 25,
    views: 250,
    answers: [],
    createdAt: new Date("2023-04-25"),
  },
  {
    id: 5,
    title: "Tips for effective code review",
    tags: [
      { id: 9, name: "Code Review" },
      { id: 10, name: "Best Practices" },
    ],
    author: { id: 105, name: "Charlie Brown", picture: "charlie-brown.jpg" },
    upvotes: 18,
    views: 180,
    answers: [],
    createdAt: new Date("2023-05-30"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex-between flex w-full gap-4 max-sm:flex-col-reverse">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
          <Link href="/ask-question">Ask a Question</Link>
        </Button>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-md:flex-col">
        <LocalSearch
          route="/"
          placeholder="Search for Questions Here..."
          className="flex-1 flex-row"
        />
        <Filter filters={HomePageFilters} className="hidden max-md:flex" />
      </div>
      <HomeFilters containerClassName="hidden md:flex" />

      <div className="mt-10 flex w-full flex-col gap-6">
        {allQuestions.length > 0 ? (
          allQuestions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
