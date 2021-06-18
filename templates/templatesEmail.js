exports.emailInfo = (university, programs) => {
	return `
	<table style="max-width: 600px; padding: 10px; margin: 0 auto; border-collapse: collapse">
		<tr>
			<td>
				<div style="width: 100%; display: block; text-align: center; margin-bottom: 10px">
					<a
						href="https://t.me/GochoEstudios_bot"
						style="text-decoration: none; padding: 11px 23px; color: #000; font-size: 25px; font-weight: bold"
					>
						GochoEstudios
					</a>
				</div>

				<div style="color: #34495e; padding: 0px 50px; margin: 0% 0% 0%; font-family: Arial">
					<h3 style="color: #000000; margin: -90px 20px 0px 20px; text-align: center">
						Información enviada desde @GochoEstudios_bot en telegram
					</h3>

					<div style="width: 100%; display: block; text-align: center">
						<img style="padding: 0px; width: 80%; margin: 15px 15px 0px 15px" src="${university.img_uni}" />
					</div>

					<br />

					<p style="color: #000000; margin: 20px 0px 0px; font-size: 18px; text-align: justify">
						<strong>Siglas:</strong> ${university.sig_uni} <br />
						<strong>Nombre:</strong> ${university.nam_uni} <br />
						<strong>Tipo:</strong> ${university.tip_uni} <br />
						<strong>URL:</strong> ${university.url_uni} <br />
						<strong>Dirreción:</strong> ${university.add_uni} <br />
						<strong>Descripción:</strong> ${university.des_uni}
					</p>

					<br />

					<div style="width: 100%; margin: 50px 0px 50px 0px; display: inline-block; text-align: center">
						<a
							style="
								text-decoration: none;
								border-radius: 5px;
								padding: 11px 23px;
								color: #fff;
								background-color: #00629c;
								border-color: #00629c;
							"
							href="${university.url_uni}"
							>Ir a la pagina de la universidad</a
						>
					</div>

					<h2 style="color: #000000; margin: -90px 20px 0px 20px; text-align: center">Todas las carreras disponibles</h2>

					<ul style="color: #000000; margin: 20px 0px 0px; font-size: 15px">
						${programs.map(
							(program) => `
						<li>
							<p>
								<strong>Nombre:</strong> ${program.nam_pro} <br />
								<strong>Tipo:</strong> ${program.tip_pro} <br />
								<strong>Duración:</strong> ${program.dur_pro}
							</p>
						</li>
						`
						)}
					</ul>

					<p style="color: #000000; font-size: 12px; text-align: center; margin: 50px 0px 10px 0px">
						<strong>Gracias por usar el bot.</strong>
					</p>
				</div>
			</td>
		</tr>
	</table>
	`;
};
