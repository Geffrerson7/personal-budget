class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.valor = valor;
    this.fecha = new Date().toLocaleDateString();
  }

  esIngreso() {
    return this.tipo === 'ingreso';
  }

  esGasto() {
    return this.tipo === 'gasto';
  }

  datosMovimiento() {
      let signo;
      
      if (this.esIngreso()) {
        signo = '+';
      } else {
        signo = '-';
      }
      
      return `${this.nombre} (${this.tipo}): ${signo}$${this.valor.toFixed(2)}`;
    }
}