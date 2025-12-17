<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Innovación y valor agregado
    
    .row.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema10/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-12.p-5.tarjeta(data-aos="fade-left")
          p.mb-0 La innovación en los sistemas pecuarios menores consiste en la incorporación de tecnologías, prácticas organizativas y productos transformados que mejoran la eficiencia, sostenibilidad y rentabilidad de las explotaciones. A través de la innovación, es posible generar valor agregado, fortalecer el emprendimiento rural, conservar el ambiente y diversificar los ingresos de los pequeños productores.
    
    separador
    
    #t_10_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 10.1 Concepto de innovación y valor agregado
    
    p.mb-5 La innovación se entiende como la aplicación de ideas, tecnologías o estrategias nuevas que generan mejoras tangibles en la producción, transformación o comercialización. El valor agregado, por su parte, consiste en incrementar el valor de un producto mediante la modificación de su presentación, funcionalidad o del proceso de producción.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-7.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema10/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ejemplos comunes de valor agregado en especies menores
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Transformar leche caprina en queso artesanal o yogur 
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Elaborar embutidos de conejo o cuy con sello regional
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Empacar huevos de codorniz en envases biodegradables
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Comercializar productos con certificaciones (BPG, libre de antibióticos, artesanal, orgánico).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema10/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Principales beneficios del valor agregado
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Mayor rentabilidad y diversificación de ingresos.
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Diferenciación en mercados especializados.
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Generación de empleo en zonas rurales
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Conservación ambiental e impulso a prácticas sostenibles.
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        separador
        
        #t_10_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 10.2 Sostenibilidad en sistemas pecuarios
        
        p.mb-5 La sostenibilidad en la producción pecuaria menor se basa en la integración equilibrada entre productividad, bienestar animal y conservación ambiental. A continuación, se presentan las características clave de un sistema pecuario sostenible:

        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema10/4.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-9.p-4.tarjeta(data-aos="fade-left").mb-3
              .row.align-items-start.mb-3
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema10/5.png").mx-auto
                .col-lg
                  .bg-color-white.p-4.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Uso eficiente de recursos (agua, suelo, energía).
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Manejo responsable de residuos (compostaje, lombricompuesto).
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Energías renovables: biodigestores, paneles solares, microturbinas.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Buenas prácticas de bienestar animal e inocuidad del producto.

        separador
        
        #t_10_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 10.3 Tecnología aplicada a la producción de especies menores
        
        p.mb-5 La aplicación de tecnologías digitales y mecánicas permite mejorar el control, la trazabilidad y la eficiencia productiva.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema10/6.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .titulo-sexto.color-acento-contenido
              h5 Tabla 29.
              span Tecnologías aplicadas a la producción de especies menores
            .tabla-a.color-acento-contenido
              table
                thead
                  tr
                    th.bg-color-11 Tipo de tecnología
                    th.bg-color-11 Aplicación
                    th.bg-color-11 Especies beneficiadas
                tbody.bg-color-white
                  tr
                    td.p-3 Sensores ambientales
                    td.p-3 Control de temperatura, humedad y gases
                    td.p-3 Cuyes, conejos, aves
                  tr.bg-color-sintesis
                    td.p-3 Tolvas y bebederos automáticos
                    td.p-3 Distribución eficiente de alimento y agua
                    td.p-3 Todas
                  tr
                    td.p-3 Software de gestión pecuaria
                    td.p-3 Registro productivo, trazabilidad, sanidad
                    td.p-3 Caprinos y ovinos
                  tr.bg-color-sintesis
                    td.p-3 Energía solar
                    td.p-3 Iluminación, bombeo, ventilación
                    td.p-3 Zonas rurales sin red eléctrica
                  tr
                    td.p-3 Biotecnología reproductiva
                    td.p-3 Inseminación, sincronización, mejora genética
                    td.p-3 Conejos, cabras, ovejas


        separador
        
        #t_10_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 10.4 Desarrollo de productos derivados y transformación
        
        p.mb-5 La transformación de materias primas en productos diferenciados impulsa el desarrollo de cadenas cortas de valor, mejora la rentabilidad y amplía las oportunidades de emprendimiento rural. A continuación, se presentan ejemplos de transformación por especie:

        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            figure
              img(src='@/assets/curso/tema10/7.png', alt='Texto que describa la imagen')
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema10/8.svg', alt='Texto que describa la imagen')
              h5.text-center Cuyes y conejos
              p.text-center Embutidos gourmet, hamburguesas, nuggets, carne empacada al vacío.
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema10/9.svg', alt='Texto que describa la imagen')
              h5.text-center Aves y codornices
              p.text-center Huevos pasteurizados, conservas, polvo proteico
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6
                  figure
                    img(src='@/assets/curso/tema10/10.svg', alt='Texto que describa la imagen')
              h5.text-center Cabras y ovejas
              p.text-center Quesos madurados, yogures artesanales, jabones con leche caprina.

    separador
    
    #t_10_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 10.5 Comercialización y emprendimiento rural
    
    p.mb-5 El emprendimiento pecuario convierte al productor en un actor estratégico del mercado, capaz de combinar conocimientos técnicos, capacidades empresariales y herramientas de comercialización. A continuación se resumen las principales estrategias de comercialización innovadora:

    .row.align-items-center.p-4
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema10/11.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-13.tarjeta.p-4.mb-3(data-aos="fade-left")
          .bg-color-white.tarjeta.p-4
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Asociatividad</b>: cooperativas de cunicultores, caprinocultores o avicultores rurales.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Certificaciones</b>: Buenas Prácticas Pecuarias (BPP), producción artesanal u orgánica.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Cadenas cortas</b>: ventas en ferias locales, plataformas digitales, mercados campesinos.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Marca propia</b>: identidad visual, narrativas de origen, denominación geográfica.
              li.mb-0.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Herramientas digitales</b>: redes sociales, tiendas virtuales rurales.

    separador
    
    #t_10_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 10.6 Casos de innovación destacados

    p.mb-5 A continuación, se presentan experiencias exitosas de innovación en sistemas pecuarios menores en Colombia, evidenciando cómo el ingenio y la adaptación tecnológica transforman la ruralidad del país.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema10/12.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-17.tarjeta.mb-5
          .p-4
            .row.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema10/13.svg", data-aos="zoom-in")
              .col-lg-7
                h3(data-aos="fade-left").mb-4.text-white Podcast
        
                TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                  texto="Casos de innovación destacados"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
        


</template>

<script>
export default {
  name: 'Tema10',
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
