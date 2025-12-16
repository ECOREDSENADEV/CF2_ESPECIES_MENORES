<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Cuy  (<em>Cavia porcellus</em>)
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Un adecuado diseño de las instalaciones es esencial para lograr un sistema de producción eficiente, higiénico y respetuoso del bienestar animal. Las condiciones estructurales del galpón influyen directamente en la salud, el comportamiento y el rendimiento productivo de los cuyes.
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Diseño funcional de instalaciones

    p.mb-5 Para garantizar el confort térmico, la eficiencia operativa y el manejo sanitario, el diseño de las instalaciones debe responder a criterios técnicos de funcionalidad y bienestar. Esto implica considerar materiales, orientación, distribución interna y protección frente a factores climáticos y biológicos.

    TabsC.color-acento-contenido(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Objetivos del diseño")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Objetivos del diseño
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Proteger a los animales del frío, calor, viento, lluvia y depredadores.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Facilitar el manejo, alimentación, limpieza y control sanitario.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Separar los animales por edad, sexo y función (reproductores, crías, engorde).
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Optimizar el uso del espacio y los recursos disponibles.
          .col-md-5.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/3.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Dimensiones recomendadas del galpón")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Dimensiones recomendadas del galpón
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Altura: 2,2 a 2,8 m.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Ancho: 4 a 6 m.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Largo: variable según número de jaulas o pozas.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Pendiente del suelo: 2–4 % hacia los drenajes.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Orientación: eje longitudinal Este–Oeste para aprovechar la luz solar.
          .col-md-5.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/4.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Distribución básica del galpón")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Distribución básica del galpón
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Zona limpia: alimentación, maternidad, empadre.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Zona intermedia: almacenamiento de alimento y equipos.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Zona sucia: disposición de estiércol y residuos.
              li.mb-3.d-flex
                i.fas.fa-circle-check
                p.mb-0 Zona sucia: disposición de estiércol y residuos.
          .col-md-5.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/5.png', alt='Texto que describa la imagen')
      
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Distribución interna y manejo del espacio
    
    p.mb-5 Una distribución lógica y sanitaria permite optimizar el flujo de trabajo, reducir el estrés animal y prevenir enfermedades. Es fundamental evitar el cruce entre zonas limpias y sucias.

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Distribución recomendada por área de manejo
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.bg-color-11 Área
                th.bg-color-11 Función
                th.bg-color-11 Espacio recomendado
                th.bg-color-11 Observaciones
            tbody.bg-color-white
              tr
                td Maternidad
                td Hembras con crías
                td 0.5 m² por madre
                td Jaulas individuales con nido cerrado
              tr.bg-color-sintesis
                td Engorde
                td Animales 0–3 meses
                td 0.15–0.20 m²/animal
                td Pozas colectivas (8–10 cuyes)
              tr
                td Reproductores
                td Empadre y gestación
                td 0.2–0.25 m²/animal
                td Separados por sexo
              tr.bg-color-sintesis
                td Pasillos
                td Circulación y limpieza
                td 0.6–0.8 m de ancho
                td Facilita desinfección y alimentación

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Ejemplo de distribución lineal

            figure
              img(src="@/assets/curso/tema3/6.svg", data-aos="zoom-in", alt="Diagrama de flujo lineal con etapas consecutivas de un sistema de producción: entrada, pediluvio, maternidad, engorde, empadre, almacén y salida sanitaria. ")

        separador
        
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.3 Ventilación, iluminación y confort térmico
        
        p.mb-5 El ambiente interno debe mantenerse en condiciones óptimas para reducir el estrés, prevenir enfermedades respiratorias y favorecer el comportamiento natural de los animales.
        
        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.tarjeta.p-4(data-aos="fade-left")
              .bg-color-white.tarjeta.p-4(data-aos="fade-left")
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Ventilación natural cruzada</b>: aberturas laterales con malla galvanizada (evita ingreso de aves y roedores).
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Temperatura ideal</b>: 18–22 °C
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Humedad relativa</b>: 60–70 %
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Techo alto y ventilado</b>: facilita salida de aire caliente y gases como amoníaco.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Iluminación natural</b>: mínimo 8 horas al día, mediante ventanas o paneles translúcidos.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b><em>Confort</em> térmico</b>: sombra parcial, sin corrientes de aire directas sobre los animales.
    
    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Materiales de construcción recomendados

    p.mb-5 La elección de los materiales debe considerar el clima local, los recursos disponibles, la durabilidad, la facilidad de limpieza y el nivel tecnológico del sistema productivo.

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Materiales de Construcción Recomendados
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.bg-color-11 Nivel
                th.bg-color-11 Material predominante
                th.bg-color-11 Características
                th.bg-color-11 Costo aproximado
            tbody.bg-color-white
              tr
                td Artesanal (pequeño productor)
                td Adobe, madera, guadua, calamina reciclada
                td Económico, buena aislación térmica
                td Bajo
              tr.bg-color-sintesis
                td Intermedio (tecnificado básico)
                td Bloque, cemento, malla galvanizada, zinc
                td Mayor durabilidad, limpieza eficiente
                td Medio
              tr
                td Sofisticado (intensivo o industrial)
                td Estructuras metálicas, piso epóxico, paneles plásticos
                td Alta bioseguridad y ventilación controlada
                td Alto


        separador
        
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.5 Equipos y utensilios por especie
        
        p.mb-5 El equipamiento básico debe facilitar la alimentación, limpieza, control sanitario y seguimiento productivo, sin comprometer el bienestar animal.

        .row
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
          .col-lg-9
            .titulo-sexto.color-acento-contenido
              h5 Tabla 5.
              span Equipos para <em>Cavia porcellus</em>
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-11 Elemento
                    th.bg-color-11 Función/Descripción
                    th.bg-color-11 Material recomendado
                tbody.bg-color-white
                  tr
                    td.p-2 Jaulas o pozas
                    td.p-2 Confinamiento, separación por edad y sexo
                    td.p-2 Madera tratada, malla galvanizada, concreto
                  tr.bg-color-sintesis
                    td.p-2 Comederos
                    td.p-2 Tolvas o bandejas
                    td.p-2 Plástico duro, metal galvanizado, madera
                  tr
                    td.p-2 Bebederos
                    td.p-2 Chupón, botella o taza
                    td.p-2 PVC o acero inoxidable
                  tr.bg-color-sintesis
                    td.p-2 Nidos o criadoras
                    td.p-2 Espacios cerrados para lactancia
                    td.p-2 Madera o plástico
                  tr
                    td.p-2 Báscula
                    td.p-2 Control de peso individual
                    td.p-2 Digital o analógica
                  tr.bg-color-sintesis
                    td.p-2 Utensilios de limpieza
                    td.p-2 Escobas, cepillos, desinfectantes, palas
                    td.p-2 Reutilizables y resistentes


        separador
        
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.6 Tipos de jaulas y sistemas de alojamiento
        
        p.mb-5 Existen diferentes tipos de jaulas y sistemas de alojamiento según el nivel de tecnificación y la escala productiva. A continuación se presenta una comparación de las principales opciones disponibles:

        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Tipos de jaulas y sistemas de alojamiento
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.bg-color-11 Tipo de sistema
                th.bg-color-11 Características principales
                th.bg-color-11 Ventajas
                th.bg-color-11 Nivel
            tbody.bg-color-white
              tr
                td Jaula o poza artesanal
                td Madera, guadua o malla; dimensiones: 1,5 × 1 × 0,45 m; capacidad: 7–10 cuyes
                td Bajo costo, fácil construcción, materiales locales
                td Bajo
              tr.bg-color-sintesis
                td Jaula de madera tratada y malla
                td Bastidor con divisiones internas y piso de rejilla o malla galvanizada
                td Buena ventilación, adaptable a espacios reducidos
                td Intermedio
              tr
                td Jaula metálica galvanizada
                td Hierro galvanizado o acero inoxidable; diseño modular apilable (hasta 3 niveles); piso elevado
                td Alta durabilidad, fácil desinfección, manejo intensivo
                td Tecnificado
              tr.bg-color-sintesis
                td Sistema automatizado
                td Estructura metálica con ventilación, temperatura y recolección de estiércol controlados
                td Bioseguridad, alta productividad, ahorro de mano de obra
                td Sofisticado

        
        .row.mb-5
          .col-lg-5.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1  
            p p Las instalaciones y equipos destinados a la crianza de cuyes deben planificarse con un enfoque integral que combine bienestar animal, eficiencia operativa, higiene y sostenibilidad económica. Este enfoque permite adaptar la infraestructura a las condiciones y recursos del productor, sin comprometer la productividad. El pequeño productor puede iniciar con soluciones simples y locales, e ir escalando progresivamente hacia sistemas más tecnificados, de acuerdo con sus capacidades técnicas y económicas. A continuación se presentan los beneficios de una inversión adecuada en infraestructura, independientemente de la escala del sistema:
            .bg-color-9.p-4.tarjeta(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema3/10.svg").mx-auto
                .col-lg
                  .bg-color-white.p-4.tarjeta
                    ul.lista-ul--color.mb-0
                      li.mb-1.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Mayor supervivencia y crecimiento de los animales.
                      li.mb-1.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Reducción de enfermedades respiratorias y digestivas.
                      li.mb-1.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Mejor manejo, con ahorro de tiempo y recursos.
                      li.mb-0.d-flex
                        i.fas.fa-circle-check
                        p.mb-0 Producción inocua, rentable y sostenible.







</template>

<script>
export default {
  name: 'Tema3',
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
