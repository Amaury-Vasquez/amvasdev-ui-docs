import { useCallback, useEffect } from "react";
import { useCookies } from "react-cookie";
import { THEME_COOKIE } from "@/constants/cookies";

const getDocumentHTML = () => document.querySelector("html");

export const useTheme = () => {
  const [cookies, setCookie] = useCookies([THEME_COOKIE]);

  const handleThemeChange = useCallback(
    (theme?: string) => {
      if (theme) {
        getDocumentHTML()?.setAttribute("data-theme", theme);
        setCookie(THEME_COOKIE, theme);
      }
    },
    [setCookie]
  );

  const theme = cookies[THEME_COOKIE];

  useEffect(() => {
    if (theme && getDocumentHTML()?.getAttribute("data-theme") !== theme) {
      handleThemeChange(theme);
    }
  }, [theme, handleThemeChange]);

  return {
    theme,
    handleThemeChange,
  };
};
