function prettyPrint(node: any, depth = 0, field?: string) {
  let { $type, $children, ...keys } = node;
  let indent = '  '.repeat(depth);
  let res = `${indent}${$type}${field !== undefined ? ` (.${field})` : ''}`;
  for (let key in keys) {
    res += ' ' + key + ': ' + keys[key];
  }
  console.log(res);
  for (let child of $children) {
    let { key, value } = child;
    prettyPrint(value, depth + 1, key);
  }
}
