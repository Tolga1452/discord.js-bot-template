import { ApplicationCommandType, ChatInputCommandInteraction, Client } from "discord.js";
import { Command } from "../types.ts";

export default {
    data: {
        type: ApplicationCommandType.ChatInput,
        name: 'ping',
        description: "Shows the bot's ping."
    },
    async execute(client: Client, interaction: ChatInputCommandInteraction) {
        interaction.reply(`🏓 Pong!\n- **Client Ping:** ${client.ws.ping}\n- **Interaction Ping:** ${Date.now() - interaction.createdTimestamp}`);
    }
} as Command;