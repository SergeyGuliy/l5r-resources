export function generateLinkPath(slugs, query) {
  const path = typeof slugs === "object" ? `/${slugs.join("/")}` : `/${slugs}`;

  if (!query || !Object.keys(query).length) return path;

  const queryString = Object.entries(query)
    .map(
      ([key, value]) =>
        `${key}=${typeof value === "object" ? JSON.stringify(value) : value}`
    )
    .join("&");

  return `${path}?${queryString}`;
}
