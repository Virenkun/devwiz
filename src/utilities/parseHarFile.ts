export function parseHarFile(har: string): any[] {
  try {
    const parsed = JSON.parse(har);
    return parsed.log.entries.map((entry: any) => ({
      url: entry.request.url,
      status: entry.response.status,
      time: entry.time,
    }));
  } catch (e) {
    throw new Error('Invalid HAR format.');
  }
}
