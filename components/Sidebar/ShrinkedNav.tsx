"use client";
import clsx from "clsx";
import IconLink from "@/components/IconLink";
import { NAV_SECTIONS } from "@/constants/links";

interface ShrinkedNavProps {
  pathname: string;
}

const ShrinkedNav = ({ pathname }: ShrinkedNavProps) => (
  <div className="flex flex-col gap-2">
    {NAV_SECTIONS.map((section) => {
      const { Icon } = section;
      const isActive =
        (pathname.startsWith(section.basePath) && section.basePath !== "/") ||
        pathname === section.basePath;

      return (
        <IconLink
          key={section.title}
          href={section.basePath}
          icon={<Icon size={20} />}
          tooltip={{ content: section.title, position: "right" }}
          className={clsx("w-10 h-10 z-50", {
            "bg-base-300 text-primary": isActive,
          })}
        />
      );
    })}
  </div>
);

export default ShrinkedNav;
