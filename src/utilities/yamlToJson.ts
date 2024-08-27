import yaml from 'js-yaml';

export function yamlToJson(input: string): string {
  try {
    const result = yaml.load(input);
    return JSON.stringify(result, null, 2);
  } catch (e) {
    throw new Error('Invalid YAML format.');
  }
}
