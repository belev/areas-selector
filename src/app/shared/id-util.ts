export function getValidHtmlId(text: string) {
  return text.replace(/^[^a-z0-9]+|[^\w:.-]+/gi, '');
}
