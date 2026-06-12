# Personal Budget

## Descripción

Personal Budget es una aplicación desarrollada en JavaScript para registrar ingresos y gastos desde consola. Permite administrar movimientos financieros, obtener estadísticas y generar reportes utilizando Programación Orientada a Objetos (POO), encapsulación y métodos funcionales.

---

## ¿Cómo funciona?

1. El usuario registra un movimiento indicando:
   - Nombre
   - Tipo (ingreso o gasto)
   - Monto

2. El sistema valida:
   - Que el nombre no esté vacío.
   - Que el tipo sea válido.
   - Que el monto sea numérico y mayor que cero.
   - Que no exista otro movimiento con el mismo nombre.

3. El movimiento se almacena dentro de un presupuesto.

4. El sistema calcula:
   - Total de ingresos.
   - Total de gastos.
   - Saldo disponible.
   - Promedio de ingresos.
   - Mediana de movimientos.
   - Desviación estándar.
   - Agrupación de movimientos por tipo.

5. Si los gastos superan el 80% de los ingresos, se muestra una advertencia.

---

# Modelo Orientado a Objetos

## Clase Movimiento

Representa una operación financiera individual.

### Propiedades

- `nombre`
- `tipo`
- `valor`
- `fecha`

### Métodos

- `esIngreso()`
- `esGasto()`
- `esValido()`
- `datosMovimiento()`

---

## Clase Presupuesto

Administra la colección de movimientos y concentra toda la lógica financiera.

### Métodos de gestión

- `agregar()`
- `eliminar()`
- `buscarPorNombre()`

### Métodos de consulta

- `obtenerIngresos()`
- `obtenerGastos()`

### Métodos de cálculo

- `totalIngresos()`
- `totalGastos()`
- `saldo()`
- `promedioIngresos()`
- `mediana()`
- `desviacionEstandar()`

### Métodos de análisis

- `agruparPorTipo()`
- `buscarPrimerGastoMayor()`
- `gastosSuperanLimite()`

### Reportes

- `resumen()`

---

# Encapsulación aplicada

Inicialmente los movimientos se almacenaban en un arreglo global y las operaciones financieras se encontraban en funciones independientes.

Posteriormente se refactorizó la aplicación para encapsular los datos y comportamientos dentro de la clase `Presupuesto`.

### Antes

```javascript
let movimientos = [];

totalIngresos(movimientos);
totalGastos(movimientos);
calcularSaldo(movimientos);
```

### Después

```javascript
const presupuesto = new Presupuesto();

presupuesto.totalIngresos();
presupuesto.totalGastos();
presupuesto.saldo();
```

Esto permitió:

- Reducir variables globales.
- Mejorar la cohesión.
- Facilitar el mantenimiento.
- Centralizar las reglas de negocio.

---

# Métodos funcionales utilizados

Durante el desarrollo se aplicaron conceptos de programación funcional utilizando:

- `filter()`
- `find()`
- `reduce()`
- `forEach()`
- `sort()`

### Método más útil

El método funcional que resultó más útil fue `reduce()`, ya que permitió implementar:

- Total de ingresos.
- Total de gastos.
- Saldo.
- Agrupación por tipo.
- Cálculos estadísticos.

---

# Logros adicionales

## Validación de dominio

Se implementó el método:

```javascript
esValido()
```

que valida:

- Nombre válido.
- Tipo válido.
- Valor numérico positivo.

Antes de agregar cualquier movimiento al presupuesto.

---

## Control de gastos

Se implementó:

```javascript
gastosSuperanLimite()
```

que detecta cuando los gastos representan más del 80% de los ingresos y genera una advertencia para el usuario.

---

# Beneficios obtenidos

- Aplicación de Programación Orientada a Objetos.
- Aplicación de Encapsulación.
- Aplicación de Programación Funcional.
- Validaciones de dominio.
- Mejor organización del código.
- Mayor reutilización de componentes.
- Menor acoplamiento entre módulos.
- Código más mantenible y escalable.

---

# Reflexión

Las estructuras de control de flujo permitieron validar datos, controlar la interacción con el usuario y procesar colecciones de movimientos de forma eficiente.

La programación funcional simplificó las operaciones sobre colecciones mediante métodos como `filter()`, `find()` y `reduce()`.

La Programación Orientada a Objetos permitió agrupar datos y comportamientos relacionados dentro de las clases `Movimiento` y `Presupuesto`, logrando una solución más organizada, mantenible y cercana a escenarios reales de desarrollo de software.