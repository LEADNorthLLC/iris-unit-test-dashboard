export function getShortLocation(location: string): string {
  const parts = location.split('.');
  return parts.length >= 2 ? `${parts[parts.length - 2]}.${parts[parts.length - 1]}` : location;
}