CREATE TABLE public.universities(
	cod_uni SERIAL NOT NULL,
	sig_uni character varying(255),
	nam_uni character varying(255),
	img_uni character varying(255),
	url_uni character varying(255),
	add_uni character varying(255),
	tip_uni character varying(255),
	des_uni TEXT,
	lat_uni character varying(255),
	lon_uni character varying(255)
);

-- key primary
ALTER TABLE ONLY public.universities
		ADD CONSTRAINT key_universities PRIMARY KEY (cod_uni);

INSERT INTO public.universities VALUES (1, 'IUT-UPTAET', 'Universidad Politecnica Agroindustrial del Estado Táchira', 'https://i.postimg.cc/xjWJnDKp/IUT.jpg', 'sarec.iutai.tec.ve/, www.iutai.tec.ve/', 'A dos cuadras del terminal de pasajeros', 'Pública', 'Instituto Educativo, Carreras Universitarias, Enfermería, Informática, Educación Preescolar, Universidades, Institutos Universitarios, Institutos Tecnológicos.', '7.745176620765013', '-72.2355851585202');
INSERT INTO public.universities VALUES (2, 'UCAT', 'Universidad Católica del Táchira', 'https://i.postimg.cc/yNQxGw1P/UCAT.jpg', 'http://www.ucat.edu.ve/web/', 'Calle 14, con Carrera 14, Edif. UCAT, Barrio Obrero, San Cristobal', 'Privada', 'Diplomado, Certificado, Postgrados, Diplomados Especializados, Universidades, Institutos Universitarios, Institutos Tecnológicos, Universidades, Educación Universitaria, Maestría, Posgrado.', '7.774040094809392', '-72.22599829434765');
INSERT INTO public.universities VALUES (3, 'UNA', 'Universidad Nacional Abierta', 'https://i.postimg.cc/7hBKJPwz/UNA.png', 'www.una.edu.ve', 'Calle 2 (al Lado del Liceo Ramón Velázquez), Los Naranjos', 'Pública', 'Somos una institución de Educación Superior destinada a la formación de profesionales en áreas prioritarias del desarrollo social, mediante un sistema de educación abierta y a distancia, basado en medios modernos de comunicación.', '7.779217215642607', '-72.21628619366436');
INSERT INTO public.universities VALUES (4, 'IUTEPAL', 'Instituto Universitario de Tecnología Juan Pablo Pérez Alfonzo', 'https://i.postimg.cc/RCGsDdK0/IUTEPAL.png', 'http://www.iutepal.com/', 'Carrera 10, Local Nº. 11-29, Central, San Cristobal', 'Privada', 'Instituto Educativo, Carreras Universitarias, Enfermería, Informática, Educación Preescolar, Universidades, Institutos Universitarios, Institutos Tecnológicos.', '7.771477930229588', '-72.22924523860357');
INSERT INTO public.universities VALUES (5, 'UBV', 'Universidad Bolivariana de Venezuela', 'https://i.postimg.cc/bNJCcn99/UBV.jpg', 'http://ubv.edu.ve/', 'Av. Universidad, Sede UBV, Paramillo, San Cristobal', 'Pública', 'Somos una universidad en la cual formamos a los profesionales del futuro. Ofrecemos estudios de formación avanzada: especializaciones, doctorados, maestrías y diplomados, entre otros.', '7.798523627394204', '-72.20130085434467');
INSERT INTO public.universities VALUES (6, 'UNET', 'Universidad Nacional Experimental del Táchira', 'https://i.postimg.cc/C191hkfn/UNET.jpg', 'http://www.unet.edu.ve/', 'Av. Universidad (Después del Complejo Ferial), Paramillo, San Cristobal', 'Pública', 'Universidades, Institutos Universitarios, Institutos Tecnológicos, Entes Educativos, Universidades Experimentales.', '7.793820164964929', '-72.20004073786008');
INSERT INTO public.universities VALUES (7, 'UTS', 'Instituto Universitario de Tecnología Antonio José de Sucre Extensión San Cristóbal', 'https://i.postimg.cc/Jz8sHNYb/UTS.jpg', 'http://www.utssancristobal.edu.ve/', 'Carrera 17, entre Calle 9 y 10, Edif. Doña María, PB (Diagonal a Casa Kitchen), Barrio Obrero, San Cristobal', 'Privada', 'Administración y Ciencias Comerciales, Administración Mención Costos, Mercadotecnia, Relaciones Industriales, Secretariado, Comercio Exterior, Electricidad Mención Mantenimiento, Electricidad Mención Instalaciones Eléctricas, Informática, Diseño Gráfico, Universidades.', '7.768403127264816', '-72.2235674649644');
INSERT INTO public.universities VALUES (8, 'IUFRONT', 'Instituto Universitario de La Frontera', 'https://i.postimg.cc/SQX2BNzz/IUFRONT.png', 'https://iufront.net/', 'Calle 9, Esquina Carrera 17, Edif. Iufront, Barrio Obrero, San Cristobal', 'Privada', 'Universidades, Institutos Universitarios, Administración de Empresas, Informática, Comercio Exterior, Diseño de Obras Civiles, Construcción Civil, Contaduría, Mantenimiento Mecánico, Metalurgia y Ciencia de los Materiales.', '7.7675226023478965', '-72.22400310223924');
INSERT INTO public.universities VALUES (9, 'IUTI', 'Instituto Universitario de Tecnología Industrial', '', 'https://iuti.com.ve/iutisc', 'Av. Principal de Pirineos I, Colegio Don Bosco, Pirineos I, San Cristobal', 'Privada', 'Institutos, Universidades, Institutos Universitarios, Institutos Tecnológicos, Tecnología Industrial, Carreras Universitarias.', '7.772153433420359', '-72.21429460033362');
INSERT INTO public.universities VALUES (10, 'PSM', 'Instituto Universitario Politécnico Santiago Mariño', 'https://i.postimg.cc/3RkNQnWH/PSM.jpg', 'http://www.psm.edu.ve/', 'Av. Libertador, Edif. Santiago Mariño, Torbes, San Cristobal', 'Privada', 'Instituto universitario de ingeniería, también ofrece cursos diplomados y certificados gerenciales, civil, industrial, mecánica, electrónica en sistemas, cursos de alta gerencia, química, arquitectura.', '7.785087982002823', '-72.23527493539497');
INSERT INTO public.universities VALUES (11, 'IUGC', 'Instituto Universitario Gran Colombia', 'https://i.postimg.cc/yx6fN34B/IUGC.png', 'http://iugc.com.ve/', 'Calle 7, Edif. Libertador, PB, Local Nº. 12-45, La Concordia, San Cristobal', 'Privada', 'Certificado, Diplomados Especializados, Diplomado, Pasantías, Postgrados, Universidades, Formación en Administración en Banca y Finanzas, Administración en Servicios de Salud, Enfermería, Publicidad y Mercadeo, Cursos y Talleres, Diplomado en Ecografía Clínica Especializada, Diplomado en Rescate y Emergencias Pre - Hospitalarias, Maestría, Posgrado.', '7.754720640673087', '-72.22829894882194');
INSERT INTO public.universities VALUES (12, 'IUJEL', 'Instituto Universitario Jesús Enrique Lossada', '', '', 'Av. Universidad, Edif. Iujel, Pirineos I, San Cristobal', 'Privada', 'Universidades, Institutos Universitarios, Institutos Tecnológicos, Carreras, Administración de Empresas, Publicidad Y Mercadeo, Administración en Informática, Administración de Personal, Seguros Mercantiles, Administración en Transporte, Hotelería y Turismo.', '7.790023792642813', '-72.21309185832628');
INSERT INTO public.universities VALUES (13, 'ULA', 'Universidad de Los Andes', 'https://i.postimg.cc/c4wKJ9hx/ULA.jpg', 'http://www.ula.ve/', 'Avenida Las Pilas', 'Pública', '', '7.791552041377658', '-72.21341807550193');

