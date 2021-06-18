const { transport, sendMail } = require('../config/nodemailer-config.js');
const { emailInfo } = require('../templates/templatesEmail');

exports.sendEmail = async (dataModel) => {
	const datos = {
		nombre: 'Notificaciones GochoEstudios',
		correo: 'gochoestudios@info.com',
		destino: dataModel.correo,
		titulo: `Información sobre la universidad (${dataModel.university.sig_uni})`,
		contenido: emailInfo(dataModel.university, dataModel.programs),
	};

	return await sendMail(datos, transport);
};
