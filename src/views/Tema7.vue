<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Caprinos (<em>Capra hircus</em>)
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema7/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los caprinos son animales rústicos, adaptables y versátiles, cuya producción (leche, carne y piel) es una alternativa sostenible en regiones tropicales y semiáridas de Colombia. Sin embargo, su éxito productivo depende en gran medida de un diseño adecuado de las instalaciones, que asegure confort, bioseguridad, ventilación y eficiencia operativa.
    
    separador
    
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Diseño funcional de las instalaciones caprinas
    
    p.mb-5 El diseño de un galpón caprino debe adaptarse a las condiciones climáticas del entorno y a la dinámica productiva del sistema (estabulado o semi intensivo), garantizando espacios protegidos, secos y funcionales.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-7.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema7/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Objetivos del diseño
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Proteger a los animales del clima (frío, calor, viento y lluvia). 
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Facilitar el flujo de trabajo (alimentación, ordeño, limpieza).
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Permitir la observación y el manejo sanitario.
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Minimizar la acumulación de humedad y estiércol.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema7/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Dimensiones orientativas
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Altura del galpón: 2,5–3,0 m. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Pendiente del techo: 15–25 % para escurrimiento de aguas.
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Pendiente del piso: 3–5 % hacia el drenaje. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Área útil: 1,0–1,5 m² por cabra adulta; 0,8 m² por cabrito.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema7/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Distribución general recomendada
              ul.lista-ul--color.mb-0
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Área de alojamiento o descanso.
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Área de alimentación.
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Corral de manejo o brete.
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Zona de ordeño.
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Depósito de alimento y agua.
                li.mb-2.d-flex
                  i.fas.fa-circle-check
                  p.mb-0 Área de cuarentena.
    
    separador
    
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Distribución interna y manejo del espacio
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        p.mb-5 Una buena organización interna permite mejorar la productividad, facilitar el manejo diario y prevenir riesgos sanitarios. La siguiente tabla presenta las principales zonas funcionales y sus recomendaciones técnicas.

        .row.justify-content-center
          .col-lg-10  
            .titulo-sexto.color-acento-contenido
              h5 Tabla 18.
              span Zonas funcionales y recomendaciones técnicas en sistemas pecuarios
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-11 Zona
                    th.bg-color-11 Función
                    th.bg-color-11 Recomendaciones técnicas
                tbody.bg-color-white
                  tr
                    td Dormidero o galpón
                    td Descanso nocturno
                    td Piso elevado (20–30 cm), cama seca de aserrín o cascarilla de arroz.
                  tr.bg-color-sintesis
                    td Área de alimentación
                    td Suministro de forraje y concentrado
                    td Comederos lineales (40 cm por animal), acceso por ambos lados.
                  tr
                    td Corral de manejo
                    td Pesaje, vacunación, revisión sanitaria
                    td Estructura de madera o metálica con pasillo de 60 cm.
                  tr.bg-color-sintesis
                    td Zona de ordeño
                    td Extracción higiénica de leche
                    td Piso antideslizante, drenaje, buena iluminación y bebederos.
                  tr
                    td Área de aislamiento
                    td Animales enfermos o recién llegados
                    td Separada mínimo 10 m del área principal.

        .row.justify-content-center
          .col-lg-10
            .bg-color-9.tarjeta.mb-5
              .px-4.px-md-5.py-4
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema7/5.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 <b>Pasillos de circulación</b>: mínimo 0,9–1,2 m de ancho para permitir el paso de animales y operarios sin riesgo de golpes o aglomeraciones.

        separador
        
        #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 7.3 Ventilación, iluminación y confort térmico
        
        p.mb-5 Aunque los caprinos toleran condiciones adversas, son sensibles a la humedad, las corrientes de aire frío y el encierro térmico. El ambiente debe mantenerse fresco, seco y bien ventilado para garantizar su bienestar. Las recomendaciones clave son:

        .row.mb-5.align-items-center
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema7/6.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-13.p-4.tarjeta(data-aos="fade-left").mb-3
              .row.align-items-start.mb-3
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema7/7.png").mx-auto
                .col-lg
                  .bg-color-white.p-4.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Ventilación natural cruzada con aberturas laterales cubiertas con malla.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Temperatura óptima: 18–28 °C.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Humedad relativa: 50–65 %.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Iluminación natural mínima de 10 h/día o luz artificial (20–30 lux).
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 En zonas cálidas: mallas sombra del 70 % o techos de palma.
            .bg-color-9.tarjeta
              .px-4.px-md-5.py-4
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema7/8.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 <b>Confort térmico</b>: se recomienda el uso de tarimas de madera o pisos elevados en zonas húmedas, ya que las cabras prefieren superficies secas y elevadas.

        separador
        
        #t_7_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 7.4 Materiales de construcción recomendados

        p.mb-5 La elección de materiales debe equilibrar durabilidad, aislamiento térmico y facilidad de limpieza. A continuación, se resumen los más adecuados por componente:

        .row.justify-content-center
          .col-lg-10  
            .titulo-sexto.color-acento-contenido
              h5 Tabla 19.
              span Materiales de construcción recomendados
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-11 Componente
                    th.bg-color-11 Material sugerido
                    th.bg-color-11 Justificación técnica
                tbody.bg-color-white
                  tr
                    td Estructura
                    td Madera tratada, guadua, hierro galvanizado
                    td Durabilidad, resistencia a humedad y plagas
                  tr.bg-color-sintesis
                    td Paredes
                    td Malla metálica o listones de madera
                    td Permite circulación de aire, evita encierro térmico
                  tr
                    td Piso
                    td Concreto ranurado o tablas separadas 1,5 cm
                    td Facilita limpieza y drenaje
                  tr.bg-color-sintesis
                    td Techo
                    td Zinc, teja plástica, palma o paja
                    td Protección climática, aislante térmico
                  tr
                    td Comederos y bebederos
                    td Concreto, madera o PVC
                    td Fácil limpieza y durabilidad

        separador
        
        #t_7_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 7.5 Equipos y utensilios básicos para caprinos
        
        p.mb-5 Los equipos deben permitir una operación eficiente y garantizar condiciones higiénicas para los animales y el personal.

        .bg-full-width.bg-fondo-slider.mb-5
          .p-4.p-md-5
            SlyderA(tipo="b").bg-color-7.p-4.tarjeta
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema7/9.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Comedero lineal o tolva
                  p Permite el suministro de forraje y concentrado. Material: madera tratada o concreto. Altura recomendada: 45–50 cm.
        
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema7/10.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Bebedero automático o flotador
                  p Proporciona suministro continuo de agua limpia. Material: PVC o acero inoxidable. Capacidad: 10–15 litros por animal.
        
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema7/11.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Cepillo o rasqueta
                  p Facilita la limpieza corporal de los animales. Material: plástico duro. Contribuye al bienestar animal.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema7/12.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Ordeñadora mecánica o manual
                  p Permite la extracción higiénica de la leche. Material: acero inoxidable. Favorece el control de mastitis.
        
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema7/13.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Corral de manejo / brete
                  p Se usa para control sanitario, pesaje y marcación. Material: hierro galvanizado o madera. Medidas: 2 m de largo × 0,6 m de ancho.
        
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema7/14.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Pediluvio
                  p Permite la desinfección al ingreso. Material: fibra de vidrio o concreto. Debe contener una solución desinfectante permanente.

        separador
        
        #t_7_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 7.6 Permite la desinfección al ingreso. Material: fibra de vidrio o concreto. Debe contener una solución desinfectante permanente.
        
        p.mb-5 Los corrales deben seleccionarse según la escala de producción y el nivel de inversión. A continuación, se presentan tres modelos comunes:

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema7/15.png", data-aos="zoom-in")
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
              div(titulo="Corral rústico o artesanal (pequeño productor)")
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Materiales: madera, guadua, piso de tierra compactada.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Costo bajo, fácil mantenimiento.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Requiere limpieza frecuente y manejo adecuado de humedad.
              div(titulo="Galpón semitecnificado (nivel medio)")
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Estructura: madera o hierro galvanizado
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Piso elevado de listones o concreto.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Buena ventilación lateral y techumbre liviana.
              div(titulo="Sistema tecnificado (intensivo o lechero)")
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Galpón con divisiones internas para grupos productivos.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Área de ordeño con sistema cerrado de leche.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Alimentación y bebederos automáticos.
              div(titulo="Dimensiones de referencia")
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Galpón para 30 cabras: 10 m largo × 4 m ancho × 2,8 m alto.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Espacio de descanso: 1,2 m² por cabra.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Corral de manejo: 6 m × 3 m.
    
    separador
    
    #t_7_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.7 Planos y esquemas técnicos sugeridos
    
    p.mb-5 El diseño físico de las instalaciones debe facilitar el manejo diario, garantizar la bioseguridad y optimizar el uso del espacio en sistemas pecuarios. Una buena planificación estructural reduce el estrés animal y mejora la eficiencia operativa. A continuación, se detallan los principales componentes técnicos recomendados para el diseño de una instalación funcional:

    .row.mb-5.align-items-center
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema7/16.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-15.p-4.tarjeta(data-aos="fade-left").mb-3
          .row.align-items-start.mb-3
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema7/17.svg").mx-auto
            .col-lg
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Estructura rectangular con piso elevado y drenaje.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 División interna: comederos centrales, área de descanso y corral lateral.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Pendiente del techo: 20 %.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Bebederos en extremos del pasillo.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Zona de ordeño anexa con drenaje independiente.
    
    separador
    
    #t_7_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.8 Recomendaciones de manejo
    
    p.mb-5 Las buenas prácticas de manejo diario impactan directamente en la productividad, la salud y el bienestar de los caprinos.

    .row.justify-content-center
      .col-lg-10
        .row.mb-5.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema7/18.png", data-aos="zoom-in")
          .col-lg-9
            .bg-color-2.p-4.tarjeta(data-aos="fade-left").mb-3
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Mantener los pisos secos y limpios, renovando la cama cada 2–3 días.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Asegurar agua limpia y fresca disponible todo el día.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Implementar rotación de corrales para descanso sanitario.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Revisar diariamente signos de cojera, diarrea o heridas.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Capacitar al personal en bienestar, comportamiento y manejo de cabras.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Controlar el ruido ambiental y evitar golpes durante la manipulación.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Registrar diariamente temperatura, mortalidad y producción de leche.

         


</template>

<script>
export default {
  name: 'Tema7',
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
