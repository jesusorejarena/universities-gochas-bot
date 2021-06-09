bot.sendMessage(msg.from.id, `¿Cuentame ${msg.from.first_name}, como quieres empezar?`, {
	reply_markup: {
		inline_keyboard: [
			[
				{ text: 'Universidades', callback_data: 'university' },
				{ text: 'Carreras', callback_data: 'programs' },
			],
		],
	},
});

bot.on('callback_query', async function onCallbackQuery(actionButton) {
	if (actionButton.data == 'university') {
		bot.sendMessage(msg.from.id, `Ok, muy bien, empecemos con las universidades`);
	} else {
		bot.sendMessage(msg.from.id, `Ok, muy bien, empecemos con las carreras`);
	}
});
