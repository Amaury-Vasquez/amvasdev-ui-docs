"use client";
import { DeviceProvider } from "@/contexts/DeviceContext";
import AppCookiesProvider from "./Cookies";
import PosthogProvider from "./Posthog";

const Provider = ({ children }: { children: React.ReactNode }) => (
  <AppCookiesProvider>
    <PosthogProvider>
      <DeviceProvider>{children}</DeviceProvider>
    </PosthogProvider>
  </AppCookiesProvider>
);

export default Provider;
