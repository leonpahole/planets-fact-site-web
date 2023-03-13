import { SharedModels } from "@/util/shared/shared.models";
import Link from "next/link";

interface IProps {
  className?: string;
  activeColor: string;
  items: SharedModels.LinkGroupItem[];
}

export const LinkGroup = ({ className, items, activeColor }: IProps) => {
  return (
    <div className={`${className} flex flex-col gap-4`}>
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          scroll={false}
          className="px-5 pb-1.75 pt-2 font-alt text-h3.t hover:bg-gray-200 hover:bg-opacity-20 lg:px-7 lg:pt-3 lg:pb-2.75 lg:text-h3"
          style={{
            background: item.isActive ? activeColor : undefined,
          }}
        >
          <span className="mr-4.25 opacity-50 lg:mr-7">
            {(i + 1).toString().padStart(2, "0")}
          </span>
          <span className="uppercase">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};
