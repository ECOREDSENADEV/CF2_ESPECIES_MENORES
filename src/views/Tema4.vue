<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Conejos (<em>Oryctolagus cuniculus</em>)
    
    .row.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-12.p-5.tarjeta(data-aos="fade-left")
          p.mb-0 El conejo es una especie de elevada eficiencia alimenticia y reproductiva, lo que lo convierte en una alternativa rentable dentro de la producción de especies menores. No obstante, su crianza requiere de infraestructura adecuada que garantice bienestar animal, sanidad, confort térmico y facilidad de manejo. Estas condiciones son esenciales para alcanzar parámetros óptimos de crecimiento y reproducción (FAO, 2023).
    
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Requisitos generales de alojamiento
    
    p.mb-5 Las instalaciones para conejos deben ubicarse en zonas secas, bien ventiladas y protegidas del sol directo y la lluvia, evitando el contacto con corrientes de aire y humedad. Además, el galpón debe contar con ventilación natural cruzada, iluminación suficiente y capacidad para mantener una temperatura estable, ya que el conejo es sensible al calor y al estrés ambiental. A continuación, se presentan los parámetros ambientales y estructurales recomendados para un galpón cunícola:

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema4/2.svg', alt='Texto que describa la imagen')
              h5.text-center Temperatura óptima
              p.text-center 16–22 °C    
          .col-sm-6.col-lg-2.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema4/3.svg', alt='Texto que describa la imagen')
              h5.text-center Humedad relativa
              p.text-center 60–70 %
          .col-sm-6.col-lg-2.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema4/4.svg', alt='Texto que describa la imagen')
              h5.text-center Altura mínima del galpón
              p.text-center 2,5 m
          .col-sm-6.col-lg-2.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema4/5.svg', alt='Texto que describa la imagen')
              h5.text-center Pendiente del piso
              p.text-center 2–3 % (para drenaje)
          .col-sm-6.col-lg-2.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema4/5.svg', alt='Texto que describa la imagen')
              h5.text-center Orientación del galpón
              p.text-center Eje longitudinal Este–Oeste

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Distribución funcional sugerida del galpón cunícola
        
        p.mb-5 Una distribución adecuada del galpón es clave para asegurar un manejo eficiente, reducir riesgos sanitarios y facilitar las labores diarias. A continuación se presenta la distribución funcional recomendada para un sistema de crianza de conejos:

        .row.align-items-center.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in")
          .col-lg-6
            .bg-color-11.tarjeta.p-4.mb-3(data-aos="fade-left")
              .bg-color-white.tarjeta.p-4(data-aos="fade-left")
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Área de maternidad y reproducción.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Área de engorde.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Área de cuarentena y manejo sanitario.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Zona de almacenamiento de alimento y residuos.

        separador
        
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.2 Diseño y dimensiones de jaulas

        p.mb-5 Las jaulas para conejos pueden ser individuales o colectivas, dependiendo del sistema productivo. Se recomienda el uso de malla galvanizada de ½ pulgada por su durabilidad, fácil limpieza y buena ventilación.

        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in")
          .col-lg-9
            p.mb-4 A continuación, se presentan las dimensiones estándar y su uso más adecuado, según la etapa productiva:
            .titulo-sexto.color-acento-contenido
              h5 Tabla 7.
              span Dimensiones de jaulas
            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th.bg-color-11 Tipo de jaula
                    th.bg-color-11 Dimensiones (m)
                    th.bg-color-11 Capacidad
                    th.bg-color-11 Uso recomendado
                tbody.bg-color-white
                  tr
                    td.p-2 Individual
                    td.p-2 0,8 × 0,6 × 0,4
                    td.p-2 1 conejo adulto
                    td.p-2 Machos y hembras en empadre
                  tr.bg-color-sintesis
                    td.p-2 Doble maternidad
                    td.p-2 1,0 × 0,7 × 0,4
                    td.p-2 1 hembra + gazapos
                    td.p-2 Facilita el control sanitario
                  tr
                    td.p-2 Engorde
                    td.p-2 1,2 × 0,8 × 0,45
                    td.p-2 4–6 gazapos
                    td.p-2 Mayor densidad controlada
                  tr.bg-color-sintesis
                    td.p-2 Recría
                    td.p-2 1,5 × 1,0 × 0,5
                    td.p-2 6–8 jóvenes
                    td.p-2 Etapa intermedia antes del engorde


        p El piso debe ser de malla metálica para evitar acumulación de estiércol. Debajo de la jaula se debe colocar una bandeja extraíble que recolecte los desechos, facilitando la limpieza y el control de gases como el amoníaco.

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Equipos y utensilios básicos
    
    p.mb-5 Los siguientes elementos son indispensables para el manejo eficiente de una unidad cunícola. Se presentan con sus funciones, materiales recomendados y observaciones prácticas:

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.mb-3.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema4/8.svg', alt='Texto que describa la imagen')
              h5.text-center Comedero tipo tolva
              p.text-center Suministro continuo de alimento. Material: metal galvanizado o plástico rígido. Capacidad de 1 kg, instalado externamente.   
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema4/9.svg', alt='Texto que describa la imagen')
              h5.text-center Bebedero tipo chupón o automático
              p.text-center Proporciona agua limpia. Material: acero inoxidable o PVC. Flujo regulado, requiere limpieza diaria.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema4/10.svg', alt='Texto que describa la imagen')
              h5.text-center Nido o caja de parto
              p.text-center Protege la camada. Material: madera o plástico. Dimensiones: 0,4 × 0,3 × 0,25 m, con paja limpia y buena ventilación.
        .row.mb-5.justify-content-center
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema4/11.svg', alt='Texto que describa la imagen')
              h5.text-center Bandeja recolectora
              p.text-center Retiene el estiércol. Material: lámina galvanizada o plástico. Facilita la limpieza y reduce gases.  
          .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-1.p-4.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img(src='@/assets/curso/tema4/12.svg', alt='Texto que describa la imagen')
              h5.text-center Cepillo y rastrillo
              p.text-center Permiten la limpieza de pisos y jaulas. Material: metal o fibra dura. Se utilizan para desinfección semanal.
          .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
            figure
              img(src='@/assets/curso/tema4/13.svg', alt='Texto que describa la imagen')

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Mantenimiento
        
        p.mb-5 El mantenimiento adecuado de las instalaciones incluye actividades periódicas que garantizan sanidad, limpieza y control ambiental:

        .row.justify-content-center
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema4/14.png", alt="alt")
              .crd_hover_txt--body
                p.mb-0 Desinfección semanal con soluciones iodadas o amonio cuaternario

        
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema4/15.png", alt="alt")
              .crd_hover_txt--body
                p.mb-0 Lavado diario de bebederos y retiro de residuos del piso

        
          .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left").tarjeta
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema4/16.png", alt="alt")
              .crd_hover_txt--body
                p.mb-0 Control de roedores e insectos mediante barreras físicas

        separador
        
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.4 Condiciones de bienestar animal
        
        .row.align-items-center
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/17.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") El bienestar del conejo depende de su libertad de movimiento, acceso a alimentación y agua suficientes, y un entorno libre de miedo, estrés térmico o ruido excesivo. Las instalaciones deben evitar el hacinamiento, los pisos lisos (que provocan pododermatitis) y las fluctuaciones térmicas.
        
            .row.align-items-center.justify-content-center
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/18.png", data-aos="zoom-in")
              .col-lg-7
                .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
                  .bg-color-white.tarjeta.p-4(data-aos="fade-left")
                    h5 Indicadores de bienestar:
                    ul.lista-ul--color.mb-0
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Conejos con pelaje limpio y brillante.
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Comportamiento tranquilo, sin signos de agresividad.
                      li.mb-3.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Tasa de mortalidad inferior al 5 %.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Consumo constante de alimento y agua.

    separador
    
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Bioseguridad en instalaciones cunícolas
    
    p.mb-5 La bioseguridad es clave para prevenir enfermedades como enteritis, coccidiosis y neumonías, comunes en ambientes húmedos o mal ventilados (ICA, 2022). A continuación, se resume las medidas básicas:

    .row
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/19.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1    
        .bg-color-13.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema4/20.png").mx-auto
            .col-lg
              .bg-color-white.tarjeta.p-4
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Control de ingreso de visitantes y vehículos.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Uso obligatorio de pediluvios y ropa exclusiva.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Aislamiento de animales nuevos por al menos 15 días.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Registro sanitario y limpieza periódica de instalaciones.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Eliminación controlada de residuos sólidos y líquidos.
              
    separador
    
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Recomendaciones técnicas finales
    
    p.mb-5 Para optimizar el manejo y reducir riesgos sanitarios, se sugiere cumplir con las siguientes recomendaciones técnicas:

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/21.svg", data-aos="zoom-in")
          .col-lg-7
            .bg-color-3.tarjeta.p-4.mb-3(data-aos="fade-left")
              .bg-color-white.tarjeta.p-4(data-aos="fade-left")
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Mantener una densidad máxima de 15 conejos/m² en etapa de engorde.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Evitar pisos lisos que causen lesiones en las patas.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Garantizar sombra constante y ventilación controlada.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Realizar vacío sanitario entre lotes (mínimo 7 días).
                  li.mb-0.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Llevar un registro técnico y sanitario: producción, mortalidad y tratamientos.



</template>

<script>
export default {
  name: 'Tema4',
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
