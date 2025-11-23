import clsx, { ClassValue } from "clsx";
import { Boxes, Github } from "lucide-react";
import ThemeMenu from "./ThemeMenu";
import IconLink from "../IconLink";
import Searchbar from "../Searchbar";

interface NavbarProps {
  className?: ClassValue;
}

const Navbar = ({ className }: NavbarProps) => (
  <nav
    className={clsx(
      "flex w-full bg-base-200 border border-solid border-b-base-300 border-transparent h-16 justify-between items-center p-4",
      className
    )}
  >
    <Searchbar />
    <div className="flex items-center gap-2">
      <IconLink
        href="https://www.npmjs.com/package/amvasdev-ui"
        target="_blank"
        icon={<Boxes size="20" />}
        tooltip={{ content: "View NPM package", position: "down" }}
      />
      <IconLink
        href="https://github.com/Amaury-Vasquez/amvasdev-ui"
        target="_blank"
        icon={<Github size="20" />}
        tooltip={{ content: "Explore code", position: "down" }}
      />
      <ThemeMenu />
    </div>
  </nav>
);
export default Navbar;
