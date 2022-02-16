import { spawn } from "child_process";

/**
 *
 * Execute the given script in the shell
 */
export function run(script: string) {
  const commands = script.split(" ");
  const command = spawn(commands[0], [commands.slice(1).join(" ")], {
    shell: true,
  });

  command.stdout.pipe(process.stdout);
  command.stderr.pipe(process.stderr);
  process.stdin.pipe(command.stdin);

  command.on("exit", () => process.exit());
}
