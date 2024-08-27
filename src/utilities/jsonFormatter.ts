export function jsonFormatter(input: string): string {
  try {
    const parsed = JSON.parse(input);
    return JSON.stringify(parsed, null, 2);
  } catch (e) {
    throw new Error('Invalid JSON format.');
  }
}
