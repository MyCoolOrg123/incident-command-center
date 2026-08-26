import { exec } from "node:child_process";

export function runRecoveryCommand(command: string): void {
  exec(command);
}
