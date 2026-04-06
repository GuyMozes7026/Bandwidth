import type {
	APIApplicationCommand,
	BaseInteraction,
	ButtonBuilder,
	ButtonInteraction,
	CommandInteraction,
	ContextMenuCommandInteraction,
	ModalBuilder,
	ModalSubmitInteraction,
	StringSelectMenuBuilder,
	StringSelectMenuInteraction
} from 'discord.js';

export interface PollInfo {
	title: string;
	options: unknown[];
	votes: number[];
	expiryTime: number;
	pollId?: string;
	channelId?: string;
}

export type HandlerFunction<Interaction extends BaseInteraction> = (interaction: Interaction) => Promise<void>;

export interface ButtonHandler {
	name: string;
	button: ButtonBuilder;
	handler: HandlerFunction<ButtonInteraction>;
}

export interface CommandHandler {
	name: string;
	help?: string;
	handler: HandlerFunction<CommandInteraction>;
	deploy: APIApplicationCommand;
}

export interface ContextMenuHandler {
	name: string;
	help?: string;
	handler: HandlerFunction<ContextMenuCommandInteraction>;
	deploy: APIApplicationCommand;
}

export interface ModalHandler {
	name: string;
	modal: ModalBuilder;
	handler: HandlerFunction<ModalSubmitInteraction>;
}

export interface SelectMenuHandler {
	name: string;
	select_menu: StringSelectMenuBuilder;
	handler: HandlerFunction<StringSelectMenuInteraction>;
}
