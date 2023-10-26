"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { TFilterList } from "@/constants/filters";
import { cn } from "@/lib/utils";

type TProps = {
  filters: TFilterList;
  className?: string;
  containerClassName?: string;
};

export const Filter = ({
  filters,
  className = "",
  containerClassName = "",
}: TProps) => {
  return (
    <div className={cn("relative", containerClassName)}>
      <Select>
        <SelectTrigger
          className={cn(
            "body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5",
            className
          )}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
