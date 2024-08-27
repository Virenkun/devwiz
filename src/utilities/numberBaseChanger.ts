export function convertBase(number: string, fromBase: number, toBase: number): string {
  return parseInt(number, fromBase).toString(toBase);
}
