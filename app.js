let nombres = [];
let valores = [];

function registrarMovimiento() {
  const nombre = prompt("Nombre del movimiento:");
  const tipo = prompt("Tipo (ingreso / gasto):");
  const monto = parseFloat(prompt("Monto:"));

  if (
    !nombre ||
    (tipo !== "ingreso" && tipo !== "gasto") ||
    isNaN(monto) ||
    monto <= 0
  ) {
    alert("Datos inválidos. Intenta de nuevo.");
  }

  if (nombres.includes(nombre)) {
    alert("Este movimiento ya fue registrado.");
  }

  let valor;

  if (tipo === "ingreso") {
    valor = monto;
  } else {
    valor = -monto;
  }

  nombres.push(nombre);
  valores.push(valor);

  console.log("Movimiento registrado.");
}

function calcularSaldo() {
  let saldo = 0;

  for (let i = 0; i < valores.length; i++) {
    saldo = saldo + valores[i];
  }

  return saldo;
}

function mostrarResumen() {
  let ingresos = 0;
  let gastos = 0;

  for (let i = 0; i < valores.length; i++) {
    if (valores[i] > 0) {
      ingresos += valores[i];
    } else {
      gastos += valores[i];
    }
  }

  console.log("--- Resumen Final ---");
  console.log("Total de movimientos:", nombres.length);
  console.log("Saldo total:", calcularSaldo());
  console.log("Total de gastos:", gastos);
  console.log("Total de ingresos:", ingresos);
}

registrarMovimiento();
mostrarResumen();