# CWScript Project Quickstart

Congratulations on starting your new CWScript project!

Here are a couple tips to help you get situated.

**NOTE:** This guide assumes you have the CWScript development tools installed in your environment. To learn more, check out the official docs at [https://cwscript.com](https://cwscript.com).

## Directory Structure

CWScript projects follow a conventional directory structure.

```
- src/ -- contract source code
- build/ -- contains build output
  - rust/ -- generated Rust code
  - cwspec/ -- generated documentation
  - ... / -- other build artifacts generated from tools
- tests/ -- unit tests
- cri/ -- linked Rust bindings
- README.md -- project readme
- cwsproject.toml -- project configuration
```

## Writing contracts

Contracts are written in CWScript source files (.cws) inside the `src/` directory.

## Building

Run the `cwsc build` command to generate Rust code and documentation.

## Testing

Put your tests in the `tests/` directory. The `cwsc test` command will run all the tests discovered and report the results.
