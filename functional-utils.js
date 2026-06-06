const obtenerIngresos = (valores) => valores.filter((valor) => valor > 0);

const obtenerGastos = (valores) => valores.filter((valor) => valor < 0);

const montosAbsolutos = (valores) => valores.map((valor) => Math.abs(valor));

const buscarPrimerGastoMayor = (valores, monto) =>
  valores.find((valor) => valor < -monto);

const calcularSaldo = (valores) =>
  valores.reduce((acumulador, valor) => acumulador + valor, 0);
