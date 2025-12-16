<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left").mb-5 El bienestar animal y la sanidad preventiva constituyen la base de toda producción pecuaria responsable. Estos dos principios garantizan que las actividades productivas se desarrollen bajo condiciones éticas, seguras y sostenibles, asegurando la salud de los animales, la inocuidad de los alimentos y la protección de la salud pública. En un contexto donde la trazabilidad y el cumplimiento normativo son exigencias crecientes, su aplicación permite fortalecer la confianza del consumidor y elevar los estándares de calidad en la producción pecuaria nacional.
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/2.png").mx-auto
              .col-lg
                .bg-color-1.tarjeta.p-4(data-aos="fade-left")
                  p.mb-0 Además, el bienestar animal no se limita al control sanitario o al manejo técnico, sino que implica reconocer a los animales como seres sintientes, capaces de experimentar placer, miedo o dolor. Por ello, su manejo debe contemplar condiciones adecuadas de alojamiento, alimentación, sanidad y comportamiento, alineadas con las cinco libertades establecidas por la Organización Mundial de Sanidad Animal (OMSA). Estas directrices orientan las buenas prácticas y garantizan un entorno que favorezca tanto el confort como la productividad.

</template>

<script>
export default {
  name: 'Introduccion',
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
