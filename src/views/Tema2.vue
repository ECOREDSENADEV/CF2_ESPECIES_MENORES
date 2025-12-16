<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Bioseguridad
    
    p.mb-5 La bioseguridad pecuaria es el conjunto de medidas preventivas y protocolos técnicos diseñados para reducir el riesgo de introducción, propagación y persistencia de agentes patógenos en las explotaciones animales. Su implementación es esencial para garantizar:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/2.svg', alt='Texto que describa la imagen')
          p.text-center El bienestar animal    
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/3.svg', alt='Texto que describa la imagen')
          p.text-center La inocuidad alimentaria
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-1.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/4.svg', alt='Texto que describa la imagen')
          p.text-center La rentabilidad del sistema productivo

      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema2/1.png', alt='Texto que describa la imagen')
    
    p.mb-5 Los objetivos principales de la bioseguridad pecuaria se orientan a mejorar la sanidad animal y la eficiencia del sistema productivo. A continuación, se detallan:

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-9.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.png").mx-auto
            .col-lg
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Prevenir enfermedades infecciosas y zoonóticas.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Reducir pérdidas económicas por morbilidad, mortalidad y tratamientos.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Minimizar el uso innecesario de medicamentos veterinarios, contribuyendo a evitar la resistencia antimicrobiana.
    
    p.mb-5 La bioseguridad en la producción animal está respaldada por diversas disposiciones legales que establecen obligaciones técnicas y sanitarias para los productores:

    .row
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        TabsA.color-acento-botones.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones--borde.p-4(titulo="Decreto 1840 de 1994")
            h4 Decreto 1840 de 1994
            p Establece las normas generales de sanidad animal en Colombia.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ley 1659 de 2013")
            h4 Ley 1659 de 2013
            p Fortalece al Instituto Colombiano Agropecuario (ICA) como autoridad sanitaria nacional.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ley 1774 de 2016")
            h4 Ley 1774 de 2016
            p Reconoce a los animales como seres sintientes y exige trato digno y respetuoso.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Resolución ICA 136 de 2020")
            h4 Resolución ICA 136 de 2020
            p Define las medidas generales de bioseguridad para especies pecuarias. Es de obligatorio cumplimiento.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Riesgos biológicos en la producción pecuaria
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/7.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La identificación y control de los riesgos biológicos es una prioridad dentro de cualquier sistema pecuario responsable. Estos riesgos se originan por la presencia de microorganismos patógenos capaces de generar enfermedades tanto en animales como en humanos (zoonosis).
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Principales agentes biológicos
    
    p.mb-5 Los agentes de riesgo se clasifican en cinco grandes grupos:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5
        .row.mb-5.justify-content-center
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
          .col-lg-6.order-lg-1
            .row.mb-3
              .col-lg-6.mb-3.mb-lg-0
                .bg-color-6.tarjeta
                  .px-4.px-md-5.py-4
                    .row.align-items-center
                      .col-lg-auto
                        img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
                      .col-lg
                        p.mb-0 Bacterias
              .col-lg-6.mb-3.mb-lg-0
                .bg-color-6.tarjeta
                  .px-4.px-md-5.py-4
                    .row.align-items-center
                      .col-lg-auto
                        img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
                      .col-lg
                        p.mb-0 Virus
            .row.mb-3
              .col-lg-6.mb-3.mb-lg-0
                .bg-color-6.tarjeta
                  .px-4.px-md-5.py-4
                    .row.align-items-center
                      .col-lg-auto
                        img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
                      .col-lg
                        p.mb-0 Parásitos
              .col-lg-6.mb-3.mb-lg-0
                .bg-color-6.tarjeta
                  .px-4.px-md-5.py-4
                    .row.align-items-center
                      .col-lg-auto
                        img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
                      .col-lg
                        p.mb-0 Hongos
            .row.mb-3
              .col-lg-6.mb-3.mb-lg-0
                .bg-color-6.tarjeta
                  .px-4.px-md-5.py-4
                    .row.align-items-center
                      .col-lg-auto
                        img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
                      .col-lg
                        p.mb-0 Priones
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Factores de riesgo frecuentes
        
        p.mb-5 La aparición y propagación de enfermedades en granjas pecuarias suele estar asociada a malas prácticas o fallas en la bioseguridad. Entre los principales factores de riesgo se encuentran:

    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-3.tarjeta.p-4.mb-3(data-aos="fade-left")
              .bg-color-white.tarjeta.p-4(data-aos="fade-left")
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Ingreso de animales infectados sin período de cuarentena.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Contaminación cruzada por herramientas, vehículos, ropa o calzado del personal.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Presencia de vectores: roedores, moscas, garrapatas.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Suministro de agua o alimento contaminado.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Ambientes con alta humedad, poca ventilación o acumulación de materia orgánica.

        separador
        
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.2 Ejemplos de agentes y enfermedades comunes

        p.mb-5 Una estrategia sanitaria integral no puede limitarse al diagnóstico y tratamiento de enfermedades. Para lograr una producción pecuaria sostenible y segura, es indispensable establecer medidas preventivas que impidan el ingreso y propagación de agentes patógenos en las explotaciones. En este contexto, la bioseguridad adquiere un papel central.

        
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Principales agentes etiológicos en la sanidad pecuaria
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.bg-color-11 Tipo de agente
                th.bg-color-11 Agente específico
                th.bg-color-11 Enfermedad
                th.bg-color-11 Especies afectadas
            tbody.bg-color-white
              tr
                td Bacterias
                td Salmonella spp.
                td Salmonelosis
                td Aves, cuyes, conejos
              tr.bg-color-sintesis
                td Virus
                td Virus de Newcastle
                td Enfermedad de Newcastle
                td Aves, codornices
              tr
                td Parásitos
                td Coccidia spp., Giardia spp.
                td Coccidiosis, giardiasis
                td Cuyes, cabras
              tr.bg-color-sintesis
                td Hongos
                td Aspergillus spp.
                td Aspergilosis
                td Aves, conejos
              tr
                td Priones
                td Agente de la EEB
                td Encefalopatía Espongiforme Bovina (EEB)
                td Rumiantes

        .bg-color-1.tarjeta.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El reconocimiento de la sintiencia en las especies menores es esencial para asegurar un manejo ético y eficiente en la producción pecuaria. Un entorno que respete sus necesidades emocionales y comportamentales no solo reduce el sufrimiento, sino que mejora la productividad, la reproducción y la sanidad, en coherencia con los marcos normativos y éticos vigentes.



        
</template>

<script>
export default {
  name: 'Tema2',
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
