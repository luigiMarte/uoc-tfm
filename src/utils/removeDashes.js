export function removeDashes(text) {
  const formatted = text?.replace(/_/g, " ");
  return formatted;
}
