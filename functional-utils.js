const obtenerIngresos = (valores) => valores.filter((valor) => valor > 0);

const obtenerGastos = (valores) => valores.filter((valor) => valor < 0);

const montosAbsolutos = (valores) => valores.map((valor) => Math.abs(valor));