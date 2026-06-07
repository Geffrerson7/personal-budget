# Personal Budget

## Descripción

Personal Budget es una aplicación desarrollada en JavaScript que permite registrar movimientos financieros desde consola. El usuario puede ingresar movimientos de tipo **ingreso** o **gasto**, almacenar la información en memoria y obtener un resumen financiero con estadísticas relevantes.

## ¿Cómo funciona el programa?

1. El usuario ingresa el nombre del movimiento.
2. Indica si se trata de un ingreso o un gasto.
3. Ingresa el monto correspondiente.
4. El sistema valida que:

   * El nombre no esté vacío.
   * El tipo sea válido ("ingreso" o "gasto").
   * El monto sea numérico y mayor que cero.
   * No exista otro movimiento con el mismo nombre.
5. Los ingresos se almacenan como valores positivos y los gastos como valores negativos.
6. El usuario puede registrar múltiples movimientos.
7. Al finalizar, el sistema genera un reporte financiero con métricas y estadísticas.

---

## Funciones creadas

### Gestión de movimientos

#### `registrarMovimiento()`

Solicita y valida la información de cada movimiento financiero antes de almacenarlo.

---

### Reportes y cálculos

#### `imprimirReporte(nombres, valores)`

Genera y muestra el reporte financiero completo.

#### `calcularSaldo(valores)`

Calcula el saldo total acumulado.

#### `totalIngresos(valores)`

Calcula la suma total de ingresos registrados.

#### `totalGastos(valores)`

Calcula la suma total de gastos registrados.

#### `promedioIngresos(valores)`

Calcula el promedio de todos los ingresos registrados.

#### `mediana(valores)`

Obtiene la mediana de los movimientos registrados.

#### `desviacionEstandar(valores)`

Calcula la dispersión de los movimientos respecto al promedio.

---

### Utilidades funcionales

#### `obtenerIngresos(valores)`

Retorna únicamente los ingresos.

#### `obtenerGastos(valores)`

Retorna únicamente los gastos.

#### `montosAbsolutos(valores)`

Convierte todos los montos a valores absolutos.

#### `buscarPrimerGastoMayor(valores, monto)`

Busca el primer gasto cuyo valor absoluto supera el monto indicado.

#### `generarValoresReporte(valores)`

Genera un arreglo con las principales métricas del reporte.

#### `categorizarPorMonto(valores)`

Clasifica los movimientos en categorías:

```javascript
{
  bajo: [...],
  medio: [...],
  alto: [...]
}
```

según el valor absoluto de cada movimiento.

---

## Métodos funcionales utilizados

Durante el desarrollo se utilizaron diversos métodos funcionales de JavaScript:

* `filter()`
* `map()`
* `find()`
* `reduce()`
* `forEach()`
* `sort()`

Estos métodos permitieron escribir código más declarativo, legible y reutilizable.

---

## Reflexión

Las estructuras de control de flujo fueron fundamentales para organizar la lógica del programa. Los condicionales permitieron validar información y tomar decisiones según el tipo de movimiento ingresado, mientras que los ciclos facilitaron el procesamiento de colecciones de datos sin repetir código manualmente.

Además, la programación funcional ayudó a simplificar muchas operaciones sobre los arreglos de movimientos. Métodos como `filter()`, `find()` y especialmente `reduce()` permitieron realizar cálculos complejos con menos código y una mejor organización.

El método funcional que me resultó más útil fue **`reduce()`**, ya que permitió calcular saldos, totales, estadísticas y estructuras de datos acumuladas de manera eficiente.

Las funciones puras mejoraron el código al hacerlo más modular, reutilizable y predecible. Cada función recibe datos de entrada y devuelve resultados sin modificar estados externos, lo que facilita las pruebas, el mantenimiento y la comprensión de la aplicación.