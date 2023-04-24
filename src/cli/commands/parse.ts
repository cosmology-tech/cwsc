import { Command, Args, Flags } from '@oclif/core';
import { BaseCommand, FlagsT, ArgsT } from '../BaseCommand';
import { CWSParser } from '../../parser';
import fs from 'fs';
import path from 'path';
import { DiagnosticSeverity } from 'vscode-languageserver';
import { TextView } from '../../util/position';
import { errorReportWithCodeSnippet } from '../../util/diagnostics';

export default class ParseCommand extends BaseCommand<typeof ParseCommand> {
  static description = 'Parse a CWScript source file into AST.';

  static examples = [
    `<%= config.bin %> <%= command.id %> FILE`,
    `<%= config.bin %> <%= command.id %> FILE --format sexp`,
  ];

  static flags = {
    format: Flags.string({
      description: 'Desired format of the parsed AST output',
      required: true,
      options: ['json', 'sexp'],
      default: 'json',
    }),
    out: Flags.string({
      char: 'o',
      description: 'Output file to write the parsed AST to',
      required: false,
    }),
  };

  static args = {
    file: Args.file({
      description: 'File to parse into AST.',
      required: true,
      ignoreStdin: true,
      exists: true,
    }),
  };

  public async run() {
    const { args, flags } = await this.parse(ParseCommand);
    if (!args.file) {
      this.error('No file provided to parse.');
    }

    this.debug(`Parsing ${args.file} into ${flags.format}...`);
    let sourceInput = fs.readFileSync(args.file, 'utf8');
    let ast = new CWSParser(sourceInput, args.file).parse();
    if (flags.out) {
      fs.writeFileSync(flags.out, JSON.stringify(ast.toJSON()));
    } else {
      console.log(ast.toJSON());
    }
  }
}
