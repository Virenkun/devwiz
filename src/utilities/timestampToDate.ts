export function timestampToDate(timestamp: string): string {
  const date = new Date(parseInt(timestamp, 10) * 1000);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid timestamp.');
  }
  return date.toISOString();
}
