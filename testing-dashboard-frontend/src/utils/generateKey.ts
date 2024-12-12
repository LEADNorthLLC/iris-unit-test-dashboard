let uniqueId = 0;

export function generateKey(prefix: string): string {
  uniqueId += 1;
  return `${prefix}-${uniqueId}`;
}