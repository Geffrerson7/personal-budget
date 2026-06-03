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

registrarMovimiento();