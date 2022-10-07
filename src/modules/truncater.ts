export const truncater = (text: string, length: number): string => {
  if (!length) {
    return text;
  }
  const truncated = text.split('').splice(0, length);
  truncated.push(text.length <= length ? '' : '...');
  return truncated.join('');
};
