const form  = document.getElementById('form-mov');
const lista = document.getElementById('lista');
const presupuesto = new Presupuesto();

// Movimientos de ejemplo
presupuesto.agregar(new Movimiento('Salario', 'ingreso', 3000));
presupuesto.agregar(new Movimiento('Cena', 'gasto', 45.50));
presupuesto.agregar(new Movimiento('Freelance', 'ingreso', 500));

function liHTML(m) {
  const ingreso = m.esIngreso();

  let caja;
  let texto;
  let signo;

  if (ingreso) {
    caja =
      'bg-green-50 dark:bg-green-900/30 border-green-500';
    texto = 'text-green-700 dark:text-green-300';
    signo = '+';
  } else {
    caja =
      'bg-red-50 dark:bg-red-900/30 border-red-500';
    texto = 'text-red-700 dark:text-red-300';
    signo = '-';
  }

  return `
    <li
      class="flex items-center justify-between p-3 border-l-4 rounded
      ${caja}
      transition-all duration-200
      hover:scale-[1.02] hover:shadow-md hover:translate-x-1"
    >
      <span class="text-gray-800 dark:text-gray-100">
        <span class="font-medium">${m.nombre}</span>
        <span class="text-xs ${texto}">
          (${m.tipo})
        </span>
      </span>

      <span class="font-semibold ${texto}">
        ${signo}$${m.valor.toFixed(2)}
      </span>
    </li>
  `;
}

function render() {
  // 1. RENDERIZADO DE LA LISTA
  lista.innerHTML = presupuesto.movimientos.map(liHTML).join('');

  // 2. RENDERIZADO DEL SALDO
  document.getElementById('saldo').textContent = '$' + presupuesto.saldo().toFixed(2);

  // 3. RENDERIZADO DEL INGRESOS
  document.getElementById('ingresos').textContent = '$' + presupuesto.totalIngresos().toFixed(2);

  // 4. RENDERIZADO DEL GASRTOS
  document.getElementById('gastos').textContent = '$' + presupuesto.totalGastos().toFixed(2);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const tipo   = document.getElementById('tipo').value;
  const valor  = parseFloat(document.getElementById('monto').value);

  // Validación de campos vacíos o inválidos
  if (!nombre || !tipo || isNaN(valor) || valor <= 0) {
    alert('Datos inválidos. Intenta de nuevo.');
    return;
  }

  // Validación de duplicados
  const existe = presupuesto.movimientos.some(
    (m) => m.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (existe) {
    alert('Ya existe un movimiento con ese nombre.');
    return;
  }

  presupuesto.agregar(new Movimiento(nombre, tipo, valor));
  render();
  e.target.reset();
});

render();
