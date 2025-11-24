import { Boxes, ExternalLink, Github, Heart } from "lucide-react";
import Link from "next/link";
import { GITHUB_URL } from "@/constants/links";
import IconLink from "../IconLink";

const CURRENT_YEAR = new Date().getFullYear();

const DOCUMENTATION_LINKS = [
  { href: "/components", label: "Components" },
  { href: "/hooks", label: "Hooks" },
  { href: "/utilities", label: "Utilities" },
  { href: "/theming", label: "Theming" },
  { href: "/installation", label: "Installation" },
];

const RESOURCE_LINKS = [
  {
    href: GITHUB_URL,
    label: "GitHub",
    icon: <Github size={16} />,
  },
  {
    href: "https://www.npmjs.com/package/amvasdev-ui",
    label: "NPM Package",
    icon: <Boxes size={16} />,
  },
];

const EXTERNAL_LINKS = [
  {
    href: "https://daisyui.com",
    label: "DaisyUI",
    icon: <ExternalLink size={16} />,
  },
  {
    href: "https://tailwindcss.com",
    label: "Tailwind CSS",
    icon: <ExternalLink size={16} />,
  },
  {
    href: "https://react.dev",
    label: "React",
    icon: <ExternalLink size={16} />,
  },
];

const Footer = () => (
  <footer className="bg-base-200 border-t border-base-300 mt-auto">
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">amvasdev-ui</h3>
          <p className="text-sm text-base-content/70 mb-3">
            React component library with DaisyUI styling and custom JavaScript
            implementations.
          </p>
          <div className="flex gap-2">
            <IconLink
              href={GITHUB_URL}
              target="_blank"
              icon={<Github size={20} />}
              tooltip={{ content: "View on GitHub", position: "top" }}
            />
            <IconLink
              href="https://www.npmjs.com/package/amvasdev-ui"
              target="_blank"
              icon={<Boxes size={20} />}
              tooltip={{ content: "View on NPM", position: "top" }}
            />
          </div>
        </div>

        {/* Documentation Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Documentation</h3>
          <ul className="space-y-2">
            {DOCUMENTATION_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-base-content/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-bold mb-3">Resources</h3>
          <ul className="space-y-2">
            {RESOURCE_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-base-content/70 hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* External Links */}
        <div>
          <h3 className="text-lg font-bold mb-3">Built With</h3>
          <ul className="space-y-2">
            {EXTERNAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-base-content/70 hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Credit to DaisyUI */}
      <div className="border-t border-base-300 pt-6 mb-6">
        <div className="flex items-center justify-center gap-1 text-sm text-base-content/70">
          <span>Styled with</span>
          <Heart size={16} className="text-error fill-error" />
          <span>using</span>
          <a
            href="https://daisyui.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            DaisyUI
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/60">
          <p>© {CURRENT_YEAR} amvasdev-ui. All rights reserved.</p>
          <p>Built with React, Next.js, Tailwind CSS, and DaisyUI</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
