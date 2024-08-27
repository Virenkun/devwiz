export function base64Encode(input: string): string {
  return btoa(input);
}

export function base64Decode(input: string): string {
  try {
    return atob(input);
  } catch (e) {
    throw new Error('Invalid Base64 string.');
  }
}
