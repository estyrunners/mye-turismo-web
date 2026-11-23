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
      {src: '../foto-hotel-carama-necochea-sala.png', alt: 'Sala de estar del Hotel Carama con sillones y chimenea.'},
      {src: '../foto-hotel-carama-necochea-desayunador.png', alt: 'Desayunador luminoso del Hotel Carama con mesas junto a los ventanales.'},
      {src: '../foto-hotel-carama-necochea-entrada.png', alt: 'Entrada del Hotel Carama en Necochea, con toldo azul y jardineras.'},
      {src: '../foto-hotel-carama-necochea-habitacion-clara.png', alt: 'Habitación del Hotel Carama con camas individuales, cubrecamas claros y ventana.'},
      {src: '../foto-hotel-carama-necochea-habitacion.png', alt: 'Habitación del Hotel Carama con dos camas y mesa de luz.'},
      {src: '../foto-hotel-carama-necochea-desayuno.png', alt: 'Desayuno con café con leche, tostadas, medialunas y untables.'},
      {src: '../foto-hotel-carama-necochea-playa.png', alt: 'Vista de la playa de Necochea con pasarela y carpas de balneario.'},
      {src: '../foto-hotel-carama-necochea-ubicacion.png', alt: 'Mapa con la ubicación del Hotel Carama en Necochea, cerca de la avenida 2 y la costa.', contener: true}
    ]
  },
  {
    id: 'hotel-sierra-sol-carlos-paz',
    nombre: 'Hotel Sierra Sol',
    destino: 'Villa Carlos Paz · Córdoba',
    descripcion: 'A 400 metros del centro de Villa Carlos Paz, con instalaciones renovadas y habitaciones para 2, 3, 4 y 5 pasajeros. Cuenta con una amplia sala de estar renovada, áreas de relax y espacios de entretenimiento. Consultanos por el tipo de habitación, el régimen de comidas y la disponibilidad para tus fechas.',
    servicios: [
      'Habitaciones para 2, 3, 4 y 5 pasajeros',
      'A 400 metros del centro',
      'Sala de estar renovada, relax y entretenimiento',
      'Pileta climatizada',
      'Piso de parquet',
      'Camas tipo sommier',
      'Aire acondicionado split frío/calor con control remoto',
      'Wi-Fi de banda ancha en habitaciones, desayunador y lobby',
      'TV por cable · Full HD LED de 32 pulgadas',
      'Iluminación LED',
      'Cortinas blackout',
      'Caja de seguridad en todas las habitaciones',
      'Cerraduras electrónicas con tarjeta por aproximación en todas las habitaciones'
    ],
    fotos: [
      {src: '../foto-sierra-sol-pileta-exterior.png', alt: 'Pileta exterior y sector de descanso del Hotel Sierra Sol'},
      {src: '../foto-sierra-sol-entrada.png', alt: 'Entrada iluminada del Hotel Sierra Sol en Villa Carlos Paz'},
      {src: '../foto-sierra-sol-habitacion.png', alt: 'Habitación del Hotel Sierra Sol con cama doble y decoración con toallas'},
      {src: '../foto-sierra-sol-sillones.png', alt: 'Sillones colgantes con almohadones amarillos en el Hotel Sierra Sol'},
      {src: '../foto-sierra-sol-salon.png', alt: 'Salón del Hotel Sierra Sol con mesas, sillas y sector de estar'},
      {src: '../foto-sierra-sol-desayuno.png', alt: 'Desayuno del Hotel Sierra Sol con frutas, tortas, medialunas y bocaditos'},
      {src: '../foto-sierra-sol-pileta-climatizada.png', alt: 'Pileta climatizada cubierta del Hotel Sierra Sol'}
    ]
  }
];
