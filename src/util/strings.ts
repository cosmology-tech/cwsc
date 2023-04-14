export function snakeToPascal(s: string): string {
  return s
    .split('_')
    .map(x => x[0].toUpperCase() + x.slice(1))
    .join('');
}

export function pascalToSnake(s: string): string {
  return s.replace(/([A-Z])/g, '_$1').toLowerCase();
}
