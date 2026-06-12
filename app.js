const presupuesto = new Presupuesto();

function registrarMovimiento() {
  const nombre = prompt("Nombre del movimiento:");
  const tipo = prompt("Tipo (ingreso / gasto):").toLowerCase();
  const valor = parseFloat(prompt("Monto:"));

  if (presupuesto.buscarPorNombre(nombre)) {
    alert("Este movimiento ya fue registrado.");
    return;
  }

  const movimiento = new Movimiento(nombre, tipo, valor);

  if (!movimiento.esValido()) {
    alert("Datos inválidos.");
    return;
  }

  presupuesto.agregar(movimiento);

  if (presupuesto.gastosSuperanLimite()) {
    alert("Advertencia: los gastos superan el 80% de los ingresos.");
  }
}

let continuar = "si";

while (continuar === "si" || continuar === "sí") {
  registrarMovimiento();

  continuar = prompt("¿Registrar otro movimiento? (si/no):").toLowerCase();
}

const reporte = presupuesto.resumen();

console.log("--- Resumen Final ---");
console.log("Cantidad:", reporte.cantidad);
console.log("Ingresos:", reporte.ingresos.toFixed(2));
console.log("Gastos:", reporte.gastos.toFixed(2));
console.log("Saldo:", reporte.saldo.toFixed(2));
console.log("Promedio ingresos:", reporte.promedioIngresos.toFixed(2));
console.log("Mediana:", reporte.mediana.toFixed(2));
console.log("Desviación estándar:", reporte.desviacionEstandar.toFixed(2));
console.log("Movimientos registrados:");
console.table(presupuesto.getMovimientos());
