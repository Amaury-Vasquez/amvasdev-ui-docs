export const getAriaLabelFromHref = (
  href: string,
  initialIndication = "Go to"
) => {
  const path = href.replaceAll("/", " ").trim();
  return `${initialIndication} ${href === "/" ? "home page" : path}`;
};
