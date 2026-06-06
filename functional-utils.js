const obtenerIngresos = (valores) => valores.filter((valor) => valor > 0);

const obtenerGastos = (valores) => valores.filter((valor) => valor < 0);

const montosAbsolutos = (valores) => valores.map((valor) => Math.abs(valor));

const buscarPrimerGastoMayor = (valores, monto) =>
  valores.find((valor) => valor < -monto);

const calcularSaldo = (valores) =>
  valores.reduce((acumulador, valor) => acumulador + valor, 0);

const totalIngresos = (valores) =>
  obtenerIngresos(valores).reduce((acumulador, valor) => acumulador + valor, 0);

const totalGastos = (valores) =>
  obtenerGastos(valores).reduce((acumulador, valor) => acumulador + valor, 0);

const generarValoresReporte = (valores) => [
  valores.length,
  totalIngresos(valores),
  totalGastos(valores),
  calcularSaldo(valores),
];

const imprimirReporte = (nombres, valores) => {
  console.log("--- Resumen Final ---");

  valores.forEach((valor, indice) => {
    const tipo = valor > 0 ? "ingreso" : "gasto";

    console.log(
      `${indice + 1}. ${nombres[indice]} (${tipo}): $${Math.abs(valor).toFixed(2)}`,
    );
  });

  const reporte = generarValoresReporte(valores);

  console.log("Total movimientos:", reporte[0]);
  console.log("Total ingresos: $" + reporte[1].toFixed(2));
  console.log("Total gastos: $" + Math.abs(reporte[2]).toFixed(2));
  console.log("Saldo: $" + reporte[3].toFixed(2));
};

const promedioIngresos = (valores) => {
  const ingresos = obtenerIngresos(valores);

  if (ingresos.length === 0) {
    return 0;
  }

  return totalIngresos(valores) / ingresos.length;
};

const mediana = (valores) => {
  if (valores.length === 0) return 0;

  const ordenados = [...valores].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 === 0) {
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  }

  return ordenados[mitad];
};

const desviacionEstandar = (valores) => {
  if (valores.length === 0) return 0;

  const promedio =
    valores.reduce((acc, valor) => acc + valor, 0) / valores.length;

  const sumaCuadrados = valores.reduce(
    (acc, valor) => acc + Math.pow(valor - promedio, 2),
    0,
  );

  const varianza = sumaCuadrados / valores.length;

  return Math.sqrt(varianza);
};

const categorizarPorMonto = (valores) => ({
  bajo: valores.filter((v) => Math.abs(v) < 100),

  medio: valores.filter(
    (v) => Math.abs(v) >= 100 && Math.abs(v) <= 500
  ),

  alto: valores.filter((v) => Math.abs(v) > 500),
});