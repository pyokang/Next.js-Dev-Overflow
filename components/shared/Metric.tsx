import { cn } from "@/lib/utils";
import Image from "next/image";

type TProps = {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textClassName?: string;
  isAuthor?: boolean;
};

export const Metric = (props: TProps) => {
  const { imgUrl, alt, value, title, href, textClassName, isAuthor } = props;
  return (
    <div className="flex-center flex-wrap gap-1">
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={cn("object-contain", {
          "rounded-full": href,
        })}
      />
      <p className={cn("flex items-center gap-1", textClassName)}>
        {value}

        <span
          className={cn("small-regular line-clamp-1", {
            "max-sm:hidden": isAuthor,
          })}
        >
          {title}
        </span>
      </p>
    </div>
  );
};
