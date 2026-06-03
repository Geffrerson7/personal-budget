# Personal Budget

## Descripción

Personal Budget es una aplicación desarrollada en JavaScript que permite registrar movimientos financieros desde consola. El usuario puede ingresar movimientos de tipo **ingreso** o **gasto**, almacenar la información en memoria y obtener un resumen financiero con estadísticas relevantes.

## ¿Cómo funciona el programa?

1. El usuario ingresa el nombre del movimiento.
2. Indica si se trata de un ingreso o un gasto.
3. Ingresa el monto correspondiente.
4. El sistema valida que:
   - El nombre no esté vacío.
   - El tipo sea válido ("ingreso" o "gasto").
   - El monto sea numérico y mayor que cero.
   - No exista otro movimiento con el mismo nombre.
5. Los ingresos se almacenan como valores positivos y los gastos como valores negativos.
6. El usuario puede registrar múltiples movimientos.
7. Al finalizar, el sistema muestra un resumen financiero con:
   - Total de movimientos registrados.
   - Saldo acumulado.
   - Total de ingresos.
   - Total de gastos.
   - Ingreso más alto registrado.
   - Gasto más bajo (más negativo) registrado.

---

## Funciones creadas

### `registrarMovimiento()`

Solicita los datos de un movimiento financiero, valida la información ingresada y almacena los datos en los arreglos correspondientes.

### `calcularSaldo()`

Recorre el arreglo de valores y calcula el saldo total acumulado.

### `mostrarResumen()`

Genera un reporte financiero con estadísticas de los movimientos registrados, incluyendo ingresos, gastos y saldo total.

---

## Estructuras de control utilizadas

### Condicionales (`if`, `else if`, `else`)

Se utilizaron para:

- Validar los datos ingresados por el usuario.
- Determinar si un movimiento corresponde a un ingreso o un gasto.
- Clasificar los valores al generar el resumen financiero.

Ejemplo:

```javascript
if (tipo === "ingreso") {
  valor = monto;
} else {
  valor = -monto;
}
```

### Bucles (`for`)

Permitieron recorrer los arreglos de movimientos para:

- Calcular el saldo total.
- Sumar ingresos y gastos.
- Obtener estadísticas financieras.

Ejemplo:

```javascript
for (let i = 0; i < valores.length; i++) {
  saldo += valores[i];
}
```

### Bucles (`while`)

Se utilizó para permitir el registro continuo de movimientos hasta que el usuario decida finalizar.

Ejemplo:

```javascript
while (continuar === "si" || continuar === "sí") {
  registrarMovimiento();
}
```

---

## Reflexión

Las estructuras de control de flujo fueron fundamentales para organizar la lógica del programa. Los condicionales permitieron validar información y tomar decisiones según el tipo de movimiento ingresado. Los ciclos facilitaron el procesamiento de colecciones de datos sin repetir código manualmente.

Gracias a estas estructuras fue posible construir una solución clara, escalable y fácil de mantener, separando la captura de datos, la validación y el cálculo de estadísticas en funciones independientes.