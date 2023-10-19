type TFilter = { name: string; value: string };
export type TFilterList = ReadonlyArray<TFilter>;

export const HomePageFilters: TFilterList = [
  { name: "Newest", value: "newest" },
  { name: "Recommended", value: "recommended" },
  { name: "Frequent", value: "frequent" },
  { name: "Unanswered", value: "unanswered" },
];
