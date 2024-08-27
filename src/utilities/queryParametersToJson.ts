export function queryParametersToJson(queryString: string): any {
  return Object.fromEntries(new URLSearchParams(queryString).entries());
}
