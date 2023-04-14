import * as fs from 'fs';
import * as path from 'path';
import * as toml from '@iarna/toml';
import * as Rust from '../rust';
export class FileWriter {
  constructor() {}

  writeContract(
    p: string,
    contractName: string,
    contractRustCode: Rust.CodeGroup
  ) {
    // first, create the new crate
    const crateRoot = path.join(p, contractName);
    fs.mkdirSync(crateRoot, { recursive: true });

    // .cargo
    const crateDotCargo = path.join(crateRoot, '.cargo');
    fs.mkdirSync(crateDotCargo, { recursive: true });

    // .cargo/config
    const crateDotCargoConfig = path.join(crateDotCargo, 'config');
    fs.writeFileSync(
      crateDotCargoConfig,
      `[alias]
wasm = "build --release --target wasm32-unknown-unknown"
unit-test = "test --lib"
schema = "run --example schema"`
    );

    const crateCargoToml = path.join(crateRoot, 'Cargo.toml');
    const crateCargoTomlContent = toml.stringify({
      package: {
        name: contractName,
        authors: ['William Chen <william@terran.one>'],
        edition: '2018',
        exclude: ['contract.wasm', 'hash.txt'],
        version: '0.1.0',
        metadata: {
          scripts: {
            optimize:
              'docker run --rm -v "$(pwd)":/code --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry cosmwasm/rust-optimizer:0.12.3\n',
          },
        },
      },
      dependencies: {
        'cw-storage-plus': '0.8.0',
        cw2: '0.8.1',
        schemars: '0.8.3',
        'cosmwasm-std': {
          version: '0.16.2',
        },
        'cosmwasm-storage': {
          version: '0.16.0',
        },
        serde: {
          'default-features': false,
          features: ['derive'],
          version: '1.0.127',
        },
        thiserror: {
          version: '1.0.26',
        },
      },
      'dev-dependencies': {
        'cosmwasm-schema': {
          version: '0.16.0',
        },
      },
      features: {
        backtraces: ['cosmwasm-std/backtraces'],
        library: [],
      },
      lib: {
        'crate-type': ['cdylib', 'rlib'],
      },
      profile: {
        release: {
          'codegen-units': 1,
          debug: false,
          'debug-assertions': false,
          incremental: false,
          lto: true,
          'opt-level': 3,
          'overflow-checks': true,
          panic: 'abort',
          rpath: false,
        },
      },
    });
    fs.writeFileSync(crateCargoToml, crateCargoTomlContent);

    const crateSrc = path.join(crateRoot, 'src');
    fs.mkdirSync(crateSrc, { recursive: true });

    const crateLib = path.join(crateSrc, 'lib.rs');
    fs.writeFileSync(crateLib, contractRustCode.toRustString());

    const crateScript = path.join(crateRoot, 'build-debug.sh');
    fs.writeFileSync(
      crateScript,
      `#!/bin/bash\nRUSTFLAGS='-C link-arg=-s' cargo wasm`
    );

    fs.chmodSync(crateScript, 0o755);
  }
}
