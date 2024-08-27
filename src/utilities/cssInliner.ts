import juice from 'juice';

export function inlineCss(html: string): string {
  return juice(html);
}
