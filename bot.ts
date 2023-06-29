import { logger } from "@tolga1452/logchu";
import { Client, GatewayIntentBits } from "discord.js";
import { readdirSync } from "fs";
import { configDotenv } from "dotenv";
import { commandsDirectory, eventsDirectory } from "./config.json";
import { Command, CustomClient, Event } from "./types.ts";

logger.success(`[${__filename}] Packages loaded.`);

configDotenv();

logger.success(`[${__filename}:configDotenv] ".env" file loaded."`);

const client: CustomClient = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
}) as CustomClient;

client.commands = new Map();
client.events = new Map();

logger.success(`[${__filename}:Client] Client set up.`);

const commandFiles = readdirSync(commandsDirectory);

logger.info(`[${__filename}:readdirSync] ${commandFiles.length} command(s) found.`);

for (const file of commandFiles) {
    const command: Command = require(`${commandsDirectory}/${file}`).default;

    client.commands.set(command.data.name, command);

    logger.success(`[${__filename}:Client] Command "${command.data.name}" loaded.`);
};

const eventFiles = readdirSync(eventsDirectory);

logger.info(`[${__filename}:readdirSync] ${eventFiles.length} event(s) found.`);

for (const file of eventFiles) {
    const event: Event = require(`${eventsDirectory}/${file}`).default;

    client.events.set(event.name, event);

    logger.success(`[${__filename}:Client] Event "${event.name}" loaded.`);
};

for (const [name, event] of client.events) {
    client.on(name, (...args) => event.execute(client, ...args));
};

logger.success(`[${__filename}:Client] Events set up.`);

client.login(process.env.DISCORD_TOKEN);