let movimientos = [];

function registrarMovimiento() {
  const nombre = prompt('Nombre del movimiento:');
  const tipo = prompt('Tipo (ingreso / gasto):');
  const valor = parseFloat(prompt('Monto:'));

  if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(valor) || valor <= 0) {
    alert('Datos inválidos. Intenta de nuevo.');
    return;
  }

  // 1 solo push de un objeto. valor SIEMPRE positivo.
  movimientos.push(new Movimiento(nombre, tipo, valor));
}

let continuar = "si";

while (continuar === "si" || continuar === "sí") {
  registrarMovimiento();

  continuar = prompt("¿Registrar otro movimiento? (si/no):").toLowerCase();
}

// Reporte funcional (C06) — todo del archivo functional-utils.js
imprimirReporte(movimientos);