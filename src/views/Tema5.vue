<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Diseño de instalaciones avícolas
    
    .row.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-8.p-5.tarjeta(data-aos="fade-left")
          p.mb-0 Las instalaciones avícolas deben adaptarse al sistema productivo, el clima y el nivel tecnológico del productor. Un diseño adecuado garantiza bienestar animal, favorece el rendimiento productivo y facilita el manejo diario. 
    
    p.mb-5 Se invita a revisar este video, en el cual se explica de forma clara y aplicada al contexto productivo cómo se desarrolla el control sanitario en la producción avícola.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .bg-color-12.tarjeta
      .px-4.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema5/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 A continuación, se describen los principales modelos de galpones avícolas utilizados en Colombia, sus materiales, ventajas, desventajas y densidades recomendadas según las condiciones ambientales.

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Galpones tradicionales rurales (convencionales)
    
    p Este tipo de galpón es el más utilizado en producciones campesinas y familiares, especialmente en zonas rurales del país. Su diseño se basa en materiales locales y de bajo costo, lo que facilita su construcción, aunque limita el control ambiental.

    p.mb-5 A continuación se describen los componentes estructurales más utilizados en este tipo de galpón:

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.mb-3.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema5/3.svg', alt='Texto que describa la imagen')
              h5.text-center Estructura
              p.text-center Guadua, madera inmunizada o postes de madera.   
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema5/4.svg', alt='Texto que describa la imagen')
              h5.text-center Cubierta
              p.text-center Zinc, teja plástica o fibrocemento.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema5/5.svg', alt='Texto que describa la imagen')
              h5.text-center Paredes
              p.text-center Muros bajos de ladrillo o bloque (30–50 cm) con parte superior en malla gallinero o galvanizada.
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema5/6.svg', alt='Texto que describa la imagen')
              h5.text-center Piso
              p.text-center Tierra apisonada (económica pero difícil de limpiar) o cemento (más higiénico y fácil de desinfectar).  
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5
                  figure
                    img(src='@/assets/curso/tema5/7.svg', alt='Texto que describa la imagen')
              h5.text-center Cerramiento
              p.text-center Cortinas de lona o costal para regular el flujo de aire y proteger contra aves silvestres.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            figure
              img(src='@/assets/curso/tema5/8.png', alt='Texto que describa la imagen')

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Ventajas y desventajas

        p.mb-5 Antes de elegir este modelo, es importante conocer sus beneficios y limitaciones para evaluar su viabilidad según los objetivos de la producción.

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-4.mb-4.mb-sm-0.order-md-3.order-lg-1(data-aos="fade-down")
            figure
              img(src='@/assets/curso/tema5/9.png', alt='Texto que describa la imagen')
          .col-sm-6.col-lg-4.mb-4.mb-lg-0.order-md-1.order-lg-2(data-aos="fade-down")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema5/10.svg', alt='Texto que describa la imagen')
              h5.text-center Ventajas
              p.text-center.mb-0 Económicos y fáciles de construir
              p.text-center.mb-0 Adaptables a climas templados y cálidos
              p.text-center.mb-0 Materiales accesibles y de fácil reposición
          .col-sm-6.col-lg-4.mb-4.mb-lg-0.order-md-2.order-lg-3(data-aos="fade-up")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema5/11.svg', alt='Texto que describa la imagen')
              h5.text-center Desventajas
              p.text-center.mb-0 Bajo control ambiental
              p.text-center.mb-0 Mayor riesgo sanitario
              p.text-center.mb-0 Menor durabilidad frente a sistemas tecnificados
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Densidad recomendada según altitud y clima
    
    p.mb-5 La densidad de aves por metro cuadrado varía en función de la altitud y la temperatura ambiental. A continuación, se presentan los rangos ideales para evitar el estrés térmico o la subutilización del espacio.

    .row
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/12.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Densidad recomendada según altitud y clima
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th.bg-color-11 Zona climática
                th.bg-color-11 Altitud / Temperatura
                th.bg-color-11 Densidad recomendada
            tbody.bg-color-white
              tr
                td.p-2 Tierra caliente
                td.p-2 < 1.000 msnm / 27–35 °C
                td.p-2 6–7 aves/m²
              tr.bg-color-sintesis
                td.p-2 Clima templado
                td.p-2 1.000–2.000 msnm / 18–26 °C
                td.p-2 7–9 aves/m²
              tr
                td.p-2 Clima frío
                td.p-2 > 2.000 msnm / 12–18 °C
                td.p-2 9–10 aves/m²

    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Galpones cerrados con control ambiental
    
    p.mb-5 Estos galpones están diseñados para mantener condiciones ambientales controladas, lo cual mejora la productividad y reduce los riesgos sanitarios. Son adecuados para sistemas tecnificados con alta densidad de población. 

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/13.png", data-aos="zoom-in")
      .col-lg-8
        p A continuación se describen los materiales y sistemas más comúnmente utilizados en este tipo de galpón:
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/14.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Estructura
                    p.mb-0 Metálica o madera tratada.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/15.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Paredes
                    p.mb-0 Bloque, ladrillo o paneles aislantes.
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/16.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Piso
                    p.mb-0 Cemento, fácil de limpiar y desinfectar.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/17.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Ventilación
                    p.mb-0 Extractores, ventiladores o túneles de viento
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/18.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Iluminación
                    p.mb-0 Sistema LED programado.

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Ventajas y desventajas
        
        p.mb-5 Este tipo de infraestructura permite una operación más eficiente, aunque su implementación implica una mayor inversión inicial.
        
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema5/19.svg', alt='Texto que describa la imagen')
              h5.text-center Ventajas
              p.text-center.mb-0 Mayor control de temperatura y humedad
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema5/20.svg', alt='Texto que describa la imagen')
              h5.text-center Desventajas
              p.text-center.mb-0 Costo elevado de construccións
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            figure
              img(src='@/assets/curso/tema5/21.png', alt='Texto que describa la imagen')

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Densidad recomendada
        
        p.mb-5 En este modelo, la densidad de aves puede optimizarse gracias al manejo controlado del ambiente interno.

        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/22.png", data-aos="zoom-in")
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              h5 Tabla 9.
              span Densidad recomendada
            .tabla-a.color-acento-contenido
              table
                thead
                  tr
                    th.bg-color-11 Clima
                    th.bg-color-11 Densidad sugerida
                tbody.bg-color-white
                  tr
                    td.p-3 Cálido
                    td.p-3 8 aves/m²
                  tr.bg-color-sintesis
                    td.p-3 Templado / frío
                    td.p-3 9–10 aves/m²


    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Galpones automáticos
    
    p Los galpones automáticos representan un sistema de producción intensiva altamente tecnificado, ideal para grandes explotaciones comerciales. Estos sistemas incorporan automatización en la mayoría de los procesos, lo que permite mejorar la eficiencia, reducir la mano de obra y garantizar condiciones óptimas para las aves.
    p.mb-5 A continuación se describen los materiales y equipos comúnmente integrados en este tipo de galpón:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema5/23.png', alt='Texto que describa la imagen')
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema5/24.svg', alt='Texto que describa la imagen')
          h5.text-center Jaulas en batería
          p.text-center.mb-0 Estructura de acero galvanizado con pisos plásticos, organizadas en niveles verticales
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema5/25.svg', alt='Texto que describa la imagen')
          h5.text-center Sistemas automáticos
          p.text-center.mb-0 Distribución de alimento y agua, iluminación programada, recolección de excretas
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema5/26.svg', alt='Texto que describa la imagen')
          h5.text-center Bandas transportadoras
          p.text-center.mb-0 Mecanismo para el transporte de huevos y residuos de manera continua

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Densidad recomendada según el sistema
    
    p.mb-5 La automatización permite alojar un mayor número de aves por metro cuadrado sin comprometer su bienestar, siempre que se cumplan los estándares técnicos de ventilación, iluminación y espacio útil. A continuación se comparan las densidades según el tipo de sistema utilizado:

    .row.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/27.png", data-aos="zoom-in")
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Densidad recomendada según el sistema
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg-color-11 Sistema
                th.bg-color-11 Densidad recomendada
            tbody.bg-color-white
              tr
                td.p-3 Jaulas en batería
                td.p-3 450–550 cm² por ave (≈15–18 aves/m²)
              tr.bg-color-sintesis
                td.p-3 Aviarios
                td.p-3 9–12 aves/m² en piso con varios niveles


    .bg-full-width.bg-color-4
      .px-4.px-md-5
        separador
        
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.4 Concepto
        
        .row.align-items-center.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema5/28.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .bg-color-2.p-5.tarjeta(data-aos="fade-left")
              p.mb-0 Las instalaciones avícolas deben adaptarse al sistema productivo, el clima y el nivel tecnológico del productor. Un diseño adecuado garantiza bienestar animal, favorece el rendimiento productivo y facilita el manejo diario. 
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Características principales
        
        p.mb-5 A continuación se describen los elementos estructurales y operativos fundamentales del sistema:

        .bg-full-width.bg-fondo-2
          .px-4.px-md-5
            .row.justify-content-center.mb-5.p-4.align-items-center
              .col-lg-9.mb-3.mb-lg-0.order-lg-2
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema5/30.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Galpón refugio
                    p.text-center Estructura liviana (guadua o madera) con cubierta de zinc o teja plástica
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema5/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Piso
                    p.text-center Cemento o tierra con cama profunda (cascarilla de arroz, viruta)
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema5/32.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Área de pastoreo
                    p.text-center Mínimo 1–2 m² por ave al aire libre, con rotación de praderas
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema5/33.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Cercado
                    p.text-center Malla metálica, polisombra o cerca eléctrica para protección contra depredadores
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema5/34.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Complementos
                    p.text-center Nidales portátiles, comederos y bebederos móviles       
              .col-lg-3.order-lg-1
                figure
                  img(src='@/assets/curso/tema5/29.png', alt='')

            .titulo-con-imagen.mb-5(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
                h3.titulo-con-imagen__texto Ventajas y desventajas
    
    p.mb-5 Este sistema permite diferenciar la producción, pero requiere un manejo sanitario más riguroso y protección ante factores externos. A continuación se presentan sus principales ventajas y desventajas:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema5/35.svg', alt='Texto que describa la imagen')
          h5.text-center Ventajas
          p.text-center.mb-0 Bienestar animal y menor estrés
          p.text-center.mb-0 Producción diferenciada (huevo campesino, “feliz”)
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema5/36.svg', alt='Texto que describa la imagen')
          h5.text-center Desventajas
          p.text-center.mb-0 Producción diferenciada (huevo campesino, “feliz”)
          p.text-center.mb-0 Requiere manejo de rotación de pastos y control estricto de bioseguridad
      .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema5/37.png', alt='Texto que describa la imagen')


    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Densidad recomendada
    
    p.mb-5 El equilibrio entre el espacio interno y el área de pastoreo externo es fundamental para mantener aves sanas y productivas. A continuación se indican las densidades sugeridas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/38.png", data-aos="zoom-in")
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Densidad recomendada
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg-color-11 Área
                th.bg-color-11 Densidad sugerida
            tbody.bg-color-white
              tr
                td.p-2 Dentro del galpón
                td.p-2 4–5 aves/m²
              tr.bg-color-sintesis
                td.p-2 Área de pastoreo
                td.p-2 1–2 m² por ave



    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Resumen comparativo
    
    p.mb-5 A continuación, se presenta una tabla que compara los principales tipos de galpones según materiales, tipo de ventilación, piso y densidad, para facilitar la selección del sistema más adecuado según el entorno y el enfoque productivo.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 12.
      span Comparación de tipos de galpones según características constructivas y operativas
    .tabla-a.color-acento-contenido
      table
        thead
          tr
            th.bg-color-11 Tipo de galpón
            th.bg-color-11 Materiales principales
            th.bg-color-11 Piso
            th.bg-color-11 Ventilación
            th.bg-color-11 Densidad recomendada
        tbody.bg-color-white
          tr
            td Tradicional en guadua y zinc
            td Guadua, zinc, malla gallinero
            td Tierra o cemento
            td Natural con cortinas
            td Caliente: 6–7 aves/m² · Templado: 7–9 aves/m² · Frío: 9–10 aves/m²
          tr.bg-color-sintesis
            td Cerrado con control ambiental
            td Estructura metálica, bloque, teja aislante
            td Cemento
            td Mecánica (extractores, túnel)
            td Caliente: 8 aves/m² · Frío/templado: 9–10 aves/m²
          tr
            td Automático / aviario
            td Metálica, jaulas galvanizadas, piso plástico
            td Cemento con bandas
            td Mecánica y computarizada
            td Jaulas: 450–550 cm²/ave · Aviarios: 9–12 aves/m²
          tr.bg-color-sintesis
            td Free range (pastoreo)
            td Guadua, zinc, malla gallinero, cercas
            td Tierra con cama profunda
            td Natural
            td Galpón: 4–5 aves/m² · Pastoreo: 1–2 m² por ave



    separador
    
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Diseño y manejo ambiental en galpones de postura
    
    .row.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/39.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-12.p-5.tarjeta(data-aos="fade-left")
          p.mb-0 La eficiencia productiva en sistemas de postura depende, en gran medida, del ambiente que se proporciona a las aves dentro del galpón. Factores como la ventilación, la iluminación y el espacio no solo influyen en el bienestar animal, sino que tienen efectos directos sobre la producción de huevos, la salud de las aves y la rentabilidad del sistema. A continuación, se presentan los aspectos técnicos esenciales para un manejo óptimo.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ventilación
    
    p.mb-5 La ventilación no es solo un factor de confort animal, sino un elemento crítico de bioseguridad y productividad. Su función principal es mantener la calidad del aire, eliminando el exceso de humedad, calor y gases tóxicos como el amoníaco y el dióxido de carbono, generados por la descomposición de excretas y la actividad metabólica de las aves. Una ventilación inadecuada puede provocar una serie de efectos negativos en la salud y productividad aviar:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/40.png", data-aos="zoom-in")
      .col-lg-8
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta.h-100
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/41.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Estrés calórico 
                    p.mb-0 Menor ingesta de alimento y caída en la postura
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta.h-100
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/42.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Problemas respiratorios 
                    p.mb-0 Bronquitis infecciosa, micoplasmosis
        .row
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta.h-100
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/43.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Humedad en la cama 
                    p.mb-0 Proliferación de bacterias, hongos y parásitos
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta.h-100
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/44.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Cáscaras más delgadas 
                    p.mb-0 Deterioro de la calidad del huevo


    h3.bg-color-13.d-inline.p-2.tarjeta Tipos de ventilación según el modelo de galpón

    p.mb-5.mt-5 La elección del sistema de ventilación varía según el tipo de galpón. A continuación, se presentan las características correspondientes a cada modelo:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema5/45.svg', alt='Texto que describa la imagen')
          h5.text-center Galpones abiertos
          p.text-center.mb-0 Ventilación natural. Requiere orientación Este–Oeste, mallas laterales y cortinas regulables
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema5/45.svg', alt='Texto que describa la imagen')
          h5.text-center Galpones cerrados
          p.text-center.mb-0 Ventilación mecánica mediante extractores o ventiladores. Permite control térmico en climas cálidos
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-10.p-4.h-100
          .row.justify-content-center.mb-3
            .col-6
              figure
                img(src='@/assets/curso/tema5/45.svg', alt='Texto que describa la imagen')
          h5.text-center Galpones automáticos
          p.text-center.mb-0 Sistemas computarizados que regulan velocidad del aire, presión negativa e intercambio de gases
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema5/46.png', alt='Texto que describa la imagen')

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Iluminación
    
    .row.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/47.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-12.p-5.tarjeta(data-aos="fade-left")
          p.mb-0 La iluminación adecuada desempeña un papel fundamental en la estimulación de la maduración sexual y en la regulación del ciclo reproductivo de la gallina ponedora. Esto ocurre mediante la activación de la glándula pineal y la hipófisis, encargadas de modular la liberación de hormonas reproductivas.

    h3.bg-color-13.d-inline.p-2.tarjeta Beneficios de una iluminación controlada

    p.mb-5.mt-5 El manejo técnico de la luz mejora el rendimiento y el bienestar de las aves. Entre sus principales beneficios se encuentran:

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/48.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0.order-2
              img(src="@/assets/curso/tema5/49.svg").mx-auto
            .col-lg.order-1.mb-3.mb-lg-0
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Sincronización de la postura
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Mayor uniformidad del lote
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Incremento en la producción de huevos
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Disminución del estrés y del picaje

    h3.bg-color-13.d-inline.p-2.tarjeta Sistemas de iluminación según el tipo de galpón

    p.mb-5.mt-5 El manejo de la iluminación varía según el diseño del galpón y el nivel de tecnificación. Las estrategias más comunes son: 
    
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .row.justify-content-center.mb-5.p-4.align-items-center
          .col-lg-9.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/51.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Galpones tradicionales
                p.text-center Dependencia de luz solar. Se recomienda reforzar con bombillos incandescentes o fluorescentes
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/52.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Galpones cerrados
                p.text-center Lámparas LED de bajo consumo. Fotoperiodo controlado: 14–16 horas de luz en etapa de postura
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/53.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Galpones automáticos
                p.text-center Sistemas programables. Control de duración, intensidad y gradualidad (simulación de amanecer/atardecer) 
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema5/50.png', alt='')
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Espacio
    
    p.mb-5 reducción El espacio disponible determina la densidad de aves por metro cuadrado, lo cual impacta directamente en el bienestar animal, la productividad y el riesgo sanitario. Un manejo inadecuado del espacio puede provocar hacinamiento, comportamientos agresivos y reducción significativa en la postura. Las consecuencias del hacinamiento son: 

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/54.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema5/55.svg").mx-auto
            .col-lg
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Aumento de la mortalidad.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Reducción en la conversión alimenticia.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Disminución de la producción y calidad del huevo.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Mayor propagación de enfermedades infecciosas.

    h3.bg-color-13.d-inline.p-2.tarjeta Recomendaciones de densidad por sistema productivo

    p.mb-5.mt-5 Cada modelo de galpón requiere una densidad específica para garantizar el rendimiento y la salud de las aves. La siguiente tabla resume las recomendaciones técnicas según el sistema:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/56.png", data-aos="zoom-in")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13.
          span Densidad recomendada según tipo de galpón
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th.bg-color-11 Modelo de galpón
                th.bg-color-11 Densidad recomendada
            tbody.bg-color-white
              tr
                td.p-3 Galpones abiertos
                td.p-3 7–9 aves/m² en clima templado; reducir a 6 aves/m² en clima cálido
              tr.bg-color-sintesis
                td.p-3 Galpones cerrados
                td.p-3 9–11 aves/m², gracias al control ambiental
              tr
                td.p-3 Galpones automáticos
                td.p-3 12–15 aves/m² en jaulas o aviarios, cumpliendo normas de bienestar animal
              tr.bg-color-sintesis
                td.p-3 Sistemas alternativos (free range)
                td.p-3 4–6 aves/m² dentro del galpón y 1–4 m² por ave en el área de pastoreo externo


    p.mb-5 Se invita a revisar este video que explica cómo el alojamiento adecuado garantiza protección, confort y condiciones técnicas que fortalecen la productividad y el manejo integral en la producción de aves.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Importancia de la avicultura de postura
    
    p.mb-5 La avicultura de postura es una de las actividades pecuarias con mayor impacto económico, social y nutricional en Colombia y en el mundo. Su crecimiento sostenido responde tanto a la demanda de proteína de bajo costo como a la innovación en los sistemas productivos.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/57.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          div(titulo="Económica")
            p.ms-5 Alta rotación y bajo costo de producción. → En Colombia se producen más de 16.000 millones de huevos al año (FENAVI, 2024).
          div(titulo="Social")
            p.ms-5 Generación de más de 150.000 empleos en zonas rurales
          div(titulo="Nutricional")
            p.ms-5 El huevo aporta proteínas de alto valor biológico, vitaminas A, D, E, complejo B, hierro, zinc y antioxidantes
          div(titulo="Sanitaria")
            p.ms-5 Promueve programas de bioseguridad, trazabilidad y bienestar animal
          div(titulo="Ambiental")
            p.ms-5 Nuevos modelos fomentan eficiencia energética, manejo de residuos y reducción de emisiones contaminantes

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        h3.bg-color-13.d-inline.p-2.tarjeta Consideraciones finales

        p.mb-5.mt-5 La ventilación, iluminación y espacio son los tres pilares fundamentales en el diseño y manejo de galpones de postura. Su correcta gestión:

        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema5/58.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-3.p-4.tarjeta(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema5/59.svg").mx-auto
                .col-lg
                  .bg-color-white.p-4.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Mejora el rendimiento productivo
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Mejora el rendimiento productivo
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Favorece la sostenibilidad del sistema
        
        p Cada tipo de galpón (tradicional, cerrado, automático o de pastoreo) requiere ajustes técnicos específicos según el clima, la altitud y el modelo productivo. Adaptar estas condiciones al contexto local es clave para alcanzar resultados óptimos en la avicultura moderna.

        separador
        
        #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.6 Equipos en avicultura de postura
        
        p.mb-5 En los sistemas de postura, el uso adecuado de equipos es esencial para garantizar el bienestar animal, optimizar los recursos productivos y asegurar una producción eficiente y sostenible. Uno de los equipos más relevantes son los bebederos, cuya función va más allá de suministrar agua: son fundamentales para mantener la salud, la productividad y la bioseguridad dentro del galpón. La selección del tipo de bebedero debe adaptarse al modelo de producción, el clima, el tamaño del lote y el nivel de tecnificación, considerando siempre:

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            figure
              img(src='@/assets/curso/tema5/60.png', alt='Texto que describa la imagen')
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema5/61.svg', alt='Texto que describa la imagen')
              h5.text-center La calidad del agua
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema5/62.svg', alt='Texto que describa la imagen')
              h5.text-center La facilidad de limpieza
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema5/63.svg', alt='Texto que describa la imagen')
              h5.text-center La accesibilidad para las aves

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Bebederos
    
    p.mb-5 El suministro de agua limpia y continua es un pilar fundamental en la avicultura de postura. El agua representa entre 60 % y 70 % del peso corporal del ave y cumple funciones vitales en:

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/64.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-start.mb-3
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema5/65.svg").mx-auto
            .col-lg
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 La digestión.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 La termorregulación.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 El metabolismo.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 La producción de huevos.
          p La temperatura del agua varía según la etapa productiva del ave. En el caso de las pollitas en crecimiento, se recomienda mantenerla entre 20 y 25 °C, ya que favorece su desarrollo y bienestar. Para las aves adultas en postura, la temperatura ideal se encuentra entre 15 y 20 °C, lo que contribuye a una adecuada hidratación y a la estabilidad en la producción de huevos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Consecuencias de un mal suministro de agua
    
    p.mb-5 Un acceso deficiente al agua o el uso de agua de mala calidad puede provocar efectos negativos inmediatos:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/66.png", data-aos="zoom-in")
      .col-lg-8
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta.h-100
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/67.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Disminución de la postura  
                    p.mb-0 Hasta un 20–30 % en solo 24 horas
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta.h-100
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/68.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Mayor prevalencia de enfermedades
                    p.mb-0 Digestivas y respiratorias 
        .row
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta.h-100
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/69.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Estrés hídrico
                    p.mb-0 Menor consumo de alimento y pérdida de peso
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.tarjeta.h-100
              .px-4.py-3
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema5/70.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5 Acumulación de amoníaco 
                    p.mb-0 Acumulación de amoníaco

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Calidad del agua: un pilar invisible
    
    p.mb-5 El análisis de agua debe formar parte de la rutina sanitaria de toda unidad productiva. La presencia de contaminantes afecta la absorción de nutrientes y puede desencadenar brotes sanitarios.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-3.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema5/71.png").mx-auto
            .col-lg
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Realice análisis físico-químicos y microbiológicos al menos una vez al año.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Aplique cloración del agua de forma constante.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Refuerce los controles en épocas de lluvia excesiva.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Siga estrictamente las instrucciones del laboratorio para la toma de muestras.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Tipos principales de bebederos
    
    p.mb-5 La elección del sistema de bebederos dependerá del tipo de galpón, el nivel tecnológico y la escala productiva. A continuación, se describen los principales modelos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-7.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/72.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Campana (manual o automática)
              p Usado en galpones tradicionales. Funciona por gravedad y se suspende a la altura del dorso del ave. 
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 <b>Ventajas</b>: económico y de fácil instalación. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 <b>Desventajas</b>: el agua se contamina con facilidad y requiere limpieza frecuente.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/73.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Niple (pico o tetina)
              p Común en galpones cerrados o automáticos. El ave presiona una válvula para liberar agua gota a gota. 
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 <b>Ventajas</b>: menor desperdicio y agua más limpia.  
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 <b>Desventajas</b>: requiere presión constante (10–20 psi) y buen filtrado.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/74.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Copa o gotero
              p Variante del sistema niple, donde el agua cae en una pequeña copa visible. Muy usado en sistemas tecnificados. 
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 <b>Ventajas</b>: permite control visual del consumo y acceso sencillo.
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 <b>Desventajas</b>: puede acumular suciedad si no se limpia regularmente.
    
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/75.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Rústicos (balde o tina)
              p Empleados en sistemas de pastoreo o en pequeñas fincas. 
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 <b>Ventajas</b>: bajo costo y fácil implementación. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 <b>Desventajas</b>: alta contaminación y necesidad de limpieza frecuente.
    
    p.mb-5 Se invita a revisar este video que explica los protocolos esenciales de bioseguridad y el control de actividades anexas para garantizar procesos avícolas coherentes con criterios técnicos y normativos.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Recomendaciones técnicas de dotación

    p.mb-5 Para garantizar un suministro eficiente y sin competencia, se deben respetar las siguientes proporciones entre bebedero y número de aves:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/76.png", data-aos="zoom-in")
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 14.
          span Tipos de bebederos y dotación por número de aves
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg-color-11 Tipo de bebedero
                th.bg-color-11 Dotación recomendada
            tbody.bg-color-white
              tr
                td.p-3 Campana
                td.p-3 1 por cada 100 aves
              tr.bg-color-sintesis
                td.p-3 Tetina (niple)
                td.p-3 1 por cada 12 aves
              tr
                td.p-3 Canoa lineal
                td.p-3 1,27 cm de línea de bebedero por ave
              tr.bg-color-sintesis
                td.p-3 Volteo o oscilante
                td.p-3 1 por cada 25 aves
              tr
                td.p-3 Artesanales / rústicos
                td.p-3 Variable, según diseño
    
    p.mb-5 El agua es el nutriente más importante, y su disponibilidad continua, en condiciones sanitarias adecuadas, debe considerarse prioritaria en cualquier sistema avícola. Un sistema de bebederos bien dimensionado y mantenido:

    .row.justify-content-center
      .col-lg-10
        .bg-color-3.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema5/77.svg").mx-auto
            .col-lg
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Mejora la eficiencia productiva
                  li.mb-.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Disminuye la morbilidad
                  li.mb-.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Reduce el desperdicio de agua y alimento
                  li.mb-.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Optimiza el ambiente dentro del galpón
                  li.mb-.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Recordatorio técnico: “El alimento entra por la boca, pero la producción comienza por el agua.”

    separador
    
    #t_5_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.7 Comederos

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/78.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-14.tarjeta.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema5/79.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El alimento balanceado representa aproximadamente el 70 % de los costos de producción en avicultura de postura, lo que convierte al diseño y manejo de los comederos en un factor crítico.
    
    p.mb-5 Una gallina ponedora consume entre 100 y 120 g de alimento por día, dependiendo de su genética, edad, fase de postura y clima. Un mal diseño o manejo de los comederos puede generar pérdidas de alimento superiores al 10 %, lo que afecta directamente la rentabilidad del sistema. Los tipos principales de comederos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-7.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/80.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Campana (manual o automática)
              p Usado en galpones tradicionales. Funciona por gravedad y se suspende a la altura del dorso del ave. Ventajas: económico y de fácil instalación. Desventajas: el agua se contamina con facilidad y requiere limpieza frecuente.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/81.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Niple (pico o tetina)
              p Común en galpones cerrados o automáticos. El ave presiona una válvula para liberar agua gota a gota. Ventajas: menor desperdicio y agua más limpia. Desventajas: requiere presión constante (10–20 psi) y buen filtrado.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/82.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Copa o gotero
              p Variante del sistema niple, donde el agua cae en una pequeña copa visible. Muy usado en sistemas tecnificados. Ventajas: permite control visual del consumo y acceso sencillo. Desventajas: puede acumular suciedad si no se limpia regularmente.
    
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/83.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Rústicos (balde o tina)
              p Empleados en sistemas de pastoreo o en pequeñas fincas. Ventajas: bajo costo y fácil implementación. Desventajas: alta contaminación y necesidad de limpieza frecuente.
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-14.tarjeta.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema5/84.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Las recomendaciones técnicas indican que en los sistemas abiertos se debe disponer de entre 8 y 10 centímetros lineales de bebedero por ave, garantizando un acceso adecuado al agua. En los galpones cerrados, se aconseja una densidad aproximada de 40 a 50 aves por cada metro lineal de canal, lo que permite mantener una correcta distribución y evitar la competencia entre los animales al momento de hidratarse.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Relación entre equipos y tipo de galpón

    p.mb-5 La eficiencia del sistema de alimentación e hidratación está estrechamente relacionada con el tipo de galpón. A continuación, se presenta una tabla comparativa entre los equipos recomendados según el modelo de infraestructura:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 15.
      span Tipos de galpón y equipos de alimentación e hidratación recomendados
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th.bg-color-11 Tipo de galpón
            th.bg-color-11 Bebederos recomendados
            th.bg-color-11 Comederos recomendados
        tbody.bg-color-white
          tr
            td Tradicional (abierto, con cortinas, piso de tierra o cemento)
            td Campana, rústicos (baldes, tinas)
            td Tolvas manuales, canales de madera o metal
          tr.bg-color-sintesis
            td Cerrado (control ambiental)
            td Nipples, goteros o copa
            td Canales con distribución manual o semiautomática
          tr
            td Automático / aviarios (jaulas con control computarizado)
            td Nipples con reguladores de presión
            td Automáticos (cadena o sinfín)
          tr.bg-color-sintesis
            td Pastoreo o alternativos
            td Campana o rústicos
            td Rústicos de PVC, guadua o tolvas simples


    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Importancia del correcto manejo de equipos
    
    p.mb-5 El desempeño productivo de las ponedoras no depende únicamente del tipo de equipo, sino también de su manejo. Los siguientes aspectos son fundamentales para mantener condiciones higiénicas, asegurar el bienestar animal y evitar pérdidas económicas:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        .row.justify-content-center.mb-5.p-4.align-items-center
          .col-lg-9.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/86.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Agua
                p.text-center Debe mantenerse siempre fresca, limpia y en cantidad suficiente. Los cortes de suministro reducen la postura en pocas horas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/87.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Alimento
                p.text-center Evitar su acumulación en los comederos para prevenir fermentación y desarrollo de hongos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/88.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Limpieza
                p.text-center Los equipos deben lavarse con regularidad para eliminar biofilm, bacterias y restos de alimento.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/89.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Altura de instalación
                p.text-center Debe ajustarse al dorso del ave según su edad, con el fin de evitar contaminación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema5/90.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Uniformidad de acceso
                p.text-center En los equipos automáticos es esencial calibrar los sistemas para garantizar una distribución equitativa del alimento y el agua.       
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema5/85.png', alt='')

        p.mb-5 La selección y manejo de bebederos y comederos deben responder al tipo de galpón y al nivel de tecnificación. Los sistemas manuales y rústicos predominan en producciones rurales o abiertas, mientras que los automáticos son más eficientes en galpones cerrados o tecnificados. En sistemas de pastoreo, aunque los equipos son más simples, requieren mayor control sanitario para garantizar eficiencia productiva, bienestar animal e inocuidad del huevo. Se invita a revisar este video que presenta acciones esenciales para avanzar hacia una producción avícola ambientalmente responsable y alineada con la sostenibilidad: 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
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
