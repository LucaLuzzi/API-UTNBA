# Documentación de la API de Productos

Esta API de productos proporciona endpoints para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en una base de datos de productos.

## Instrucciones para Configurar el Proyecto

### 1. Clonar el Repositorio

Para trabajar con este proyecto, primero debes clonarlo a tu máquina local. Abre tu terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/LucaLuzzi/API-UTNBA.git
```

### 2. Instalar Dependencias

Una vez que el repositorio ha sido clonado, navega al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
cd tu-repositorio
npm install
```

### 3. Configurar Credenciales de la Base de Datos

Antes de ejecutar la aplicación, configura las credenciales de tu base de datos en el archivo config/database.js. El archivo debe tener el siguiente formato:

```javascript
const dbconfig = {
  host: "tu_host_mysql",
  port: "tu_puerto_mysql",
  user: "tu_usuario_mysql",
  password: "tu_contraseña_mysql",
  database: "tu_nombre_de_base_de_datos",
};

module.exports = dbconfig;
```

Reemplaza los valores de 'tu_host_mysql', 'tu_puerto_mysql', 'tu_usuario_mysql', 'tu_contraseña_mysql' y 'tu_nombre_de_base_de_datos' con la información correcta de tu servidor MySQL.

### 4. Ejecutar la Aplicación

Una vez que has clonado el repositorio, instalado las dependencias y configurado las credenciales de la base de datos, puedes ejecutar la aplicación con el siguiente comando:

```bash
npm start
```

La aplicación estará disponible en http://localhost:puerto, donde puerto es el puerto configurado en tu archivo app.js.

## Uso de la API

A continuación, se detallan los endpoints disponibles para interactuar con la API:
IMPORTANTE: Antes de realizar el `fetch()` a cualquier endpoint deben agregar antes del "/productos" la ruta que corresponda con el puerto asignado. Por ejemplo: http://localhost:3000/productos

### Obtener todos los productos

- **Ruta:** `/productos`
- **Método:** GET
- **Descripción:** Obtiene todos los productos disponibles.
- **Ejemplo de uso con fetch:**
  ```javascript
  fetch("/productos")
    .then((response) => response.json())
    .then((data) => console.log("Productos:", data))
    .catch((error) => console.error("Error al obtener productos:", error));
  ```

### Obtener un producto por ID

- **Ruta:** `/productos/:id`
- **Método:** GET
- **Descripción:** Obtiene un producto específico según su ID.
- **Ejemplo de uso con fetch:**

  ```javascript
  const productId = 1; // Reemplazar con el ID del producto deseado
  fetch(`/productos/${productId}`)
    .then((response) => response.json())
    .then((data) => console.log("Producto:", data))
    .catch((error) => console.error("Error al obtener producto:", error));
  ```

### Buscar productos por nombre

- **Ruta:** `/productos/search`
- **Método:** GET
- **Parámetros de consulta:** `name` (Término de búsqueda)
- **Descripción:** Busca productos cuyo nombre contiene el término de búsqueda.
- **Ejemplo de uso con fetch:**
  ```javascript
  const searchTerm = "Producto"; // Reemplazar con el término de búsqueda deseado
  fetch(`/productos/search?name=${searchTerm}`)
    .then((response) => response.json())
    .then((data) => console.log("Resultados de la búsqueda:", data))
    .catch((error) =>
      console.error("Error al buscar productos por nombre:", error)
    );
  ```

### Crear un nuevo producto

- **Ruta:** `/productos/create`
- **Método:** POST
- **Cuerpo de la solicitud:** Objeto JSON con los detalles del nuevo producto (nombre, precio, descripcion, stock).
- **Descripción:** Crea un nuevo producto en base a la informacion que le pasemos.
- **Ejemplo de uso con fetch:**

  ```javascript
  const newProductData = {
    nombre: "Nuevo Producto",
    precio: 19.99,
    descripcion: "Descripción del Nuevo Producto",
    stock: 50,
  };

  fetch("/productos/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProductData),
  })
    .then((response) => response.json())
    .then((data) => console.log("Nuevo producto creado con ID:", data))
    .catch((error) =>
      console.error("Error al crear un nuevo producto:", error)
    );
  ```

### Actualizar un producto

- **Ruta:** `/productos/update/:id`
- **Método:** PUT
- **Parámetros de la ruta:** `id` (ID del producto a actualizar)
- **Cuerpo de la solicitud:** Objeto JSON con los detalles actualizados del producto.
- **Descripción:** Actualiza un nuevo producto en base a la nueva informacion que le pasemos.
- **Ejemplo de uso con fetch:**

  ```javascript
  const productIdToUpdate = 1; // Reemplazar con el ID del producto que deseas actualizar
  const updatedProductData = {
    nombre: "Nuevo Nombre",
    precio: 29.99,
    descripcion: "Nueva Descripción",
    stock: 60,
  };
  fetch(`/productos/update/${productIdToUpdate}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProductData),
  })
    .then((response) => response.json())
    .then((success) => {
      if (success) {
        console.log("Producto actualizado correctamente.");
      } else {
        console.log(
          "No se pudo actualizar el producto. El ID del producto podría no existir."
        );
      }
    })
    .catch((error) => console.error("Error al actualizar el producto:", error));
  ```

  ### Eliminar un producto

- **Ruta:** `/productos/delete/:id`
- **Método:** DELETE
- **Parámetros de la ruta:** `id` (ID del producto a eliminar)
- **Descripción:** Elimina un producto según su ID.
- **Ejemplo de uso con fetch:**
  ```javascript
  const productIdToDelete = 1; // Reemplazar con el ID del producto que deseas eliminar
  fetch(`/productos/delete/${productIdToDelete}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((success) => {
      if (success) {
        console.log("Producto eliminado correctamente.");
      } else {
        console.log(
          "No se pudo eliminar el producto. El ID del producto podría no existir."
        );
      }
    })
    .catch((error) => console.error("Error al eliminar el producto:", error));
  ```
