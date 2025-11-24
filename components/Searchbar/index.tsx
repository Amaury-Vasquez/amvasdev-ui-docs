"use client";
import { Input } from "amvasdev-ui";
import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { NAV_SECTIONS } from "@/constants/links";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const searchResults = useMemo(
    () =>
      search.length
        ? NAV_SECTIONS.filter((section) =>
            section.title.toLowerCase().includes(search.toLowerCase())
          )
        : [],
    [search]
  );
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="relative md:w-80 w-full max-w-full">
      <Input
        id="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        leftIcon={<Search size="16" className="text-base-content/70" />}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
      />
      {showResults && (
        <ul className="absolute flex flex-col top-full bg-base-100 shadow-lg w-full rounded-lg">
          {searchResults.map((result) => (
            <li key={result.basePath}>
              <Link
                href={result.basePath}
                className="p-4 w-full flex text-sm font-medium hover:bg-base-200"
              >
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
