class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.valor = valor;
    this.fecha = new Date().toLocaleDateString();
  }

  esValido() {
    return (
      this.nombre &&
      (this.tipo === "ingreso" || this.tipo === "gasto") &&
      !isNaN(this.valor) &&
      this.valor > 0
    );
  }

  esIngreso() {
    return this.tipo === "ingreso";
  }

  esGasto() {
    return this.tipo === "gasto";
  }

  datosMovimiento() {
    let signo;

    if (this.esIngreso()) {
      signo = "+";
    } else {
      signo = "-";
    }

    return `${this.nombre} (${this.tipo}): ${signo}$${this.valor.toFixed(2)}`;
  }
}

class Presupuesto {
  constructor() {
    this.movimientos = [];
  }

  getMovimientos() {
    return this.movimientos;
  }

  agregar(movimiento) {
    this.movimientos.push(movimiento);
  }

  eliminar(nombre) {
    this.movimientos = this.movimientos.filter(
      (movimiento) => movimiento.nombre !== nombre,
    );
  }

  obtenerIngresos() {
    return this.movimientos.filter((movimiento) => movimiento.esIngreso());
  }

  obtenerGastos() {
    return this.movimientos.filter((movimiento) => movimiento.esGasto());
  }

  // Llama a obtenerIngresos() y acumula el valor directo de ese array resultante
  totalIngresos() {
    return this.obtenerIngresos().reduce(
      (acumulador, movimiento) => acumulador + movimiento.valor,
      0,
    );
  }

  totalGastos() {
    return this.obtenerGastos().reduce(
      (acumulador, movimiento) => acumulador + movimiento.valor,
      0,
    );
  }

  saldo() {
    return this.totalIngresos() - this.totalGastos();
  }

  buscarPorNombre(texto) {
    return this.movimientos.find((movimiento) =>
      movimiento.nombre.toLowerCase().includes(texto.toLowerCase()),
    );
  }

  promedioIngresos() {
    const ingresos = this.obtenerIngresos();

    if (ingresos.length === 0) {
      return 0;
    }

    return this.totalIngresos() / ingresos.length;
  }

  buscarPrimerGastoMayor(monto) {
    return this.obtenerGastos().find((movimiento) => movimiento.valor > monto);
  }

  mediana() {
    if (this.movimientos.length === 0) {
      return 0;
    }

    const ordenados = [...this.movimientos].sort((a, b) => a.valor - b.valor);

    const mitad = Math.floor(ordenados.length / 2);

    if (ordenados.length % 2 === 0) {
      return (ordenados[mitad - 1].valor + ordenados[mitad].valor) / 2;
    }

    return ordenados[mitad].valor;
  }

  desviacionEstandar() {
    if (this.movimientos.length === 0) {
      return 0;
    }

    const promedio =
      this.movimientos.reduce((acc, movimiento) => acc + movimiento.valor, 0) /
      this.movimientos.length;

    const sumaCuadrados = this.movimientos.reduce(
      (acc, movimiento) => acc + Math.pow(movimiento.valor - promedio, 2),
      0,
    );

    return Math.sqrt(sumaCuadrados / this.movimientos.length);
  }

  agruparPorTipo() {
    return this.movimientos.reduce(
      (grupos, movimiento) => {
        if (movimiento.esIngreso()) {
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
  }

  buscarPorNombre(nombre) {
    return this.movimientos.find(
      (movimiento) => movimiento.nombre.toLowerCase() === nombre.toLowerCase(),
    );
  }

  gastosSuperanLimite() {
    const ingresos = this.totalIngresos();

    if (ingresos === 0) {
      return false;
    }

    return this.totalGastos() > ingresos * 0.8;
  }
  resumen() {
    return {
      cantidad: this.movimientos.length,
      ingresos: this.totalIngresos(),
      gastos: this.totalGastos(),
      saldo: this.saldo(),
      promedioIngresos: this.promedioIngresos(),
      mediana: this.mediana(),
      desviacionEstandar: this.desviacionEstandar(),
    };
  }
}
