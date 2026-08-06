export function toSentenceCase(value: string): string {
  const trimmed = value?.trim() || '';
  if (!trimmed) return trimmed;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

export function hasWhitespace(value: string): boolean {
  return /\s/.test(value?.trim() || '');
}

export function isNumericOnly(value: string): boolean {
  return /^\d+$/.test(value?.trim() || '');
}

export function isValidGroupName(value: string): boolean {
  const trimmed = value?.trim() || '';
  if (!trimmed) return false;
  if (hasWhitespace(trimmed)) return false;
  if (isNumericOnly(trimmed)) return false;
  return true;
}
