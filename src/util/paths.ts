import * as path from 'path';

/**
 * Resolves a file path to an absolute path.
 * @param fromFile file from which to calculate
 * @param importedPath relative path imported from `fromFile`
 * @returns absolute path to the imported file
 */
export function resolveFileImport(fromFile: string, importedPath: string) {
  let baseDir = path.parse(fromFile).dir;
  const resolvedPath = path.resolve(baseDir, importedPath);
  return resolvedPath;
}
