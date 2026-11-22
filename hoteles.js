/* Catálogo de solo alojamiento, independiente de los paquetes con transporte.
   Cargar únicamente hoteles e información confirmados por MyE.
   Cada hotel: {id, nombre, destino, descripcion, servicios: [],
   fotos: [{src: '../foto-hotel.jpg', alt: 'Descripción de la foto'}]}.
   Las rutas de fotos son relativas a alojamiento/index.html.
   No incluir contactos ni referencias de operadores mayoristas. */
window.HOTELES = [
  {
    id: 'hotel-carama-necochea',
    nombre: 'Hotel Carama',
    destino: 'Necochea · Buenos Aires',
    descripcion: 'Hotel de 2 estrellas en Necochea, a 50 metros del mar y a 300 metros de la peatonal. Una opción para disfrutar de la costa y organizar tu estadía. Consultanos por el tipo de habitación, el régimen de desayuno y la disponibilidad para tus fechas.',
    servicios: ['2 estrellas', 'A 50 metros del mar', 'A 300 metros de la peatonal'],
    fotos: [
      {src: '../foto-hotel-carama-necochea-entrada.png', alt: 'Entrada del Hotel Carama en Necochea, con toldo azul y jardineras.'},
      {src: '../foto-hotel-carama-necochea-habitacion.png', alt: 'Habitación del Hotel Carama con dos camas y mesa de luz.'},
      {src: '../foto-hotel-carama-necochea-sala.png', alt: 'Sala de estar del Hotel Carama con sillones y chimenea.'},
      {src: '../foto-hotel-carama-necochea-desayuno.png', alt: 'Desayuno con café con leche, tostadas, medialunas y untables.'},
      {src: '../foto-hotel-carama-necochea-playa.png', alt: 'Vista de la playa de Necochea con pasarela y carpas de balneario.'}
    ]
  }
];
