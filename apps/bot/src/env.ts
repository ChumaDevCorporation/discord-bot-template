import { z } from 'zod';
import 'dotenv/config';
import { logger } from '@template/logger';

const envSchema = z.object({
  DISCORD_TOKEN: z.string().min(1, 'Discord token is missing'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  logger.fatal({ errors: z.treeifyError(_env.error) }, 'Invalid environment variables');
  process.exit(1);
}

export const env = _env.data;
