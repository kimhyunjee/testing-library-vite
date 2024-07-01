export function kebabCaseToTitleCase(colorName) {
  const colorWithSpaces = colorName.replace(/-/g, (match) =>
    match.toUpperCase()
  );
}
