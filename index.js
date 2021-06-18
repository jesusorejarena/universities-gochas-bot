const dotenv = require('dotenv');
dotenv.config();

const app = require('express')();
const TelegramBot = require('node-telegram-bot-api');

const { getUniversitiesAll, getUniversityById, getProgramsByUni } = require('./controllers/index');
const { sendEmail } = require('./utils/mail');

app.listen(process.env.PORT, () => {
	console.log(`El servidor de express se esta ejecutando en el puerto: ${process.env.PORT}`);
});

app.get('/', (req, res) => res.send('Hola'));

const bot = new TelegramBot(process.env.KEY_TELEGRAM, { polling: true });

/* --------------- Inicio --------------- */

bot.onText(/\/start/, async (msg) => {
	bot.sendMessage(
		msg.from.id,
		`Hola ${msg.from.first_name}, bienvenido soy 'Gocho Estudios' un bot que fue diseñado para ayudarte a buscar esa carrera universitaria que siempre quisiste estudiar en San Cristóbal, para triunfar en el mundo laboral.`
	);

	bot.sendMessage(
		msg.from.id,
		`${msg.from.first_name}, para empezar usa este comando para mostrarte algunas de las universidades que hay en gochilandia /universidades.`
	);
});

/* --------------- Universidades --------------- */

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

/* --------------- Respuesta de las universidades --------------- */

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

/* --------------- Funciones --------------- */

async function universityById(siglas, msg) {
	const university = await getUniversityById(siglas);

	/* --------------- Descripcion e imagen --------------- */

	if (university.img_uni !== '') {
		bot.sendPhoto(msg.from.id, university.img_uni, {
			caption: `\n*Siglas*: ${university.sig_uni} \n*Nombre*: ${university.nam_uni} \n*Tipo*: ${university.tip_uni} \n*URL*: ${university.url_uni} \n*Descripción*: ${university.des_uni}`,
			parse_mode: 'Markdown',
		});
	} else {
		bot.sendMessage(
			msg.from.id,
			`\n*Siglas*: ${university.sig_uni} \n*Nombre*: ${university.nam_uni} \n*Tipo*: ${university.tip_uni} \n*URL*: ${university.url_uni} \n*Descripción*: ${university.des_uni}`,
			{ parse_mode: 'Markdown' }
		);
	}

	/* --------------- Ubicacion o Carreras --------------- */

	setTimeout(() => {
		bot.sendMessage(msg.from.id, `Mas información sobre el ${university.sig_uni}?`, {
			reply_markup: {
				inline_keyboard: [
					[
						{ text: 'Ubicación', callback_data: 'Ubicacion' },
						{ text: 'Enviar al correo', callback_data: 'Correo' },
						{ text: 'Carreras', callback_data: 'Carreras' },
					],
				],
			},
		});

		bot.on('callback_query', async (actionButton) => {
			if (actionButton.data == 'Ubicacion') {
				/* --------------- Ubicacion --------------- */
				bot.sendMessage(msg.from.id, `\n*Dirección*: ${university.add_uni}`, { parse_mode: 'Markdown' });
				if (university.lat_uni !== '') bot.sendLocation(msg.chat.id, university.lat_uni, university.lon_uni);
				setTimeout(() => {
					repeat(university, msg);
				}, 1000);
			} else if (actionButton.data == 'Correo') {
				/* --------------- Correo --------------- */
				bot.sendMessage(
					msg.from.id,
					`Muy bien ${msg.from.first_name}, pasame tu correo para enviarte la información de la universidad y las carreras.`,
					{ parse_mode: 'Markdown' }
				);

				bot.on('message', async function (msg) {
					const programs = await getProgramsByUni(university.cod_uni, '');

					const data = {
						correo: msg.text,
						university,
						programs,
					};

					const correoExpresion =
						/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

					if (correoExpresion.test(msg.text)) {
						try {
							await sendEmail(data);
							bot.sendMessage(msg.from.id, 'Correo enviado exitosamente.');
							setTimeout(() => {
								repeat(university, msg);
							}, 1000);
						} catch (error) {
							bot.sendMessage(msg.from.id, 'Hubo un fallo al enviar el correo con los datos.');
							setTimeout(() => {
								repeat(university, msg);
							}, 1000);
						}
					} else {
						bot.sendMessage(msg.from.id, 'El correo que ingreso no es valido, vuelva a intentarlo.');
						setTimeout(() => {
							repeat(university, msg);
						}, 1000);
					}
				});
			} else if (actionButton.data == 'Carreras') {
				/* --------------- Carreras --------------- */
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
				/* --------------- Tipos de carreras --------------- */

				bot.on('callback_query', async (actionButton) => {
					if (actionButton.data == 'Corta') {
						programsByUni(university.cod_uni, actionButton.data, msg);
					} else if (actionButton.data == 'Larga') {
						programsByUni(university.cod_uni, actionButton.data, msg);
					} else if (actionButton.data == 'No Aplica') {
						programsByUni(university.cod_uni, actionButton.data, msg);
					} else if (actionButton.data == 'Todas') {
						programsByUni(university.cod_uni, '', msg);
					}
				});
			}
		});
	}, 2000);

	/* --------------- Carreras segun tipo --------------- */

	async function programsByUni(id, type, msg) {
		const programs = await getProgramsByUni(id, type);

		let data;

		if (programs.length > 0) {
			data = programs.map(
				(program) => `\n*Nombre*: ${program.nam_pro} \n*Tipo*: ${program.tip_pro} \n*Duración*: ${program.dur_pro} \n`
			);
		} else {
			data = `*No hay carreras.*`;
		}

		bot.sendMessage(msg.from.id, `${data}`, { parse_mode: 'Markdown' });

		setTimeout(() => {
			repeat(university, msg);
		}, 1000);
	}

	async function repeat(university, msg) {
		bot.sendMessage(msg.from.id, `¿Que quieres volver a intentar?`, {
			reply_markup: {
				inline_keyboard: [
					[
						{ text: 'Repetir', callback_data: 'Repetir' },
						{ text: 'Ver universidades', callback_data: 'Universidades' },
					],
				],
			},
		});

		bot.on('callback_query', async (actionButton) => {
			if (actionButton.data == 'Repetir') {
				bot.sendMessage(
					msg.from.id,
					`${msg.from.first_name}, para repetir las preguntas del /${university.sig_uni} presiona ese comando.`
				);
			} else if (actionButton.data == 'Universidades') {
				bot.sendMessage(
					msg.from.id,
					`${msg.from.first_name}, para volver a ver las /universidades presiona ese comando.`
				);
			}
		});
	}
}
