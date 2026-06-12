const obtenerIngresos = (movimientos) =>
  movimientos.filter((movimiento) => movimiento.tipo === "ingreso");

const obtenerGastos = (movimientos) =>
  movimientos.filter((movimiento) => movimiento.tipo === "gasto");

const buscarPrimerGastoMayor = (movimientos, monto) =>
  obtenerGastos(movimientos).find((movimiento) => movimiento.valor > monto);

const calcularSaldo = (movimientos) =>
  totalIngresos(movimientos) - totalGastos(movimientos);

const totalIngresos = (movimientos) =>
  obtenerIngresos(movimientos).reduce(
    (acumulador, movimiento) => acumulador + movimiento.valor,
    0,
  );

const totalGastos = (movimientos) =>
  obtenerGastos(movimientos).reduce(
    (acumulador, movimiento) => acumulador + movimiento.valor,
    0,
  );

const promedioIngresos = (movimientos) => {
  const ingresos = obtenerIngresos(movimientos);

  if (ingresos.length === 0) {
    return 0;
  }

  return totalIngresos(movimientos) / ingresos.length;
};

const mediana = (movimientos) => {
  if (movimientos.length === 0) return 0;

  const ordenados = [...movimientos].sort(
    (a, b) => a.valor - b.valor
  );

  const mitad = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 === 0) {
    return (
      ordenados[mitad - 1].valor +
      ordenados[mitad].valor
    ) / 2;
  }

  return ordenados[mitad].valor;
};

const desviacionEstandar = (movimientos) => {
  if (movimientos.length === 0) return 0;

  const promedio =
    movimientos.reduce((acc, movimiento) => acc + movimiento.valor, 0) /
    movimientos.length;

  const sumaCuadrados = movimientos.reduce(
    (acc, movimiento) => acc + Math.pow(movimiento.valor - promedio, 2),
    0,
  );

  const varianza = sumaCuadrados / movimientos.length;

  return Math.sqrt(varianza);
};

const agruparPorTipo = (movimientos) =>
  movimientos.reduce(
    (grupos, movimiento) => {
      if (movimiento.tipo === "ingreso") {
        grupos.ingresos.push(movimiento);
      } else {
        grupos.gastos.push(movimiento);
      }

      return grupos;
    },
    {
      ingresos: [],
      gastos: [],
    },
  );

const generarValoresReporte = (movimientos) => [
  movimientos.length,
  totalIngresos(movimientos),
  totalGastos(movimientos),
  calcularSaldo(movimientos),
];

const imprimirReporte = (movimientos) => {
  console.log("--- Resumen Final ---");

  movimientos.forEach((movimiento, indice) => {
    console.log(`  ${indice + 1}. ${movimiento.datosMovimiento()}`);
  });

  const reporte = generarValoresReporte(movimientos);
  const grupos = agruparPorTipo(movimientos);

  console.log("Total movimientos:", reporte[0]);
  console.log("Total ingresos: $" + reporte[1].toFixed(2));
  console.log("Total gastos: $" + Math.abs(reporte[2]).toFixed(2));
  console.log("Saldo: $" + reporte[3].toFixed(2));
  console.log(
    "Promedio de ingresos: $" + promedioIngresos(movimientos).toFixed(2),
  );
  console.log("Mediana: $" + mediana(movimientos).toFixed(2));
  console.log(
    "Desviación estándar: $" + desviacionEstandar(movimientos).toFixed(2),
  );
  console.log("Ingresos:");
  grupos.ingresos.forEach((movimiento) =>
    console.log(movimiento.datosMovimiento()),
  );
  console.log("Gastos:");
  grupos.gastos.forEach((movimiento) =>
    console.log(movimiento.datosMovimiento()),
  );
};

//Reto autónomo: agruparPorTipo(movimientos) → { ingresos: [...], gastos: [...] } con .reduce.

//Reto autónomo: método antiguedadEnDias() que calcule días desde this.fecha hasta hoy.
