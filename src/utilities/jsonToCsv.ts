export function jsonToCsv(json: string): string {
  const array = typeof json !== 'object' ? JSON.parse(json) : json;
  const headers = Object.keys(array[0]);
  const csv: string = [
    headers.join(','), // header row first
    ...array.map((row: Record<string, any>) => headers.map((fieldName: string) => JSON.stringify(row[fieldName], null, 2)).join(',')),
  ].join('\r\n');
  return csv;
}
