# Proyecto03 herencias Typescript 
# Daniel Muñoz Nuñez
## En este proyecto diseñaremos un programa que preguntará al usuario por diferentes tipos de ordenadores, los guardaremos en un array y posteriormente podremos realizar operaciones con dichos datos.

Para instalar el proyecto:
>npm install

Para compilar usamos:
>npx tsc -w

O 

>tsc -w
(si tenemos typescript a nivel global) y creará el dist

Para ejecutar lo que hemos compilado usamos :
>node dist 
o 
>node dist/index

Funciona con node dist porque tenemos la siguiente línea en package.json: "main": "index.js",

O si lo que queremos es ejecutar otro fichero, por ejemplo prueba.js

>node dist/prueba
