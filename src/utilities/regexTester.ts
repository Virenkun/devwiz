export function regexTester(pattern: string, string: string): any {
  try {
    const regex = new RegExp(pattern);
    const matches = string.match(regex);
    if (matches) {
      return matches;
    } else {
      return 'No matches found';
    }
  } catch (e) {
    throw new Error('Invalid Regular Expression.');
  }
}
