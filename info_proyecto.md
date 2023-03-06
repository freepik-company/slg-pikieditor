# Tecnologías usadas
- Vue 3 https://vuejs.org/
- Typescript https://www.typescriptlang.org/
- Pinia https://pinia.vuejs.org/
- Moveable https://daybrush.com/moveable/release/latest/doc/
- Vitest https://vitest.dev/

# Archivos clave

### Store.ts

Se encarga de gestionar el estado global de la aplicación

### useTransformManager.ts

Encargado de gestionar la caja selección, provee eventos con los datos necesarios para aplicar las transformaciones a los elementos seleccionados
puedes encontrar la api de esta librería en https://daybrush.com/moveable/release/latest/doc/

### Element.ts

Clase abstracta de la que van a extender todos nuestros tipos de elementos

