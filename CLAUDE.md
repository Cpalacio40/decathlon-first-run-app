# Normas de trabajo — Decathlon First Run App

## 1. Toda vista/pantalla nueva necesita acceso directo en la card de navegación de pruebas

Cuando se agregue una nueva vista/pantalla al prototipo, **siempre** hay que:

1. Agregar el nuevo caso al type `Screen` en [src/app/App.tsx](src/app/App.tsx).
2. Agregar el `case` correspondiente en la función `render()`.
3. Agregar la pantalla al array `ORDER` (para que las transiciones de dirección funcionen bien).
4. Agregar una entrada en el array `DEBUG_SCREENS` (al final de `App.tsx`) con un `id` y un `label` en español, corto y descriptivo — es lo que genera el botón en la card "Navegación de pruebas" al pie de la pantalla, igual que los que ya existen (Splash, Walkthrough, Crear cuenta, etc.).

Esto aplica siempre, sin necesidad de que se pida explícitamente en cada tarea.

## 2. Commits y push frecuentes

- Si se hacen muchos cambios en una sesión, o se pide un cambio importante, hay que crear un commit con todo el trabajo y hacer push, aunque no se pida explícitamente.
- No es necesario pedir confirmación para el commit, pero el push a GitHub se confirma con el usuario salvo que indique lo contrario.
- Mensajes de commit cortos y descriptivos de la razón del cambio, no del detalle línea por línea.
