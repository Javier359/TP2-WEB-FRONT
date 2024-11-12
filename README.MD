# Proyecto Frontend - React

Este proyecto consiste en una aplicación frontend desarrollada con **React** que maneja datos de alumnos. Incluye tres páginas principales y está diseñado para reutilizar componentes donde sea posible.

## Requerimientos del Proyecto

El proyecto debe incluir las siguientes páginas:

### 1. Página de Inicio (Overview)
- Se mostrará una **Card** con información del módulo "Alumno".

### 2. Página de Alumno
- Se mostrará una **tabla** listando datos de los alumnos con las siguientes columnas:
  - **Legajo**
  - **Nombre**
  - **Apellido**
  - **Acciones** (incluye la opción de **borrar**)
- Incluir opción de búsqueda y paginación.

### 3. Página de Alta de Alumno
- Se mostrará un **formulario** para dar de alta un nuevo alumno.
- Campos del formulario:
  - **Nombre** (requerido)
  - **Apellido** (requerido)
  - **DNI** (requerido)
  - **Email** (requerido)
- Validaciones del formulario:
  - Todos los campos son requeridos.
  - Validación de longitud máxima (100 caracteres para nombre, apellido y email).
  - Validación del formato de **Email** usando el patrón:
    ```regex
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    ```
  - Validación del formato de **DNI** usando el patrón:
    ```regex
    /^[0-9]{1,10}$/
    ```
- Una vez que se registre un nuevo alumno, se debe redirigir a la página que lista los alumnos.

## Layout

El diseño de la interfaz es consistente en las tres páginas y sigue las siguientes especificaciones:

### Menú Vertical
- Ancho: `200px`
- Color de fondo: `darkturquoise`
- Padding a la izquierda: `20px`
- Sombra: `0px 0px 2px 0px rgba(0,0,0,0.75)`
- Estilos adicionales:
  - **Link seleccionado**: color de fondo `blanco`, padding a la izquierda `10px`, grosor de fuente `700`.
  - **Link en hover**: color de fondo `paleturquoise`.

### Cabecera
- Título: sombreado `0px 1px 2px -1px rgba(0, 0, 0, 0.75)`, padding solo en los laterales `20px`, tamaño de letra usando la etiqueta `<h2>`.
- Botones:
  - **Botón de navegación/agregar**:
    - Color de fondo: `darkturquoise`
    - Color de texto: `blanco`
    - Padding: `7px`
    - Sombra: `0px 0px 0px 1px rgba(0, 0, 0, 0.75)`
  - **Botón atrás**:
    - Color de fondo: `rojo`
    - Color de texto: `blanco`

## Componentes Visuales

### Card
- Padding superior e inferior: `20px`
- Texto alineado al centro
- Sombra: `0px 1px 4px 0px rgba(0, 0, 0, 0.75)`
- Tamaño de letra usando la etiqueta `<h1>`

### Tabla - Búsqueda - Paginación
- **Búsqueda**:
  - Input y botón uno al lado del otro.
  - Input debe ocupar el mayor espacio disponible.
  - Margen inferior: `5px`
- **Tabla**:
  - Border: `1`
  - Ancho: `100%`
  - Bordes colapsados
- **Paginación**:
  - Lista desplegable y botones uno al lado del otro, ubicados a la derecha.
  - Margen superior: `5px`

### Formulario
- Estructura del formulario:
  - Etiquetas e inputs alineados con **grid** en 2 columnas.
- Validaciones:
  - Todos los campos son requeridos.
  - Validación de longitud máxima (100 caracteres para nombre, apellido y email).
  - Validación de formato de email:
    ```regex
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    ```
  - Validación de formato de DNI:
    ```regex
    /^[0-9]{1,10}$/
    ```
- Estilo del botón agregar:
  - Reutiliza la clase de "botón de navegación/agregar" de la cabecera.
  - Padding: `10px`
  - Sombra: `0px 1px 4px 0px rgba(0, 0, 0, 0.75)`

## Mockups
Los diseños se pueden encontrar en los archivos `.jpg` correspondientes al **TP1** y en el video de referencia.