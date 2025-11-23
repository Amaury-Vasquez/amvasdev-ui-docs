import { ReactNode } from "react";

interface ComponentsLayoutProps {
  children: ReactNode;
}

const ComponentsLayout = ({ children }: ComponentsLayoutProps) => (
  <div className="p-4 md:p-8">{children}</div>
);

export default ComponentsLayout;
