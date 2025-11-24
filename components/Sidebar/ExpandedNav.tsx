"use client";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { NAV_SECTIONS } from "@/constants/links";

interface ExpandedNavProps {
  pathname: string;
}

const getInitialExpandedSections = (pathname: string): Set<string> => {
  const initialExpanded = new Set<string>();
  NAV_SECTIONS.forEach((section) => {
    const isCurrentSection =
      (pathname.startsWith(section.basePath) && section.basePath !== "/") ||
      pathname === section.basePath ||
      section.links.some((link) => link.href === pathname);

    if (isCurrentSection) {
      initialExpanded.add(section.title);
    }
  });
  return initialExpanded;
};

const ExpandedNav = ({ pathname }: ExpandedNavProps) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(() =>
    getInitialExpandedSections(pathname)
  );

  const toggleSection = useCallback((title: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  }, []);

  return (
    <div className="flex flex-col gap-6 pb-4">
      {NAV_SECTIONS.map(({ title, links, basePath, Icon }) => {
        const isExpanded = expandedSections.has(title);

        return links.length > 0 ? (
          <div key={title} className="flex flex-col gap-1">
            <button
              onClick={() => toggleSection(title)}
              className="px-2 mb-1 text-xs font-semibold text-base-content/60 uppercase tracking-wider flex gap-2 items-center hover:text-base-content transition-colors w-full text-left"
              id={`nav-section-${title.toLowerCase().replace(/\s+/g, "-")}-toggle`}
              aria-label={`${isExpanded ? "Collapse" : "Expand"} ${title} section`}
              aria-expanded={isExpanded}
            >
              <Icon size={16} />
              <span className="flex-1">{title}</span>
              <ChevronDown
                size={14}
                className={clsx("transition-transform duration-200", {
                  "rotate-180": isExpanded,
                  "rotate-0": !isExpanded,
                })}
              />
            </button>
            <div
              className={clsx(
                "transition-all duration-200 ease-in-out overflow-hidden",
                {
                  "max-h-[1000px] opacity-100": isExpanded,
                  "max-h-0 opacity-0": !isExpanded,
                }
              )}
            >
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={clsx(
                        "flex items-center h-9 px-2 rounded hover:bg-base-300 transition-colors text-sm",
                        {
                          "bg-base-300 text-primary font-semibold":
                            pathname === link.href,
                        }
                      )}
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <Link
            key={title}
            href={basePath}
            className="px-2 mb-1 text-xs font-semibold text-base-content/60 uppercase tracking-wider flex gap-2 items-center hover:text-base-content transition-colors w-full text-left"
            aria-label={`Navigate to ${title}`}
          >
            <Icon size={16} />
            <span className="flex-1">{title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default ExpandedNav;
