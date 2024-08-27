import yaml from 'js-yaml';

export function jsonToYaml(json: string): string {
  try {
    const parsed = JSON.parse(json);
    return yaml.dump(parsed);
  } catch (e) {
    throw new Error('Invalid JSON format.');
  }
}
