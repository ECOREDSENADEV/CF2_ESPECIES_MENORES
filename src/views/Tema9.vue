<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Alimentación, suplementación y estrategias alternativas
    
    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema9/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p La alimentación representa el componente más determinante en la productividad de las especies pecuarias menores, siendo responsable de hasta el 70 % de los costos de producción. Un manejo nutricional adecuado asegura:
        .bg-color-1.p-4.tarjeta(data-aos="fade-left").mb-3
          .row.align-items-start.mb-3
            .col-lg-auto
              img(src="@/assets/curso/tema9/2.png").mx-auto
            .col-lg
              .bg-color-white.p-4.tarjeta
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Crecimiento óptimo
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Buena conversión alimenticia
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Eficiencia reproductiva
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 Sostenibilidad ambiental del sistema
    
    separador
    
    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.1 Principios de nutrición animal

    p.mb-5 La base de una buena productividad radica en una dieta que cubra los requerimientos fisiológicos del animal en cada etapa de su vida. Estos principios orientan la formulación de raciones y la selección eficiente de insumos disponibles. A continuación, se describen los nutrientes esenciales, sus funciones y fuentes comunes en la alimentación pecuaria:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema9/3.png", data-aos="zoom-in")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 23.
          span Nutrientes esenciales, funciones y fuentes comunes
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg-color-11 Nutriente
                th.bg-color-11 Función principal
                th.bg-color-11 Fuentes comunes
            tbody.bg-color-white
              tr
                td Energía
                td Metabolismo, actividad, producción
                td Maíz, yuca, sorgo, melaza
              tr.bg-color-sintesis
                td Proteína
                td Crecimiento, producción de leche y huevos
                td Harina de soya, alfalfa, forrajes leguminosos
              tr
                td Minerales
                td Formación ósea, regulación del metabolismo
                td Sales minerales, fosfatos
              tr.bg-color-sintesis
                td Vitaminas
                td Regulación metabólica y sistema inmunológico
                td Suplementos, forrajes verdes
              tr
                td Agua
                td Transporte de nutrientes, digestión, termorregulación
                td Agua limpia, fresca y permanente


    
    .bg-color-16.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema9/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los requerimientos nutricionales varían según la especie, la edad, el sexo y el estado fisiológico del animal. La calidad del alimento influye directamente en su salud, inmunidad y bienestar general.
  
    separador
    
    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.2 Formulación de raciones balanceadas
    
    p La formulación racional de dietas busca maximizar el rendimiento productivo al menor costo posible, utilizando ingredientes disponibles localmente y adaptados a las condiciones del sistema productivo.
    p Esta estrategia permite cubrir los requerimientos nutricionales del animal con insumos accesibles, sin comprometer la salud ni la eficiencia. Los pasos clave en la formulación de raciones:

    .row.mb-5.align-items-center.p-4
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema9/5.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
          .bg-color-white.tarjeta.p-4
            ol.lista-ol--cuadro
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span a
                | Analizar la composición nutricional de los insumos (contenido de proteína, energía, fibra, minerales, etc.).
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span b
                | Consultar tablas de requerimientos por especie y etapa productiva (NRC, ICA, FAO).
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span c
                | Considerar la estacionalidad y costo de los ingredientes disponibles.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span d
                | Elegir el formato del alimento: harina, pellet, forraje picado, mezcla húmeda, entre otros.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ejemplo de ración balanceada para conejo en crecimiento
    
    p.mb-5 A continuación se muestra una ración orientativa formulada con insumos comunes para animales en fase de crecimiento:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema9/6.png", data-aos="zoom-in")
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          h5 Tabla 24.
          span Ración ejemplo para conejo en crecimientos
        .tabla-a.color-acento-contenido
          table
            caption Nota. Los porcentajes pueden ajustarse según análisis de laboratorio, disponibilidad de ingredientes y requerimientos específicos del lote
            thead
              tr
                th.bg-color-11 Ingrediente
                th.bg-color-11 Porcentaje en la ración
            tbody.bg-color-white
              tr
                td.p-3 Maíz molido
                td.p-3 40 %
              tr.bg-color-sintesis
                td.p-3 Harina de soya
                td.p-3 15 %
              tr
                td.p-3 Heno de alfalfa
                td.p-3 25 %
              tr.bg-color-sintesis
                td.p-3 Salvado de trigo
                td.p-3 10 %
              tr
                td.p-3 Aceite vegetal
                td.p-3 2 %
              tr.bg-color-sintesis
                td.p-3 Carbonato de calcio
                td.p-3 1 %
              tr
                td.p-3 Sal mineralizada
                td.p-3 0,5 %
              tr.bg-color-sintesis
                td.p-3 Premix vitamínico-mineral
                td.p-3 0,5 %
    
    separador
    
    #t_9_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.3 Uso de recursos locales y forrajes disponibles
    
    p.mb-5 El aprovechamiento de recursos locales permite reducir costos, mejorar la sostenibilidad del sistema productivo y generar una producción más resiliente frente a fluctuaciones del mercado y condiciones climáticas adversas. A continuación, se presentan los principales tipos de recursos utilizados en Colombia y algunos ejemplos relevantes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-3.mb-lg-0
        .titulo-sexto.color-acento-contenido
          h5 Tabla 25.
          span Recursos locales y su uso en alimentación animal
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th.bg-color-11 Tipo de recurso
                th.bg-color-11 Ejemplos comunes
            tbody.bg-color-white
              tr
                td Gramíneas
                td Kikuyo (Pennisetum clandestinum), pasto estrella (Cynodon plectostachyus), Brachiaria (Urochloa spp.)
              tr.bg-color-sintesis
                td Leguminosas
                td Leucaena, matarratón, canavalia
              tr
                td Residuos agroindustriales
                td Pulpa de café, cáscara de yuca, bagazo de caña, melaza, afrecho de arroz
              tr.bg-color-sintesis
                td Minerales naturales
                td Bloques nutricionales artesanales (sal, melaza, urea, ceniza, fósforo)

    .row.justify-content-center
      .col-lg-10
        .bg-color-15.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.order-lg-2
              img(src="@/assets/curso/tema9/7.svg").mx-auto
            .col-lg.order-lg-1
              .bg-color-white.p-4.tarjeta
                p.mb-0 La ventaja clave de estos insumos radica en su versatilidad, ya que pueden incorporarse en la dieta como suplementos parciales o totales. No obstante, es fundamental evaluar previamente su digestibilidad y valor nutricional para garantizar un aporte equilibrado que mantenga la salud y el rendimiento productivo de los animales.
        
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        separador
        
        #t_9_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 9.4 Bancos de proteína y cultivos forrajeros
        
        p.mb-5 Los bancos forrajeros son una estrategia agroecológica clave para garantizar una fuente constante de proteína vegetal, especialmente útil durante la época seca. Estas reservas permiten mejorar la dieta animal, reducir la presión sobre las pasturas naturales y fortalecer la fertilidad del suelo, gracias al efecto fijador de nitrógeno de las leguminosas. A continuación, se presentan las principales especies recomendadas para la implementación de bancos forrajeros:

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema9/8.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .titulo-sexto.color-acento-contenido
              h5 Tabla 26.
              span Especies forrajeras recomendadas para bancos de proteína
            .tabla-a.color-acento-contenido
              table
                thead
                  tr
                    th.bg-color-11 Nombre científico
                    th.bg-color-11 Nombre común
                tbody.bg-color-white
                  tr
                    td.p-3 Tithonia diversifolia
                    td.p-3 Botón de oro
                  tr.bg-color-sintesis
                    td.p-3 Leucaena leucocephala
                    td.p-3 Leucaena
                  tr
                    td.p-3 Cratylia argentea
                    td.p-3 —
                  tr.bg-color-sintesis
                    td.p-3 Trichanthera gigantea
                    td.p-3 Nacedero
                  tr
                    td.p-3 Moringa oleifera
                    td.p-3 Moringa
                  tr.bg-color-sintesis
                    td.p-3 Cajanus cajan
                    td.p-3 Fríjol guandul

        p.mb-5 Para establecer y manejar adecuadamente un banco de proteína, se deben tener en cuenta los siguientes parámetros técnicos:

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema9/9.png", data-aos="zoom-in")
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              h5 Tabla 27.
              span Parámetros técnicos para el diseño de bancos forrajeros
            .tabla-a.color-acento-contenido
              table
                thead
                  tr
                    th.bg-color-11 Parámetro
                    th.bg-color-11 Valor recomendado
                tbody.bg-color-white
                  tr
                    td.p-3 Área
                    td.p-3 500–1000 m² por cada 10 animales
                  tr.bg-color-sintesis
                    td.p-3 Distancia de siembra
                    td.p-3 1,5 × 0,5 m
                  tr
                    td.p-3 Frecuencia de corte
                    td.p-3 Cada 45–60 días, según crecimiento

        

        separador
        
        #t_9_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 9.5 Estrategias de suplementación
        
        p.mb-5 La suplementación es clave para corregir deficiencias en nutrientes, especialmente durante etapas críticas como lactancia, crecimiento o épocas de escasez forrajera.
              
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10.mb-3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Tabla 28.
              span Modalidades más utilizadas
            .tabla-a.color-acento-contenido
              table
                thead
                  tr
                    th.bg-color-11 Tipo de suplemento
                    th.bg-color-11 Ejemplos comunes
                    th.bg-color-11 Función principal
                tbody.bg-color-white
                  tr
                    td Bloques nutricionales
                    td Melaza, urea, minerales, harina de leguminosa
                    td Aporte mixto de energía y proteína
                  tr.bg-color-sintesis
                    td Energéticos
                    td Maíz, yuca, melaza líquida
                    td Energía rápida para animales en producción
                  tr
                    td Proteicos
                    td Harina de soya, torta de palmiste, levaduras
                    td Mejora el crecimiento y la lactancia
                  tr.bg-color-sintesis
                    td Minerales/vitamínicos
                    td Sales mineralizadas ICA, bloques FEDEGÁN
                    td Prevención de enfermedades carenciales
                  tr
                    td Fitoterápicos naturales
                    td Ajo, sábila, vinagre de manzana
                    td Estimulación inmune y digestiva
                  tr.bg-color-sintesis
                    td Probióticos
                    td Microorganismos benéficos, fermentos caseros
                    td Mejora de la flora intestinal


        
        p.mb-5 Los suplementos deben ser ofrecidos en cantidades controladas, en horarios regulares, y adaptados a la etapa productiva del animal.

        separador
        
        #t_9_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 9.6 Alimentación alternativa y sostenible
        
        p.mb-5 La alimentación sostenible busca reducir la dependencia de concentrados comerciales, minimizar el impacto ambiental y fomentar el bienestar animal. Esta estrategia prioriza el uso de forrajes locales, sistemas silvopastoriles, reciclaje de nutrientes y principios de agricultura circular.

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema9/10.png", data-aos="zoom-in")
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
              div(titulo="Cuyes")
                p Una dieta basada en forrajes frescos y residuos vegetales mejora la digestión y reduce costos. 
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Base forrajera</b>: pastos tiernos como alfalfa, kikuyo, trébol y chachafruto. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Suplementos</b>: afrecho de trigo, harina de maíz, salvado de arroz y residuos hortícolas frescos. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Consumo diario</b>: 10–12 % del peso vivo en materia verde
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Agua</b>: limpia y disponible ad libitum. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Prácticas sostenibles</b>: restos de hortalizas, hidroforraje verde (cebada o maíz germinado), rotación de cultivos y compostaje de excretas.
              div(titulo="Conejos")
                p Requieren una dieta rica en fibra, con concentrados vegetales y forrajes proteicos. 
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Alimento base</b>: heno seco de alfalfa o gramíneas + concentrado vegetal. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Ración diaria</b>: 100–150 g de alimento balanceado + forraje fresco. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Alternativas sostenibles</b>: moringa, nacedero, botón de oro, plátano verde cocido. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Precaución</b>: evitar col, repollo y pasto fermentado o húmedo por riesgo de timpanismo.
              div(titulo="Aves (postura y engorde)")
                p Una dieta adaptada a cada etapa (inicio, crecimiento o postura) mantiene la salud y productividad. 
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Balanceado convencional</b>: maíz, soya, torta de palmiste, caliza, fosfato dicálcico, premix vitamínico. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Alternativas locales</b>: harina de yuca, lombricompuesto, moringa pulverizada, insectos (Hermetia illucens). 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Promotores naturales</b>: vinagre de manzana, ajo y cúrcuma. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Raciones</b>: diferenciadas según edad y propósito productivo. 
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema9/11.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-6")
              div(titulo="Codornices")
                p Requieren alto contenido proteico durante levante y postura. 
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Consumo diario</b>: 25–30 g por ave. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Proteína cruda</b>: levante 24–26 %; postura 18–20 %. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Ingredientes alternativos</b>: maíz, arroz partido, harina de soya, hojas secas de moringa o chachafruto.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Sistema de suministro</b>: tolvas colgantes, bebederos automáticos tipo chupón, bandejas recolectoras de excretas.
              div(titulo="Cabras")
                p Rústicas y adaptables, aprovechan forrajes arbustivos en sistemas silvopastoriles.  
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Forraje principal</b>: gramíneas tropicales, leucaena, nacedero y morera. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Suplementos</b>: bloques proteicos, sales minerales, cáscaras de frutas, pulpa de café. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Consumo diario</b>: 4–6 % del peso vivo en materia seca. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Prácticas sostenibles</b>: cercas vivas, rotación de potreros, bancos forrajeros y aprovechamiento de residuos agrícolas.
              div(titulo="Ovejas")
                p Necesitan dieta equilibrada en energía y proteína, especialmente en climas templados o secos.  
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Base alimenticia</b>: praderas mixtas (kikuyo, brachiaria, estrella africana).   
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Suplementos sostenibles</b>: bloques nutricionales caseros, granos molidos, bagazo, afrecho de arroz.  
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Requerimiento diario</b>: 2,5–3 % del peso vivo en materia seca. 
                  li.mb-2.d-flex
                    i.fas.fa-circle-check
                    p.mb-0 <b>Prácticas sostenibles</b>: rotación de potreros, uso de forrajes proteicos (leucaena, tithonia) y cultivos de cobertura.
              


  

</template>

<script>
export default {
  name: 'Tema9',
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
