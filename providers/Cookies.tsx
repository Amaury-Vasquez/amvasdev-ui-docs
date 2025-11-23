import { ReactNode } from "react";
import { Cookies, CookiesProvider } from "react-cookie";

interface CookiesProviderProps {
  children: ReactNode;
  cookies?: Cookies;
}

const AppCookiesProvider = ({ children, cookies }: CookiesProviderProps) => (
  <CookiesProvider cookies={cookies}>{children}</CookiesProvider>
);

export default AppCookiesProvider;
