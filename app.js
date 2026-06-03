let nombres = [];
let valores = [];

function registrarMovimiento() {
  const nombre = prompt("Nombre del movimiento:");
  const tipo = prompt("Tipo (ingreso / gasto):");
  const monto = parseFloat(prompt("Monto:"));

  let valor;

  if (tipo === "ingreso") {
    valor = monto;
  } else {
    valor = -monto;
  }

  nombres.push(nombre);
  valores.push(valor);

  console.log("Movimiento registrado.");
  console.log("Nombres:", nombres);
  console.log("Valores:", valores);
}

registrarMovimiento();