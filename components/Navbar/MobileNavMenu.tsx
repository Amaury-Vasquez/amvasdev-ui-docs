"use client";
import { HamburgerMenu } from "amvasdev-ui";
import { Boxes, Github, Menu } from "lucide-react";
import Link from "next/link";
import { GITHUB_URL, NPM_PACKAGE_URL } from "@/constants/links";
import ThemeModal from "./ThemeModal";

const MobileNavMenu = () => (
  <HamburgerMenu icon={Menu} className="md:hidden" position="right">
    <div className="flex flex-col w-48 gap-4 p-2">
      <Link
        className="flex items-center gap-2"
        href={NPM_PACKAGE_URL}
        target="_blank"
      >
        <Boxes />
        NPM package
      </Link>
      <Link
        className="flex items-center gap-2"
        href={GITHUB_URL}
        target="_blank"
      >
        <Github />
        Explore code
      </Link>
      <ThemeModal />
    </div>
  </HamburgerMenu>
);

export default MobileNavMenu;
