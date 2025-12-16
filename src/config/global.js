export default {
  global: {
    Name: 'Producción pecuaria sostenible e innovadora de especies menores.',
    Description:
      'La producción de especies menores es clave para la seguridad alimentaria y el desarrollo rural. El componente formativo a fortalece competencias en manejo, bioseguridad, nutrición y sostenibilidad, promoviendo sistemas eficientes y con valor agregado. Con enfoque práctico, impulsa el bienestar animal, el uso de recursos locales y la innovación, mejorando la competitividad y calidad de vida rural.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Bienestar animal y sanidad preventiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principios generales y marco conceptual',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Sintiencia en las especies menores',
            hash: 't_1_2',
          },
          { numero: '1.3', titulo: 'Vacunación', hash: 't_1_3' },
          {
            numero: '1.4',
            titulo: 'Vermifugación y control parasitario',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Zoonosis: prevención y control',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Riesgos biológicos en la producción pecuaria',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ejemplos de agentes y enfermedades comunes',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cuy (Cavia porcellus)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Diseño funcional de instalaciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Distribución interna y manejo del espacio',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ventilación, iluminación y confort térmico',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Materiales de construcción recomendados',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Equipos y utensilios por especie',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Tipos de jaulas y sistemas de alojamiento',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Conejos (Oryctolagus cuniculus)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Requisitos generales de alojamiento',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Diseño y dimensiones de jaulas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Equipos y utensilios básicos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Condiciones de bienestar animal',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Bioseguridad en instalaciones cunícolas',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Recomendaciones técnicas finales',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Diseño de instalaciones avícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Galpones tradicionales rurales (convencionales)',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Galpones cerrados con control ambiental',
            hash: 't_5_2',
          },
          { numero: '5.3', titulo: 'Galpones automáticos', hash: 't_5_3' },
          {
            numero: '5.4',
            titulo:
              'Galpón de gallinas en pastoreo (free range o semi-intensivo)',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Diseño y manejo ambiental en galpones de postura',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Equipos en avicultura de postura',
            hash: 't_5_6',
          },
          { numero: '5.7', titulo: 'Comederos', hash: 't_5_7' },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Codornices (Coturnix coturnix japonica)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Requisitos generales de alojamiento',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Diseño y dimensiones de jaulas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Equipos y utensilios básicos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Iluminación y confort térmico',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Bioseguridad y manejo sanitario',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Planos y esquemas técnicos sugeridos',
            hash: 't_6_6',
          },
          { numero: '6.7', titulo: 'Recomendaciones de manejo', hash: 't_6_7' },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Caprinos (Capra hircus)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Diseño funcional de las instalaciones caprinas',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Distribución interna y manejo del espacio',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Ventilación, iluminación y confort térmico',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Materiales de construcción recomendados',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Equipos y utensilios básicos para caprinos',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Tipos de corrales y sistemas de alojamiento',
            hash: 't_7_6',
          },
          {
            numero: '7.7',
            titulo: 'Planos y esquemas técnicos sugeridos',
            hash: 't_7_7',
          },
          { numero: '7.8', titulo: 'Recomendaciones de manejo', hash: 't_7_8' },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Ovinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Diseño funcional de las instalaciones',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Distribución interna y manejo del espacio',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Ventilación, iluminación y confort térmico',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Materiales de construcción recomendados',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Equipos y utensilios básicos para ovinos',
            hash: 't_8_5',
          },
          {
            numero: '8.6',
            titulo: 'Tipos de corrales y sistemas de alojamiento',
            hash: 't_8_6',
          },
          {
            numero: '8.7',
            titulo: 'Planos esquemáticos y referencias visuales',
            hash: 't_8_7',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Alimentación, suplementación y estrategias alternativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Principios de nutrición animal',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Formulación de raciones balanceadas',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Uso de recursos locales y forrajes disponibles',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Bancos de proteína y cultivos forrajeros',
            hash: 't_9_4',
          },
          {
            numero: '9.5',
            titulo: 'Estrategias de suplementación',
            hash: 't_9_5',
          },
          {
            numero: '9.6',
            titulo: 'Alimentación alternativa y sostenible',
            hash: 't_9_6',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Innovación y valor agregado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Concepto de innovación y valor agregado',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Sostenibilidad en sistemas pecuarios',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Tecnología aplicada a la producción de especies menores',
            hash: 't_10_3',
          },
          {
            numero: '10.4',
            titulo: 'Desarrollo de productos derivados y transformación',
            hash: 't_10_4',
          },
          {
            numero: '10.5',
            titulo: 'Comercialización y emprendimiento rural',
            hash: 't_10_5',
          },
          {
            numero: '10.6',
            titulo: 'Casos de innovación destacados',
            hash: 't_10_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Bienestar animal y sanidad preventiva',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). <em>Resolución 000253: Por la cual se establecen los lineamientos de bienestar animal en la producción pecuaria</em>. MinAgricultura.',
      tipo: 'Resolución',
      link:
        'https://fenavi.org/wp-content/uploads/2020/10/RESOLUCION-0253-DE-2020.pdf',
    },
    {
      tema: 'Bienestar animal y sanidad preventiva',
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2020). <em>Resolución 074968 de 2020: Manual de Bioseguridad para predios pecuarios</em>. ICA.',
      tipo: 'Resolución',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=73076',
    },
    {
      tema: 'Bienestar animal y sanidad preventiva',
      referencia:
        'Centro de Investigación Agrícola Tropical – CIAT. (s.f.). <em>Recomendaciones básicas para la alimentación de animales menores (aves, ovinos, cerdos y cuyes)</em>. CIAT.',
      tipo: 'Documento',
      link:
        'https://assets.publishing.service.gov.uk/media/57a08ce2e5274a27b20014d5/R6774b.pdf',
    },
    {
      tema: 'Principios generales y marco conceptual',
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (s.f.). <em>Metodología para la producción cunícola</em>. Ministerio de Agricultura y Desarrollo Rural; Asociación Colombiana de Cunicultura; Universidad Nacional Abierta y a Distancia; Cadena Productiva Cunícola.',
      tipo: 'Documento',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias/documentos/2025/metodologia-bienestar-conejos-v-2-0-publicar.aspx',
    },
    {
      tema: 'Cuy (Cavia porcellus)',
      referencia:
        'Guerra León, C. R. (2009). <em>Manual técnico de crianza de cuyes</em>. Fundación Internacional de Solidaridad Compañía de María; CEDEPAS Norte.',
      tipo: 'Documento',
      link:
        'https://www.cedepas.org.pe/sites/default/files/manual_tecnico_de_crianza_de_cuyes.pdf',
    },
    {
      tema: 'Diseño de instalaciones avícolas',
      referencia:
        'Federación Nacional de Avicultores de Colombia – FENAVI. (s.f.). <em>Bioseguridad en la industria avícola</em>.',
      tipo: 'Documento',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/BIOSEGURIDAD-EN-LA-INDUSTRIA-AV%C3%8DCOLA.pdf',
    },
    {
      tema: 'Codornices (Coturnix coturnix japonica)',
      referencia:
        'Universidad Estatal a Distancia. (s.f.). <em>Módulo: Codornices</em>.',
      tipo: 'Documento',
      link:
        'https://multimedia.uned.ac.cr/pem/manejo_animales_granja/documentos/modulo_codorniz.pdf',
    },
    {
      tema: 'Caprinos (Capra hircus)',
      referencia:
        'Suárez, V. H., Martínez, G. M., Nievas, J. D., & Quiroga, R. J. (2017). <em>Prácticas de manejo y producción en sistemas familiares de cría caprina en las quebradas áridas de Jujuy y Salta</em>. Revista de Investigación Agropecuaria, 43(2), 186-194.',
      tipo: 'Documento',
      link: 'https://www.redalyc.org/pdf/864/86452401015.pdf',
    },
    {
      tema: 'Caprinos (Capra hircus)',
      referencia:
        'Senavirtualvalle. (2009). <em>Alojamiento y equipos caprinos – Parte 1</em>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GzRq9T__Avo',
    },
    {
      tema: 'Caprinos (Capra hircus)',
      referencia:
        'Senavirtualvalle. (2009). <em>Alojamiento y equipos caprinos – Parte 2</em>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6OHSBY_bpOg&t=18s',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'Designa el modo en que un animal afronta las condiciones de su entorno. Un animal está en buenas condiciones de bienestar si está sano, cómodo, bien alimentado, seguro, puede expresar comportamientos naturales y no padece dolor, miedo o desasosiego.',
    },
    {
      termino: 'Conejera',
      significado:
        'Habitáculo destinado al alojamiento de conejos, diseñado para protegerlos, facilitar su reproducción y mantener condiciones adecuadas de higiene y confort.',
    },
    {
      termino: 'Confort',
      significado:
        'Estado de bienestar físico y mental derivado de condiciones ambientales adecuadas como temperatura, ventilación, silencio y seguridad.',
    },
    {
      termino: 'Conejo',
      significado:
        'Oryctolagus cuniculus, mamífero herbívoro de la familia Leporidae, criado para producción de carne, piel y pelo.',
    },
    {
      termino: 'Cunicultura',
      significado:
        'Actividad agropecuaria dedicada a la cría, manejo y aprovechamiento económico de conejos con fines zootécnicos o comerciales.',
    },
    {
      termino: 'Cuy',
      significado:
        'Cavia porcellus, roedor doméstico de la familia Caviidae, conocido como cuy o cobaya, criado principalmente para la producción de carne.',
    },
    {
      termino: 'Enfermedad de declaración obligatoria',
      significado:
        'Enfermedad inscrita en una lista por la autoridad veterinaria, cuya presencia o sospecha debe ser notificada de inmediato conforme a la reglamentación nacional.',
    },
    {
      termino: 'Estrés',
      significado:
        'Mecanismo fisiológico de defensa frente a situaciones que exigen adaptación; cuando el entorno cambia, el organismo ajusta su funcionamiento para mantener el equilibrio.',
    },
    {
      termino: 'Estrés térmico',
      significado:
        'Condición en la cual el animal no logra mantener su equilibrio térmico interno (homeostasis) ante temperaturas extremas.',
    },
    {
      termino: 'Fin zootécnico',
      significado:
        'Actividad orientada a la reproducción, cría, levante, ceba y obtención de subproductos animales como carne, piel o pelo.',
    },
    {
      termino: 'Galpón',
      significado:
        'Instalación o estructura cerrada donde se aloja un grupo de animales de la misma especie y edad bajo manejo productivo, sanitario y de bioseguridad.',
    },
    {
      termino: 'Gazapo',
      significado:
        'Cría del conejo o cuy desde el nacimiento hasta el destete.',
    },
    {
      termino: 'Hábitat',
      significado:
        'Lugar o ambiente natural que ofrece las condiciones necesarias para el desarrollo y supervivencia de una especie animal.',
    },
    {
      termino: 'Predio de producción primaria',
      significado:
        'Granja o finca donde se desarrollan actividades de producción animal en cualquiera de sus fases: cría, levante o engorde.',
    },
  ],
  referencias: [
    {
      referencia:
        'AGROSAVIA. (2022). <em>Guía técnica de manejo y producción de codornices en sistemas sostenibles</em>. Ministerio de Agricultura y Desarrollo Rural.',
      link: '',
    },
    {
      referencia:
        'AGROSAVIA. (2022). <em>Guía técnica para la producción sostenible de caprinos en Colombia</em>. Ministerio de Agricultura y Desarrollo Rural.',
      link: '',
    },
    {
      referencia:
        'FAO. (2023). <em>Guía de buenas prácticas en especies menores: cunicultura sostenible</em>. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: '',
    },
    {
      referencia:
        'FAO. (2023). <em>Manual de buenas prácticas pecuarias en la producción de aves menores</em>. Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: '',
    },
    {
      referencia:
        'FENAVI. (2024). <em>Informe estadístico de producción de huevos en Colombia</em>. Federación Nacional de Avicultores de Colombia.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2020). <em>Resolución 136 de 2020. Por la cual se establecen los requisitos de bienestar animal y bioseguridad en explotaciones pecuarias</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2022). <em>Guía técnica para la implementación de buenas prácticas en especies menores</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos – INVIMA. (2022). <em>Manual de inocuidad pecuaria y planes sanitarios integrales</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal – OMSA. (2023). <em>Código Sanitario para los Animales Terrestres</em>. París, Francia.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal – OMSA. (2023). <em>Manual de zoonosis y enfermedades compartidas</em>. París, Francia.',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud – OPS. (2022). <em>Guía de prevención de zoonosis en sistemas productivos rurales</em>. Washington, D.C.',
      link: '',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje – SENA. (2024). <em>Cartilla de formación: Bienestar animal en sistemas de producción pecuaria</em>. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Unión Europea. (2012). <em>Tratado de Funcionamiento de la Unión Europea (TFUE), Artículo 13</em>.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
