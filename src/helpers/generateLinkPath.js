export function generateLinkPath(slugs) {
  if (typeof slugs === "object") return `/${slugs.join("/")}`;
  return `/${slugs}`;
}
