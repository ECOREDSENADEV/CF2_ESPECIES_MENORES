<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Codornices (<em>Coturnix coturnix japonica</em>)
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") La codorniz japonesa es una especie de alta eficiencia en conversión alimenticia y producción de huevos, ideal para sistemas avícolas intensivos. Su manejo técnico requiere instalaciones que garanticen el bienestar animal, condiciones sanitarias adecuadas y un entorno favorable para maximizar su rendimiento productivo.
    
        .bg-color-2.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema6/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Debido a su tamaño reducido y a su capacidad para mantener altas densidades poblacionales, las codornices pueden criarse en espacios compactos, siempre que se aseguren condiciones ambientales óptimas en términos de ventilación, temperatura e higiene (FAO, 2023).
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto 6.1.	Requisitos generales de alojamiento
    
    p.mb-5 Para asegurar el bienestar y la productividad, es indispensable mantener condiciones ambientales controladas y estructuras adecuadas que minimicen el estrés, favorezcan el comportamiento natural y mantengan la sanidad del lote.

    TabsC.color-acento-contenido(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Condiciones ambientales recomendadas")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-lg-2
            h4 Condiciones ambientales recomendadas
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Temperatura óptima: 18–24 °C.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Humedad relativa: 55–70 %
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Ventilación: natural o forzada, con flujo cruzado de aire
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Iluminación: 14–16 h/día para óptima postura
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Densidad: 80–120 cm² por ave adulta
          .col-md-5.mb-3.mb-lg-0.order-lg-1
            figure
              img(src='@/assets/curso/tema6/3.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Ubicación del galpón")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.order-lg-2
            h4 Ubicación del galpón
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Orientación Este–Oeste para reducir la incidencia solar..
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Paredes laterales con malla plástica o metálica para permitir circulación de aire.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Techo de fibrocemento, zinc o teja plástica con aislamiento térmico.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Piso de concreto con pendiente del 2 % para drenaje..
          .col-md-5.mb-3.mb-lg-0.order-lg-1
            figure
              img(src='@/assets/curso/tema6/4.png', alt='Texto que describa la imagen')
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        separador
        
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.2 Diseño y dimensiones de jaulas
        
        p.mb-5 El uso de jaulas facilita un manejo eficiente, reduce el contacto con excretas y permite alojar grandes cantidades de codornices en poco espacio, siempre que se mantenga una densidad adecuada y condiciones higiénicas.

        .row.justify-content-center
          .col-lg-10  
            .titulo-sexto.color-acento-contenido
              h5 Tabla 16.
              span Tipos de jaulas y uso recomendado para codornices
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-11 Tipo de jaula
                    th.bg-color-11 Dimensiones (cm)
                    th.bg-color-11 Capacidad
                    th.bg-color-11 Uso recomendado
                tbody.bg-color-white
                  tr
                    td Cría (1–21 días)
                    td 100 × 60 × 25
                    td 50 codornices
                    td Con criadora de calor y piso de malla fina
                  tr.bg-color-sintesis
                    td Recría (21–42 días)
                    td 100 × 60 × 25
                    td 40 codornices
                    td Temperatura ambiental, buena ventilación
                  tr
                    td Postura
                    td 100 × 60 × 25
                    td 30 codornices
                    td Piso inclinado (8°) para recolección de huevos
                  tr.bg-color-sintesis
                    td Engorde
                    td 100 × 60 × 25
                    td 35 codornices
                    td Densidad controlada para evitar estrés
    
        .row.justify-content-center
          .col-lg-10
            .bg-color-9.tarjeta.mb-5
              .px-4.px-md-5.py-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema6/5.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 <b>Recomendación</b>. Instalar las jaulas en baterías de 3 a 5 niveles, con bandejas recolectoras entre pisos para facilitar la higiene y el manejo del estiércol.
        
        separador
        
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.3 Equipos y utensilios básicos
        
        p.mb-5 Los implementos utilizados deben garantizar el acceso constante a agua y alimento, así como facilitar la limpieza, el manejo térmico y la recolección de huevos y desechos.

        .row.justify-content-center
          .col-lg-10  
            .titulo-sexto.color-acento-contenido
              h5 Tabla 17.
              span Equipos y utensilios recomendados en sistemas de postura
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-11 Equipo / Utensilio
                    th.bg-color-11 Función
                    th.bg-color-11 Material recomendado
                    th.bg-color-11 Observaciones
                tbody.bg-color-white
                  tr
                    td Comedero lineal o tipo tolva
                    td Suministro de alimento balanceado
                    td Galvanizado o plástico
                    td Ubicado externamente para evitar desperdicio
                  tr.bg-color-sintesis
                    td Bebedero automático (chupón/canaleta)
                    td Provisión de agua limpia
                    td PVC o acero inoxidable
                    td Flujo regulado y limpieza diaria
                  tr
                    td Criadora o fuente de calor
                    td Aporte de temperatura para pollitos
                    td Gas o eléctrica
                    td Mantener 35 °C al inicio, bajando 3 °C/semana
                  tr.bg-color-sintesis
                    td Recolector de huevos
                    td Facilita la recolección sin manipular aves
                    td Alambre inclinado o canaleta
                    td Evita fracturas de huevos
                  tr
                    td Bandejas recolectoras de excretas
                    td Mantener limpieza del sistema
                    td Plástico o galvanizado
                    td Limpieza cada 2–3 días
                  tr.bg-color-sintesis
                    td Ventiladores o extractores
                    td Renovación de aire
                    td Metálicos o eléctricos
                    td Evitan acumulación de amoníaco

    
    separador
    
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Iluminación y confort térmico
    
    p.mb-5 Una iluminación adecuada y el control de la temperatura son factores clave en la regulación de la postura, el crecimiento y la salud de las codornices, especialmente en sistemas intensivos.

    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema6/6.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p Una iluminación adecuada y el control de la temperatura son factores clave en la regulación de la postura, el crecimiento y la salud de las codornices, especialmente en sistemas intensivos.
        .bg-color-8.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-start.mb-3
            .col-lg-auto
              img(src="@/assets/curso/tema6/7.svg").mx-auto
            .col-lg
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Se recomienda iluminación LED cálida (2700–3000 K).
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Ciclo lumínico: 14 h luz / 10 h oscuridad.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Intensidad lumínica: 20–30 lux en etapa de postura.
          p El confort térmico se garantiza mediante ventilación cruzada, extractores y techos con aislamiento. En regiones cálidas, se recomienda incluir paneles evaporativos o mallas sombra del 80 %.
    
    separador
    
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Bioseguridad y manejo sanitario
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        p.mb-5 La implementación de medidas estrictas de bioseguridad y protocolos sanitarios es esencial para prevenir enfermedades y asegurar la producción de alimentos inocuos. Las granjas de codornices deben incluir:

        .row.justify-content-center
          .col-lg-10
            .bg-color-13.p-4.tarjeta(data-aos="fade-left")
              .row.align-items-start.mb-3
                .col-lg-auto
                  img(src="@/assets/curso/tema6/8.png").mx-auto
                .col-lg
                  .bg-color-white.p-4.tarjeta.mb-3
                    ul.lista-ul--color.mb-0
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Control de ingreso de personas y vehículos (pediluvios, ropa exclusiva).
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Limpieza y desinfección semanal de jaulas, equipos y bandejas.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Eliminación sanitaria de cadáveres mediante compostaje o incineración.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Vacunación y vermifugación preventiva según protocolos veterinarios.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Control de roedores e insectos con métodos físicos y trampas.
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema6/9.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      p.mb-0 Estas medidas previenen la diseminación de enfermedades comunes en aves menores, como salmonelosis, colibacilosis y coriza infecciosa (ICA, 2022).

        separador
        
        #t_6_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.6 Planos y esquemas técnicos sugeridos
        
        p.mb-5 El diseño técnico de las instalaciones permite optimizar el espacio, mejorar la eficiencia del manejo y reducir los riesgos sanitarios y operativos en la producción de codornices. A continuación, se describen los principales elementos estructurales sugeridos para un sistema de jaulas en batería vertical:

        .row.mb-5.align-items-center.p-4
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema6/10.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-2.tarjeta.p-4.mb-3(data-aos="fade-left")
              .bg-color-white.tarjeta.p-4(data-aos="fade-left")
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Jaulas superpuestas en 3 niveles (batería vertical).
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Estructura metálica de soporte.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Piso inclinado (8°) hacia el recolector de huevos.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Bandeja inferior de excretas en cada nivel.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Bebederos automáticos tipo chupón.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Pasillo central de 0,8 m para manejo y alimentación.

        separador
        
        #t_6_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.7 Recomendaciones de manejo
        
        p.mb-5 Una correcta rutina de manejo es clave para mantener la productividad y la sanidad en los sistemas de codornices, evitando pérdidas económicas y garantizando el bienestar animal.
        
        .row.mb-5.align-items-center.justify-content-center
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema6/11.png", data-aos="zoom-in")
          .col-lg-5.order-lg-1
            .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
              .bg-color-white.tarjeta.p-4(data-aos="fade-left")
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Mantener densidades adecuadas para evitar estrés.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Reemplazar aves reproductoras cada 12 meses.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Realizar vacío sanitario de 10–15 días entre lotes.

    



</template>

<script>
export default {
  name: 'Tema6',
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
