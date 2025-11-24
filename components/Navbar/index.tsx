import clsx, { ClassValue } from "clsx";
import { Boxes, Github } from "lucide-react";
import { GITHUB_URL, NPM_PACKAGE_URL } from "@/constants/links";
import ThemeMenu from "./ThemeMenu";
import IconLink from "../IconLink";
import Searchbar from "../Searchbar";
import MobileNavMenu from "./MobileNavMenu";

interface NavbarProps {
  className?: ClassValue;
}

const Navbar = ({ className }: NavbarProps) => (
  <header
    className={clsx(
      "flex w-full bg-base-200 border border-solid border-b-base-300 border-transparent h-16 justify-between items-center p-4 z-10 gap-4 max-md:pl-2",
      className
    )}
  >
    <Searchbar />
    <nav className="items-center gap-2 hidden md:flex">
      <IconLink
        href={NPM_PACKAGE_URL}
        target="_blank"
        icon={<Boxes size="20" />}
        tooltip={{ content: "View NPM package", position: "down" }}
        ariaLabel="View amvasdev-ui NPM package"
      />
      <IconLink
        href={GITHUB_URL}
        target="_blank"
        icon={<Github size="20" />}
        tooltip={{ content: "Explore code", position: "down" }}
        ariaLabel="Explore amvasdev-ui source code on GitHub"
      />
      <ThemeMenu />
    </nav>
    <MobileNavMenu />
  </header>
);
export default Navbar;
