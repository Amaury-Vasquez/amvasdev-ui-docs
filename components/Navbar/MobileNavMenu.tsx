"use client";
import { HamburgerMenu } from "amvasdev-ui";
import { Boxes, Github, Menu } from "lucide-react";
import Link from "next/link";
import { GITHUB_URL, NPM_PACKAGE_URL } from "@/constants/links";
import ThemeModal from "./ThemeModal";

const MobileNavMenu = () => (
  <HamburgerMenu
    icon={Menu}
    className="md:hidden"
    position="right"
    buttonId="open-mobile-nav"
    buttonAriaLabel="Open Mobile Nav Menu"
  >
    <nav className="flex flex-col w-48 gap-4 p-2">
      <Link
        className="flex items-center gap-2"
        href={NPM_PACKAGE_URL}
        target="_blank"
        aria-label="View amvasdev-ui NPM package"
      >
        <Boxes />
        NPM package
      </Link>
      <Link
        className="flex items-center gap-2"
        href={GITHUB_URL}
        target="_blank"
        aria-label="Explore amvasdev-ui source code on GitHub"
      >
        <Github />
        Explore code
      </Link>
      <ThemeModal />
    </nav>
  </HamburgerMenu>
);

export default MobileNavMenu;
