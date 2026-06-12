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
console.log("Ingresos:", reporte.ingresos);
console.log("Gastos:", reporte.gastos);
console.log("Saldo:", reporte.saldo);
console.log("Promedio ingresos:", presupuesto.promedioIngresos());
console.log("Mediana:", presupuesto.mediana());
console.log("Desviación estándar:", presupuesto.desviacionEstandar());
