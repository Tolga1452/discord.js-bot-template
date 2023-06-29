import { logger } from "@tolga1452/logchu";
import { ShardingManager } from "discord.js";
import { configDotenv } from "dotenv";
import { botFile } from "./config.json";

logger.success(`[${__filename}] Packages loaded.`);

configDotenv();

logger.success(`[${__filename}:configDotenv] ".env" file loaded."`);

const manager = new ShardingManager(botFile, {
    token: process.env.DISCORD_TOKEN
});

logger.success(`[${__filename}:ShardingManager] ShardingManager set up on "${botFile}" file.`);

manager.on('shardCreate', async shard => logger.info(`[${__filename}:ShardingManager] Shard ${shard.id} created.`));

logger.info(`[${__filename}:ShardingManager] Events set up.`);

manager.spawn();