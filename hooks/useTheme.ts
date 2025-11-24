import { useCallback, useEffect, useTransition } from "react";
import { useCookies } from "react-cookie";
import { getThemeCookie } from "@/app/actions/theme";
import { THEME_COOKIE } from "@/constants/cookies";

export const useTheme = () => {
  const [_isPending, startTransition] = useTransition();
  const [cookies, setCookie] = useCookies([THEME_COOKIE]);

  const handleThemeChange = useCallback(
    (theme?: string) => {
      if (theme) {
        document.querySelector("html")?.setAttribute("data-theme", theme);
        setCookie(THEME_COOKIE, theme);
      }
    },
    [setCookie]
  );

  useEffect(() => {
    startTransition(async () => {
      const themeCookie = await getThemeCookie();
      setCookie(THEME_COOKIE, themeCookie);
      handleThemeChange(themeCookie);
    });
  }, [handleThemeChange, setCookie]);

  const theme = cookies[THEME_COOKIE];

  return {
    theme,
    handleThemeChange,
  };
};
