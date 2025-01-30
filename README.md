# E-Commerce React App

Este proyecto consiste en el desarrollo de una **Single Page Application (SPA)** de e-commerce utilizando **React** como herramienta base para crear la interfaz de usuario. La aplicación permite realizar compras de productos, gestionar un carrito de compras, y registrar las compras en una base de datos en la nube utilizando **Firestore**.

## Tecnologías utilizadas

- **Javascript**
- **React** (https://react.dev/)
- **Vite** (https://vite.dev/)
- **React Router**: Para gestionar la navegación entre las diferentes secciones de la aplicación (catálogo, detalle de productos, carrito, etc.).
- **Firestore (Firebase)**: Base de datos en la nube para almacenar los productos y los registros de compra. (https://firebase.google.com/docs?hl=es-419)
- **Toastify** (https://github.com/apvarun/toastify-js/blob/master/README.md)
- **CSS**

## Funcionalidades principales

- **Listado de productos**: Se genera dinámicamente el listado de productos desde Firestore, mostrando una vista general de los productos disponibles en el catálogo.
- **Detalle de producto**: Al hacer clic en un producto, el usuario puede ver detalles como el nombre, descripción, y precio. También puede agregar el producto al carrito individualmente o poner el número deseado.
- **Carrito de compras**: Los productos seleccionados se agregan al carrito de compras, con validación de cantidades y precio total.
- **Checkout**: El usuario puede finalizar la compra mediante un formulario. Se generará una orden de compra en la base de datos, y se le devolverá al usuario su ID de compra. En la orden de compra generada en la DB se incluyen datos tales como los datos del comprador (nombre, apellido, e-mail), fecha y hora de realización de la compra, datos de los productos adquiridos (id, price, quantity, title), status y precio total.
- **Notificaciones**: Uso de **Toastify** para mostrar notificaciones al usuario (por ejemplo, al agregar productos al carrito).