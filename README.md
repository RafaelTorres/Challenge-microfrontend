# Challenge: Crear una aplicación de microfrontend


### Contexto

De acuerdo al [Challenge](./CHALLENGE.md) Se realizó la implementación de una solución en la cual se genera un contador, con el uso de la librería `ReactJS` y la estrategia de Micro Frontend utilizando `Module Federation`

### Solución

Se crearon dos proyectos haciendo uso del framework `NextJS`, el cual provee una configuración ligera, eficiente y multifuncional para desarrollar la solución sin agregar mucho boilerplate.

Uno de los proyectos llamado [Counter](./challenge/counter) se utilizo como proyecto de piezas `remotas` donde se tiene un componente que nos permite visualizar el incremento o decremento del valor que se le pase desde el proyecto `host`. El proyecto host llamado [Main](./challenge/main) contiene un componente el cual es un botón, una página para unir las piezas locales y remotas y un state que guarda en memoria temporal el valor del contador que se le pasara a la pieza remota.

La implementación del `Module Federation` se realizo utilizando la libreria [@module-federation/nextjs-mf](https://github.com/module-federation/universe/tree/main#readme), la cual se debe configurar en el `next-config` de cada proyecto, una vez realizada la configuración y definidos los alias la pieza host puede cargar la pieza remota de forma asyncrona, para poderla usar en la prueba se hizo uso de la estrategia de Next llamada `dynamic`, la cual actua como `React.Lazy`, permitiendo cargar el chunk de la pieza bajo demanda y no desde de la carga inicial.

Con esta implementación se pudo integrar el componente de visualización del conteo como si fuese parte del proyecto.

Para ver la solución es importante, correr los siguientes proyectos:

* [Counter](./challenge/counter)
* [Main](./challenge/main)

El resultado seria como el siguiente a continuación:

![Image text](https://github.com/RafaelTorres/Challenge-microfrontend/blob/master/ui.png)

### Adicionales

* Se incluyeron unit test a nivel de componentes y páginas con el fin de probar la solución, coverage alcanzado 100%
* Se agregaron scripts de procesos de CI, con el fin de validar y dar formato al código