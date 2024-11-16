export function injector(obj, injectHandler) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, original]) => [
      key,
      {
        ...original,
        ...injectHandler(original),
      },
    ])
  );
}
