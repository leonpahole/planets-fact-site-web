import { SharedModels } from "@/util/shared/shared.models";
import Link from "next/link";

interface IProps {
  className?: string;
  activeColor: string;
  items: SharedModels.LinkGroupItem[];
}

export const LinkTabs = ({ className, items, activeColor }: IProps) => {
  return (
    <div
      className={`${className} flex items-stretch justify-center gap-11 border-b border-b-white border-opacity-20 px-6 text-center`}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          scroll={false}
          className={`${
            item.isActive ? "border-b-transparent opacity-100" : "opacity-50"
          } flex items-center border-b-4 border-t-4 border-t-transparent py-4 font-alt text-h3.m uppercase`}
          style={{
            borderBottomColor: item.isActive ? activeColor : "transparent",
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
