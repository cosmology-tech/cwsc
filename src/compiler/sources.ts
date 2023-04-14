// function addSourceFile(file: string) {
//   const sourceFileText = fs.readFileSync(file).toString();
//   const ast = Parser.fromString(sourceFileText).buildAST();
//   sources.push({
//     file: path.resolve(file),
//     ast: ast,
//   });
//   ast.descendants
//     .filter((x: any) => x instanceof ImportStmt)
//     .map((x: any) => x as ImportStmt)
//     .forEach((i: any) => {
//       const resolvedPath = resolveFileImport(file, i.fileName);
//       i.fileName = resolvedPath;
//       if (sources.findIndex((x) => x.file === resolvedPath) === -1) {
//         addSourceFile(resolvedPath);
//       }
//     });
// }
