Este proyecto demuestra una implementación del patrón Repository en JavaScript (Node.js) para una aplicación sencilla de gestión de tareas (To-Do).

Problema resuelto

El patrón Repository ayuda a desacoplar la lógica de negocio del acceso a datos. En este caso, permite manejar tareas sin depender directamente de cómo se almacenan (en memoria, base de datos, etc.).

Estructura del Proyecto

-`TaskRepository.js`: Interfaz del repositorio.
-`InMemoryTaskRepository.js`: Implementación en memoria.
-`TaskService.js`: Lógica de negocio.
-`index.js`: Punto de entrada de la app.

Para ejecutarlo es:

node index.js

Verás cómo se agregan y listan tareas desde un repositorio en memoria.
# Practico7
