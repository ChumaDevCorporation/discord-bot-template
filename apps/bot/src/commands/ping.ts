import { Command } from '@sapphire/framework';

export class PingCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'ping',
      description: 'Check the bot latency',
    });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand((builder) =>
      builder.setName(this.name).setDescription(this.description),
    );
  }

  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    const msg = await interaction.reply({ content: 'Pinging...', withResponse: true });

    const latency = msg.resource?.message?.createdTimestamp
      ? msg.resource.message.createdTimestamp - interaction.createdTimestamp
      : 0;

    return interaction.editReply(
      `Pong! Bot latency is ${latency.toString()}ms. API Latency is ${Math.round(this.container.client.ws.ping).toString()}ms.`,
    );
  }
}
