"use client";
import AppCookiesProvider from "./Cookies";
import PosthogProvider from "./Posthog";

const Provider = ({ children }: { children: React.ReactNode }) => (
  <AppCookiesProvider>
    <PosthogProvider>{children}</PosthogProvider>
  </AppCookiesProvider>
);

export default Provider;
