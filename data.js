const usuarios = [
  {
    email: "sagitario.lopez124@gmail.com",
    password: "2154",
    nombre: "Alfonso Mendez Lopez",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "1001234568",
      saldo: 5000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Depósito inicial", fecha: "13/6/2025", monto: "+$200000" },
        { descripcion: "Depósito wester union", fecha: "16/6/2025", monto: "+$500" },
        { descripcion: "Depósito wester union", fecha: "16/6/2025", monto: "+$1500" },
        { descripcion: "Depósito Bank of america", fecha: "23/6/2025", monto: "+$500" },
        { descripcion: "Fitz Gerald law company", fecha: "28/6/2025", monto: "+$500" }
      ]
    }
  },
  {
    email: "ingabelms2@gmail.com",
    password: "8410",
    nombre: "Abel Maximino Segundo ",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "1001234569",
      saldo: 4000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Deposito inicial", fecha: "13/6/2025", monto: "+$4000" }
      ]
    }
  },
  {
    email: "valerio1404@gmail.com",
    password: "0414",
    nombre: "ETLER HUAMANI FARFAN",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088391111",
      saldo: 2000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Deposito inicial", fecha: "13/6/2025", monto: "+$4000" }
      ]
    }
  },
  {
    email: "patriciaroxanaramirezalfaro@gmail.com",
    password: "0965",
    nombre: "Patricia Roxana Ramirez Alfaro",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "1001234570",
      saldo: 3000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Deposito inicial", fecha: "16/6/2025", monto: "+$3000" }
      ]
    }
  },
  {
    email: "luisenri159@gmail.com",
    password: "0021",
    nombre: "Luis Enrique Gonzalez",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "1738468579",
      saldo: 4000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Company Kelly Services", fecha: "11/11/2024", monto: "+$3000" },
        { descripcion: "Depósito Bank of america", fecha: "21/6/2025", monto: "+$1000" }
      ]
    }
  },
  {
    email: "cerritobertoldo@gmail.com",
    password: "4321",
    nombre: "Bertoldo Cerrito Gutiérrez",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "1001234571",
      saldo: 4000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Fitz Gerald law company", fecha: "16/6/2025", monto: "+$2400" },
        { descripcion: "Depósito wester union", fecha: "16/6/2025", monto: "+$1600" }
      ]
    }
  },
  {
    email: "ec39055@gmail.com",
    password: "2305",
    nombre: "EDGAR AURELIO CALDERON RAMIREZ",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088398898",
      saldo: 3705,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Fitz Gerald law company", fecha: "16/6/2025", monto: "+$2000" },
        { descripcion: "Depósito wester union", fecha: "17/6/2025", monto: "+$585" },
        { descripcion: "Depósito wester union", fecha: "18/6/2025", monto: "+$520" },
        { descripcion: "Depósito wester union", fecha: "25/6/2025", monto: "+$600" }
      ]
    }
  },
  {
    email: "herrarteruben9@gmail.com",
    password: "2205",
    nombre: "Francisco Rubén herrarte Sandoval",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088395586",
      saldo: 4500,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Fitz Gerald law company", fecha: "26/6/2025", monto: "+$3000" },
        { descripcion: "Fitz Gerald law company", fecha: "28/6/2025", monto: "+$1500" }
      ]
    }
  },
  {
    email: "avaloserika1502@gmail.com",
    password: "0625",
    nombre: "Erika Avalos Barron",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088399933",
      saldo: 3250,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Fitz Gerald law company", fecha: "27/6/2025", monto: "+$2000" },
        { descripcion: "Deposito wester union", fecha: "15/7/2025", monto: "+$800" },
        { descripcion: "Depósito wester union", fecha: "21/6/2025", monto: "+$450" }
      ]
    }
  },
  {
    email: "horaciosoto909@gmail.com",
    password: "3852",
    nombre: "HORACIO SAUL CUEVAS SOTO",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088393222",
      saldo: 4000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Depósito Fitz Gerald law company", fecha: "15/7/2025", monto: "+$2000" },
        { descripcion: "Deposito wester union", fecha: "21/7/2025", monto: "+$2000" }
      ]
    }
  },
  {
    email: "cuevasgalvanjosedejesus@gmail.com",
    password: "9825",
    nombre: "JOSE DE JESUS CUEVAS GALVAN",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088391523",
      saldo: 4000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Fitz Gerald law company", fecha: "15/7/2025", monto: "+$2000" },
        { descripcion: "Deposito wester union", fecha: "21/7/2025", monto: "+$2000" }
      ]
    }
  },
  {
    email: "kikeboy136@gmail.com",
    password: "9825",
    nombre: "MARTIN FALCON PAVIA",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088391523",
      saldo: 3000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Fitz Gerald law company", fecha: "16/7/2025", monto: "+$1500" },
        { descripcion: "Deposito wester union", fecha: "17/7/2025", monto: "+$1500" }
      ]
    }
  },
  // NUEVO USUARIO: JOHN JEFERSON ARGANDOÑA HUAQUISTO
  {
    email: "jhonhuaquisto.2504@gmail.com",
    password: "2402",
    nombre: "JOHN JEFERSON ARGANDOÑA HUAQUISTO",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088399536",
      saldo: 6500,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Depósito inicial", fecha: "21/7/2025", monto: "+$4000" },
        { descripcion: "Deposito wester union", fecha: "22/7/2025", monto: "+$1000" },
        { descripcion: "Deposito wester union", fecha: "29/7/2025", monto: "+$1500" }
      ]
    }
  },
  // NUEVO USUARIO: GENARO GONZALEZ MARTINEZ
  {
    email: "alegremrz38@gmail.com",
    password: "7635",
    nombre: "GENARO GONZALEZ MARTINEZ",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088395412",
      saldo: 2000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Depósito inicial", fecha: "21/7/2025", monto: "+$2000" }
      ]
    }
  },
  // NUEVO USUARIO: RAFAEL EDUARDO ROMERO ALVARADO
  {
    email: "rafael.eduardo@gmail.com",
    password: "0502",
    nombre: "RAFAEL EDUARDO ROMERO ALVARADO",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088396231",
      saldo: 4000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Fitz Gerald law company", fecha: "15/8/2025", monto: "+$4000" }
      ]
    }
  },
  // NUEVO USUARIO: HENRY SAMIR CAQUI SOTO
  {
    email: "henry.samir@gmail.com",
    password: "1203",
    nombre: "HENRY SAMIR CAQUI SOTO",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088396232",
      saldo: 4000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Fitz Gerald law company", fecha: "15/8/2025", monto: "+$4000" }
      ]
    }
  },
  // NUEVO USUARIO: DEYVIZ RAMIRO MOLINA YOC (COMPANI)
  {
    email: "Dm5058000@gmail.com",
    password: "0825",
    nombre: "Deyviz Ramiro Molina Yoc",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088395632",
      saldo: 2000,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Fitz Gerald law company", fecha: "27/8/2025", monto: "+$2000" }
      ]
    }
  },
  // NUEVO USUARIO: LUIS ALEJANDRO QUINTERO CABRERA (COMPANI)
  {
    email: "Lc9674896@gmail.com",
    password: "8790",
    nombre: "Luis Alejandro Quintero Cabrera",
    cuenta: {
      nombre: "Cuenta Ahorros",
      numero: "4117740088392156",
      saldo: 2500,
      creditos: 0,
      prestamos: 0,
      movimientos: [
        { descripcion: "Fitz Gerald law company", fecha: "27/8/2025", monto: "+$2500" }
      ]
    }
  }
];

