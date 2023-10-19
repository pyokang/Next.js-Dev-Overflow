import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

type TProps = {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
};

export const NoResult = ({ title, description, link, linkTitle }: TProps) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:block"
      />

      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>

      <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3">
        <Link href={link} className="text-light-900">
          {linkTitle}
        </Link>
      </Button>
    </div>
  );
};
