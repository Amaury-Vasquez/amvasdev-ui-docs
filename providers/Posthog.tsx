import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import { POSTHOG_KEY, POSTHOG_HOST } from "@/constants/globals";

const PosthogProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: "always",
      defaults: "unset",
      name: "amvasdev-ui-docs",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
};

export default PosthogProvider;
