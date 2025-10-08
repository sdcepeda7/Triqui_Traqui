This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Preguntas sobre **React** y Next.js

## 1. ¿Qué ventajas tiene usar React frente a trabajar solo con JavaScript puro para interfaces web?

Usar React hace que crear interfaces sea mucho más fácil y ordenado.  
Con JavaScript puro, hay que estar manipulando el DOM todo el tiempo y eso se vuelve enredado cuando la aplicación crece.  
React, en cambio, usa un **Virtual DOM**, que actualiza solo lo necesario, haciendo que todo sea más rápido y eficiente.  
Además, permite dividir la interfaz en **componentes reutilizables**, así no se repite código y el proyecto se mantiene más limpio y organizado.  

En resumen, React te deja concentrarte más en **cómo se ve y se comporta la app**, y menos en los detalles técnicos del navegador.

---

## 2. ¿Qué beneficios ofrece **Next.js** al trabajar sobre React?

Next.js es como una versión mejorada de React, que trae muchas cosas listas para usar.  
Por ejemplo, puedes hacer **renderizado del lado del servidor (SSR)** o **páginas estáticas (SSG)** sin configurar nada complicado, lo que mejora el **rendimiento** y el **SEO**.  

También tiene **rutas automáticas**, manejo de **imágenes optimizadas**, y hasta puedes crear **endpoints backend** dentro del mismo proyecto.  
En pocas palabras, con Next.js puedes construir proyectos grandes y profesionales sin sufrir con tanta configuración.

---

## 3. ¿Qué significa que Next.js tenga un App Router y por qué se recomienda usarlo?

El **App Router** es el nuevo sistema que Next.js usa para manejar las rutas (las páginas del sitio).  
En lugar de tener todo mezclado, ahora se organiza dentro de la carpeta `/app`, lo que hace el código más limpio y estructurado.  

Lo bueno es que con este sistema puedes combinar **componentes del servidor y del cliente**, usar **layouts anidados** y controlar **pantallas de carga** o **errores** sin tanto enredo.  
Se recomienda porque es **más moderno**, **rápido** y sigue las buenas prácticas actuales de desarrollo con React.

---

## 4. ¿Qué diferencia hay entre client components y server components en Next.js?

La diferencia principal es **dónde se ejecutan**:

- Los **server components** se procesan en el **servidor**, antes de que la página llegue al navegador.  
  Son perfectos para mostrar datos estáticos o cargar información desde una base de datos.

- Los **client components** se ejecutan directamente en el **navegador del usuario**.  
  Se usan cuando hay **interactividad**, por ejemplo, botones, formularios, o cosas que cambian sin recargar la página.

Next.js mezcla ambos tipos de componentes para mejorar el rendimiento, y solo tienes que poner `"use client"` al inicio de los que necesiten ejecutarse en el cliente.

---

## 5. ¿Por qué crees que en desarrollo profesional se usan repositorios públicos o privados en GitHub en lugar de solo trabajar en carpetas locales?

Porque GitHub no solo guarda el código, sino también todo el **historial de cambios** y permite **trabajar en equipo sin chocar el trabajo de otros**.  
Además, si algo se daña, puedes volver atrás fácilmente o revisar quién cambió qué.  

En proyectos profesionales también se usa para **controlar versiones**, **hacer copias seguras en la nube** y **colaborar con otros desarrolladores** desde cualquier lugar.  
En los repositorios privados, el código se mantiene protegido, mientras que los públicos permiten compartir el trabajo con la comunidad o mostrar tus proyectos personales.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
