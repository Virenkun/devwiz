export function jsonToCsv(json: string): string {
  const array = typeof json !== 'object' ? JSON.parse(json) : json;
  const headers = Object.keys(array[0]);
  const csv = [
    headers.join(','), // header row first
    ...array.map(row => headers.map(fieldName => JSON.stringify(row[fieldName], null, 2)).join(',')),
  ].join('\r\n');
  return csv;
}
