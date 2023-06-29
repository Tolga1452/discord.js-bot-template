import { ApplicationCommandData, Client, CommandInteraction, GatewayDispatchEvents } from "discord.js";

export interface Command {
    data: ApplicationCommandData,
    execute: (client: Client, interaction: CommandInteraction) => void | Promise<void>;
};

export interface Event {
    name: GatewayDispatchEvents,
    execute: (...args: any[]) => void | Promise<void>;
};

export interface CustomClient extends Client {
    commands: Map<string, Command>;
    events: Map<GatewayDispatchEvents, Event>;
};