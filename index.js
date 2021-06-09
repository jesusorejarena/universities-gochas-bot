const dotenv = require('dotenv');
dotenv.config();

const app = require('express')();
const TelegramBot = require('node-telegram-bot-api');

const { getProgramsAll, getUniversitiesAll, getUniversityById, getProgramsByUni } = require('./controllers/index');

app.listen(process.env.PORT, () => {
	console.log(`El servidor de express se esta ejecutando en el puerto: ${process.env.PORT}`);
});

app.get('/', (req, res) => res.send('Hola'));

const bot = new TelegramBot(process.env.KEY_TELEGRAM, { polling: true });

bot.onText(/\/start/, async (msg) => {
	bot.sendMessage(
		msg.from.id,
		`Hola ${msg.from.first_name}, bienvenido soy 'Gocho Estudios' un bot que fue diseñado para ayudarte a buscar esa carrera universitaria que siempre quisiste estudiar en San Cristóbal, para triunfar en el mundo laboral.`
	);

	bot.sendMessage(
		msg.from.id,
		`${msg.from.first_name}, para empezar usa este comando para mostrarte algunas de las universidades que hay en gochilandia /universidades`
	);
});

bot.onText(/\/(?:universidades)/gi, async (msg) => {
	bot.sendMessage(
		msg.from.id,
		`Muy bien ${msg.from.first_name}, aqui hay algunas universidades que tengo almacenadas en mi base de datos. *PRESIONA LAS SIGLAS PARA MAS INFORMACIÓN*.`,
		{ parse_mode: 'Markdown' }
	);

	const universities = await getUniversitiesAll();

	const data = universities.map(
		(university) => `\n*Siglas*: /${university.sig_uni} \n*Nombre*: ${university.nam_uni}\n`
	);

	bot.sendMessage(msg.from.id, `${data}`, { parse_mode: 'Markdown' });
});

bot.onText(/\/(?:IUT)/gi, async (msg) => {
	universityById('IUT-UPTAET', msg);
});

bot.onText(/\/(?:UCAT)/gi, async (msg) => {
	universityById('UCAT', msg);
});

bot.onText(/\/(?:UNA)/gi, async (msg) => {
	universityById('UNA', msg);
});

bot.onText(/\/(?:IUTEPAL)/gi, async (msg) => {
	universityById('IUTEPAL', msg);
});

bot.onText(/\/(?:UBV)/gi, async (msg) => {
	universityById('UBV', msg);
});

bot.onText(/\/(?:UNET)/gi, async (msg) => {
	universityById('UNET', msg);
});

bot.onText(/\/(?:UTS)/gi, async (msg) => {
	universityById('UTS', msg);
});

bot.onText(/\/(?:IUFRONT)/gi, async (msg) => {
	universityById('IUFRONT', msg);
});

bot.onText(/\/(?:IUTI)/gi, async (msg) => {
	universityById('IUTI', msg);
});

bot.onText(/\/(?:PSM)/gi, async (msg) => {
	universityById('PSM', msg);
});

bot.onText(/\/(?:IUGC)/gi, async (msg) => {
	universityById('IUGC', msg);
});

bot.onText(/\/(?:IUJEL)/gi, async (msg) => {
	universityById('IUJEL', msg);
});

bot.onText(/\/(?:ULA)/gi, async (msg) => {
	universityById('ULA', msg);
});

async function universityById(siglas, msg) {
	const university = await getUniversityById(siglas);

	if (university.img_uni !== '') {
		bot.sendPhoto(msg.from.id, university.img_uni, {
			caption: `\n*Siglas*: ${university.sig_uni} \n*Nombre*: ${university.nam_uni} \n*Tipo*: ${university.tip_uni} \n*URL*: ${university.url_uni} \n*Dirección*: ${university.add_uni} \n*Descripción*: ${university.des_uni}`,
			parse_mode: 'Markdown',
		});

		if (university.lat_uni !== '') bot.sendLocation(msg.chat.id, university.lat_uni, university.lon_uni);
	} else {
		bot.sendMessage(
			msg.from.id,
			`\n*Siglas*: ${university.sig_uni} \n*Nombre*: ${university.nam_uni} \n*Tipo*: ${university.tip_uni} \n*URL*: ${university.url_uni} \n*Dirección*: ${university.add_uni} \n*Descripción*: ${university.des_uni}`,
			{ parse_mode: 'Markdown' }
		);
		if (university.lat_uni !== '') bot.sendLocation(msg.chat.id, university.lat_uni, university.lon_uni);
	}

	bot.sendMessage(msg.from.id, `¿Cual es la duración de la carrera que te gustaria estudiar?`, {
		reply_markup: {
			inline_keyboard: [
				[
					{ text: 'Corta', callback_data: 'Corta' },
					{ text: 'Larga', callback_data: 'Larga' },
					{ text: 'Sin info', callback_data: 'No Aplica' },
					{ text: 'Todas', callback_data: 'Todas' },
				],
			],
		},
	});

	bot.on('callback_query', async function onCallbackQuery(actionButton) {
		if (actionButton.data == 'Corta') {
			programsByUni(university.cod_uni, actionButton.data, msg);
		} else if (actionButton.data == 'Larga') {
			programsByUni(university.cod_uni, actionButton.data, msg);
		} else if (actionButton.data == 'No Aplica') {
			programsByUni(university.cod_uni, actionButton.data, msg);
		} else {
			programsByUni(university.cod_uni, '', msg);
		}
	});
}

async function programsByUni(id, type, msg) {
	const programs = await getProgramsByUni(id, type);

	let data;

	if (programs.length > 0) {
		data = programs.map(
			(program) => `\n*Nombre*: ${program.nam_pro} \n*Tipo*: ${program.tip_pro} \n*Duración*: ${program.dur_pro} \n`
		);
	} else {
		data = `*No hay carreras*`;
	}

	bot.sendMessage(msg.from.id, `${data}`, { parse_mode: 'Markdown' });
}
