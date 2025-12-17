<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Ovinos
    
    .row.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema8/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-6.p-5.tarjeta(data-aos="fade-left")
          p.mb-0 Los ovinos requieren instalaciones funcionales, seguras y adaptadas a su comportamiento gregario y a las condiciones climáticas de la zona. Un diseño adecuado facilita el manejo sanitario, la alimentación, el control reproductivo y el bienestar animal, además de optimizar los costos operativos y la eficiencia productiva.
    
    separador
    
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Diseño funcional de las instalaciones
    
    p.mb-5 El diseño de las instalaciones debe responder al tipo de explotación (carne, leche o doble propósito), al número de animales y al flujo operativo del sistema. La inclusión de áreas diferenciadas permite realizar manejos específicos con mayor eficiencia. Las áreas básicas recomendadas son:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        .row.justify-content-center.mb-5.p-4.align-items-center
          .col-lg-9.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema8/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Corral general
                p.text-center Para pastoreo o confinamiento temporal.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema8/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cobertizo o refugio
                p.text-center Resguarda del sol, lluvia o frío.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema8/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Área de alimentación y agua
                p.text-center Equipada con comederos lineales y bebederos automáticos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema8/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Manga y cepo de manejo
                p.text-center Para vacunación, esquila, desparasitación o pesaje.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema8/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Corrales de maternidad o parición
                p.text-center Destinados a ovejas preñadas o con crías.       
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema8/2.png', alt='')

        p.mb-5 A continuación, se presentan las superficies y dotaciones orientativas por tipo de espacio:

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10  
            .titulo-sexto.color-acento-contenido
              h5 Tabla 20.
              span Dimensiones orientativas
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-11 Tipo de área
                    th.bg-color-11 Superficie por animal
                    th.bg-color-11 Observaciones
                tbody.bg-color-white
                  tr
                    td Corral general
                    td 1,5–2,0 m²
                    td Piso de tierra compactada o ripio drenante
                  tr.bg-color-sintesis
                    td Cobertizo
                    td 1,0 m²/oveja adulta
                    td Techo a 2,2–2,5 m; pendiente ≥ 30 %
                  tr
                    td Maternidad
                    td 1,2–1,5 m²
                    td Espacios individuales o grupales pequeños
                  tr.bg-color-sintesis
                    td Comedero lineal
                    td 0,35–0,45 m/oveja
                    td Acceso bilateral recomendable
                  tr
                    td Bebedero
                    td 1 cada 25–30 animales
                    td Altura del borde: 40–50 cm

        

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Distribución interna y manejo del espacio
        
        p.mb-5 Una correcta distribución interna favorece el bienestar animal y agiliza los procesos operativos, reduciendo riesgos sanitarios y tiempos de manejo.

        .bg-full-width.bg-fondo-slider.mb-5
          .p-4.p-md-5
            SlyderA(tipo="b").bg-color-7.p-4.tarjeta
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema8/8.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Aspectos clave del diseño
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Separación por edad, condición corporal o estado fisiológico. 
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Pasillos amplios (mínimo 1,2 m) para circulación segura.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Acceso directo a zonas de manejo y cargue.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Inclusión de áreas de cuarentena, manejo y almacenamiento.
        
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema8/9.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Distribución sugerida
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Entrada con pediluvio y punto de desinfección.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Corrales de cuarentena y aislamiento.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Corrales principales por lotes. 
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Área de manejo: balanza, cepo y manga.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Bodega de insumos y alimento. 
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Cobertizo con sombra natural o artificial.

        separador
        
        #t_8_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 8.3 Ventilación, iluminación y confort térmico
        
        p.mb-5 Aunque los ovinos toleran bajas temperaturas, la humedad excesiva puede afectar su salud y productividad. Por ello, se deben implementar condiciones ambientales que aseguren un confort térmico óptimo. Las recomendaciones técnicas:

    .row.justify-content-center
      .col-lg-10
        .bg-color-13.p-4.tarjeta(data-aos="fade-left").mb-3
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema8/10.svg").mx-auto
            .col-lg
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Humedad relativa</b>: 60–70 %
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Temperatura óptima</b>: 18–25 °C
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Ventilación natural cruzada</b>: abertura lateral ≥ 10 % del área del cobertizo.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Iluminación natural</b>: al menos 8 h diarias; si artificial: ≥ 60 lux.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Evitar</b>: acumulación de gases, encharcamientos y corrientes sobre corderos.

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        separador
        
        #t_8_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 8.4 Materiales de construcción recomendados

        p.mb-5 Los materiales deben adaptarse al entorno, ser durables y permitir condiciones higiénicas adecuadas. La siguiente tabla presenta las opciones más comunes por componente:

        .row.justify-content-center
          .col-lg-10  
            .titulo-sexto.color-acento-contenido
              h5 Tabla 21.
              span Materiales de construcción recomendados
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-11 Elemento
                    th.bg-color-11 Material recomendado
                    th.bg-color-11 Observaciones técnicas
                tbody.bg-color-white
                  tr
                    td Paredes o divisiones
                    td Madera inmunizada, guadua, malla metálica
                    td Altura mínima: 1,2 m
                  tr.bg-color-sintesis
                    td Techos
                    td Teja de zinc, fibrocemento o palma
                    td Aislante térmico preferible
                  tr
                    td Pisos
                    td Tierra apisonada, grava, rejilla plástica
                    td Evitar encharcamientos; buen drenaje
                  tr.bg-color-sintesis
                    td Corrales móviles
                    td Madera tratada o metal galvanizado
                    td Fácil de desarmar y limpiar
                  tr
                    td Comederos
                    td Concreto, madera o lámina galvanizada
                    td Tipo lineal o tolva, acceso lateral preferido
                  tr.bg-color-sintesis
                    td Bebederos
                    td Concreto o plástico resistente
                    td Con válvula flotadora o chupón



        
        separador
        
        #t_8_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 8.5 Equipos y utensilios básicos para ovinos
        
        p.mb-5 El equipo debe facilitar el manejo rutinario, garantizar condiciones sanitarias y reducir el estrés animal durante los procedimientos.

        .row.mb-5.align-items-center
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema8/11.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-3.p-4.tarjeta(data-aos="fade-left").mb-3
              .row.align-items-start.mb-3
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema8/12.png").mx-auto
                .col-lg
                  .bg-color-white.p-4.tarjeta
                    h5 Lista recomendada:
                    ul.lista-ul--color.mb-0
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Comederos lineales o tipo tolva.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Bebederos automáticos con control de nivel.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Báscula para ovinos (capacidad: 100–150 kg).
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Cortadoras y tijeras de esquila.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Cepo de sujeción y manga de manejo.
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Equipo de marcaje (numeradores, aretes, tintas).
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Botiquín sanitario (termómetro, jeringas, antisépticos).
                      li.mb-2.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Tolvas protegidas para almacenamiento de sales minerales.

        separador
        
        #t_8_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 8.6 Tipos de corrales y sistemas de alojamiento
        
        p.mb-5 La selección del sistema de alojamiento depende de la escala productiva, recursos disponibles y sistema de alimentación.

        .bg-full-width.bg-fondo-slider.mb-5
          .p-4.p-md-5
            SlyderA(tipo="b").bg-color-7.p-4.tarjeta
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema8/13.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Sistema extensivo
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Uso de pasturas naturales. 
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Corrales simples de madera o malla para resguardo nocturno.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Bajo costo, bajo control sanitario.
        
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema8/14.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Sistema semi-intensivo:
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Combinación de pastoreo con suplementación.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Cobertizos livianos y división por lotes.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Mayor control nutricional y sanitario.
              .row.align-items-center.p-4.p-md-5
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema8/15.png")
                .col-lg-7.order-1.mb-3.mb-lg-0
                  h5 Sistema intensivo (<em>feedlot</em> o estabulado)
                  ul.lista-ul--color.mb-0
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Piso de cemento o rejilla con drenaje.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Comederos y bebederos automáticos.
                    li.mb-2.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Requiere mayor inversión y manejo especializado

        p.mb-5 El espacio mínimo y la altura de las vallas deben ajustarse a la categoría animal para garantizar seguridad, confort y manejo adecuado en los corrales ovinos. A continuación se presentan los valores de referencia más utilizados:

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema8/16.png", data-aos="zoom-in")
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              h5 Tabla 22.
              span Espacio mínimo y altura de valla según categoría animal
            .tabla-a.color-acento-contenido
              table
                thead
                  tr
                    th.bg-color-11 Categoría animal
                    th.bg-color-11 Espacio mínimo
                    th.bg-color-11 Altura de valla
                tbody.bg-color-white
                  tr
                    td.p-2 Ovejas adultas
                    td.p-2 1,5 m²
                    td.p-2 1,1–1,3 m
                  tr.bg-color-sintesis
                    td.p-2 Carneros
                    td.p-2 2,0 m²
                    td.p-2 1,3 m
                  tr
                    td.p-2 Corderos
                    td.p-2 0,8–1,0 m²
                    td.p-2 1,1 m


    separador
    
    #t_8_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.7 Planos esquemáticos y referencias visuales
    
    p.mb-5 Los planos permiten visualizar la disposición del espacio para mejorar el manejo, evitar aglomeraciones y facilitar tareas rutinarias. Plano básico de corral ovino (vista superior):

    .row.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Planos esquemáticos

        figure
          img(src="@/assets/curso/tema8/17.png", data-aos="zoom-in", alt="Plano esquemático de una instalación de 10 por 6 metros que incluye una zona de alimentación, un pasillo de manejo central y cuatro corrales de 12 m² alineados al lado derecho, con orientación hacia el este. ")
      .col-lg-5
        figure.mb-5
          img(src="@/assets/curso/tema8/18.svg", data-aos="zoom-in", style="max-width: 140px", alt="")
        .bg-color-6.p-4.tarjeta(data-aos="fade-left").mb-3
          .bg-color-white.p-4.tarjeta
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Humedad relativa</b>: 60–70 %
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Temperatura óptima</b>: 18–25 °C
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Ventilación natural cruzada</b>: abertura lateral ≥ 10 % del área del cobertizo.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Iluminación natural</b>: al menos 8 h diarias; si artificial: ≥ 60 lux.
              li.mb-2.d-flex
                i.fas.fa-circle-check
                p.mb-0 <b>Evitar</b>: acumulación de gases, encharcamientos y corrientes sobre corderos.
    




</template>

<script>
export default {
  name: 'Tema8',
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
