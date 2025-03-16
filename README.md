#  API REST con JSON-Server

Esta es una API REST simulada utilizando [`json-server`](https://www.npmjs.com/package/json-server). 

---

## Estructura del Proyecto

| Archivo      | Descripción                                      |
|--------------|--------------------------------------------------|
| `app.js`     | Archivo principal para configurar el servidor.    |
| `db.json`    | Archivo que actúa como base de datos.             |
| `index.html` | Interfaz básica para interactuar con la API.      |
| `style.css`  | Estilos básicos para la interfaz.                 |

---

## Instalación y Ejecución

### 1. Instalar `json-server`

```bash
npm install -g json-server
## 2. Iniciar el Servidor en el Puerto 3000

Ejecuta el siguiente comando en tu terminal para iniciar el servidor en el puerto 3000:

```bash
json-server --watch db.json --port 3000
## 3. Acceder a la API
http://localhost:3000

## Endpoints

| Método   | Endpoint          | Descripción                                      |
|----------|-------------------|--------------------------------------------------|
| `GET`    | `/items`          | Obtener todos los items.                         |
| `GET`    | `/items/:id`      | Obtener un item específico por su ID.            |
| `POST`   | `/items`          | Crear un nuevo item.                             |
| `PUT`    | `/items/:id`      | Actualizar un item existente por su ID.          |
| `PATCH`  | `/items/:id`      | Actualizar parcialmente un item por su ID.       |
| `DELETE` | `/items/:id`      | Eliminar un item por su ID.                      |