import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import { logger } from '@template/logger';
import { closeDb } from '@template/database';
import { env } from './env.js';

const client = new SapphireClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  loadMessageCommandListeners: true,
});

process.on('unhandledRejection', (error) => {
  logger.error(error, 'Unhandled promise rejection');
});

process.on('uncaughtException', (error) => {
  logger.fatal(error, 'Uncaught exception');
  // Allow Pino to flush before exiting
  setTimeout(() => process.exit(1), 100);
});

const gracefulShutdown = async () => {
  logger.info('Shutting down gracefully...');
  await client.destroy();
  closeDb();
  process.exit(0);
};

process.on('SIGINT', () => void gracefulShutdown());
process.on('SIGTERM', () => void gracefulShutdown());

const main = async () => {
  try {
    logger.info('Starting Kamiko with Sapphire...');

    await client.login(env.DISCORD_TOKEN);
    logger.info(`Logged in as ${client.user?.tag ?? 'Unknown'}`);
  } catch (error) {
    logger.error(error, 'Fatal error during startup');
    void client.destroy();
    process.exit(1);
  }
};

void main();
