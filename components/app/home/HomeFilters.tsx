"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import { cn } from "@/lib/utils";

export const HomeFilters = ({ containerClassName = "" }) => {
  const [selected, setSelected] = useState("");

  return (
    <div className={cn("mt-10 flex-wrap gap-3", containerClassName)}>
      {HomePageFilters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => setSelected(filter.value)}
          className={cn(
            "body-medium rounded-lg px-6 py-3 capitalize shadow-none",
            {
              "bg-primary-100 text-primary-500": selected === filter.value,
              "dark:text-light-500 bg-light-800 text-light-500 dark:bg-dark-300":
                selected !== filter.value,
            }
          )}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};
