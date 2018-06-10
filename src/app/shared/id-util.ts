export function getValidHtmlId(text: string) {
  return text.replace(/^[^a-z]+|[^\w:.-]+/gi, '');
}
