import { Command, Flags, Args, Interfaces } from '@oclif/core';
import * as fs from 'fs-extra';
import * as path from 'path';

export type FlagsT<T extends typeof Command> = Interfaces.InferredFlags<
  typeof BaseCommand['baseFlags'] & T['flags']
>;
export type ArgsT<T extends typeof Command> = Interfaces.InferredArgs<
  T['args']
>;

export class ConfigKV {
  constructor(public key: string, public value: string) {}
}

export abstract class BaseCommand<T extends typeof Command> extends Command {
  async loadConfig() {
    const userConfig = await fs.readJSON(
      path.join(this.config.configDir, 'cwsconfig.json')
    );

    this.log('User config:');
    console.dir(userConfig);
  }

  protected flags!: FlagsT<T>;
  protected args!: ArgsT<T>;

  public async init(): Promise<void> {
    await super.init();
    const { args, flags } = await this.parse({
      flags: this.ctor.flags,
      baseFlags: (super.ctor as typeof BaseCommand).baseFlags,
      args: this.ctor.args,
      strict: this.ctor.strict,
    });
    this.flags = flags as FlagsT<T>;
    this.args = args as ArgsT<T>;
  }

  static baseFlags = {
    verbose: Flags.boolean({
      char: 'V',
      description: 'Show verbose output - turns on all logs and diagnostics.',
      default: false,
    }),
    silent: Flags.boolean({
      char: 'Q',
      description: 'Show no output',
      default: false,
      aliases: ['quiet'],
      exclusive: ['verbose'],
    }),
    'show-hints': Flags.boolean({
      description: 'Show CWScript "hint" and "info" diagnostics when parsing.',
      default: false,
      exclusive: ['silent'],
    }),
    'show-warnings': Flags.boolean({
      description: 'Show CWScript "warning" diagnostics when parsing.',
      default: true,
      exclusive: ['silent'],
    }),
    logs: Flags.string({
      description: 'Show compiler tool logs above a certain level',
      options: ['NONE', 'INFO', 'DEBUG', 'WARNING', 'ERROR'],
      default: ['ERROR'],
      exclusive: ['silent'],
    }),
    'log-file': Flags.file({
      description: 'Write logs to a file',
      env: 'CWSC_LOG_FILE',
      dependsOn: ['logs'],
    }),
    'project-dir': Flags.directory({
      char: 'D',
      description:
        'Specify a directory containing a `cwsproject.toml` file to run the command in a specific project.',
      exclusive: ['project-config', 'project-dir'],
      env: 'CWS_PROJECT_DIR',
    }),
    cwsconfig: Flags.file({
      char: 'C',
      description:
        'Specify a path to `cwsconfig.toml` to use base compiler tool settings.',
      env: 'CWS_CONFIG',
    }),
    // set: Flags.custom<ConfigKV>({
    //   multiple: true,
    //   description: `Set a config value temporarily for this command. This flag can be used multiple times to set multiple values.`,
    //   helpLabel: '-Xset=value',
    //   parse: async (input: string) => {
    //     const [key, value] = input.split('=');
    //     return new ConfigKV(key, value);
    //   },
    // })(),
  };

  protected async catch(err: Error & { exitCode?: number }): Promise<any> {
    // add any custom logic to handle errors from the command
    // or simply return the parent class error handling
    return super.catch(err);
  }

  protected async finally(_: Error | undefined): Promise<any> {
    // called after run and catch regardless of whether or not the command errored
    return super.finally(_);
  }

  abstract run(): Promise<any>;
}
