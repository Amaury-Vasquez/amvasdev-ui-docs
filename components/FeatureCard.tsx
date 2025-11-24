import clsx, { ClassValue } from "clsx";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: ReactNode;
  description: ReactNode;
  className?: ClassValue;
}

const FeatureCard = ({ title, description, className }: FeatureCardProps) => (
  <div className={clsx("p-4 md:p-6 bg-base-200 rounded-lg", className)}>
    <h3 className="text-lg md:text-2xl font-semibold mb-3">{title}</h3>
    <p className="text-base-content/80">{description}</p>
  </div>
);

export default FeatureCard;
