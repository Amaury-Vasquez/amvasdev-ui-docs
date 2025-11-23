"use client";
import { getIconButtonClasses, Tooltip } from "amvasdev-ui";
import clsx, { ClassValue } from "clsx";
import Link from "next/link";
import { ReactNode, useState } from "react";

type TooltipPosition = "top" | "down" | "left" | "right";

interface TooltipData {
  content: ReactNode;
  position?: TooltipPosition;
}

interface IconLinkProps {
  href: string;
  className?: ClassValue;
  icon: ReactNode;
  tooltip?: TooltipData;
  target?: string;
}

const IconLink = ({
  href,
  className,
  icon,
  tooltip,
  target,
}: IconLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onMouseLeave = () => {
    setIsHovered(false);
    setIsFocused(false);
  };

  return (
    <Link
      href={href}
      className={clsx("relative", getIconButtonClasses(), className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={onMouseLeave}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      target={target}
    >
      {icon}
      {(isHovered || isFocused) && tooltip ? (
        <Tooltip content={tooltip.content} position={tooltip.position} />
      ) : null}
    </Link>
  );
};

export default IconLink;
