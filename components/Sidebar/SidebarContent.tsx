import { IconButton } from "amvasdev-ui";
import packageJson from "amvasdev-ui/package.json";
import clsx, { ClassValue } from "clsx";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";
import Logo from "../Logo";
import ExpandedNav from "./ExpandedNav";
import ShrinkedNav from "./ShrinkedNav";

interface SidebarContentProps {
  className?: ClassValue;
  isExpanded?: boolean;
  toggleIsExpanded: () => void;
  pathname: string;
}

const SidebarContent = forwardRef<HTMLDivElement, SidebarContentProps>(
  ({ className, isExpanded, toggleIsExpanded, pathname }, ref) => (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col h-svh bg-base-200 transition-[width]",
        {
          "w-14": !isExpanded,
          "w-72": isExpanded,
        },
        className
      )}
    >
      <div
        className={clsx("h-16 flex items-center w-full p-2", {
          "justify-center": !isExpanded,
          "justify-between": isExpanded,
        })}
      >
        {isExpanded ? (
          <Link href="/" className="flex flex-col gap-0.5">
            <div className="flex items-baseline gap-1">
              <Logo />
            </div>
            <span className="text-xs text-base-content/60 font-medium">
              v{packageJson.version}
            </span>
          </Link>
        ) : null}
        <IconButton
          icon={
            isExpanded ? (
              <PanelLeftClose className="text-primary" />
            ) : (
              <PanelLeftOpen className="text-primary" />
            )
          }
          onClick={toggleIsExpanded}
        />
      </div>

      {/* Navigation Menu */}
      <nav
        className={clsx(
          "h-full flex flex-col border border-solid border-r-base-300 border-transparent",
          {
            "p-2 overflow-visible": !isExpanded,
            "p-4 overflow-y-auto": isExpanded,
          }
        )}
      >
        {isExpanded ? (
          <ExpandedNav pathname={pathname} />
        ) : (
          <ShrinkedNav pathname={pathname} />
        )}
      </nav>
    </div>
  )
);

SidebarContent.displayName = "SidebarContent";

export default SidebarContent;
