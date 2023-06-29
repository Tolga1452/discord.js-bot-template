import { Client } from "discord.js";
import { logger } from "@tolga1452/logchu";

export default {
    name: 'ready',
    async execute(client: Client) {
        logger.info(`[${__filename}:Client] Client logged in as ${client.user?.tag}.`)
    }
};