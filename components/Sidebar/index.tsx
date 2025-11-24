"use client";
import { useOnClickOutside, useToggle } from "amvasdev-ui";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import useIsMobileOrTablet from "@/hooks/useIsMobileOrTablet";
import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  const [isExpanded, toggleIsExpanded] = useToggle(false);
  const isMobileOrTablet = useIsMobileOrTablet();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathnameRef = useRef<string>("");
  const pathname = usePathname();

  useOnClickOutside(sidebarRef, () => {
    if (isExpanded && isMobileOrTablet) toggleIsExpanded();
  });

  useEffect(() => {
    if (pathname !== pathnameRef.current && isExpanded && isMobileOrTablet) {
      toggleIsExpanded();
    }
    pathnameRef.current = pathname;
  }, [pathname, isExpanded, isMobileOrTablet, toggleIsExpanded]);

  return (
    <div
      className={clsx("h-svh flex-1 transition-colors", {
        "fixed bg-black/30 z-20 w-screen": isExpanded && isMobileOrTablet,
        "bg-transparent": !isExpanded,
        "w-fit": !isMobileOrTablet,
      })}
    >
      <SidebarContent
        isExpanded={isExpanded}
        toggleIsExpanded={toggleIsExpanded}
        ref={sidebarRef}
        pathname={pathname}
      />
    </div>
  );
};

export default Sidebar;
