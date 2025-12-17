<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Producción pecuaria sostenible y biosegura en especies menores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con el bienestar animal, la bioseguridad y las prácticas sanitarias en la producción de especies menores.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes es una de las cinco libertades del bienestar animal?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libre de expresar comportamiento natural.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Libre de recibir premios.', esCorrecta: false },
            { id: 'c', texto: 'Libre de estrés laboral.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Libre de hambre, sed y desnutrición.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué entidad regula la vacunación animal en Colombia?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'FAO.', esCorrecta: false },
            { id: 'b', texto: 'ICA.', esCorrecta: true },
            { id: 'c', texto: 'OMS.', esCorrecta: false },
            { id: 'd', texto: 'SENA.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué temperatura debe mantenerse en las instalaciones para cuyes?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '25–30 °C.', esCorrecta: false },
            { id: 'b', texto: '20–28 °C.', esCorrecta: false },
            { id: 'c', texto: '18–22 °C.', esCorrecta: true },
            { id: 'd', texto: '15–18 °C.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es un parásito común en los conejos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Fasciola hepatica.', esCorrecta: false },
            { id: 'b', texto: 'Eimeria spp.', esCorrecta: true },
            { id: 'c', texto: 'Ascaris lumbricoides.', esCorrecta: false },
            { id: 'd', texto: 'Coccidioides immitis.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de galpón es más usado en producciones rurales tradicionales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Galpón cerrado automatizado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Galpón tradicional en guadua y zinc.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Galpón climatizado con sensores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Galpón de piso elevado computarizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es una zoonosis común en los cabros?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Brucelosis caprina.', esCorrecta: true },
            { id: 'b', texto: 'Influenza aviar.', esCorrecta: false },
            { id: 'c', texto: 'Mixomatosis.', esCorrecta: false },
            { id: 'd', texto: 'Newcastle.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué tipo de ventilación se recomienda para galpones automáticos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Manual con abanicos.', esCorrecta: false },
            { id: 'b', texto: 'Natural sin control.', esCorrecta: false },
            { id: 'c', texto: 'Sistemas computarizados.', esCorrecta: true },
            { id: 'd', texto: 'Cortinas de tela y sombra.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué material es ideal para las jaulas de codornices en producción intensiva?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Madera y cartón.', esCorrecta: false },
            { id: 'b', texto: 'Malla galvanizada.', esCorrecta: true },
            { id: 'c', texto: 'Aluminio recubierto.', esCorrecta: false },
            { id: 'd', texto: 'Guadua con zinc.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué función cumple la bandeja recolectora en una jaula para conejos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evitar que escapen.', esCorrecta: false },
            { id: 'b', texto: 'Sostener alimento.', esCorrecta: false },
            { id: 'c', texto: 'Recolectar estiércol.', esCorrecta: true },
            { id: 'd', texto: 'Sujetar la jaula.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es un objetivo principal de la bioseguridad pecuaria?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el uso de alimentos importados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prevenir enfermedades infecciosas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fomentar la reproducción cruzada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar el tamaño del galpón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Las codornices requieren una iluminación de al menos 10 horas al día.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La Ley 1774 de 2016 en Colombia reconoce a los animales como seres sintientes.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El control parasitario incluye exclusivamente el uso de medicamentos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los sistemas de pastoreo deben proporcionar al menos 1–2 m² por ave en el área externa.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Una de las funciones del plan sanitario es garantizar la salud pública.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
