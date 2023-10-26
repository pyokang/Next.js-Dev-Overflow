import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Filter } from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filters";
import { LocalSearch } from "@/components/shared/search/LocalSearch";
import { HomeFilters } from "@/components/app/home/HomeFilters";
import { NoResult } from "@/components/shared/NoResult";
import { QuestionCard } from "@/components/shared/cards/QuestionCard";
import { getQuestions } from "@/lib/actions/question.action";

export default async function Home() {
  const result = await getQuestions({});

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
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
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
