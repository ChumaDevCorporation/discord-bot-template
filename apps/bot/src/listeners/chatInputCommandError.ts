import { Listener, type ChatInputCommandErrorPayload, Events } from '@sapphire/framework';
import { logger } from '@template/logger';

export class ChatInputCommandErrorListener extends Listener<typeof Events.ChatInputCommandError> {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, {
      ...options,
      event: Events.ChatInputCommandError,
    });
  }

  public override async run(error: unknown, payload: ChatInputCommandErrorPayload) {
    const { command, interaction } = payload;

    logger.error(error, `Error occurred while executing command ${command.name}`);

    try {
      if (interaction.deferred || interaction.replied) {
        await interaction.editReply({
          content: 'Произошла непредвиденная ошибка при выполнении команды.',
        });
        return;
      }

      await interaction.reply({
        content: 'Произошла непредвиденная ошибка при выполнении команды.',
        ephemeral: true,
      });
    } catch (replyError) {
      logger.error(replyError, 'Failed to send error message to user');
    }
  }
}
