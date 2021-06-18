const nodemailer = require('nodemailer');
require('dotenv').config();

exports.transport = nodemailer.createTransport({
	host: process.env.MAIL_SERVICE,
	port: 465,
	secure: true,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS_SECRET,
	},
});

exports.sendMail = async (datos, transport) => {
	return await transport.sendMail({
		from: `'${datos.nombre}' <${datos.correo}>`,
		to: `${datos.destino}`,
		subject: `${datos.titulo}`,
		html: `${datos.contenido}`,
	});
};
