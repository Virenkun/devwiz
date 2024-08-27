export function convertCsvToJson(csv: string): any[] {
    const lines = csv.trim().split("\n");
    const headers = lines[0].split(",").map(header => header.trim());
  
    return lines.slice(1).map((line) => {
      // Handle cases where fields might be quoted (with commas inside them)
      const values = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
      return headers.reduce((acc: any, header, index) => {
        acc[header] = values[index]?.trim().replace(/^"(.*)"$/, '$1'); // Remove surrounding quotes if present
        return acc;
      }, {});
    });
  }
  