"use client";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type TProps = {
  route: string;
  imgSrc?: string;
  iconPosition?: "left" | "right";
  placeholder?: string;
  className?: string;
};

export const LocalSearch = (props: TProps) => {
  const {
    // route,
    imgSrc = "/assets/icons/search.svg",
    iconPosition = "left",
    placeholder = "Type something to search...",
    className = "",
  } = props;

  return (
    <div
      className={cn(
        "flex min-h-[56px] background-light800_darkgradient grow items-center gap-4 rounded-[10px] px-4",
        className,
        iconPosition === "left" ? "flex-row" : "flex-row-reverse"
      )}
    >
      <Image
        src={imgSrc}
        alt="search icon"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
    </div>
  );
};
