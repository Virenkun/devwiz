export function envToNetlifyToml(envContent: string): string {
  return envContent
    .split('\n')
    .map(line => `[[params]]\n  ${line.replace('=', ' = ')}`)
    .join('\n');
}
