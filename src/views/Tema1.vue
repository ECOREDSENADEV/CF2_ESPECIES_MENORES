<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Bienestar animal y sanidad preventiva
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 La producción pecuaria moderna exige garantizar no solo la eficiencia y productividad, sino también el respeto por los animales y la prevención de enfermedades que puedan afectar tanto su salud como la del ser humano. En este contexto, el bienestar animal y la sanidad preventiva se presentan como pilares fundamentales de una producción ética, sostenible y segura. A continuación, se presentan los principios generales, fundamentos técnicos y aspectos éticos que sustentan estos conceptos clave.

        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Principios generales y marco conceptual
        
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") El bienestar animal se define como el estado físico y mental de un animal en relación con las condiciones en que vive y muere. Este concepto implica que los animales deben estar libres de hambre, miedo, dolor y enfermedades, y deben poder expresar sus comportamientos naturales.
        
            .bg-color-2.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 En las explotaciones pecuarias, el bienestar animal es un componente esencial para garantizar una producción sostenible, ética y segura, ya que animales saludables y tranquilos presentan un mejor rendimiento productivo y reproductivo, así como menor susceptibilidad a enfermedades.
        
        p.mb-5 Por su parte, la sanidad preventiva comprende todas las medidas orientadas a prevenir la aparición y propagación de enfermedades dentro del sistema productivo. Estas medidas incluyen:

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-3.tarjeta.p-4.mb-5(data-aos="fade-left")
              .bg-color-white.tarjeta.p-4(data-aos="fade-left")
                .row
                  .col-lg-5.mb-3.mb-lg-0
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Vacunación
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Vermifugación
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Limpieza y desinfección
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Bioseguridad
                  .col-lg-5.mb-3.mb-lg-0
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Control de vectores
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Diagnóstico temprano
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Elaboración de planes sanitarios específicos por especie


            p(data-aos="fade-left") La aplicación de estas estrategias permite evitar pérdidas económicas, proteger la salud pública (por zoonosis) y asegurar la inocuidad de los productos de origen animal. Además, el concepto de sintiencia es clave: reconoce que los animales son seres capaces de experimentar placer, dolor, miedo y bienestar. Esto obliga a los productores y cuidadores a tratarlos con respeto, evitando el sufrimiento y garantizando su confort en todas las etapas del ciclo productivo.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Las cinco libertades del bienestar animal

        p.mb-5 El bienestar animal se fundamenta en el cumplimiento de las cinco libertades, principio adoptado internacionalmente por la Organización Mundial de Sanidad Animal (OMSA, antes OIE), aplicable a todas las especies pecuarias. Estas libertades constituyen la base ética y técnica para garantizar una vida digna a los animales de producción:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          div(titulo="Libertad de hambre, sed y desnutrición")
            p.ms-5 Acceso constante a agua limpia y dieta adecuada.
          div(titulo="Libertad de incomodidad")
            p.ms-5 Alojamiento apropiado, áreas secas, ventiladas y confortables.
          div(titulo="Libertad de dolor, lesiones y enfermedades")
            p.ms-5 Prevención, diagnóstico y tratamiento oportuno.
          div(titulo="Libertad de expresar un comportamiento natural")
            p.ms-5 Espacio suficiente, compañía de su especie y ambiente enriquecido.
          div(titulo="Libertad de miedo y angustia")
            p.ms-5 Manejo humanitario y reducción del estrés (ordeño, transporte, sacrificio).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicación de las cinco libertades y la sanidad preventiva por especie
    
    p.mb-5 La implementación de las cinco libertades y las prácticas de sanidad preventiva debe adaptarse a las características específicas de cada especie pecuaria. A continuación, se presentan los principales requerimientos de manejo, alimentación, comportamiento y salud para algunas especies menores comúnmente criadas:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-7.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cuyes (<em>Cavia porcellus</em>)
              p Corrales amplios, ventilados y con buena iluminación natural. Se deben incluir refugios por su naturaleza tímida, con una densidad máxima de 10 animales por metro cuadrado. Requieren heno seco, pasto fresco y agua limpia siempre disponible. Es fundamental la vacunación contra salmonelosis, la desparasitación y la limpieza diaria. Se debe evitar el ruido fuerte, la manipulación brusca y las temperaturas fuera del rango de 18 a 22 °C.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Conejos (<em>Oryctolagus cuniculus</em>)
              p Jaulas limpias, secas y sin contacto directo con malla metálica. Necesitan espacio para refugio y ejercicio. Su alimentación debe incluir forraje fresco, heno y agua limpia. Se recomienda la vacunación contra mixomatosis y enfermedad vírica hemorrágica, además de la limpieza diaria. Se deben manipular por el dorso, nunca por las orejas o las patas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aves (Gallinas, pollos, aves de postura)
              p Galpones con buena ventilación, control térmico y luz regulada (16 horas diarias). Deben contar con perchas y espacio suficiente para el movimiento. Su dieta debe ser balanceada, con agua limpia disponible todo el tiempo. Se recomienda la vacunación contra Newcastle, Gumboro, bronquitis infecciosa y viruela aviar. Es importante la desinfección frecuente de las instalaciones y el manejo sin estrés.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Codornices (<em>Coturnix coturnix japonica</em>)
              p Jaulas limpias con pisos lisos y ambientes protegidos de corrientes de aire. Su alimentación debe ser balanceada y acompañada de agua fresca. Requieren vacunación contra Newcastle y control de parásitos intestinales. Se recomienda mantener el mínimo ruido, manipularlas con cuidado y proporcionarles entre 14 y 16 horas de luz al día.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cabras (<em>Capra hircus</em>)
              p Cobertizos secos y ventilados, con un mínimo de 1,5 m² por animal y acceso a áreas abiertas, ya que son animales sociales. Su dieta incluye heno, forrajes verdes y suplementos minerales, junto con agua limpia disponible. Deben vacunarse contra carbunco, fiebre aftosa y enterotoxemia, además de recibir desparasitación regular. Se debe evitar el aislamiento y el trato brusco.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ovejas (<em>Ovis aries</em>)
              p Corrales secos, sin humedad ni exceso de estiércol, y acceso a zonas de ejercicio o pastoreo. Su alimentación se basa en forrajes frescos, sales minerales y agua limpia. Se recomienda la vacunación contra clostridiosis, fiebre aftosa y ectima contagioso, junto con el control de parásitos externos. Su manejo debe ser grupal, con movimientos suaves y sin gritos.

    p.mb-5 El bienestar animal y la sanidad preventiva son pilares esenciales para una producción sostenible de especies menores. Implementar las cinco libertades junto con programas sanitarios adecuados no solo mejora la productividad, sino que también garantiza la inocuidad alimentaria, protege la salud pública y promueve el respeto por la vida animal. Todo esto debe hacerse en coherencia con los principios éticos y las normativas nacionales e internacionales que regulan una producción pecuaria responsable.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Sintiencia en las especies menores
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-3 La sintiencia animal se refiere a la capacidad de los animales para sentir, percibir y experimentar emociones positivas y negativas, como placer, miedo, dolor, hambre o bienestar. Este concepto, reconocido por la Organización Mundial de Sanidad Animal (OMSA, 2023) y la Unión Europea (2012), establece que los animales no son seres inertes o puramente biológicos, sino individuos con experiencias conscientes que deben ser respetados y protegidos.
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/13.svg").mx-auto
          .col-lg
            .bg-color-1.tarjeta.p-4(data-aos="fade-left")
              p.mb-0 En el contexto de las especies pecuarias menores, reconocer la sintiencia tiene implicaciones éticas, productivas y sanitarias. Un animal que vive sin miedo ni dolor, y puede expresar sus comportamientos naturales, mantiene un estado fisiológico equilibrado, mejora su inmunidad, reproducción y longevidad. Por el contrario, el maltrato, la negligencia o el confinamiento extremo generan estrés, sufrimiento y baja productividad.
    
    p.mb-5 En Colombia, la Ley 1774 de 2016 reconoce a los animales como “seres sintientes”, lo que implica una responsabilidad moral y legal de garantizar su bienestar. Esta ley prohíbe el maltrato y exige un manejo compasivo en contextos productivos, experimentales, recreativos o domésticos. A continuación, se describen las principales manifestaciones de sintiencia en especies menores y las recomendaciones éticas para su manejo:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-7.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cuyes (<em>Cavia porcellus</em>)
              p Presentan alta sensibilidad al estrés y vocalizan ante el miedo, el dolor o la curiosidad. Son susceptibles a los cambios bruscos de ambiente. Se recomienda proporcionar refugios, evitar el aislamiento, reducir los ruidos y realizar una manipulación suave. La temperatura ideal debe mantenerse entre 18 y 22 °C.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Conejos (<em>Oryctolagus cuniculus</em>)
              p Expresan emociones mediante posturas, movimientos y sonidos. Son sensibles al hacinamiento y los ruidos fuertes. Deben mantenerse en espacios amplios que les permitan saltar, cavar y refugiarse. Se sugiere manipularlos por el dorso, nunca por las orejas o las patas, y proporcionar enriquecimiento ambiental.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aves (Gallinas, pollos, aves de postura)
              p Poseen capacidad de aprendizaje y memoria, y experimentan cambios fisiológicos por miedo, como aumento del cortisol y la frecuencia cardíaca. Requieren iluminación suave, control del sonido, interacción social, transporte cuidadoso y sacrificio humanitario.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Codornices (<em>Coturnix coturnix japonica</em>)
              p Son muy sensibles al ruido, la luz intensa y el hacinamiento. El picoteo excesivo es un signo de estrés. Se recomienda iluminación tenue de 14 a 16 horas, temperatura estable entre 22 y 25 °C, evitar sobresaltos y mantener un ambiente ventilado y tranquilo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cabras (<em>Capra hircus</em>)
              p Son animales curiosos, sociales e inteligentes, que reaccionan al aislamiento con ansiedad y frustración. Se sugiere mantenerlas en pastoreo grupal, con un trato sin gritos ni golpes, permitiendo la exploración del entorno y evitando el aislamiento.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ovejas (<em>Ovis aries</em>)
              p Poseen una vida emocional compleja, con fuerte apego al grupo y a sus crías. Reconocen rostros y expresan miedo ante una manipulación brusca. Se recomienda su desplazamiento en grupo, con calma, evitando el aislamiento, promoviendo la interacción maternal y absteniéndose de gritar.
    
    .bg-color-8.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/19-1.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El reconocimiento de la sintiencia en las especies menores es esencial para asegurar un manejo ético y eficiente en la producción pecuaria. Un entorno que respete sus necesidades emocionales y comportamentales no solo reduce el sufrimiento, sino que mejora la productividad, la reproducción y la sanidad, en coherencia con los marcos normativos y éticos vigentes.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Vacunación

    p.mb-5 La vacunación es un componente fundamental de la sanidad preventiva en la producción pecuaria. Su objetivo es:
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/20.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-3.tarjeta.p-4.mb-3(data-aos="fade-left")
              .bg-color-white.tarjeta.p-4(data-aos="fade-left")
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Prevenir enfermedades infecciosas de importancia sanitaria y económica.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Reducir la morbilidad y mortalidad animal.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Proteger la salud pública frente a enfermedades zoonóticas.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Mejorar la sostenibilidad de los sistemas productivos.

            p(data-aos="fade-left") En Colombia, el Instituto Colombiano Agropecuario (ICA) es la entidad competente para regular, supervisar y certificar los programas de vacunación animal. Las enfermedades de control oficial (como la fiebre aftosa o la brucelosis) requieren notificación obligatoria y seguimiento técnico, especialmente en el contexto de comercio nacional e internacional.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Programa nacional de vacunación en especies menores (Colombia – 2025)
        
        p.mb-5 Las especies menores como cuyes, conejos, aves, codornices, cabras y ovejas están expuestas a diversas enfermedades infecciosas que afectan la productividad, el bienestar animal y la sanidad pública. El Instituto Colombiano Agropecuario (ICA) ha establecido un programa de vacunación con controles obligatorios y recomendaciones técnicas para cada especie. Este esquema de vacunación tiene como objetivo la prevención efectiva de enfermedades prioritarias, el cumplimiento de las Buenas Prácticas Ganaderas (BPG) y el fortalecimiento de la bioseguridad pecuaria.


        .row.justify-content-center.mb-5.p-4.align-items-center
          .col-lg-9.mb-3.mb-lg-0.order-lg-2
            p(data-aos="fade-left") Las recomendaciones generales para la vacunación son: 
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cadena de frío
                p.text-center Conservar los biológicos entre 2-8 °C. Evitar la congelación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Condición del animal
                p.text-center No vacunar animales enfermos, gestantes o estresados
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Higiene
                p.text-center Utilizar jeringas desechables o previamente esterilizadas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Bioseguridad
                p.text-center Realizar la vacunación en áreas limpias, ventiladas y sin mezcla de lotes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/26.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Registros obligatorios
                p.text-center Anotar especie, dosis, lote, fecha, laboratorio y nombre del responsable.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Control oficial
                p.text-center Reportar al ICA según las Resoluciones 3710 de 2014 y 1389 de 2022.        
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema1/21.png', alt='')
    
    p.mb-5 A continuación, se presenta el programa de vacunación actualizado para cada especie menor, con indicaciones sobre las enfermedades prevenibles, tipo de control, vía de administración, dosis recomendada, edad de aplicación y observaciones sanitarias:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Programa de vacunación en especies menores (Colombia – 2025)
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th.bg-color-11 Especie
                th.bg-color-11 Enfermedades / vacunas
                th.bg-color-11 Tipo de control
                th.bg-color-11 Vía
                th.bg-color-11 Dosis
                th.bg-color-11 Frecuencia / edad
                th.bg-color-11 Observaciones sanitarias
            tbody.bg-color-white
              tr
                td Cuyes (Cavia porcellus)
                td Salmonelosis / Pasteurelosis
                td Recomendada
                td SC
                td 0.5 ml
                td Desde 25 días; refuerzo anual
                td Requiere alta bioseguridad
              tr.bg-color-sintesis
                td Conejos (Oryctolagus cuniculus)
                td Mixomatosis / EVH
                td Recomendada
                td SC / ID
                td 1 ml
                td 4–6 semanas; refuerzo semestral
                td Control de vectores
              tr
                td Aves (Gallinas, pollos, postura)
                td Newcastle (obligatoria), Bronquitis, Gumboro, Viruela
                td Oficial / Recomendada
                td Ocular / Oral / SC
                td Según biológico
                td Desde el 1.er día; refuerzos cada 6–8 semanas
                td Certificación ICA y limpieza de equipos
              tr.bg-color-sintesis
                td Codornices (Coturnix coturnix japonica)
                td Newcastle / Bronquitis
                td Recomendada
                td Ocular / Agua
                td Según biológico
                td 7.º día; refuerzo trimestral
                td Galpones ventilados, evitar hacinamiento
              tr
                td Cabras (Capra hircus)
                td Fiebre aftosa / Ántrax / Enterotoxemia / Brucelosis
                td Obligatoria / Oficial
                td SC / Conjuntival
                td 1–2 ml
                td Desde 3 meses; refuerzos anuales o semestrales
                td Registro ICA obligatorio
              tr.bg-color-sintesis
                td Ovejas (Ovis aries)
                td Fiebre aftosa / Ántrax / Clostridiosis / Ectima / Brucelosis
                td Obligatoria / Recomendada
                td SC / Cutánea
                td 1–2 ml
                td Desde 2–3 meses; refuerzo anual
                td Aplicar solo en animales sanos


    
    p.mb-5 La vacunación en especies menores es una herramienta clave de bioseguridad y un requisito para el cumplimiento de las Buenas Prácticas Ganaderas (BPG). Su correcta implementación:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/28.svg', alt='Texto que describa la imagen')
          p.text-center Reduce riesgos sanitarios y pérdidas económicas.    
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/29.svg', alt='Texto que describa la imagen')
          p.text-center Garantiza la inocuidad de los productos pecuarios.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/30.svg', alt='Texto que describa la imagen')
          p.text-center Protege la salud pública y el bienestar animal.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema1/31.png', alt='Texto que describa la imagen')
    
    p.mb-5 Cumplir con los programas oficiales del ICA, registrar adecuadamente las inmunizaciones y asegurar que los animales estén sanos y bien manejados durante el proceso son pasos esenciales para una producción responsable, sostenible y ética.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Vermifugación y control parasitario
    
    p.mb-5 La vermifugación y el control parasitario son prácticas esenciales dentro de los programas de sanidad animal preventiva. Su objetivo principal es prevenir, reducir o eliminar infestaciones causadas por parásitos internos (endoparásitos) y externos (ectoparásitos), los cuales afectan seriamente:

    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/32.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-9.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/33.svg").mx-auto
            .col-lg
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 La salud y el bienestar de los animales
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 La eficiencia productiva (crecimiento, fertilidad, postura)
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 La calidad de los productos de origen animal
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 La economía del sistema productivo
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 La salud pública (zoonosis)
    
    p.mb-5 El control de parásitos internos y externos es fundamental para mantener la salud, productividad y bienestar de las especies menores. A través de prácticas preventivas, tratamientos periódicos y condiciones higiénicas adecuadas, se reducen las pérdidas económicas y se garantiza una producción sostenible y segura:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/34.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          div(titulo="Cuyes (<em>Cavia porcellus</em>)")
            p.mb-0.ms-5 <b>Parásitos comunes</b>: Trichuris, Strongyloides, Eimeria caviae, Gyropus ovalis, Trixacarus caviae.
            p.mb-0.ms-5 <b>Síntomas frecuentes</b>: pelo erizado, diarrea, picazón, pérdida de peso, infertilidad.
            p.mb-0.ms-5 <b>Tratamiento / Manejo</b>: albendazol (10 mg/kg) o ivermectina (0.2 mg/kg) cada 3–4 meses. Limpieza de pozas, cambio de cama y desinfección con cal o amonio cuaternario.

          div(titulo="Conejos (<em>Oryctolagus cuniculus</em>)")
            p.mb-0.ms-5 <b>Parásitos comunes</b>: Eimeria spp., Passalurus ambiguus, Psoroptes cuniculi, Cheyletiella parasitovorax.
            p.mb-0.ms-5 <b>Síntomas frecuentes</b>: diarrea, costras auriculares, prurito, baja ganancia diaria.
            p.mb-0.ms-5 <b>Tratamiento / Manejo</b>: toltrazuril (oral) o ivermectina SC cada 4 meses. Limpieza diaria de jaulas, control de vectores y uso de desinfectantes.

          div(titulo="Aves (Gallinas y postura)")
            p.mb-0.ms-5 <b>Parásitos comunes</b>: Ascaridia galli, Eimeria spp., Capillaria, Dermanyssus, Menacanthus, Cnemidocoptes.
            p.mb-0.ms-5 <b>Síntomas frecuentes</b>: plumaje sucio, diarrea, baja postura, picoteo, anemia.
            p.mb-0.ms-5 <b>Tratamiento / Manejo</b>: piperazina, levamisol o albendazol en agua cada 3–4 meses; amprolio o toltrazuril para coccidiosis. Baños de ceniza o tierra diatomea y rotación de corrales.
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/35.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          div(titulo="Codornices (<em>Coturnix coturnix</em>)")
            p.mb-0.ms-5 <b>Parásitos comunes</b>: Eimeria spp., Ascaridia galli, ácaros, piojos.
            p.mb-0.ms-5 <b>Síntomas frecuentes</b>: pérdida de postura, diarrea, plumaje desordenado.
            p.mb-0.ms-5 <b>Tratamiento / Manejo</b>: amprolio o toltrazuril; ivermectina oral. Limpieza diaria, control de humedad y fumigación.

          div(titulo="Cabras (<em>Capra hircus</em>)")
            p.mb-0.ms-5 <b>Parásitos comunes</b>: Haemonchus contortus, Eimeria spp., piojos, ácaros, garrapatas.
            p.mb-0.ms-5 <b>Síntomas frecuentes</b>: anemia, pelaje opaco, diarrea, “papada”.
            p.mb-0.ms-5 <b>Tratamiento / Manejo</b>: albendazol, levamisol o ivermectina cada 3–4 meses. Pastoreo rotacional, baños garrapaticidas y control ambiental.

          div(titulo="Ovejas (<em>Ovis aries</em>)")
            p.mb-0.ms-5 <b>Parásitos comunes</b>: Haemonchus, Fasciola hepatica, Ostertagia, garrapatas, piojos, sarna.
            p.mb-0.ms-5 <b>Síntomas frecuentes</b>: mucosas pálidas, decaimiento, pérdida de lana, diarrea.
            p.mb-0.ms-5 <b>Tratamiento / Manejo</b>: albendazol, ivermectina o triclabendazol cada 3 meses. Baños externos, rotación de potreros y coprologías periódicas.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/36.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.tarjeta.p-4.mb-5(data-aos="fade-left")
          p Las recomendaciones generales son: 
          .bg-color-white.tarjeta.p-4(data-aos="fade-left")
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 Rotar principios activos antiparasitarios para evitar resistencia.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 Registrar cada tratamiento: especie, producto, dosis, fecha y responsable.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 Mantener instalaciones limpias y ventiladas, evitar hacinamiento.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 Cumplir con el período de retiro antes del consumo o venta de productos animales.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 Capacitar al personal en higiene, desinfección y bioseguridad.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 Realizar análisis coprológicos periódicos para evaluar la carga parasitaria.
    
    p.mb-5 El control parasitario integral es una herramienta clave dentro de la sanidad animal y el bienestar en la producción de especies menores. Su implementación correcta permite:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/37.svg', alt='Texto que describa la imagen')
          p.text-center Prevenir enfermedades parasitarias y reducir pérdidas económicas.
    
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/38.svg', alt='Texto que describa la imagen')
          p.text-center Proteger la salud pública y evitar zoonosis.
    
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/39.svg', alt='Texto que describa la imagen')
          p.text-center Optimizar la productividad (peso, postura, fertilidad).
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/40.svg', alt='Texto que describa la imagen')
          p.text-center Garantizar la calidad e inocuidad de los productos de origen animal.

    
    p.mb-5 Una vermifugación planificada, acompañada de buenas prácticas de manejo, limpieza y vigilancia sanitaria, es una inversión indispensable para lograr sistemas pecuarios sostenibles y responsables.

    separador
    
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Zoonosis: prevención y control
    
    p.mb-5 Las zoonosis son enfermedades que se transmiten de los animales al ser humano, ya sea por contacto directo, vectores (mosquitos, garrapatas), productos contaminados (carne, leche, huevos) o el ambiente (agua, polvo, excretas, aerosoles).

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/41.png", data-aos="zoom-in")
      .col-lg-8
        p Estas enfermedades representan un riesgo tanto para los trabajadores de las explotaciones pecuarias como para los consumidores. Por esta razón, su prevención y control forman parte esencial de las Buenas Prácticas Ganaderas (BPG) y los protocolos de bioseguridad agropecuaria.
        p Los objetivos del control de zoonosis son: 
        .bg-color-1.tarjeta.p-4.mb-5(data-aos="fade-left") 
          .bg-color-white.tarjeta.p-4
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 Proteger la salud pública y el bienestar animal.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 Evitar la contaminación cruzada en productos de origen animal.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 Reducir pérdidas económicas asociadas a enfermedades.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 Fomentar la educación sanitaria entre productores y trabajadores rurales.

    p.mb-5 Las zoonosis son enfermedades que se transmiten de los animales al ser humano. Su prevención en las especies menores requiere higiene, control sanitario y educación sobre los riesgos de contacto o consumo de productos contaminados:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-7.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/42.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cuyes (<em>Cavia porcellus</em>)
              p.mb-0 <b>Zoonosis comunes</b>: salmonelosis, dermatofitosis, pasteurelosis.
              p.mb-0 <b>Vías de transmisión</b>: contacto con heces, manipulación de animales infectados.
              p.mb-0 <b>Medidas preventivas clave</b>: higiene en jaulas, lavado de manos, no consumir animales enfermos.

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/43.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Conejos (<em>Oryctolagus cuniculus</em>)
              p.mb-0 <b>Zoonosis comunes</b>: tularemia, dermatofitosis, salmonelosis, pasteurelosis.
              p.mb-0 <b>Vías de transmisión</b>: contacto directo, picaduras de insectos, manipulación de tejidos.
              p.mb-0 <b>Medidas preventivas clave</b>: uso de guantes, desinfección frecuente, aislamiento de enfermos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/44.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aves (Gallinas)
              p.mb-0 <b>Zoonosis comunes</b>: salmonelosis, campylobacteriosis, influenza aviar, Newcastle, psitacosis.
              p.mb-0 <b>Vías de transmisión</b>: huevos y carne contaminada, excretas, secreciones respiratorias.
              p.mb-0 <b>Medidas preventivas clave</b>: vacunación, higiene en recolección de huevos, no manipular aves muertas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/45.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Codornices (<em>Coturnix coturnix japonica</em>)
              p.mb-0 <b>Zoonosis comunes</b>: salmonelosis, campylobacteriosis, clamidiosis.
              p.mb-0 <b>Vías de transmisión</b>: contacto con heces, huevos crudos o carne mal cocida.
              p.mb-0 <b>Medidas preventivas clave</b>: limpieza de jaulas, desinfección, cocción adecuada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/46.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cabras (<em>Capra hircus</em>)
              p.mb-0 <b>Zoonosis comunes</b>: brucelosis caprina, fiebre Q, toxoplasmosis, dermatofitosis.
              p.mb-0 <b>Vías de transmisión</b>: leche cruda, abortos, polvo contaminado.
              p.mb-0 <b>Medidas preventivas clave</b>: pasteurizar leche, uso de EPP en partos, vacunación según normativa.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/47.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ovejas (<em>Ovis aries</em>)
              p.mb-0 <b>Zoonosis comunes</b>: brucelosis ovina, fiebre Q, ectima contagioso, listeriosis, leptospirosis.
              p.mb-0 <b>Vías de transmisión</b>: contacto con heces, manipulación de animales infectados.
              p.mb-0 <b>Medidas preventivas clave</b>: uso de guantes y mascarillas, desinfección, evitar consumo de leche cruda.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Medidas generales de prevención en todas las especies
    
    p.mb-5 La prevención sanitaria en los sistemas productivos pecuarios debe aplicarse de manera transversal a todas las especies. Estas medidas básicas forman parte del entorno de bioseguridad y reducen significativamente el riesgo de enfermedades infecciosas y zoonosis. Las principales acciones preventivas:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/48.svg', alt='Texto que describa la imagen')
          h5.text-center Protocolos de bioseguridad
          p.text-center Lavado de manos, uso de guantes, botas, mascarillas y ropa exclusiva de trabajo.    
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/49.svg', alt='Texto que describa la imagen')
          h5.text-center Cuarentena
          p.text-center Aislamiento obligatorio para animales nuevos o enfermos.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/50.svg', alt='Texto que describa la imagen')
          h5.text-center Evitar productos crudos
          p.text-center No consumir carne, leche ni huevos sin cocción o pasteurización.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/51.svg', alt='Texto que describa la imagen')
          h5.text-center Control de vectores
          p.text-center Reducción activa de moscas, roedores y garrapatas.
    
    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/52.svg', alt='Texto que describa la imagen')
          h5.text-center Manejo adecuado de residuos
          p.text-center Eliminación segura de estiércol, restos biológicos y cadáveres.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/53.svg', alt='Texto que describa la imagen')
          h5.text-center Educación sanitaria
          p.text-center Capacitación continua del personal y estudiantes en autocuidado y buenas prácticas.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/54.svg', alt='Texto que describa la imagen')
          h5.text-center Cumplimiento normativo
          p.text-center Aplicación estricta de la Resolución ICA 136 de 2020 sobre bienestar animal y bioseguridad.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-up")
        figure
          img(src='@/assets/curso/tema1/55.png', alt='Texto que describa la imagen')
 
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Plan sanitario integral: fundamentos y aplicación
    
    p.mb-5 Los planes sanitarios integrales constituyen estrategias técnico-preventivas diseñadas para mantener la sanidad en las unidades productivas. No se limitan a la vacunación o desparasitación, sino que abarcan todas las dimensiones del manejo animal. Los objetivos del plan sanitario son:

    .row.mb-5.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/56.png", data-aos="zoom-in")
      .col-lg-5
        .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
          .bg-color-white.tarjeta.p-4(data-aos="fade-left")
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Garantizar la salud y el bienestar animal.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Asegurar la inocuidad de los productos pecuarios.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 Sostener la sanidad productiva a largo plazo.

    .row.justify-content-center
      .col-lg-10
        .bg-color-8.tarjeta.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/57.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Estos planes deben ser planificados, coordinados y sostenibles en el tiempo. Su éxito depende de la participación activa del personal y de la adopción de prácticas integrales.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Componentes fundamentales del plan sanitario
    
    p.mb-5 A continuación, se presenta un video que expone los componentes fundamentales de un plan sanitario en sistemas productivos, destacando su importancia para garantizar la salud animal y la sostenibilidad operativa.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Marco normativo en Colombia
    
    p.mb-5 Todo plan sanitario debe sustentarse en el marco legal vigente, tanto nacional como internacional, para asegurar su validez y aplicación obligatoria. Las normas relevantes son:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/58.svg', alt='Texto que describa la imagen')
          p.text-center <b>Decreto 1840 de 1994</b>: régimen sanitario para especies animales.
    
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/59.svg', alt='Texto que describa la imagen')
          p.text-center <b>Ley 1659 de 2013</b>: política Nacional de Sanidad Agropecuaria.
    
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-right")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/60.svg', alt='Texto que describa la imagen')
          p.text-center <b>Resolución ICA 136 de 2020</b>: medidas de bioseguridad para producción animal.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-left")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/61.svg', alt='Texto que describa la imagen')
          p.text-center <b>Normas complementarias</b> del Ministerio de Salud y de la Organización Mundial de Sanidad Animal (OMSA).

    
    

 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
