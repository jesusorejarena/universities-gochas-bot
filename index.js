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
		`Bienvenido ${msg.from.first_name}, me llamo GochoEstudios y soy un bot diseñado para ayudarte en la búsqueda de esa carrera universitaria que siempre quisiste estudiar ¡aquí en San Cristóbal!`
	);

	setTimeout(() => {
		bot.sendMessage(
			msg.from.id,
			`Bien ${msg.from.first_name} ¿te parece si nos ponemos manos a la obra? Para comenzar solo debes usar este comando para que te enseñe las universidades más importantes que existen en San Cristóbal /universidades`
		);
	}, 1000);
});

/* --------------- Universidades --------------- */
bot.onText(/\/(?:universidades)/gi, async (msg) => {
	bot.sendMessage(
		msg.from.id,
		`¡Oye ${msg.from.first_name}! ¡echa un vistazo a las universidades que he conseguido especialmente para ti! Si te interesa alguna solo debes presionar sus siglas para obtener más información.`,
		{ parse_mode: 'Markdown' }
	);
	// Obtiene las universidades de la base de datos
	const universities = await getUniversitiesAll();

	// hace un siclo para luego mostrarlas en el mensaje
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
	// Busca la informacion de la universidad segun las siglas que presiono
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
		// Muestra las opciones para obtener mas informacion sobre la universidad
		bot.sendMessage(msg.from.id, `¡Se ve interesante! ¿Deseas más información sobre el/la ${university.sig_uni}...`, {
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

		// Realiza una opcion segun los botones que se hayan presionado
		bot.on('callback_query', async (actionButton) => {
			if (actionButton.data == 'Ubicacion') {
				/* --------------- Ubicacion --------------- */
				bot.sendMessage(msg.from.id, `\n*Dirección*: ${university.add_uni}`, { parse_mode: 'Markdown' });
				if (university.lat_uni !== '') bot.sendLocation(msg.chat.id, university.lat_uni, university.lon_uni);
			} else if (actionButton.data == 'Correo') {
				/* --------------- Correo --------------- */
				bot.sendMessage(
					msg.from.id,
					`Hey ${msg.from.first_name}... ¿qué tal si me das tu correo? ¡No me malinterpretes! Es solo para enviarte la información de la universidad que has seleccionado.`,
					{ parse_mode: 'Markdown' }
				);

				// Espera el ingreso del correo
				bot.on('message', async function (msg) {
					// Busca los programas de la universidad
					const programs = await getProgramsByUni(university.cod_uni, '');

					const data = {
						correo: msg.text,
						university,
						programs,
					};

					const correoExpresion =
						/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

					// Valida el correo
					if (correoExpresion.test(msg.text)) {
						try {
							await sendEmail(data);
							bot.sendMessage(msg.from.id, 'Correo enviado exitosamente.');
						} catch (error) {
							bot.sendMessage(msg.from.id, 'Hubo un fallo al enviar el correo con los datos.');
						}
					}
				});
			} else if (actionButton.data == 'Carreras') {
				/* --------------- Carreras --------------- */
				bot.sendMessage(
					msg.from.id,
					`¿Deseas estudiar una carrera universitaria corta o larga? Recuerda que hay algunas que tienen información limitada...`,
					{
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
					}
				);
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
	}, 1000);

	/* --------------- Carreras segun tipo --------------- */
	async function programsByUni(id, type, msg) {
		// Busca las carreras que hay disponible segun la duracion
		const programs = await getProgramsByUni(id, type);

		let data;
		if (programs.length > 0) {
			data = programs.map(
				(program) => `\n*Nombre*: ${program.nam_pro} \n*Tipo*: ${program.tip_pro} \n*Duración*: ${program.dur_pro} \n`
			);
		} else {
			data = `*No hay carreras.*`;
		}

		// Envia los datos que se obtuvieron
		bot.sendMessage(msg.from.id, `${data}`, { parse_mode: 'Markdown' });
	}
}
