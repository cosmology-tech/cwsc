import { Command, Args, Flags } from '@oclif/core';
import { BaseCommand, FlagsT, ArgsT } from '../BaseCommand';

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
      description:
        'File to parse into AST; if not provided, can read from <STDIN>.',
      required: true,
    }),
  };

  public async run(): Promise<FlagsT<typeof ParseCommand>> {
    await this.init();
    for (const [flag, value] of Object.entries(this.flags)) {
      this.log(`${flag}: ${value}`);
    }

    return this.flags;
  }

  // async run(): Promise<void> {
  //   const { args, flags } = await this.parse(ParseCommand);
  //   console.log(args, flags);
  // }
}
