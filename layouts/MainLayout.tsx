import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="flex relative">
    <Sidebar />
    <div className="flex flex-col w-full h-svh overflow-y-auto">
      <Navbar className="" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  </div>
);
export default MainLayout;
