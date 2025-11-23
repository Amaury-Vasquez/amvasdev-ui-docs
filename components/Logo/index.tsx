import clsx from "clsx";

const LOGO_SIZES = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
  xxl: "text-6xl",
};

interface LogoProps {
  className?: string;
  size?: keyof typeof LOGO_SIZES;
}

const Logo = ({ className, size = "md" }: LogoProps) => (
  <h1 className={clsx("font-bold tracking-tight", LOGO_SIZES[size], className)}>
    <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
      amvasdev
    </span>
    <span className="text-accent">UI</span>
  </h1>
);

export default Logo;
