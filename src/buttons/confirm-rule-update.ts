import { ButtonBuilder, ButtonStyle } from 'discord.js';
import { createRule, updateRule } from '@/database';
import type { APIButtonComponentWithCustomId, ButtonInteraction } from 'discord.js';

const confirmRuleUpdateButton = new ButtonBuilder();
confirmRuleUpdateButton.setCustomId('confirm-rule-update');
confirmRuleUpdateButton.setLabel('Update Rule');
confirmRuleUpdateButton.setStyle(ButtonStyle.Success);

async function confirmRuleUpdateHandler(interaction: ButtonInteraction): Promise<void> {
	const parts = interaction.customId.split('-');
	const id = Number(parts[3]);
	const title = parts[4];
	const time = parts[5];

	const description = interaction.message.embeds[0].description!;

	if (id === 0) {
		await createRule(interaction.guildId!, title, description, time);
	} else {
		await updateRule(interaction.guildId!, id, title, description, time);
	}

	interaction.reply({
		content: 'Rule updated!',
		ephemeral: true
	});
}

module.exports = {
	name: (confirmRuleUpdateButton.data as APIButtonComponentWithCustomId).custom_id,
	button: confirmRuleUpdateButton,
	handler: confirmRuleUpdateHandler
};
