/* ============================================================
   MyE Turismo — fuente única de paquetes
   ------------------------------------------------------------
   Cada salida se define UNA sola vez acá. Las puertas de la home
   y las mini landings filtran este mismo array, así un precio
   nunca puede quedar distinto en dos lugares.

   Reglas de negocio embebidas:
   - `puerta`  → dónde vive canónicamente (una sola).
   - `tags`    → colecciones transversales (ej: termas), NO duplican el dato.
   - `reserva` → gastos de reserva por pasajero, ya calculados en la
                 moneda del paquete. Los full day no tienen.
   - Solo se publican salidas de septiembre 2026 en adelante.
   - Las salidas marcadas "Completo" por el operador no se cargan.
   ============================================================ */

window.PAQUETES = [
  /* ---------- NOVIEMBRE Y DICIEMBRE 2026 — Full day ---------- */
  {
    "id": "fd-tierra-vasca",
    "nombre": "Tierra Vasca · La Reja",
    "pais": "Argentina",
    "region": "Provincia de Buenos Aires",
    "puerta": "full-day",
    "tags": [
      "full-day"
    ],
    "transporte": "Bus semicama",
    "fechas": "22 nov",
    "duracion": "1 día",
    "precio": 89990,
    "moneda": "ARS",
    "reserva": 0,
    "foto": "../full-day-tierra-vasca-nov2026.jpg",
    "fotoAlt": "Tierra Vasca · La Reja",
    "incluye": [
      "Traslado ida y vuelta en el día",
      "Desayuno, almuerzo y merienda",
      "Show"
    ],
    "fotoCompleta": true,
    "provincia": "Buenos Aires",
    "precioLista": 109000,
    "gastosAdministrativos": 10000,
    "condicionPago": "Pago en efectivo"
  },
  {
    "id": "fd-padre-ignacio",
    "nombre": "Rosario · Misa del Padre Ignacio",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "full-day",
    "tags": [
      "full-day"
    ],
    "transporte": "Bus semicama",
    "fechas": "15 y 29 nov",
    "duracion": "1 día",
    "precio": 69990,
    "moneda": "ARS",
    "reserva": 0,
    "foto": "../full-day-padre-ignacio-nov2026.jpg",
    "fotoAlt": "Rosario · Misa del Padre Ignacio",
    "incluye": [
      "Traslado ida y vuelta en el día",
      "Coordinación",
      "Encuentro espiritual en Rosario"
    ],
    "fotoCompleta": true,
    "provincia": "Santa Fe",
    "precioLista": 97000,
    "gastosAdministrativos": 10000,
    "condicionPago": "Pago en efectivo"
  },
  {
    "id": "fd-concepcion-uruguay",
    "nombre": "Termas de Concepción del Uruguay",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "full-day",
    "tags": [
      "full-day",
      "termas"
    ],
    "transporte": "Traslado ida y vuelta",
    "fechas": "15 nov",
    "duracion": "1 día",
    "precio": 95999,
    "moneda": "ARS",
    "reserva": 0,
    "foto": "../foto-termas-generica.jpg",
    "fotoAlt": "Piscina de agua termal",
    "incluye": [
      "Traslado ida y vuelta en el día",
      "Coordinación",
      "Entrada a las termas"
    ],
    "provincia": "Entre Ríos",
    "gastosAdministrativos": 10000,
    "pagoConsulta": "Consultá planes de pago en 1, 3 y 6 cuotas"
  },
  {
    "id": "fd-san-jose",
    "nombre": "Termas de San José",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "full-day",
    "tags": [
      "full-day",
      "termas"
    ],
    "transporte": "Traslado ida y vuelta",
    "fechas": "29 nov",
    "duracion": "1 día",
    "precio": 95999,
    "moneda": "ARS",
    "reserva": 0,
    "foto": "../full-day-san-jose-nov2026.jpg",
    "fotoAlt": "Termas de San José",
    "incluye": [
      "Traslado ida y vuelta en el día",
      "Coordinación",
      "Entrada a las termas"
    ],
    "fotoCompleta": true,
    "provincia": "Entre Ríos",
    "gastosAdministrativos": 10000,
    "pagoConsulta": "Consultá planes de pago en 1, 3 y 6 cuotas"
  },
  {
    "id": "fd-san-nicolas-san-pedro",
    "nombre": "San Nicolás con San Pedro",
    "pais": "Argentina",
    "region": "Provincia de Buenos Aires",
    "puerta": "full-day",
    "tags": [
      "full-day"
    ],
    "transporte": "Traslado ida y vuelta",
    "fechas": "29 nov",
    "duracion": "1 día",
    "precio": 109990,
    "moneda": "ARS",
    "reserva": 0,
    "foto": "../landing-san-pedro.jpg",
    "fotoAlt": "Paisaje de San Pedro",
    "incluye": [
      "Traslado ida y vuelta en el día",
      "Almuerzo en parrilla La Querencia",
      "Visita a la Virgen de San Nicolás",
      "Coordinador / guía"
    ],
    "provincia": "Buenos Aires",
    "gastosAdministrativos": 10000,
    "pagoConsulta": "Consultá planes de pago en 1, 3 y 6 cuotas"
  },
  {
    "id": "fd-termas-dolores",
    "nombre": "Termas de Dolores",
    "pais": "Argentina",
    "region": "Provincia de Buenos Aires",
    "puerta": "full-day",
    "tags": [
      "full-day"
    ],
    "transporte": "Bus semicama",
    "fechas": "29 nov",
    "duracion": "1 día",
    "precio": 89900,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": null,
    "foto": "../dolores.jpg",
    "fotoAlt": "Termas de Dolores",
    "incluye": [
      "Bus ida y vuelta en servicio semicama",
      "Entrada al Complejo Termal de Dolores",
      "Almuerzo: 2 empanadas de carne y gaseosa de 600 ml",
      "Tiempo libre en Dolores para recorrer y comprar regionales",
      "Coordinación permanente"
    ],
    "provincia": "Buenos Aires"
  },
  {
    "id": "fd-tigre-noche",
    "nombre": "Tigre de noche · gastronomía, show y baile",
    "pais": "Argentina",
    "region": "Provincia de Buenos Aires",
    "puerta": "full-day",
    "tags": [
      "full-day"
    ],
    "transporte": "Lancha · encuentro en Tigre",
    "fechas": "11 dic",
    "duracion": "Salida nocturna",
    "precio": 109900,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": null,
    "foto": "../full-day-tigre-noche-dic2026.jpg",
    "fotoAlt": "Tigre de noche · gastronomía, show y baile",
    "incluye": [
      "Punto de encuentro: Estación Fluvial de Tigre",
      "Paseo en lancha de aproximadamente 1 hora y 15 minutos",
      "Traslado al Club Velero",
      "Cena",
      "Show y baile"
    ],
    "fotoCompleta": true,
    "provincia": "Buenos Aires",
    "subtitulo": "Encuentro en la Estación Fluvial de Tigre"
  },
  {
    "id": "fd-estancia-herradura",
    "nombre": "Estancia La Herradura",
    "pais": "Argentina",
    "region": "Provincia de Buenos Aires",
    "puerta": "full-day",
    "tags": [
      "full-day"
    ],
    "transporte": "Bus Mix",
    "fechas": "19 dic",
    "duracion": "1 día",
    "precio": 109990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": null,
    "foto": "../full-day-herradura-dic2026.jpg",
    "fotoAlt": "Estancia La Herradura",
    "incluye": [
      "Traslado ida y vuelta en el día en Bus Mix",
      "Desayuno con infusión y galletas de campo, manteca y dulce",
      "Almuerzo con empanada, parrilla, ensalada y postre; gaseosas libres durante el almuerzo",
      "Merienda: mate cocido con pastelitos",
      "Show musical y baile",
      "Paseos a caballo"
    ],
    "fotoCompleta": true,
    "condicionPago": "Efectivo o transferencia",
    "cuotas": {
      "cantidad": 6,
      "valor": 25664
    }
  },
  {
    "id": "fd-granja-milagros",
    "nombre": "Despedida de año en Granja Milagros",
    "pais": "Argentina",
    "region": "Provincia de Buenos Aires",
    "puerta": "full-day",
    "tags": [
      "full-day"
    ],
    "transporte": "Bus Mix",
    "fechas": "12 dic",
    "duracion": "1 día",
    "precio": 99990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": null,
    "foto": "../full-day-granja-milagros-dic2026.jpg",
    "fotoAlt": "Despedida de año en Granja Milagros",
    "incluye": [
      "Traslado ida y vuelta en el día en Bus Mix",
      "Desayuno: infusión y 3 porciones dulces",
      "Almuerzo: tapeo de escabeches, cazuela caliente, empanada, parrilla, ensaladas y postre",
      "Bebida libre durante el almuerzo: gaseosa, vino tinto y blanco, soda",
      "Merienda: infusión, pastelito y torta frita",
      "Show en vivo con transformista, artista invitado y folklore"
    ],
    "fotoCompleta": true,
    "condicionPago": "Efectivo o transferencia",
    "cuotas": {
      "cantidad": 6,
      "valor": 23331
    }
  },
  /* ---------- BRASIL — Cyber hasta el 11 de noviembre de 2026 ---------- */
  {
    "id": "cyber-brasil-porto-galinhas",
    "nombre": "Porto de Galinhas",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "8 días / 7 noches",
    "subtitulo": "Desayuno",
    "precio": 1360,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 1360,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-cyber-porto-galinhas.jpg",
    "fotoAlt": "Paisaje de Porto de Galinhas",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "Desayuno"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar.",
    "fotoCredito": "Elvis Boaventura · CC BY 3.0"
  },
  {
    "id": "cyber-brasil-joao-pessoa",
    "nombre": "João Pessoa",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "8 días / 7 noches",
    "subtitulo": "Desayuno",
    "precio": 1099,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 1099,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-cyber-joao-pessoa.jpg",
    "fotoAlt": "Paisaje de João Pessoa",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "Desayuno"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar.",
    "fotoCredito": "Patrick - Patrick · CC BY-SA 3.0"
  },
  {
    "id": "cyber-brasil-salvador",
    "nombre": "Salvador de Bahía",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "9 días / 8 noches",
    "subtitulo": "Desayuno + city tour",
    "precio": 1288,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 1288,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-salvador.jpg",
    "fotoAlt": "Paisaje de Salvador de Bahía",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "Desayuno + city tour"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar."
  },
  {
    "id": "cyber-brasil-natal",
    "nombre": "Natal",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "8 días / 7 noches o 7 días / 6 noches",
    "subtitulo": "Desayuno",
    "precio": 1360,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 1360,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-natal.jpg",
    "fotoAlt": "Paisaje de Natal",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "Desayuno"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar."
  },
  {
    "id": "cyber-brasil-pipa",
    "nombre": "Pipa",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "8 días / 7 noches o 7 días / 6 noches",
    "subtitulo": "Desayuno",
    "precio": 1270,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 1270,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-cyber-pipa.jpg",
    "fotoAlt": "Paisaje de Pipa",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "Desayuno"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar.",
    "fotoCredito": "Bjørn Christian Tørrissen · CC BY-SA 4.0"
  },
  {
    "id": "cyber-brasil-buzios-arraial",
    "nombre": "Búzios & Arraial do Cabo",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "7 días / 6 noches",
    "subtitulo": "Desayuno",
    "precio": 982,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 982,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-buzios.jpg",
    "fotoAlt": "Paisaje de Búzios & Arraial do Cabo",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "Desayuno"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar."
  },
  {
    "id": "cyber-brasil-porto-seguro",
    "nombre": "Porto Seguro",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "8 días / 7 noches",
    "subtitulo": "All inclusive premium",
    "precio": 1990,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 1990,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-cyber-porto-seguro.jpg",
    "fotoAlt": "Paisaje de Porto Seguro",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "All inclusive premium"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar.",
    "fotoCredito": "Quézia Graciele de Oliveira · CC BY-SA 3.0"
  },
  {
    "id": "cyber-brasil-maceio",
    "nombre": "Maceió",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "8 días / 7 noches",
    "subtitulo": "Desayuno",
    "precio": 1099,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 1099,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-maceio.jpg",
    "fotoAlt": "Paisaje de Maceió",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "Desayuno"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar."
  },
  {
    "id": "cyber-brasil-maragogi",
    "nombre": "Maragogi",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "8 días / 7 noches",
    "subtitulo": "Media pensión",
    "precio": 1693,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 1693,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-cyber-maragogi.jpg",
    "fotoAlt": "Paisaje de Maragogi",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "Media pensión"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar.",
    "fotoCredito": "Alessandra Chanquet · CC BY-SA 4.0"
  },
  {
    "id": "cyber-brasil-florianopolis",
    "nombre": "Florianópolis",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "8 días / 7 noches",
    "subtitulo": "Desayuno",
    "precio": 964,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 964,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-florianopolis.jpg",
    "fotoAlt": "Paisaje de Florianópolis",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "Desayuno"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar."
  },
  {
    "id": "cyber-brasil-praia-frances",
    "nombre": "Praia do Francês",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "8 días / 7 noches",
    "subtitulo": "Desayuno",
    "precio": 1162,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 1162,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-praia-do-frances.jpg",
    "fotoAlt": "Paisaje de Praia do Francês",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "Desayuno"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar."
  },
  {
    "id": "cyber-brasil-camboriu",
    "nombre": "Camboriú",
    "pais": "Brasil",
    "region": "Brasil",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027",
      "brasil"
    ],
    "transporte": "Aéreo",
    "fechas": "Verano 2027 · Consultá fechas disponibles",
    "duracion": "8 días / 7 noches",
    "subtitulo": "Desayuno",
    "precio": 1108,
    "moneda": "USD",
    "reserva": 0,
    "gastosAdministrativos": 50,
    "soloCyber": true,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 1108,
      "descuento": 10,
      "condicion": "Pago total en efectivo, depósito o transferencia"
    },
    "foto": "../foto-cyber-camboriu.jpg",
    "fotoAlt": "Paisaje de Camboriú",
    "incluye": [
      "Paquete con aéreo",
      "Alojamiento",
      "Desayuno"
    ],
    "nota": "Precio desde, por persona. Hotel, base de habitación, fechas y disponibilidad a confirmar.",
    "fotoCredito": "CivArmy · CC BY-SA 4.0"
  },
  /* ---------- VERANO 2027 — Promociones Cyber ---------- */
  {
    "id": "fd-nandubaysal-verano-2027",
    "fotoAlt": "Playa y costa del río Uruguay en Ñandubaysal",
    "nombre": "Ñandubaysal",
    "provincia": "Entre Ríos",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "full-day",
    "tags": [
      "full-day",
      "verano-2027"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "10, 17 y 31 ene · 14, 21 y 28 feb de 2027",
    "duracion": "1 día",
    "precio": 109990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 93492,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 25315
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "Entrada al camping Ñandubaysal"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Sujeto a disponibilidad al confirmar.",
    "foto": "../foto-nandubaysal-playa.jpg",
    "fotoCredito": "Walter Nieto · CC BY-SA 3.0"
  },
  {
    "id": "fd-guaychu-verano-2027",
    "foto": "../foto-termas-guaychu.jpg",
    "fotoAlt": "Paisaje de Termas del Guaychú",
    "nombre": "Termas del Guaychú",
    "provincia": "Entre Ríos",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "full-day",
    "tags": [
      "full-day",
      "verano-2027",
      "termas"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "10, 17 y 31 ene · 14, 21 y 28 feb de 2027",
    "duracion": "1 día",
    "precio": 109990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 93492,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 25315
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "Entrada al complejo termal"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Sujeto a disponibilidad al confirmar."
  },
  {
    "id": "v27-iguazu-lilian",
    "foto": "../foto-iguazu.jpg",
    "fotoAlt": "Paisaje de Cataratas del Iguazú",
    "nombre": "Cataratas del Iguazú",
    "provincia": "Misiones",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "escapadas",
    "tags": [
      "escapadas",
      "verano-2027"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "9, 12, 15, 18, 21, 24, 27 y 30 ene · 2, 8, 11, 14, 17 y 20 feb de 2027",
    "duracion": "6 días / 3 noches",
    "hotel": "Lilian",
    "subtitulo": "Lilian · Desayuno",
    "precio": 389990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 331492,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 80848
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "3 noches de alojamiento",
      "Desayuno",
      "Hotel con piscina",
      "Traslado a Minas de Wanda y Ruinas de San Ignacio"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar."
  },
  {
    "id": "v27-parana-el-circulo",
    "fotoAlt": "Playa y costanera de Paraná junto al Parque Urquiza",
    "nombre": "Paraná",
    "provincia": "Entre Ríos",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "escapadas",
    "tags": [
      "escapadas",
      "verano-2027"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "22 ene · 12 y 26 feb de 2027",
    "duracion": "3 días / 2 noches",
    "hotel": "El Círculo",
    "subtitulo": "El Círculo · Desayuno",
    "precio": 249990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 212492,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 53081
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "2 noches de alojamiento",
      "Desayuno",
      "Hotel céntrico"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar.",
    "foto": "../foto-parana-costanera.jpg",
    "fotoCredito": "AnitaAD · CC BY-SA 4.0"
  },
  {
    "id": "v27-federacion-termas-del-este",
    "foto": "../foto-federacion.jpg",
    "fotoAlt": "Paisaje de Federación",
    "nombre": "Federación",
    "provincia": "Entre Ríos",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "escapadas",
    "tags": [
      "escapadas",
      "verano-2027",
      "termas"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "19 y 29 ene · 16 y 22 feb de 2027",
    "duracion": "4 días / 3 noches",
    "hotel": "Termas del Este",
    "subtitulo": "Termas del Este · Desayuno",
    "precio": 299990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 254992,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 62998
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "3 noches de alojamiento",
      "Desayuno",
      "Hotel con piscina, frente al parque acuático y termal"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar."
  },
  {
    "id": "v27-san-rafael-puesta-del-sol",
    "foto": "../foto-canon-valles.jpg",
    "fotoAlt": "Paisaje ilustrativo de la región",
    "nombre": "San Rafael",
    "provincia": "Mendoza",
    "pais": "Argentina",
    "region": "Cuyo",
    "puerta": "escapadas",
    "tags": [
      "escapadas",
      "verano-2027"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "3, 6, 9, 12, 15, 18, 21, 24, 27 y 30 ene · 2, 8, 11, 14, 17, 20 y 23 feb de 2027",
    "duracion": "6 días / 3 noches",
    "hotel": "Puesta del Sol",
    "subtitulo": "Puesta del Sol · Media pensión",
    "precio": 419990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 356992,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 86798
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "3 noches de alojamiento",
      "Media pensión",
      "Hotel con piscina exterior"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar.",
    "ilustrativa": true
  },
  {
    "id": "v27-mendoza-geminis",
    "foto": "../foto-mendoza-vinedos.jpg",
    "fotoAlt": "Paisaje de Mendoza",
    "nombre": "Mendoza",
    "provincia": "Mendoza",
    "pais": "Argentina",
    "region": "Cuyo",
    "puerta": "escapadas",
    "tags": [
      "escapadas",
      "verano-2027"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "6, 9, 12, 15, 18, 21, 24, 27 y 30 ene · 2, 8, 11, 14, 17, 20 y 23 feb de 2027",
    "duracion": "6 días / 3 noches",
    "hotel": "Géminis",
    "subtitulo": "Géminis · Desayuno",
    "precio": 339990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 288992,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 70931
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "3 noches de alojamiento",
      "Desayuno",
      "Hotel en el centro"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar."
  },
  {
    "id": "v27-carlos-paz-palmas-del-lago",
    "foto": "../landing-carlos-paz.jpg",
    "fotoAlt": "Reloj Cucú de Villa Carlos Paz",
    "nombre": "Villa Carlos Paz",
    "provincia": "Córdoba",
    "pais": "Argentina",
    "region": "Sierras",
    "puerta": "escapadas",
    "tags": [
      "escapadas",
      "verano-2027"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "4, 7, 10, 13, 16, 19, 22, 25 y 28 ene · 8, 11, 14, 17, 20, 23 y 26 feb de 2027",
    "duracion": "5 días / 3 noches",
    "hotel": "Palmas del Lago",
    "subtitulo": "Palmas del Lago · Media pensión",
    "precio": 349990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 297492,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 72915
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "3 noches de alojamiento",
      "Media pensión",
      "Hotel con dos piscinas: exterior y climatizada"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar.",
    "fotoCredito": "Ezarate · CC BY-SA"
  },
  {
    "id": "v27-merlo-virginia-spa",
    "foto": "../foto-merlo-mirador.jpg",
    "fotoAlt": "Villa de Merlo y el valle desde el Mirador del Águila",
    "nombre": "Villa de Merlo",
    "provincia": "San Luis",
    "pais": "Argentina",
    "region": "Sierras",
    "puerta": "escapadas",
    "tags": [
      "escapadas",
      "verano-2027"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "5, 8, 11, 14, 17, 20, 23, 26 y 29 ene · 10, 13, 16, 19, 22 y 25 feb de 2027",
    "duracion": "5 días / 3 noches",
    "hotel": "Virginia Spa",
    "subtitulo": "Virginia Spa · Media pensión",
    "precio": 339990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 288992,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 70931
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "3 noches de alojamiento",
      "Media pensión",
      "Hotel con dos piscinas: exterior y climatizada"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar.",
    "fotoCredito": "Mariano Melgar · CC BY-SA 3.0"
  },
  {
    "id": "v27-salta-inti-raymi",
    "foto": "../foto-cafayate.jpg",
    "fotoAlt": "Paisaje ilustrativo de la región",
    "nombre": "Salta",
    "provincia": "Salta",
    "pais": "Argentina",
    "region": "Norte",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027"
    ],
    "transporte": "Aéreo con JetSMART",
    "fechas": "20 ene · 16 feb de 2027",
    "duracion": "4 días / 3 noches",
    "hotel": "Inti Raymi",
    "subtitulo": "Inti Raymi · Media pensión",
    "precio": 759990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 645992,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 154231
      }
    },
    "incluye": [
      "Vuelos con JetSMART",
      "Traslados de llegada y salida (In/Out)",
      "Carry on de 10 kg",
      "3 noches de alojamiento",
      "Media pensión"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar.",
    "ilustrativa": true,
    "fotoCredito": "Bernard Gagnon · CC BY-SA 4.0"
  },
  {
    "id": "v27-santa-teresita-turista",
    "foto": "../foto-santa-teresita-playa.jpg",
    "fotoAlt": "Playa de Santa Teresita con el muelle al fondo",
    "nombre": "Santa Teresita",
    "provincia": "Buenos Aires",
    "pais": "Argentina",
    "region": "Costa Atlántica",
    "puerta": "escapadas",
    "tags": [
      "escapadas",
      "verano-2027"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "7, 10, 13, 16, 19, 22, 25, 28 y 31 ene · 3, 13, 16, 19, 22, 25 y 28 feb de 2027",
    "duracion": "4 días / 3 noches",
    "hotel": "Turista",
    "subtitulo": "Turista · Desayuno",
    "precio": 259990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 220992,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 55065
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "3 noches de alojamiento",
      "Desayuno",
      "Hotel a metros del mar"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar.",
    "fotoCredito": "Diegazo2000 · CC BY-SA 4.0"
  },
  {
    "id": "v27-san-bernardo-carmen",
    "foto": "../foto-san-bernardo.jpg",
    "fotoAlt": "Paisaje de San Bernardo",
    "nombre": "San Bernardo",
    "provincia": "Buenos Aires",
    "pais": "Argentina",
    "region": "Costa Atlántica",
    "puerta": "escapadas",
    "tags": [
      "escapadas",
      "verano-2027"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "21 y 24 ene de 2027",
    "duracion": "4 días / 3 noches",
    "hotel": "Carmen",
    "subtitulo": "Carmen · Desayuno",
    "precio": 319990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 271992,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 66965
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "3 noches de alojamiento",
      "Desayuno"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar."
  },
  {
    "id": "v27-mar-de-ajo-atlantic",
    "foto": "../foto-mar-de-ajo-playa.jpg",
    "fotoAlt": "Playa y costa de Mar de Ajó",
    "nombre": "Mar de Ajó",
    "provincia": "Buenos Aires",
    "pais": "Argentina",
    "region": "Costa Atlántica",
    "puerta": "escapadas",
    "tags": [
      "escapadas",
      "verano-2027"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "5, 8, 11, 14, 17, 20, 23, 26 y 29 ene · 1, 9, 12, 15, 18, 21, 24 y 27 feb de 2027",
    "duracion": "4 días / 3 noches",
    "hotel": "Atlantic",
    "subtitulo": "Atlantic · Media pensión",
    "precio": 299990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 254992,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 62998
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "3 noches de alojamiento",
      "Media pensión",
      "Hotel a 30 metros de la playa"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar.",
    "fotoCredito": "Roberto Fiadone · CC BY-SA 4.0"
  },
  {
    "id": "v27-mar-del-plata-riazor",
    "foto": "../foto-mar-del-plata.jpg",
    "fotoAlt": "Paisaje de Mar del Plata",
    "nombre": "Mar del Plata",
    "provincia": "Buenos Aires",
    "pais": "Argentina",
    "region": "Costa Atlántica",
    "puerta": "escapadas",
    "tags": [
      "escapadas",
      "verano-2027"
    ],
    "transporte": "Bus ida y vuelta",
    "fechas": "4, 7, 10, 13, 16, 19, 22, 25, 28 y 31 ene · 3, 9, 12, 15, 18, 21, 24 y 27 feb de 2027",
    "duracion": "4 días / 3 noches",
    "hotel": "Riazor",
    "subtitulo": "Riazor · Pensión completa",
    "precio": 329990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 280492,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 68948
      }
    },
    "incluye": [
      "Bus ida y vuelta",
      "Coordinador permanente",
      "3 noches de alojamiento",
      "Pensión completa"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar."
  },
  {
    "id": "v27-bariloche-internacional",
    "foto": "../foto-bariloche.jpg",
    "fotoAlt": "Paisaje de Bariloche",
    "nombre": "Bariloche",
    "provincia": "Río Negro",
    "pais": "Argentina",
    "region": "Patagonia",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027"
    ],
    "transporte": "Aéreo con JetSMART",
    "fechas": "22 ene · 12 feb de 2027",
    "duracion": "4 días / 3 noches",
    "hotel": "Internacional o similar",
    "subtitulo": "Internacional o similar · Media pensión",
    "precio": 899990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 764992,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 181998
      }
    },
    "incluye": [
      "Vuelos con JetSMART",
      "Traslados de llegada y salida (In/Out)",
      "Carry on de 10 kg",
      "3 noches de alojamiento",
      "Media pensión"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar."
  },
  {
    "id": "v27-ushuaia-les-eclaireurs",
    "foto": "../foto-ushuaia.jpg",
    "fotoAlt": "Paisaje de Ushuaia",
    "nombre": "Ushuaia",
    "provincia": "Tierra del Fuego",
    "pais": "Argentina",
    "region": "Patagonia",
    "puerta": "aereos",
    "tags": [
      "aereos",
      "verano-2027"
    ],
    "transporte": "Aéreo con JetSMART",
    "fechas": "18 feb de 2027",
    "duracion": "5 días / 4 noches",
    "hotel": "Les Eclaireurs",
    "subtitulo": "Les Eclaireurs · Desayuno",
    "precio": 899990,
    "moneda": "ARS",
    "reserva": 0,
    "gastosAdministrativos": 15000,
    "cyber": {
      "hasta": "2026-11-11",
      "precio": 764992,
      "descuento": 15,
      "cuotas": {
        "cantidad": 6,
        "valor": 181998
      }
    },
    "incluye": [
      "Vuelos con JetSMART",
      "Traslados de llegada y salida (In/Out)",
      "Carry on de 10 kg",
      "4 noches de alojamiento",
      "Desayuno"
    ],
    "nota": "Precio por persona. Gastos administrativos por pasajero, aparte del valor del paquete y de las cuotas. Consultar base de habitación. Sujeto a disponibilidad al confirmar."
  },

  /* ---------- BOCA EN COLOMBIA — Final del 21 de noviembre de 2026 ---------- */
  {
    id: "boca-colombia-sin-aereo",
    foto: "../boca-colombia-2026.jpeg",
    fotoAlt: "Boca en Barranquilla: opciones de viaje para la final del 21 de noviembre",
    fotoCompleta: true,
    nombre: "Boca en Colombia · sin aéreo",
    provincia: "Atlántico",
    pais: "Colombia",
    region: "Sudamérica",
    subtitulo: "Final Sudamericana · hotel 3 estrellas y entrada categoría 2",
    puerta: "aereos",
    tags: ["aereos", "boca-colombia"],
    transporte: "Sin aéreo",
    fechas: "20 al 22 nov 2026 · partido 21 nov",
    duracion: "3 días / 2 noches",
    hotel: "Hotel 3 estrellas",
    precio: 2017,
    moneda: "USD",
    incluye: [
      "2 noches de alojamiento con desayuno, del 20 al 22 de noviembre",
      "Traslados al estadio",
      "Entrada a la final del 21 de noviembre, categoría 2"
    ],
    noIncluye: ["Pasajes aéreos"],
    nota: "Tarifa por persona en base doble: USD 1.849 + USD 168 de impuestos = USD 2.017. Consultar disponibilidad, gastos de reserva y condiciones de pago al confirmar."
  },
  {
    id: "boca-colombia-con-aereo",
    foto: "../boca-colombia-2026.jpeg",
    fotoAlt: "Boca en Barranquilla: opciones de viaje para la final del 21 de noviembre",
    fotoCompleta: true,
    nombre: "Boca en Colombia · con aéreo",
    provincia: "Atlántico",
    pais: "Colombia",
    region: "Sudamérica",
    subtitulo: "Final Sudamericana · hotel 4 estrellas, Avianca y entrada categoría 2",
    puerta: "aereos",
    tags: ["aereos", "boca-colombia"],
    transporte: "Aéreo con Avianca",
    fechas: "19 al 22 nov 2026 · partido 21 nov",
    duracion: "4 días / 3 noches",
    hotel: "Hotel 4 estrellas",
    precio: 5758,
    moneda: "USD",
    incluye: [
      "Ticket aéreo de Avianca",
      "Traslados de llegada y salida (In/Out)",
      "3 noches de alojamiento con desayuno, del 19 al 22 de noviembre",
      "Traslados al estadio",
      "Entrada a la final del 21 de noviembre, categoría 2"
    ],
    nota: "Tarifa por persona en base doble: USD 5.279 + USD 479 de impuestos = USD 5.758. Consultar disponibilidad, gastos de reserva, aeropuerto de salida, equipaje y condiciones de pago al confirmar."
  },
  /* ---------- FULL DAY ---------- */
  {
    id: "fd-tandil",
    foto: "../foto-tandil.jpg",
    fotoAlt: "La Piedra Movediza de Tandil al atardecer",
    fotoCredito: "Leopogonza · CC BY-SA 3.0",
    nombre: "Tandil",
    provincia: "Buenos Aires",
    pais: "Argentina",
    region: "Provincia de Buenos Aires",
    puerta: "full-day",
    tags: ["full-day"],
    transporte: "Bus Mix",
    fechas: "14 nov",
    duracion: "1 día",
    precio: 119990,
    precioLista: 129990,
    moneda: "ARS",
    reserva: 0,
    incluye: [
      "Traslado ida y vuelta en el día",
      "Visitas guiadas por el casco histórico",
      "Almuerzo completo con bebida",
      "Visita a regionales",
      "Coordinador permanente"
    ]
  },
  {
    "id": "fd-guaychu",
    "foto": "../foto-termas-guaychu.jpg",
    "fotoAlt": "Pileta climatizada del complejo termal de Gualeguaychú",
    "nombre": "Termas del Guaychú",
    "provincia": "Entre Ríos",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "full-day",
    "tags": [
      "full-day",
      "termas"
    ],
    "transporte": "Bus · servicio según fecha",
    "fechas": "15 nov · 29 nov",
    "duracion": "1 día",
    "precio": 105990,
    "precioLista": 124990,
    "moneda": "ARS",
    "reserva": 0,
    "incluye": [
      "Traslado ida y vuelta en el día",
      "Entrada al complejo termal",
      "Visita a regionales",
      "Coordinador permanente"
    ],
    "salidas": [
      {
        "fechas": "15 nov",
        "precio": 105990,
        "transporte": "Bus Mix",
        "incluye": [
          "Traslado ida y vuelta en el día",
          "Entrada al complejo termal",
          "Visita a regionales",
          "Coordinador permanente"
        ],
        "precioLista": 124990
      },
      {
        "fechas": "29 nov",
        "precio": 79990,
        "precioLista": 97000,
        "gastosAdministrativos": 10000,
        "condicionPago": "Pago en efectivo",
        "transporte": "Bus semicama",
        "incluye": [
          "Traslado ida y vuelta en el día",
          "Coordinación"
        ]
      }
    ]
  },
  {
    "id": "fd-rosario-san-nicolas",
    "foto": "../foto-rosario.jpg",
    "fotoAlt": "El Monumento a la Bandera, en Rosario",
    "fotoCredito": "Ermell · CC BY-SA 4.0",
    "nombre": "Rosario y Virgen de San Nicolás",
    "provincia": "Santa Fe Buenos Aires",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "full-day",
    "tags": [
      "full-day"
    ],
    "transporte": "Bus · servicio según fecha",
    "fechas": "21 nov · 28 nov",
    "duracion": "1 día",
    "precio": 105990,
    "precioLista": 124990,
    "moneda": "ARS",
    "reserva": 0,
    "incluye": [
      "Traslado ida y vuelta en el día",
      "Almuerzo completo con bebida",
      "Visita al Santuario de la Virgen de San Nicolás",
      "Visita al Monumento a la Bandera",
      "Tiempo libre en la costanera",
      "Coordinador permanente"
    ],
    "salidas": [
      {
        "fechas": "21 nov",
        "precio": 105990,
        "transporte": "Bus Mix",
        "incluye": [
          "Traslado ida y vuelta en el día",
          "Almuerzo completo con bebida",
          "Visita al Santuario de la Virgen de San Nicolás",
          "Visita al Monumento a la Bandera",
          "Tiempo libre en la costanera",
          "Coordinador permanente"
        ],
        "precioLista": 124990
      },
      {
        "fechas": "28 nov",
        "precio": 89990,
        "precioLista": 109000,
        "gastosAdministrativos": 10000,
        "condicionPago": "Pago en efectivo",
        "transporte": "Bus semicama",
        "incluye": [
          "Traslado ida y vuelta en el día",
          "Coordinación",
          "Visita a regionales"
        ]
      }
    ]
  },
  {
    id: "fd-chascomus",
    foto: "../foto-chascomus.jpg",
    fotoAlt: "Atardecer sobre la laguna de Chascomús",
    fotoCredito: "Pinpa82 · CC BY-SA 4.0",
    nombre: "Chascomús",
    provincia: "Buenos Aires",
    pais: "Argentina",
    region: "Provincia de Buenos Aires",
    puerta: "full-day",
    tags: ["full-day"],
    transporte: "Bus Mix",
    fechas: "Consultá próximas fechas",
    duracion: "1 día",
    precio: 105990,
    precioLista: 124990,
    moneda: "ARS",
    reserva: 0,
    incluye: [
      "Traslado ida y vuelta en el día",
      "Visita guiada por la localidad",
      "Almuerzo con parrilla libre",
      "Tiempo libre en la costanera",
      "Coordinador permanente"
    ]
  },
  {
    "id": "fd-villa-elisa",
    "foto": "../foto-termas-villa-elisa.jpg",
    "fotoAlt": "Piletas del complejo termal de Villa Elisa",
    "nombre": "Termas de Villa Elisa",
    "provincia": "Entre Ríos",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "full-day",
    "tags": [
      "full-day",
      "termas"
    ],
    "transporte": "Bus · servicio según fecha",
    "fechas": "29 nov · 6 y 20 dic",
    "duracion": "1 día",
    "precio": 105990,
    "precioLista": 124990,
    "moneda": "ARS",
    "reserva": 0,
    "incluye": [
      "Traslado ida y vuelta en el día",
      "Entrada al complejo termal",
      "Visita a regionales",
      "Coordinador permanente"
    ],
    "salidas": [
      {
        "fechas": "29 nov",
        "precio": 105990,
        "transporte": "Bus Mix",
        "incluye": [
          "Traslado ida y vuelta en el día",
          "Entrada al complejo termal",
          "Visita a regionales",
          "Coordinador permanente"
        ],
        "precioLista": 124990
      },
      {
        "fechas": "6 y 20 dic",
        "precio": 114990,
        "condicionPago": "Efectivo o transferencia",
        "cuotas": {
          "cantidad": 6,
          "valor": 26834
        },
        "transporte": "Bus Mix",
        "incluye": [
          "Traslado ida y vuelta en el día",
          "Entrada al complejo termal",
          "Visita a regionales",
          "Coordinador permanente"
        ]
      }
    ]
  },
  {
    id: "fd-villa-elisa-madre",
    foto: "../foto-termas-villa-elisa.jpg",
    fotoAlt: "Piletas del complejo termal de Villa Elisa",
    nombre: "Termas de Villa Elisa — Día de la Madre",
    provincia: "Entre Ríos",
    pais: "Argentina",
    region: "Litoral",
    puerta: "full-day",
    tags: ["full-day", "termas"],
    transporte: "Bus Mix",
    fechas: "Consultá próximas fechas",
    duracion: "1 día",
    precio: 105990,
    precioLista: 124990,
    moneda: "ARS",
    reserva: 0,
    destacado: "Pagan 3 y mamá viaja gratis",
    incluye: [
      "Traslado ida y vuelta en el día",
      "Entrada al complejo termal",
      "Visita a regionales",
      "Coordinador permanente"
    ]
  },
  {
    "id": "fd-san-pedro",
    "foto": "../landing-san-pedro.jpg",
    "fotoAlt": "La Campiña de San Pedro sobre el río",
    "nombre": "San Pedro y La Campiña",
    "provincia": "Buenos Aires",
    "pais": "Argentina",
    "region": "Provincia de Buenos Aires",
    "puerta": "full-day",
    "tags": [
      "full-day"
    ],
    "transporte": "Bus · servicio según fecha",
    "fechas": "22 nov · 5 y 19 dic",
    "duracion": "1 día",
    "precio": 105990,
    "precioLista": 124990,
    "moneda": "ARS",
    "reserva": 0,
    "incluye": [
      "Traslado ida y vuelta en el día",
      "Visita guiada por la campiña",
      "Almuerzo con parrilla libre",
      "Tiempo libre en Vuelta de Obligado",
      "Coordinador permanente"
    ],
    "salidas": [
      {
        "fechas": "22 nov",
        "precio": 105990,
        "transporte": "Bus Mix",
        "incluye": [
          "Traslado ida y vuelta en el día",
          "Visita guiada por la campiña",
          "Almuerzo con parrilla libre",
          "Tiempo libre en Vuelta de Obligado",
          "Coordinador permanente"
        ],
        "precioLista": 124990
      },
      {
        "fechas": "5 y 19 dic",
        "precio": 109990,
        "condicionPago": "Efectivo o transferencia",
        "cuotas": {
          "cantidad": 6,
          "valor": 25664
        },
        "transporte": "Bus Mix",
        "incluye": [
          "Traslado ida y vuelta en el día",
          "Visita guiada a La Campiña",
          "Almuerzo con parrilla libre, guarnición, postre y bebida sin alcohol",
          "Tiempo libre en Vuelta de Obligado",
          "Coordinador permanente"
        ]
      }
    ]
  },
  {
    "id": "fd-colon",
    "foto": "../foto-colon.jpg",
    "fotoAlt": "Costanera de Colón al atardecer",
    "nombre": "Termas de Colón",
    "provincia": "Entre Ríos",
    "pais": "Argentina",
    "region": "Litoral",
    "puerta": "full-day",
    "tags": [
      "full-day",
      "termas"
    ],
    "transporte": "Bus · servicio según fecha",
    "fechas": "28 nov · 5 y 19 dic",
    "duracion": "1 día",
    "precio": 99990,
    "precioLista": 114990,
    "moneda": "ARS",
    "reserva": 0,
    "incluye": [
      "Traslado ida y vuelta en el día",
      "Entrada al complejo termal",
      "Visita a regionales",
      "Coordinador permanente"
    ],
    "salidas": [
      {
        "fechas": "28 nov",
        "precio": 99990,
        "transporte": "Bus Mix",
        "incluye": [
          "Traslado ida y vuelta en el día",
          "Entrada al complejo termal",
          "Visita a regionales",
          "Coordinador permanente"
        ],
        "precioLista": 114990
      },
      {
        "fechas": "5 y 19 dic",
        "precio": 104990,
        "condicionPago": "Efectivo o transferencia",
        "cuotas": {
          "cantidad": 6,
          "valor": 24500
        },
        "transporte": "Bus Mix",
        "incluye": [
          "Traslado ida y vuelta en el día",
          "Entrada al complejo termal",
          "Visita a regionales",
          "Coordinador permanente"
        ]
      }
    ]
  },

  /* ---------- FULL DAY (collage vertical) ----------
     Los dos usan el collage del operador entero, sin recortar: son
     verticales y llevan `fotoCompleta`. */
  {
    id: "fd-uribelarrea",
    foto: "../collage-uribelarrea.jpg",
    fotoAlt: "Pórtico de entrada y pulpería de Uribelarrea",
    fotoCompleta: true,
    nombre: "Uribelarrea",
    provincia: "Buenos Aires",
    pais: "Argentina",
    region: "Provincia de Buenos Aires",
    puerta: "full-day",
    tags: ["full-day"],
    transporte: "Bus",
    /* El flyer traía el sábado 22 de agosto, que ya pasó. Matías pidió
       dejarlo publicado a la espera de fecha nueva. */
    fechas: "Consultar fechas",
    duracion: "1 día",
    precio: 105000,
    moneda: "ARS",
    reserva: 0,
    incluye: [
      "Bus ida y vuelta en el día",
      "Parrilla libre en El Palenque",
      "Visita guiada por el pueblo",
      "Coordinador permanente",
      "Menores de 3 a 10 años: $85.000"
    ]
  },
  /* ---------- ESCAPADAS EN BUS — cuotas sin interés ----------
     Cada paquete tiene 2 o 3 circuitos según el régimen: la tarjeta muestra
     "Desde" el más barato y la lista completa adentro (decisión de Matías,
     24/08). Los flyers no traen fecha de salida, sólo los meses, así que
     `fechas` dice "Consultar fecha" con los meses disponibles — y por eso
     todavía NO están en el tablero: una salida sin fecha no se puede reservar.
     Gastos de reserva: $15.000 por pasajero en todos.
     Las fotos son los collages del operador, enteros y sin recortar. */
  {
    id: "bus-merlo-oa",
    foto: "../collage-merlo.jpg",
    fotoAlt: "Sierras de Merlo, piletas y comedor del hotel",
    fotoCompleta: true,
    nombre: "Merlo",
    provincia: "San Luis",
    pais: "Argentina",
    region: "Sierras",
    puerta: "escapadas",
    tags: ["escapadas"],
    transporte: "Bus semicama",
    fechas: "Consultar fecha · noviembre y diciembre",
    duracion: "6 días / 4 noches",
    hotel: "Clima 3 / Gran Parque",
    precio: 333940,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Circuito 1 · Desayuno", precio: 333940 },
      { nombre: "Circuito 2 · Pensión completa", precio: 429780 },
      { nombre: "Circuito 3 · Pensión completa con barra libre", precio: 527840 }
    ],
    incluye: [
      "Bus semicama ida y vuelta",
      "4 noches de alojamiento",
      "Salida grupal con coordinador",
      "Circuito 3: bebidas, barra libre, merienda, baile, actividades recreativas y cupón de casino"
    ]
  },
  {
    id: "bus-villa-giardino-oa",
    foto: "../collage-villa-giardino.jpg",
    fotoAlt: "Río y arboleda de Villa Giardino, con el Cristo de La Cumbre",
    fotoCompleta: true,
    nombre: "Villa Giardino",
    provincia: "Córdoba",
    pais: "Argentina",
    region: "Sierras",
    puerta: "escapadas",
    tags: ["escapadas"],
    transporte: "Bus semicama",
    fechas: "Consultar fecha · noviembre y diciembre",
    duracion: "6 días / 4 noches",
    hotel: "Luz y Fuerza — habitación standard",
    precio: 436940,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Circuito 1 · Pensión completa", precio: 436940 },
      { nombre: "Circuito 2 · Pensión completa con excursiones", precio: 466380 }
    ],
    incluye: [
      "Bus semicama ida y vuelta",
      "4 noches de alojamiento con pensión completa",
      "Piscina cubierta en el hotel",
      "Coordinador permanente",
      "Circuito 2: excursiones a La Cumbre y Los Cocos"
    ]
  },
  {
    id: "bus-san-bernardo-oa",
    foto: "../collage-san-bernardo.jpg",
    fotoAlt: "Playa de San Bernardo, pileta climatizada del hotel y Paseo del Centro",
    fotoCompleta: true,
    nombre: "San Bernardo",
    provincia: "Buenos Aires",
    pais: "Argentina",
    region: "Costa Atlántica",
    puerta: "escapadas",
    tags: ["escapadas"],
    transporte: "Bus semicama",
    fechas: "Consultar fecha · diciembre",
    duracion: "5 días / 4 noches",
    hotel: "The New Place — piscina y comedor",
    precio: 292180,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Circuito 1 · Desayuno", precio: 292180 },
      { nombre: "Circuito 2 · Pensión completa con actividades", precio: 439250 }
    ],
    incluye: [
      "Bus semicama ida y vuelta",
      "4 noches de alojamiento",
      "Salida grupal con coordinador",
      "Circuito 2: merienda express, noche de baile, noche de cine o karaoke, visita a casa de alfajores, aquagym, juegos de mesa y city tour"
    ]
  },
  {
    id: "bus-copahue-oa",
    foto: "../collage-copahue.jpg",
    fotoAlt: "Lago Caviahue, piletas termales de Copahue y la villa al pie del volcán",
    fotoCompleta: true,
    nombre: "Termas de Copahue",
    provincia: "Neuquén",
    pais: "Argentina",
    region: "Patagonia",
    puerta: "escapadas",
    tags: ["escapadas", "termas"],
    transporte: "Bus cama",
    fechas: "Consultar fecha · diciembre",
    duracion: "7 días / 4 noches",
    hotel: "Termas de Copahue",
    precio: 940180,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Circuito 1 · Media pensión", precio: 940180 },
      { nombre: "Circuito 2 · Pensión completa", precio: 1074980 }
    ],
    incluye: [
      "Bus cama ida y vuelta",
      "4 noches de alojamiento",
      "Salida grupal con coordinador",
      "Visita a Villa Caviahue"
    ]
  },
  {
    id: "bus-ruinas-termas-volcanes-oa",
    foto: "../collage-ruinas-termas-volcanes.jpg",
    fotoAlt: "Formaciones de piedra, termas de Fiambalá y cerros del noroeste",
    fotoCompleta: true,
    nombre: "Ruinas, Termas y Volcanes",
    provincia: "Catamarca",
    pais: "Argentina",
    region: "Norte NOA",
    puerta: "escapadas",
    tags: ["escapadas", "termas"],
    transporte: "Bus cama",
    fechas: "Consultar fecha · noviembre",
    duracion: "8 días / 5 noches",
    hotel: "A confirmar — 2 noches en Aimogasta, 2 en Belén y 1 en Tafí del Valle",
    precio: 965880,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Circuito 1 · Media pensión", precio: 965880 },
      { nombre: "Circuito 2 · Media pensión con Piedra Pómez", precio: 1214340 }
    ],
    incluye: [
      "Bus cama ida y vuelta",
      "5 noches de alojamiento con media pensión",
      "Ruta del Adobe, Termas de Fiambalá, Belén, Londres y El Shincal",
      "Santa María, Amaicha del Valle, Abra del Infiernillo y Quebrada de los Sosa",
      "Coordinador permanente",
      "Circuito 2: excursión a Piedra Pómez en camioneta",
      "No incluye entradas a los sitios"
    ]
  },

  /* ---------- ESCAPADAS EN BUS — temporada baja ---------- */
  {
    id: "bus-huerta-grande-mv",
    foto: "../collage-huerta-grande.jpg",
    fotoAlt: "Arroyo y parque de Huerta Grande, en las sierras de Córdoba",
    fotoCompleta: true,
    nombre: "Huerta Grande",
    provincia: "Córdoba",
    pais: "Argentina",
    region: "Sierras",
    puerta: "escapadas",
    tags: ["escapadas"],
    transporte: "Bus semicama",
    fechas: "11 nov",
    duracion: "5 días / 3 noches",
    hotel: "11 de Junio (Sindicato del Vidrio)",
    precio: 279999,
    moneda: "ARS",
    reserva: 10000,
    incluye: [
      "Bus semicama ida y vuelta",
      "3 noches de alojamiento con pensión completa",
      "Coordinador permanente"
    ]
  },
  /* ---------- ESCAPADAS EN BUS — Oct a Dic ---------- */
  {
    id: "bus-federacion-clima-termal",
    foto: "../foto-federacion.jpg",
    fotoAlt: "Pileta climatizada bajo la cúpula del parque termal de Federación",
    nombre: "Termas de Federación",
    provincia: "Entre Ríos",
    pais: "Argentina",
    region: "Litoral",
    subtitulo: "Hotel Clima Termal Suite",
    puerta: "escapadas",
    tags: ["escapadas", "termas"],
    transporte: "Bus semicama",
    fechas: "Noviembre y diciembre",
    duracion: "5 días / 4 noches",
    hotel: "Clima Termal Suite / Ex Apart La Fuente",
    precio: 268340,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Desayuno", precio: 268340, tercerPax: 188340 },
      { nombre: "Media pensión", precio: 356580, tercerPax: 276580 }
    ],
    incluye: ["Bus semicama ida y vuelta", "4 noches de alojamiento", "Salida grupal con coordinador"]
  },
  {
    id: "bus-federacion-paraiso",
    foto: "../foto-paraiso-termal.jpg",
    fotoAlt: "Pileta del Hotel Paraíso Termal, en Federación",
    fotoCredito: "Hotel Paraíso Termal",
    nombre: "Termas de Federación",
    provincia: "Entre Ríos",
    pais: "Argentina",
    region: "Litoral",
    subtitulo: "Hotel Paraíso Termal",
    puerta: "escapadas",
    tags: ["escapadas", "termas"],
    transporte: "Bus semicama",
    fechas: "Noviembre y diciembre",
    duracion: "5 días / 4 noches",
    hotel: "Paraíso Termal / Guarumba",
    precio: 327180,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Desayuno", precio: 327180, tercerPax: 237180 },
      { nombre: "Media pensión", precio: 409580, tercerPax: 319580 }
    ],
    incluye: ["Bus semicama ida y vuelta", "4 noches de alojamiento", "Salida grupal con coordinador"]
  },
  {
    id: "bus-san-bernardo",
    foto: "../foto-san-bernardo.jpg",
    fotoAlt: "Playa de San Bernardo",
    nombre: "San Bernardo",
    provincia: "Buenos Aires",
    pais: "Argentina",
    region: "Costa Atlántica",
    puerta: "escapadas",
    tags: ["escapadas", "playa"],
    transporte: "Bus semicama",
    fechas: "Diciembre",
    duracion: "5 días / 4 noches",
    hotel: "The New Place — piscina y comedor",
    precio: 292180,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Desayuno", precio: 292180 },
      { nombre: "Pensión completa", precio: 439250 }
    ],
    incluye: [
      "Bus semicama ida y vuelta",
      "4 noches de alojamiento",
      "Salida grupal con coordinador",
      "Circuito 2: merienda express, noche de baile, cine o karaoke, casa de alfajores, aquagym, juegos de mesa y city tour"
    ]
  },
  {
    id: "bus-copahue",
    foto: "../foto-copahue.jpg",
    fotoAlt: "Complejo termal de Copahue con el volcán de fondo",
    nombre: "Termas de Copahue",
    provincia: "Neuquén",
    pais: "Argentina",
    region: "Patagonia",
    puerta: "escapadas",
    tags: ["escapadas", "termas"],
    transporte: "Bus cama",
    fechas: "Diciembre",
    duracion: "7 días / 4 noches",
    hotel: "Termas de Copahue",
    precio: 940180,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Media pensión", precio: 940180 },
      { nombre: "Pensión completa", precio: 1074980 }
    ],
    incluye: ["Bus cama ida y vuelta", "4 noches de alojamiento", "Visita a Villa Caviahue", "Salida grupal con coordinador"]
  },
  {
    id: "bus-la-falda",
    foto: "../foto-la-falda.jpg",
    fotoAlt: "Vista del valle y las sierras desde La Falda",
    nombre: "La Falda",
    provincia: "Córdoba",
    pais: "Argentina",
    region: "Sierras",
    puerta: "escapadas",
    tags: ["escapadas", "sierras"],
    transporte: "Bus semicama",
    fechas: "Noviembre y diciembre",
    duracion: "6 días / 4 noches",
    hotel: "San Jorge — habitación standard",
    precio: 348640,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Pensión completa", precio: 348640 },
      { nombre: "Pensión completa + La Cumbre y Los Cocos", precio: 376580 }
    ],
    incluye: ["Bus semicama ida y vuelta", "4 noches de alojamiento", "Piscina climatizada", "Coordinador"]
  },
  {
    id: "bus-catamarca-magica",
    foto: "../foto-catamarca-termas.jpg",
    fotoAlt: "Pileta de aguas termales entre la piedra y la vegetación, en Catamarca",
    nombre: "Catamarca Mágica",
    provincia: "Catamarca",
    pais: "Argentina",
    region: "Norte NOA",
    puerta: "escapadas",
    tags: ["escapadas", "norte"],
    transporte: "Bus cama",
    fechas: "Noviembre",
    duracion: "7 días / 4 noches",
    hotel: "De Turismo, Tinogasta",
    precio: 815440,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Media pensión", precio: 815440 },
      { nombre: "Media pensión + Ruta de los SeisMil", precio: 885440 }
    ],
    incluye: ["Bus cama ida y vuelta", "4 noches de alojamiento", "Ruta del Adobe", "Termas de Fiambalá (sin entradas)", "Salida grupal con coordinador"]
  },
  {
    id: "bus-iguazu",
    foto: "../foto-iguazu.jpg",
    fotoAlt: "Cataratas del Iguazú",
    nombre: "Cataratas del Iguazú",
    provincia: "Misiones",
    pais: "Argentina",
    region: "Litoral",
    puerta: "escapadas",
    tags: ["escapadas", "litoral"],
    transporte: "Bus semicama",
    fechas: "Noviembre",
    duracion: "7 días / 4 noches",
    hotel: "Tropical, Puerto Iguazú",
    precio: 571180,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [{ nombre: "Media pensión", precio: 571180 }],
    incluye: [
      "Bus semicama ida y vuelta",
      "4 noches de alojamiento",
      "Ruinas de San Ignacio y Minas de Wanda",
      "Cataratas lado argentino y lado brasilero (sin entradas)",
      "Salida grupal con coordinador"
    ]
  },
  {
    id: "bus-laguna-brava-oct",
    foto: "../foto-laguna-brava.jpg",
    fotoAlt: "Volcán y flamencos en la laguna de altura de Laguna Brava",
    nombre: "Laguna Brava y Valles Milenarios",
    provincia: "La Rioja",
    pais: "Argentina",
    region: "Cuyo Norte NOA",
    subtitulo: "Salidas de noviembre",
    puerta: "escapadas",
    tags: ["escapadas", "norte"],
    transporte: "Bus cama",
    fechas: "Noviembre",
    duracion: "7 días / 4 noches",
    hotel: "Cuesta de Miranda 2, Villa Unión",
    precio: 737980,
    moneda: "ARS",
    reserva: 15000,
    destacado: "Nuevo destino",
    circuitos: [
      { nombre: "Desayuno", precio: 737980 },
      { nombre: "Media pensión", precio: 894640 },
      { nombre: "Media pensión + Talampaya y Valle de la Luna", precio: 971180 }
    ],
    incluye: ["Bus cama ida y vuelta", "4 noches de alojamiento", "Laguna Brava en excursión 4x4", "Salida grupal con coordinador"]
  },
  {
    id: "bus-mendoza-cacheuta",
    foto: "../foto-mendoza-vinedos.jpg",
    fotoAlt: "Hileras de viñedos mendocinos con la cordillera nevada de fondo",
    nombre: "Mendoza y Termas de Cacheuta",
    provincia: "Mendoza",
    pais: "Argentina",
    region: "Cuyo",
    subtitulo: "En bus semicama",
    puerta: "escapadas",
    tags: ["escapadas", "termas", "cuyo"],
    transporte: "Bus semicama",
    fechas: "Noviembre",
    duracion: "6 días / 4 noches",
    hotel: "Cordón del Plata",
    precio: 481740,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Desayuno", precio: 481740 },
      { nombre: "Media pensión + tour Mendoza y bodega", precio: 605480 },
      { nombre: "Media pensión + Alta Montaña", precio: 711440 }
    ],
    incluye: ["Bus semicama ida y vuelta", "4 noches de alojamiento", "Termas de Cacheuta (sin entrada)", "Salida grupal con coordinador"]
  },
  {
    id: "bus-puerto-madryn",
    foto: "../foto-puerto-madryn.jpg",
    fotoAlt: "Ballenas francas australes frente a la costa de Puerto Madryn",
    nombre: "Puerto Madryn",
    provincia: "Chubut",
    pais: "Argentina",
    region: "Patagonia",
    puerta: "escapadas",
    tags: ["escapadas", "patagonia"],
    transporte: "Bus semicama",
    fechas: "Noviembre",
    duracion: "7 días / 4 noches",
    hotel: "Rayentray — habitación con vista al mar",
    precio: 632880,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Desayuno", precio: 632880 },
      { nombre: "Media pensión", precio: 679980 },
      { nombre: "Media pensión + avistaje de ballenas", precio: 998180 }
    ],
    incluye: [
      "Bus semicama ida y vuelta",
      "4 noches de alojamiento",
      "Spa y piscina",
      "Valle Inferior: Trelew, Rawson, Playa Unión y Gaimán",
      "Salida grupal con coordinador"
    ]
  },
  {
    id: "bus-carlos-paz",
    foto: "../landing-carlos-paz.jpg",
    fotoAlt: "El Reloj Cucú, ícono de Villa Carlos Paz",
    fotoCredito: "Ezarate · CC BY-SA",
    nombre: "Villa Carlos Paz",
    provincia: "Córdoba",
    pais: "Argentina",
    region: "Sierras",
    puerta: "escapadas",
    tags: ["escapadas", "sierras"],
    transporte: "Bus semicama",
    fechas: "Noviembre y diciembre",
    duracion: "6 días / 4 noches",
    hotel: "El Mirador",
    precio: 314740,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Desayuno", precio: 314740 },
      { nombre: "Media pensión", precio: 357940, nota: "$371.480 en noviembre y diciembre" },
      { nombre: "Pensión completa", precio: 415640, nota: "$442.680 en noviembre y diciembre" }
    ],
    incluye: ["Bus semicama ida y vuelta", "4 noches de alojamiento", "Hidromasaje climatizado, gimnasio y sala de juegos", "Coordinador"]
  },

  /* ---------- VOLÁ LEJOS, PAGÁ EN CUOTAS — aéreos ---------- */
  /* Machu Picchu va acá por decisión de Matías (24/08). No es aéreo —viaja
     en bus cama— pero es el único lugar de la web para un viaje grande y
     largo, y es la puerta de "pagá en cuotas". Es el primer paquete en
     dólares: `moneda: "USD"` hace que se muestre "USD 1.999" y no "$1.999".
     Por eso mismo NO está en el tablero: `salidas.precio_pax` guarda pesos y
     no hay campo de moneda, así que cargarlo ahí daría una comisión falsa. */
  {
    id: "aereo-machu-picchu-2027",
    foto: "../collage-machu-picchu.jpg",
    fotoAlt: "Machu Picchu, el altiplano y la Quebrada de Humahuaca",
    fotoCompleta: true,
    nombre: "Machu Picchu Premium 2027",
    provincia: "Cusco",
    pais: "Perú",
    region: "Sudamérica",
    puerta: "aereos",
    tags: ["aereos"],
    transporte: "Bus cama",
    fechas: "16 may 2027",
    duracion: "17 días / 13 noches",
    hotel: "A confirmar — Tilcara, San Pedro de Atacama, Arica, Arequipa, Cusco, Aguas Calientes y La Paz",
    precio: 1999,
    moneda: "USD",
    reserva: 100,
    destacado: "Argentina, Chile, Perú y Bolivia en un solo viaje",
    incluye: [
      "Bus cama y media pensión durante todo el viaje",
      "Coordinador permanente",
      "4 noches en Cusco, 2 en Arequipa, 2 en La Paz y 1 en Aguas Calientes",
      "Excursión a Machu Picchu con entrada, guía, bus y tren de retorno",
      "City tour por Cusco más 4 ruinas, city tour por Arequipa",
      "Navegación por el lago Titicaca y visita a Purmamarca",
      "No incluye entradas a las ruinas del city tour de Cusco"
    ]
  },
  {
    id: "aereo-bariloche",
    foto: "../foto-bariloche.jpg",
    fotoAlt: "Lago y cordillera en Bariloche",
    nombre: "Bariloche",
    provincia: "Río Negro",
    pais: "Argentina",
    region: "Patagonia",
    puerta: "aereos",
    tags: ["aereos", "patagonia"],
    transporte: "Aéreo JetSmart",
    fechas: "14 y 15 nov",
    duracion: "6 días / 5 noches",
    hotel: "Patagonia Sur",
    precio: 616780,
    moneda: "ARS",
    reserva: 15000,
    destacado: "Descuento en triple: $181.000",
    circuitos: [
      { nombre: "Desayuno buffet", precio: 616780 },
      { nombre: "Media pensión", precio: 765380 },
      { nombre: "Media pensión + 7 lagos con San Martín de los Andes", precio: 848740 }
    ],
    incluye: [
      "Aéreo ida y vuelta con equipaje incluido",
      "Transfer in/out",
      "5 noches de alojamiento",
      "Llao Llao con punto panorámico, Cerro Campanario y fábrica de chocolates",
      "Cobertura de salud"
    ]
  },
  {
    id: "aereo-salta",
    foto: "../foto-cafayate.jpg",
    fotoAlt: "Quebrada de las Conchas, Cafayate",
    fotoCredito: "Bernard Gagnon · CC BY-SA 4.0",
    nombre: "Salta",
    provincia: "Salta",
    pais: "Argentina",
    region: "Norte NOA",
    puerta: "aereos",
    tags: ["aereos", "norte"],
    transporte: "Aéreo JetSmart",
    fechas: "14 y 25 nov · 1 dic",
    duracion: "5 días / 4 noches",
    hotel: "Mirador del Cerro",
    precio: 562640,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Desayuno buffet", precio: 562640 },
      { nombre: "Media pensión", precio: 684880 },
      { nombre: "Media pensión + Cafayate y bodega", precio: 802940 }
    ],
    incluye: [
      "Aéreo ida y vuelta con equipaje incluido",
      "Transfer in/out",
      "4 noches de alojamiento",
      "City tour, Quebrada San Lorenzo, Cerro San Bernardo y mercado artesanal",
      "Cobertura de salud"
    ]
  },
  {
    id: "aereo-mendoza-cacheuta",
    foto: "../foto-cacheuta.jpg",
    fotoAlt: "Piletas termales de Cacheuta entre las rocas del cañón",
    nombre: "Mendoza y Termas de Cacheuta",
    provincia: "Mendoza",
    pais: "Argentina",
    region: "Cuyo",
    subtitulo: "En avión, salida de diciembre",
    puerta: "aereos",
    tags: ["aereos", "termas", "cuyo"],
    transporte: "Aéreo JetSmart",
    fechas: "Salida 1 de diciembre",
    duracion: "5 días / 4 noches",
    hotel: "M. Céntrico",
    precio: 642440,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Desayuno buffet", precio: 642440 },
      { nombre: "Media pensión + tour Mendoza y bodega", precio: 824780 },
      { nombre: "Media pensión + Alta Montaña", precio: 924780 }
    ],
    incluye: [
      "Aéreo ida y vuelta con equipaje incluido",
      "Transfer in/out",
      "4 noches de alojamiento",
      "Termas de Cacheuta (sin entrada)",
      "Cobertura de salud"
    ]
  },
  {
    id: "aereo-esquel-tulipanes",
    foto: "../foto-esquel-tulipanes.jpg",
    fotoAlt: "Campo de tulipanes en flor frente a los cerros nevados de Esquel",
    nombre: "Esquel y Campo de Tulipanes",
    provincia: "Chubut",
    pais: "Argentina",
    region: "Patagonia",
    puerta: "aereos",
    tags: ["aereos", "patagonia"],
    transporte: "Aéreo",
    fechas: "Consultá próximas fechas",
    duracion: "4 días / 3 noches",
    hotel: "Tehuelche",
    precio: 1402780,
    moneda: "ARS",
    reserva: 15000,
    circuitos: [
      { nombre: "Desayuno", precio: 1402780 },
      { nombre: "Desayuno + PN Los Alerces", precio: 1499980 },
      { nombre: "Media pensión + PN Los Alerces", precio: 1572980 }
    ],
    incluye: [
      "Aéreo ida y vuelta con equipaje incluido",
      "Transfer in/out",
      "3 noches de alojamiento",
      "Campo de Tulipanes, Cascadas Nant y Fall y Trevelin (sin entradas)",
      "Cobertura de salud"
    ]
  },
  {
    id: "aereo-calafate-ushuaia",
    foto: "../foto-ushuaia.jpg",
    fotoAlt: "Glaciar Perito Moreno",
    nombre: "El Calafate y Ushuaia",
    provincia: "Santa Cruz Tierra del Fuego",
    pais: "Argentina",
    region: "Patagonia",
    puerta: "aereos",
    tags: ["aereos", "patagonia"],
    transporte: "Aéreo Aerolíneas Argentinas",
    fechas: "Noviembre y diciembre",
    duracion: "7 días / 6 noches",
    hotel: "Ushuaia (Ushuaia) + Tehuel (El Calafate)",
    precio: 1543840,
    moneda: "ARS",
    reserva: 15000,
    destacado: "Descuento en triple: $155.680",
    circuitos: [
      { nombre: "Desayuno", precio: 1543840 },
      { nombre: "Desayuno buffet en Ushuaia + media pensión en El Calafate", precio: 1633040 }
    ],
    incluye: [
      "Aéreo ida y vuelta con equipaje incluido",
      "Transfer in/out",
      "6 noches de alojamiento",
      "Parque Nacional Tierra del Fuego y Parque Nacional Los Glaciares (sin entradas)",
      "Cobertura de salud"
    ]
  },
  {
    id: "brasil-buzios-arraial-coronado",
    foto: "../foto-arraial.jpg",
    fotoAlt: "Bahía de Arraial do Cabo desde lo alto",
    nombre: "Búzios y Arraial do Cabo",
    provincia: "Río de Janeiro",
    pais: "Brasil",
    region: "Nordeste",
    subtitulo: "Hotel Coronado Beach",
    puerta: "aereos",
    tags: ["aereos", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "6 dic",
    duracion: "7 días / 6 noches",
    hotel: "Coronado Beach — frente a la playa de João Fernandes",
    precio: 1140,
    moneda: "USD",
    reserva: 50,
    circuitos: [
      { nombre: "Desayuno y merienda", precio: 1140 },
      { nombre: "Media pensión y merienda", precio: 1250 },
      { nombre: "Media pensión + excursión Arraial do Cabo", precio: 1310 }
    ],
    incluye: ["Aéreo ida y vuelta con equipaje incluido", "Traslados in/out", "6 noches de alojamiento", "Cobertura de salud"]
  },
  {
    id: "brasil-buzios-arraial-brisas",
    foto: "../foto-arraial.jpg",
    fotoAlt: "Bahía de Arraial do Cabo desde lo alto",
    nombre: "Búzios y Arraial do Cabo",
    provincia: "Río de Janeiro",
    pais: "Brasil",
    region: "Nordeste",
    subtitulo: "Pousada Brisas de Buzios",
    puerta: "aereos",
    tags: ["aereos", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "6 dic",
    duracion: "7 días / 6 noches",
    hotel: "Pousada Brisas de Buzios",
    precio: 930,
    moneda: "USD",
    reserva: 50,
    circuitos: [
      { nombre: "Desayuno", precio: 930 },
      { nombre: "Desayuno + excursión Arraial do Cabo", precio: 1040 }
    ],
    incluye: ["Aéreo ida y vuelta con equipaje incluido", "Traslados in/out", "6 noches de alojamiento", "Cobertura de salud"]
  },
  {
    id: "brasil-cabo-frio-rio",
    foto: "../foto-rio.jpg",
    fotoAlt: "Atardecer sobre Río de Janeiro y Copacabana",
    nombre: "Cabo Frío y Río de Janeiro",
    provincia: "Río de Janeiro",
    pais: "Brasil",
    region: "Nordeste",
    puerta: "aereos",
    tags: ["aereos", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "Salida 28 de noviembre",
    duracion: "8 días / 7 noches",
    hotel: "Copa Sul (Río, 3 noches) + Marlen (Cabo Frío, 4 noches)",
    precio: 1100,
    moneda: "USD",
    reserva: 50,
    circuitos: [
      { nombre: "Desayuno", precio: 1100 },
      { nombre: "Media pensión", precio: 1300 },
      { nombre: "Media pensión + full day Río: Cristo y Pan de Azúcar", precio: 1420 }
    ],
    incluye: ["Aéreo ida y vuelta con equipaje incluido", "Traslados in/out", "7 noches de alojamiento", "Cobertura de salud"]
  },
  {
    id: "brasil-maceio",
    foto: "../foto-maceio.jpg",
    fotoAlt: "La costanera de Ponta Verde, Maceió",
    nombre: "Maceió",
    provincia: "Alagoas",
    pais: "Brasil",
    region: "Nordeste",
    puerta: "aereos",
    tags: ["aereos", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "28 nov · 5 dic",
    duracion: "9 días / 7 noches",
    hotel: "Ponta Verde",
    precio: 1250,
    moneda: "USD",
    reserva: 50,
    circuitos: [
      { nombre: "Desayuno", precio: 1250, tercerPax: 1160, nota: "$1.360 en la salida del 5 de diciembre" },
      { nombre: "Media pensión", precio: 1410, tercerPax: 1320, nota: "$1.520 en la salida del 5 de diciembre" },
      { nombre: "Media pensión + excursión a Maragogi", precio: 1460, tercerPax: 1370, nota: "$1.570 en la salida del 5 de diciembre" }
    ],
    incluye: ["Aéreo ida y vuelta con equipaje incluido", "Traslados in/out", "7 noches de alojamiento", "Cobertura de salud"]
  },
  {
    id: "brasil-natal-2026",
    foto: "../foto-natal.jpg",
    fotoAlt: "Morro do Careca y la playa de Natal",
    nombre: "Natal",
    provincia: "Río Grande do Norte",
    pais: "Brasil",
    region: "Nordeste",
    subtitulo: "Hotel Visual Praia — salidas de noviembre y diciembre",
    puerta: "aereos",
    tags: ["aereos", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "6 dic",
    duracion: "7 días / 6 noches",
    hotel: "Visual Praia, Ponta Negra",
    precio: 1190,
    moneda: "USD",
    reserva: 50,
    circuitos: [
      { nombre: "Desayuno", precio: 1190, nota: "$1.280 en la salida del 6 de diciembre" },
      { nombre: "Media pensión", precio: 1290, nota: "$1.380 en la salida del 6 de diciembre" },
      { nombre: "Media pensión + excursión a Pipa", precio: 1320, nota: "$1.410 en la salida del 6 de diciembre" }
    ],
    incluye: ["Aéreo ida y vuelta con equipaje incluido", "Traslados in/out", "6 noches de alojamiento", "Cobertura de salud"]
  },
  {
    id: "brasil-praia-do-frances",
    foto: "../foto-praia-do-frances.jpg",
    fotoAlt: "Jangada en la playa de Praia do Francês, Alagoas",
    nombre: "Praia do Francês",
    provincia: "Alagoas",
    pais: "Brasil",
    region: "Nordeste",
    puerta: "aereos",
    tags: ["aereos", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "28 nov · 5 dic",
    duracion: "9 días / 7 noches",
    hotel: "Ponta Verde Frances — servicio de playa, frente al mar",
    precio: 1400,
    moneda: "USD",
    reserva: 50,
    circuitos: [
      { nombre: "Desayuno", precio: 1400, tercerPax: 1210, nota: "$1.510 en la salida del 5 de diciembre" },
      { nombre: "Media pensión", precio: 1680, tercerPax: 1490, nota: "$1.790 en la salida del 5 de diciembre" }
    ],
    incluye: ["Aéreo ida y vuelta con equipaje incluido", "Traslados in/out", "7 noches de alojamiento", "Cobertura de salud"]
  },

  /* ---------- VERANO 2027 — Brasil ---------- */
  {
    id: "v27-buzios",
    foto: "../foto-buzios.jpg",
    fotoAlt: "Aguas turquesas y morros en Búzios",
    nombre: "Búzios",
    provincia: "Río de Janeiro",
    pais: "Brasil",
    region: "Nordeste",
    puerta: "verano-2027",
    tags: ["verano-2027", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "6, 10, 17, 20 y 24 enero · 17 y 19 febrero",
    duracion: "8 días / 7 noches",
    hotel: "Pousada dos Coqueiros",
    precio: 1349,
    moneda: "USD",
    reserva: 50,
    destacado: "Promo lanzamiento · cupos limitados",
    incluye: ["Aéreo ida y vuelta", "Transfer in/out", "7 noches con desayuno", "Carry on 12 kg + artículo personal", "Asistencia médica"]
  },
  {
    id: "v27-natal",
    foto: "../foto-natal.jpg",
    fotoAlt: "Morro do Careca y la playa de Natal",
    nombre: "Natal",
    provincia: "Río Grande do Norte",
    pais: "Brasil",
    region: "Nordeste",
    subtitulo: "Hotel Aram Ponta Negra — salidas de enero",
    puerta: "verano-2027",
    tags: ["verano-2027", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "7 y 21 enero",
    duracion: "8 días / 7 noches",
    hotel: "Aram Ponta Negra",
    precio: 1599,
    moneda: "USD",
    reserva: 50,
    destacado: "Promo lanzamiento · cupos limitados",
    incluye: ["Aéreo ida y vuelta", "Transfer in/out", "7 noches con desayuno", "Equipaje 20 kg"]
  },
  {
    id: "v27-praia-do-forte",
    foto: "../foto-praia-do-forte.jpg",
    fotoAlt: "Playa de Praia do Forte, Bahía",
    nombre: "Praia do Forte",
    provincia: "Bahía",
    pais: "Brasil",
    region: "Nordeste",
    puerta: "verano-2027",
    tags: ["verano-2027", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "6, 13, 20 y 27 enero",
    duracion: "8 días / 7 noches",
    hotel: "Iberostar Waves Bahia",
    precio: 2450,
    moneda: "USD",
    reserva: 50,
    destacado: "All inclusive",
    incluye: ["Aéreo ida y vuelta", "Transfer in/out", "7 noches all inclusive", "Equipaje 20 kg"]
  },
  {
    id: "v27-salvador-enero",
    foto: "../foto-salvador.jpg",
    fotoAlt: "El Pelourinho, centro histórico de Salvador de Bahía",
    nombre: "Salvador de Bahía",
    provincia: "Bahía",
    pais: "Brasil",
    region: "Nordeste",
    subtitulo: "Salidas de enero",
    puerta: "verano-2027",
    tags: ["verano-2027", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "6, 13, 20 y 27 enero",
    duracion: "8 días / 7 noches",
    hotel: "Catussaba Resort Hotel",
    precio: 1799,
    moneda: "USD",
    reserva: 50,
    destacado: "Promo lanzamiento · cupos limitados",
    incluye: ["Aéreo ida y vuelta", "Transfer in/out", "7 noches con desayuno", "Equipaje 20 kg"]
  },
  {
    id: "v27-salvador-febrero",
    foto: "../foto-salvador.jpg",
    fotoAlt: "El Pelourinho, centro histórico de Salvador de Bahía",
    nombre: "Salvador de Bahía",
    provincia: "Bahía",
    pais: "Brasil",
    region: "Nordeste",
    subtitulo: "Salidas de febrero",
    puerta: "verano-2027",
    tags: ["verano-2027", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "2 y 10 febrero",
    duracion: "8 días / 7 noches",
    hotel: "Catussaba Resort Hotel",
    precio: 1999,
    moneda: "USD",
    reserva: 50,
    destacado: "Promo lanzamiento · cupos limitados",
    incluye: ["Aéreo ida y vuelta", "Transfer in/out", "7 noches con desayuno", "Equipaje 20 kg"]
  },
  {
    id: "v27-praia-dos-ingleses",
    foto: "../foto-praia-ingleses.jpg",
    fotoAlt: "Praia dos Ingleses, Florianópolis",
    nombre: "Praia dos Ingleses",
    provincia: "Santa Catarina",
    pais: "Brasil",
    region: "Sur de Brasil",
    subtitulo: "Salida grupal acompañada",
    puerta: "verano-2027",
    tags: ["verano-2027", "brasil", "playa"],
    transporte: "Aéreo",
    fechas: "Salida 15 de enero de 2027",
    duracion: "8 días / 7 noches",
    hotel: "Porto Sol Ingleses o similar",
    precio: 1599,
    moneda: "USD",
    reserva: 50,
    destacado: "Seña USD 250 + 7 cuotas de USD 200",
    incluye: ["Aéreo ida y vuelta con equipaje 20 kg", "Transfer in/out", "7 noches con desayuno", "Coordinador permanente"]
  },

  /* ---------- VERANO 2027 — Argentina ---------- */
  {
    id: "v27-gesell-smyrna",
    foto: "../foto-gesell.jpg",
    fotoAlt: "Playa de Villa Gesell al atardecer",
    nombre: "Villa Gesell",
    provincia: "Buenos Aires",
    pais: "Argentina",
    region: "Costa Atlántica",
    subtitulo: "Hotel Smyrna ⭐⭐⭐",
    puerta: "verano-2027",
    tags: ["verano-2027", "playa"],
    transporte: "Bus semicama",
    fechas: "Enero y febrero",
    duracion: "4 noches con 4 desayunos",
    hotel: "Smyrna — 3 estrellas, a 50 metros del mar",
    precio: 376000,
    moneda: "ARS",
    reserva: 5640,
    reservaNota: "1,5% del valor del paquete",
    ocupaciones: [
      { nombre: "Single", enero: 747000, febrero: 703000 },
      { nombre: "Doble", enero: 477000, febrero: 455000 },
      { nombre: "Triple", enero: 417000, febrero: 402000 },
      { nombre: "Cuádruple", enero: 387000, febrero: 376000 }
    ],
    incluye: ["Bus semicama ida y vuelta", "4 noches con 4 desayunos", "Ascenso por zona sur, norte u oeste"],
    noIncluye: ["Traslados de llegada y salida"]
  },
  {
    id: "v27-gesell-coliseo",
    foto: "../foto-gesell.jpg",
    fotoAlt: "Playa de Villa Gesell al atardecer",
    nombre: "Villa Gesell",
    provincia: "Buenos Aires",
    pais: "Argentina",
    region: "Costa Atlántica",
    subtitulo: "Hotel Coliseo ⭐⭐⭐⭐",
    puerta: "verano-2027",
    tags: ["verano-2027", "playa"],
    transporte: "Bus semicama",
    fechas: "Enero y febrero",
    duracion: "4 noches con 4 desayunos",
    hotel: "Coliseo — 4 estrellas, frente al mar, piscina climatizada descubierta",
    precio: 515000,
    moneda: "ARS",
    reserva: 7725,
    reservaNota: "1,5% del valor del paquete",
    ocupaciones: [
      { nombre: "Doble", enero: 724400, febrero: 705000 },
      { nombre: "Triple", enero: 612100, febrero: 599900 },
      { nombre: "Cuádruple", enero: 567000, febrero: 557000 },
      { nombre: "Quíntuple", enero: 523000, febrero: 515000 }
    ],
    incluye: ["Bus semicama ida y vuelta", "4 noches con 4 desayunos", "Ascenso por zona sur, norte u oeste"],
    noIncluye: ["Traslados de llegada y salida"]
  },
  {
    id: "v27-mdp-america",
    foto: "../foto-mar-del-plata.jpg",
    fotoAlt: "Playa de Mar del Plata en temporada",
    nombre: "Mar del Plata",
    provincia: "Buenos Aires",
    pais: "Argentina",
    region: "Costa Atlántica",
    subtitulo: "Hotel América ⭐⭐⭐",
    puerta: "verano-2027",
    tags: ["verano-2027", "playa"],
    transporte: "Bus semicama",
    fechas: "Salidas diarias todo el verano",
    duracion: "4 noches con 4 desayunos",
    hotel: "América — 3 estrellas, en el centro de Mar del Plata",
    precio: 430000,
    moneda: "ARS",
    reserva: 6450,
    reservaNota: "1,5% del valor del paquete",
    destacado: "Cupos confirmados todo el verano",
    ocupaciones: [
      { nombre: "Single", enero: 660000 },
      { nombre: "Doble", enero: 430000 },
      { nombre: "Triple", enero: 430000 },
      { nombre: "Cuádruple", enero: 430000 }
    ],
    incluye: ["Bus semicama ida y vuelta", "4 noches con 4 desayunos", "Ascenso por zona sur, norte u oeste"],
    noIncluye: ["Traslados de llegada y salida"]
  },
  {
    id: "v27-mdp-valles",
    foto: "../foto-mar-del-plata.jpg",
    fotoAlt: "Playa de Mar del Plata en temporada",
    nombre: "Mar del Plata",
    provincia: "Buenos Aires",
    pais: "Argentina",
    region: "Costa Atlántica",
    subtitulo: "Hotel Valles ⭐⭐⭐ superior",
    puerta: "verano-2027",
    tags: ["verano-2027", "playa"],
    transporte: "Bus semicama",
    fechas: "Salidas diarias todo el verano",
    duracion: "4 noches con 4 desayunos",
    hotel: "Valles — 3 estrellas superior, en el centro de Mar del Plata",
    precio: 552000,
    moneda: "ARS",
    reserva: 8280,
    reservaNota: "1,5% del valor del paquete",
    destacado: "Cupos confirmados todo el verano",
    ocupaciones: [
      { nombre: "Single", enero: 905000 },
      { nombre: "Doble", enero: 552000 },
      { nombre: "Triple", enero: 552000 },
      { nombre: "Cuádruple", enero: 552000 }
    ],
    incluye: ["Bus semicama ida y vuelta", "4 noches con 4 desayunos", "Ascenso por zona sur, norte u oeste"],
    noIncluye: ["Traslados de llegada y salida"]
  },
  {
    id: "v27-colon",
    foto: "../foto-colon.jpg",
    fotoAlt: "Costanera de Colón al atardecer",
    nombre: "Colón, Entre Ríos",
    provincia: "Entre Ríos",
    pais: "Argentina",
    region: "Litoral",
    puerta: "verano-2027",
    tags: ["verano-2027", "termas"],
    transporte: "Bus semicama",
    fechas: "Enero y febrero",
    duracion: "4 noches con 4 desayunos",
    hotel: "Cepeda Hotel",
    precio: 285000,
    moneda: "ARS",
    reserva: 4275,
    reservaNota: "1,5% del valor del paquete",
    ocupaciones: [
      { nombre: "Single", enero: 565000 },
      { nombre: "Doble", enero: 349900 },
      { nombre: "Triple", enero: 303000 },
      { nombre: "Cuádruple", enero: 285000 }
    ],
    incluye: [
      "Bus semicama ida y vuelta",
      "4 noches con 4 desayunos",
      "Traslados de llegada y salida",
      "Ascenso por Retiro, Liniers, El Talar de Pacheco o Campana"
    ]
  },
  {
    id: "v27-federacion",
    foto: "../foto-federacion.jpg",
    fotoAlt: "Pileta climatizada bajo la cúpula del parque termal de Federación",
    nombre: "Federación, Entre Ríos",
    provincia: "Entre Ríos",
    pais: "Argentina",
    region: "Litoral",
    puerta: "verano-2027",
    tags: ["verano-2027", "termas"],
    transporte: "Bus semicama",
    fechas: "Enero y febrero",
    duracion: "4 noches con 4 desayunos",
    hotel: "Hostal La Glorieta — a 100 metros del complejo termal",
    precio: 355000,
    moneda: "ARS",
    reserva: 5325,
    reservaNota: "1,5% del valor del paquete",
    ocupaciones: [
      { nombre: "Single", enero: 560000 },
      { nombre: "Doble", enero: 379000 },
      { nombre: "Triple", enero: 357500 },
      { nombre: "Cuádruple", enero: 355000 }
    ],
    incluye: [
      "Bus semicama ida y vuelta",
      "4 noches con 4 desayunos",
      "Traslados de llegada y salida",
      "Ascenso por Retiro, Liniers, El Talar de Pacheco o Campana"
    ]
  }
  ,

  /* ---------- VERANO 2027 — Aéreos y larga distancia ----------
     Flyers del 07/10/2026. */
  {
    id: "v27-san-juan",
    foto: "../foto-canon-valles.jpg",
    fotoAlt: "Formaciones de roca en los valles del oeste argentino",
    nombre: "San Juan",
    provincia: "San Juan",
    pais: "Argentina",
    region: "Cuyo",
    subtitulo: "Hotel America Apart, con piscina",
    puerta: "verano-2027",
    tags: ["verano-2027"],
    transporte: "Aéreo",
    fechas: "Salida 22 de enero",
    duracion: "5 días / 4 noches",
    hotel: "America Apart — con piscina",
    precio: 678020,
    moneda: "ARS",
    reserva: 20000,
    incluye: [
      "Aéreo ida y vuelta",
      "Traslados",
      "Equipaje",
      "4 noches de alojamiento con desayuno buffet",
      "Seguro de asistencia"
    ],
    noIncluye: [
      "Media pensión (opcional)",
      "City tour, Casa Natal de Sarmiento, Auditorio Juan Victoria, Quebrada de Zonda, degustación de vinos en bodega, aceitera y Dique Ullum (opcionales, sin entradas)"
    ],
    nota: "Tarifa por persona en base doble. $678.020 = $567.040 + $110.980 de impuestos. Gastos de reserva $20.000 por pasajero."
  },
  {
    id: "v27-salta-preventa",
    foto: "../foto-cafayate.jpg",
    fotoAlt: "Quebrada de las Conchas, Cafayate",
    fotoCredito: "Bernard Gagnon · CC BY-SA 4.0",
    nombre: "Salta",
    provincia: "Salta",
    pais: "Argentina",
    region: "Norte NOA",
    subtitulo: "Verano 2027 · dos hoteles a elección",
    puerta: "verano-2027",
    tags: ["verano-2027"],
    transporte: "Aéreo",
    fechas: "Salidas 24 de enero y 2 de febrero",
    duracion: "5 días / 4 noches",
    hotel: "Mirador del Cerro o Amerian",
    precio: 735240,
    moneda: "ARS",
    reserva: 20000,
    circuitos: [
      { nombre: "Hotel Mirador del Cerro", precio: 735240 },
      { nombre: "Hotel Amerian", precio: 974880 }
    ],
    incluye: [
      "Aéreo ida y vuelta",
      "Traslados",
      "Equipaje",
      "4 noches con desayuno buffet",
      "City tour panorámico por Salta, Quebrada de San Lorenzo, Cerro San Bernardo, Monumento a Güemes, Monumento a la Batalla 20 de Febrero y mercado artesanal",
      "Seguro de asistencia"
    ],
    noIncluye: [
      "Media pensión (opcional)",
      "Cafayate, Garganta del Diablo, Anfiteatro, La Yesera, Los Castillos y bodega (opcionales)"
    ],
    nota: "Tarifa por persona en base doble. Los precios incluyen $110.980 de impuestos. Gastos de reserva $20.000 por pasajero."
  },
  {
    id: "v27-san-martin-andes",
    foto: "../foto-patagonia-lagos.jpg",
    fotoAlt: "Lago de montaña en la cordillera patagónica",
    nombre: "San Martín de los Andes",
    provincia: "Neuquén",
    pais: "Argentina",
    region: "Patagonia",
    subtitulo: "Hotel Chapelco Ski, céntrico y con media pensión",
    puerta: "verano-2027",
    tags: ["verano-2027"],
    transporte: "Aéreo",
    fechas: "Salida 10 de febrero",
    duracion: "5 días / 4 noches",
    hotel: "Chapelco Ski — céntrico, con comedor",
    precio: 1131740,
    moneda: "ARS",
    reserva: 20000,
    incluye: [
      "Aéreo ida y vuelta",
      "Traslados",
      "Equipaje",
      "4 noches con media pensión",
      "Seguro de asistencia"
    ],
    noIncluye: [
      "Excursión 7 Lagos hasta Villa La Angostura (opcional)"
    ],
    nota: "Tarifa por persona en base doble. $1.131.740 = $990.860 + $140.880 de impuestos. Gastos de reserva $20.000 por pasajero."
  },
  {
    id: "v27-norte-jujuy",
    foto: "../foto-quebrada-norte.jpg",
    fotoAlt: "Cerro de los Siete Colores en Purmamarca",
    nombre: "Norte Argentino con Jujuy",
    provincia: "Salta, Tucumán y Jujuy",
    pais: "Argentina",
    region: "Norte NOA",
    subtitulo: "El circuito completo del norte, en bus cama",
    puerta: "verano-2027",
    tags: ["verano-2027"],
    transporte: "Bus cama",
    fechas: "Salidas en enero",
    duracion: "9 días / 6 noches",
    hotel: "A confirmar con el operador",
    precio: 1029440,
    moneda: "ARS",
    reserva: 20000,
    incluye: [
      "Bus cama ida y vuelta",
      "6 noches con desayuno",
      "City tour peatonal por Salta y Monumento a Güemes",
      "Tafí del Valle, Quebrada de los Sosa, Cafayate con visita a una bodega y ciudad de Tucumán",
      "Quebrada de Humahuaca, Purmamarca, Tilcara, Humahuaca, Salinas Grandes y Cuesta de Lipán",
      "Coordinador permanente"
    ],
    noIncluye: [
      "Media pensión (opcional)",
      "Cobertura de salud: $6.000"
    ],
    nota: "Tarifa por persona en base doble. Gastos de reserva $20.000 por pasajero."
  },
  {
    id: "v27-ruta-40-sur",
    foto: "../foto-patagonia-bosque.jpg",
    fotoAlt: "Bosque y montañas de la Patagonia andina",
    nombre: "Ruta 40 al Sur",
    provincia: "Chubut, Santa Cruz y Río Negro",
    pais: "Argentina",
    region: "Patagonia",
    subtitulo: "Esquel, Perito Moreno, El Calafate y Puerto Madryn",
    puerta: "verano-2027",
    tags: ["verano-2027"],
    transporte: "Bus cama",
    fechas: "Salidas en enero y febrero",
    duracion: "14 días / 10 noches",
    hotel: "Hoteles de categoría, con media pensión",
    precio: 2395180,
    moneda: "ARS",
    reserva: 20000,
    destacado: "El viaje más largo del catálogo · 10 noches",
    incluye: [
      "Bus cama ida y vuelta",
      "10 noches en hoteles de categoría, con media pensión",
      "Esquel (2 noches), Perito Moreno (3), El Calafate (3) y Puerto Madryn (2)",
      "El Bolsón, Parque Nacional Lago Puelo, Los Antiguos, Parque Nacional Los Glaciares, Piedra Buena, San Julián y Gaiman",
      "Coordinador permanente"
    ],
    noIncluye: [
      "Entradas a los parques y museos",
      "Cueva de las Manos y Catedrales de Mármol (opcionales)",
      "Cobertura de salud: $15.000"
    ],
    nota: "Tarifa por persona en base doble o triple. Gastos de reserva $20.000 por pasajero."
  },

  /* ---------- SALIDAS DE OCTUBRE CON LUGARES CONTADOS ----------
     Las dos tienen fecha fija y cupo real informado por el operador.
     Cuando pase la fecha hay que sacarlas, no dejarlas vencidas. */
  ];

/* Las puertas de la home. `tag` es lo que se filtra sobre PAQUETES. */
window.PUERTAS = [
  {
    id: "full-day",
    foto: "foto-colon.jpg",
    fotoAlt: "Costanera de Colón al atardecer",
    eyebrow: "Salidas de un día",
    titulo: "Full day",
    bajada: "Salís y volvés el mismo día, con traslado y coordinador.",
    tag: "full-day"
  },
  {
    id: "escapadas",
    foto: "foto-la-falda.jpg",
    fotoAlt: "Valle y sierras en La Falda",
    eyebrow: "De 4 a 6 noches",
    titulo: "Escapadas en bus",
    bajada: "Salidas grupales con coordinador, en noviembre y diciembre.",
    tag: "escapadas"
  },
  {
    id: "termas",
    foto: "foto-copahue.jpg",
    fotoAlt: "Complejo termal de Copahue",
    eyebrow: "Relax y bienestar",
    titulo: "Termas para desconectar",
    bajada: "Desde un día en las termas hasta una semana entera.",
    tag: "termas"
  },
  {
    id: "aereos",
    foto: "foto-ushuaia.jpg",
    fotoAlt: "Glaciar Perito Moreno",
    eyebrow: "Hasta 12 cuotas",
    titulo: "Volá lejos, pagá en cuotas",
    bajada: "Patagonia, el Norte y Brasil con aéreo y equipaje incluido.",
    tag: "aereos"
  },
  {
    id: "verano-2027",
    foto: "foto-arraial.jpg",
    fotoAlt: "Bahía de Arraial do Cabo",
    eyebrow: "Pre venta",
    titulo: "Verano 2027",
    bajada: "Reservá ahora la playa de enero y febrero, al precio de hoy.",
    tag: "verano-2027"
  }
];

/* La tarifa normal se conserva: al vencer una promoción, el viaje sigue en venta. */
window.PAQUETES_BASE = window.PAQUETES;
window.resolverPaquete = function (p, ahora = new Date()) {
  if (!p.cyber) return p;
  const activa = ahora.getTime() <= new Date(p.cyber.hasta + "T23:59:59.999-03:00").getTime();
  return { ...p, precioBase: p.precio, precio: activa ? p.cyber.precio : p.precio,
    cyberActiva: activa, destacado: activa ? `Cyber · ${p.cyber.descuento}% ${p.soloCyber ? "OFF" : "sobre el paquete"}` : p.destacado,
    tags: [...p.tags.filter(t => t !== "cyber"), ...(activa ? ["cyber"] : [])] };
};
window.PAQUETES = window.PAQUETES_BASE.map(p => window.resolverPaquete(p)).filter(p => !p.soloCyber || p.cyberActiva);
if (typeof document !== "undefined") {
  const ahora = Date.now();
  const cortes = window.PAQUETES_BASE.filter(p => p.cyber).map(p => new Date(p.cyber.hasta + "T23:59:59.999-03:00").getTime() + 1).filter(t => t > ahora);
  if (cortes.length) {
    const espera = Math.min(...cortes) - ahora;
    if (espera < 2147483647) setTimeout(() => window.location.reload(), espera);
  }
}