CREATE TABLE public.programs(
	cod_pro SERIAL NOT NULL,
	nam_pro character varying(255),
	tip_pro character varying(255),
	dur_pro character varying(255),
	fky_universities integer
);

-- key primary
ALTER TABLE ONLY public.programs
		ADD CONSTRAINT key_programs PRIMARY KEY (cod_pro);


INSERT INTO public.programs VALUES (1, 'Informática','Pregrado', 'Corta (TSU), Larga (Ingeniería)', '1');
INSERT INTO public.programs VALUES (2, 'Mecánica','Pregrado', 'Corta (TSU), Larga (Ingeniería)', '1');
INSERT INTO public.programs VALUES (3, 'Construcción Civil','Pregrado', 'Corta (TSU), Larga (Ingeniería)', '1');
INSERT INTO public.programs VALUES (4, 'Agroalimentación','Pregrado', 'Corta (TSU), Larga (Ingeniería)', '1');
INSERT INTO public.programs VALUES (5, 'Electricidad','Pregrado', 'Corta (TSU), Larga (Ingeniería)', '1');
INSERT INTO public.programs VALUES (6, 'Geociencia','Pregrado', 'Corta (TSU), Larga (Ingeniería)', '1');
INSERT INTO public.programs VALUES (7, 'Electrónica','Pregrado', 'Corta (TSU), Larga (Ingeniería)', '1');
INSERT INTO public.programs VALUES (8, 'Mantenimiento','Pregrado', 'Corta (TSU), Larga (Ingeniería)', '1');
INSERT INTO public.programs VALUES (9, 'Procesamiento y Distribución de Alimentos','Pregrado', 'Corta (TSU), Larga (Ingeniería)', '1');
INSERT INTO public.programs VALUES (10, 'Administración de Empresas','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (11, 'Ciencias Políticas','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (12, 'Contador Público','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (13, 'Derecho','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (14, 'Derecho Comercial','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (15, 'Derecho Laboral','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (16, 'Derecho de Familia','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (17, 'Derecho de Mercados','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (18, 'Financieros','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (19, 'Dirección de Recursos Humanos','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (20, 'Docencia','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (21, 'Escribanía Escribano','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (22, 'Gestión de Marketing','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (23, 'Radiología','Pregrado', 'Larga', '2');
INSERT INTO public.programs VALUES (24, 'Criminología','Pregrado', 'Corta', '2');
INSERT INTO public.programs VALUES (25, 'Administración de Empresas','Pregrado', 'Larga', '3');
INSERT INTO public.programs VALUES (26, 'Administración de Empresas Mención: Riesgos y Seguros','Pregrado', 'Larga', '3');
INSERT INTO public.programs VALUES (27, 'Contaduría Pública','Pregrado', 'Larga', '3');
INSERT INTO public.programs VALUES (28, 'Preescolar','Pregrado', 'Larga', '3');
INSERT INTO public.programs VALUES (29, 'Dificultades de Aprendizaje','Pregrado', 'Larga', '3');
INSERT INTO public.programs VALUES (30, 'Licenciatura en Educación Integral','Pregrado', 'Larga', '3');
INSERT INTO public.programs VALUES (31, 'Licenciatura en Matemática','Pregrado', 'Larga', '3');
INSERT INTO public.programs VALUES (32, 'Ingeniería de Sistemas','Pregrado', 'Larga', '3');
INSERT INTO public.programs VALUES (33, 'Ingeniería Industrial','Pregrado', 'Larga', '3');
INSERT INTO public.programs VALUES (34, 'Técnico Superior Universitario en Educación Integral','Pregrado', 'Corta', '3');
INSERT INTO public.programs VALUES (35, 'Técnico superior Universitario en Seguridad Industrial','Pregrado', 'Corta', '3');
INSERT INTO public.programs VALUES (36, 'Técnico Superior Universitario en Mantenimiento de Sistemas Informáticos','Pregrado', 'Corta', '3');
INSERT INTO public.programs VALUES (37, 'Enfermería (Técnica)','Pregrado', 'Corta', '4');
INSERT INTO public.programs VALUES (38, 'Mercadeo (Técnica)','Pregrado', 'Corta', '4');
INSERT INTO public.programs VALUES (39, 'Informática (Técnica)','Pregrado', 'Corta', '4');
INSERT INTO public.programs VALUES (40, 'Administración de Empresas (Técnica)','Pregrado', 'Corta', '4');
INSERT INTO public.programs VALUES (41, 'Administración Mención Contabilidad y Finanzas','Pregrado', 'No Aplica', '4');
INSERT INTO public.programs VALUES (42, 'Electrónica','Pregrado', 'No Aplica', '4');
INSERT INTO public.programs VALUES (43, 'Comunicacion Social','Pregrado', 'No Aplica', '5');
INSERT INTO public.programs VALUES (44, 'Estudios Juridicos','Pregrado', 'No Aplica', '5');
INSERT INTO public.programs VALUES (45, 'Estudios Politicos y Gobierno','Pregrado', 'No Aplica', '5');
INSERT INTO public.programs VALUES (46, 'Gestion Social del Desarrollo Local','Pregrado', 'No Aplica', '5');
INSERT INTO public.programs VALUES (47, 'Informatica para la Gestion Social','Pregrado', 'No Aplica', '5');
INSERT INTO public.programs VALUES (48, 'Ingeniería Agroindustrial','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (49, 'Ingeniería Agronómica','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (50, 'Ingeniería Ambiental','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (51, 'Ingeniería de Producción Animal','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (52, 'Ingeniería Industrial','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (53, 'Ingeniería en Informática','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (54, 'Ingeniería Electrónica','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (55, 'Ingeniería Civil','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (56, 'Ingeniería Mecánica','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (57, 'Arquitectura','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (58, 'Licenciatura en Música','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (59, 'Diseño gráfico','Pregrado', 'Larga', '6');
INSERT INTO public.programs VALUES (60, 'TSU en Electromedicina','Pregrado', 'Corta', '6');
INSERT INTO public.programs VALUES (61, 'TSU en Producción Agropecuaria','Pregrado', 'Corta', '6');
INSERT INTO public.programs VALUES (62, 'TSU en Inspección Sanitaria','Pregrado', 'Corta', '6');
INSERT INTO public.programs VALUES (63, 'TSU en Información de Salud','Pregrado', 'Corta', '6');
INSERT INTO public.programs VALUES (64, 'TSU en Citotecnología','Pregrado', 'Corta', '6');
INSERT INTO public.programs VALUES (65, 'TSU en Entrenamiento Deportivo','Pregrado', 'Corta', '6');
INSERT INTO public.programs VALUES (66, 'TSU en Manejo de Emergencias y Acción Contra Desastres','Pregrado', 'Corta', '6');
INSERT INTO public.programs VALUES (67, 'TSU en Turismo','Pregrado', 'Corta', '6');
INSERT INTO public.programs VALUES (68, 'TSU en Agrotecnia','Pregrado', 'Corta', '6');
INSERT INTO public.programs VALUES (69, 'Administración y Ciencias Comerciales','Pregrado', 'No Aplica', '7');
INSERT INTO public.programs VALUES (70, 'Administración Mención Costos','Pregrado', 'No Aplica', '7');
INSERT INTO public.programs VALUES (71, 'Mercadotecnia','Pregrado', 'No Aplica', '7');
INSERT INTO public.programs VALUES (72, 'Relaciones Industriales','Pregrado', 'No Aplica', '7');
INSERT INTO public.programs VALUES (73, 'Secretariado','Pregrado', 'No Aplica', '7');
INSERT INTO public.programs VALUES (74, 'Comercio Exterior','Pregrado', 'No Aplica', '7');
INSERT INTO public.programs VALUES (75, 'Electricidad Mención Mantenimiento','Pregrado', 'No Aplica', '7');
INSERT INTO public.programs VALUES (76, 'Electricidad Mención Instalaciones Eléctricas','Pregrado', 'No Aplica', '7');
INSERT INTO public.programs VALUES (77, 'Informática','Pregrado', 'No Aplica', '7');
INSERT INTO public.programs VALUES (78, 'Diseño Industrial','Pregrado', 'No Aplica', '7');
INSERT INTO public.programs VALUES (79, 'Diseño Gráfico','Pregrado', 'No Aplica', '7');
INSERT INTO public.programs VALUES (80, 'Administración de Empresas Mención: Industrial','Pregrado', 'Corta', '8');
INSERT INTO public.programs VALUES (81, 'Administración de Empresas Mención: Banca y Finanzas','Pregrado', 'Corta', '8');
INSERT INTO public.programs VALUES (82, 'Informática','Pregrado', 'Corta', '8');
INSERT INTO public.programs VALUES (83, 'Comercio Exterior','Pregrado', 'Corta', '8');
INSERT INTO public.programs VALUES (84, 'Diseño de Obras Civiles','Pregrado', 'Corta', '8');
INSERT INTO public.programs VALUES (85, 'Construcción Civil','Pregrado', 'Corta', '8');
INSERT INTO public.programs VALUES (86, 'Administración en Banca y Finanzas','Pregrado', 'No Aplica', '9');
INSERT INTO public.programs VALUES (87, 'Administración en Compras','Pregrado', 'No Aplica', '9');
INSERT INTO public.programs VALUES (88, 'Administración en Ventas','Pregrado', 'No Aplica', '9');
INSERT INTO public.programs VALUES (89, 'Administración Industrial','Pregrado', 'No Aplica', '9');
INSERT INTO public.programs VALUES (90, 'Contaduría','Pregrado', 'No Aplica', '9');
INSERT INTO public.programs VALUES (91, 'Mantenimiento Mecánico','Pregrado', 'No Aplica', '9');
INSERT INTO public.programs VALUES (92, 'Mecánica Térmica','Pregrado', 'No Aplica', '9');
INSERT INTO public.programs VALUES (93, 'Producción Industrial','Pregrado', 'No Aplica', '9');
INSERT INTO public.programs VALUES (94, 'Relaciones Industriales','Pregrado', 'No Aplica', '9');
INSERT INTO public.programs VALUES (95, 'Tecnología Automotriz','Pregrado', 'No Aplica', '9');
INSERT INTO public.programs VALUES (96, 'Arquitectura','Pregrado', 'Larga', '10');
INSERT INTO public.programs VALUES (97, 'Ingeniería Sistemas','Pregrado', 'Larga', '10');
INSERT INTO public.programs VALUES (98, 'Ingeniería Civil','Pregrado', 'Larga', '10');
INSERT INTO public.programs VALUES (99, 'Ingeniería Diseño Industrial','Pregrado', 'Larga', '10');
INSERT INTO public.programs VALUES (100, 'Ingeniería Eléctrica','Pregrado', 'Larga', '10');
INSERT INTO public.programs VALUES (101, 'Ingeniería Electrónica','Pregrado', 'Larga', '10');
INSERT INTO public.programs VALUES (102, 'Ingeniería Industrial','Pregrado', 'Larga', '10');
INSERT INTO public.programs VALUES (103, 'Ingeniería Mant. Mecánico','Pregrado', 'Larga', '10');
INSERT INTO public.programs VALUES (104, 'Administración en Banca y Finanzas','Pregrado', 'Corta', '11');
INSERT INTO public.programs VALUES (105, 'Administración en Servicios de la Salud','Pregrado', 'Corta', '11');
INSERT INTO public.programs VALUES (106, 'Enfermería','Pregrado', 'Corta', '11');
INSERT INTO public.programs VALUES (107, 'Publicidad y Mercadeo','Pregrado', 'Corta', '11');
INSERT INTO public.programs VALUES (108, 'Turismo y Hoteleria','Pregrado', 'No Aplica', '12');
INSERT INTO public.programs VALUES (109, 'Publicidas y Mercadeo','Pregrado', 'No Aplica', '12');
INSERT INTO public.programs VALUES (110, 'Administración de Empresas','Pregrado', 'No Aplica', '12');
INSERT INTO public.programs VALUES (111, 'Administración de Personal','Pregrado', 'No Aplica', '12');
INSERT INTO public.programs VALUES (112, 'Administración de Seguros Mercantiles','Pregrado', 'No Aplica', '12');
INSERT INTO public.programs VALUES (113, 'Administración en Informatica','Pregrado', 'No Aplica', '12');
INSERT INTO public.programs VALUES (114, 'Administración','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (115, 'Educación Mención Básica Integral','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (116, 'Educación Mención Ciencias Sociales','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (117, 'Educación Mención Cs. Nat. Mat. y Tecnología','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (118, 'Educación Mención Lengua Cultura e Idiomas','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (119, 'Educacion Mención Ecología y Educ. Ambiental','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (120, 'Educación Mención Educ. Para El Trab. y Des. Endógeno','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (121, 'Educación Mención Ciencias de la Salud','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (122, 'Educación Mención Idiomas Extranjeros Inglés y Francés','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (123, 'Educación Mención Español y Literatura','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (124, 'Educación Mención Física y Matemática','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (125, 'Contaduría Pública','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (126, 'Educación Mención Biología y Química','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (127, 'Educación Mención Educación Integral','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (128, 'Educación menc. Geograf. y Cs. de la Tierra','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (129, 'Educación Mención Geografía e Historia','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (130, 'Educación mención Matemática','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (131, 'Educación mención Ingles','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (132, 'Educación mención Castellano y Literatura','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (133, 'Educación Básica Integral','Pregrado', 'Larga', '13');
INSERT INTO public.programs VALUES (134, 'Comunicación Social','Pregrado', 'Larga', '13');