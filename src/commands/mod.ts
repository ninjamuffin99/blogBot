import { Bot } from "../../first_steps.ts";
import { Command } from "../types/commands.ts";

export function createCommand(command: Command) {
  Bot.commands.set(command.name, command);
}