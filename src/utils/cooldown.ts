import { EmbedBuilder } from 'discord.js';
import { initMemberCooldown, getCommandCooldown, updateCommandCooldown } from '@/database';
import type { CommandHandler } from '@/types/general-types';

export async function isInteractionOnCooldown(command: CommandHandler, memberId: number): Promise<false | EmbedBuilder> {
	// ? This `cooldown` field doesn't seem to exist. Seems like this function should always return false.
	// ? `command.cooldown` isn't even used later on so this seems like a mistake
	// if (!command.cooldown) {
	// 	return false;
	// }

	// Initialize our cooldown if not already and grab the cooldown
	await initMemberCooldown(memberId, command.name);
	const cooldown = await getCommandCooldown(memberId, command.name);

	// Check if we are still on cooldown or if there has never been a cooldown for this command yet
	if (cooldown == 0 || Date.now() > cooldown) {
		return false;
	}

	const cooldownEmbed = new EmbedBuilder();
	const relativeTime = getRelativeTime(cooldown);

	cooldownEmbed.setColor(0xF36F8A);
	cooldownEmbed.setTitle('Cooldown!');
	cooldownEmbed.setDescription('Sorry, that action is on cooldown right now.');
	cooldownEmbed.setFooter({ text: `Expires ${relativeTime}` });

	// Return an embed back rather than false that will be used to show we're on cooldown
	return cooldownEmbed;
}

export async function beginCooldown(command: CommandHandler, memberId: number): Promise<void> {
	// ? same as above, only here it was used, which would result in endTime always being NaN
	// const { cooldown } = command;

	const cooldown = await getCommandCooldown(memberId, command.name);

	const endTime = new Date(Date.now() + cooldown).getTime();

	await updateCommandCooldown(memberId, command.name, endTime);
}

export function getRelativeTime(timestamp: number): string {
	const msPerMinute = 60 * 1000;
	const msPerHour = msPerMinute * 60;
	const msPerDay = msPerHour * 24;
	const msPerMonth = msPerDay * 30;
	const msPerYear = msPerDay * 365;

	const elapsed = Number(timestamp.toString().padEnd(13, '0')) - Date.now();

	if (elapsed < msPerMinute) {
		return `in ${Math.round(elapsed / 1000)} second(s)`;
	} else if (elapsed < msPerHour) {
		return `in ${Math.round(elapsed / msPerMinute)} minute(s)`;
	} else if (elapsed < msPerDay) {
		return `in ${Math.round(elapsed / msPerHour)} hour(s)`;
	} else if (elapsed < msPerMonth) {
		return `in ${Math.round(elapsed / msPerDay)} day(s)`;
	} else if (elapsed < msPerYear) {
		return `in ${Math.round(elapsed / msPerMonth)} month(s)`;
	} else {
		return `in ${Math.round(elapsed / msPerYear)} year(s)`;
	}
}
