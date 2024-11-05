# Documentacion Paginas Web 2

## Terminal 

    view terminal - key shortcut (Open Current Terminal)
    
    i = install

**Instalacion paqueteria npm**

`npm i`

### Comando Version de Node Js
`node -v`

    
### Matar Terminal

**Revisar puertos (npm) abiertos**

`ps fea | grep npm`

**Revisar Puertos Abiertos (todos)**

`sudo lsof -i`

- Nos proporciona un (PID) el cual ocuparemos para matar la terminal

**Matar Terminal**

`kill -9 PID`

**Busqueda especificando el puerto**

`sudo lsof -i :puerto`

    
## Node js

> COMO INICIALIZAR UN DIRECTORIO 

### CONFIGURAR UN DIRECTORIO NODE JS (package.json)

**Dentro de un directorio, iniciamos el proyecto Node js...**
_(TERMINAL)_

**IMPORTANTE -> (No tocar: package-lock.json, node_modules)**

`npm init`

```
package name: Enter
version: Enter
description: Despcripcion
main: Enter
git repository: Enter

keywords: 
    Nodejs
    Express
    Nodemon
    Mysql

author: Autor
license: Enter

```

`npm i express`  

`npm i -D nodemon`

---

## Html a Pug

>Para este proyecto se usara la tecnologia de pug

`npm i pug`

**_Carpetas Proyecto_**

_Carpetas (OBLIGATORIAS) que se ocuparan para el proyecto_

- config
- controllers
- public
- routes
- views


## Package.json 

**Punto de Entrada**

**Modificaciones**

![PackajeJson](packagejson.png)

**Crear archivo `index.js` en el directorio principal**

> "main": "index.js"

**Para poder usar import**

> "type": "module"

**Configruar servidor - Agregar a package.json**

```js
"scripts" :{
    "start": "node ./index.js"
    "server": "nodemon index.js"
},
```
>

# Correr Servidor / Pagina (Terminal)

`npm run server`

**Matar el puerto**

`ctrl+c`

> Nota: Se debe matar la terminal, ya que si corremos el servidor en otra terminal, nos mostrara un error -> [¿Cómo matar terminal?](#matar-terminal)



**El servidor debe ser abierto con el puerto especificado**

En este caso el puerto es :2800

[Local Host](http://localhost:2800/)


# Base de Datos

Estudiar Bootstrap (Componentes disponibles en Bootstrap)
 - Copiar css bootstrap
 - Copiar javascript bootstrap


## Instalacion 

> Esta opcion es incorrecta

`sudo mysql`

> Opcion correcta

`sudo mysql -u root -p`


## Configuracion MariaDB -> Correcta Conexion
    
`npm i sequelize mariadb`

> Dos comandos instalados en un comando

- npm i sequelize
- npm i mariadb

`source esquema.sql`

- use nombre_tabla ... Comandos

    <!-- Estructura para mostrar la tabla -> Terminar con (;) -->

**Como trabaja la informacion? Base de Datos**
        
- Tabla a Objeto - Hacer Tablas a traves de Objetos (Mapeo)
- ORM - > Object Relational Map (Estudiar)
- Pool - > Conexiones - no Peticiones

**Carpeta Base de Datos de Instancias**

> Nombre Carpeta -> (models)

_En este casi dentro de la carpeta crear los modelos_

- _Gerente_
- _Hotel_


Relacion de Base de Datos - Indicar mapeo de todas las tablas
Como se debe comunicar con las tablas --

    + Privilegios de Root Mysql +

    Permiso de Root *
        sudo mysql -u root -p
        GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY '1234';
        FLUSH PRIVILEGES;

Ctrl+C -> Salir de DB 
Ctrl+D -> Salir de MariaDb


Relaciones SQL ->

    LLaves Principales - Origen (PK)
    Llaves Secundarias - Destino (FK)

    Relacion 1 a 1:
        En alguna de las dos debe estar la foreign key
    
    Relacion 1 a muchos:
        La foreign key debe estar en la tabla de mayor cardinalidad 
    
    Relacion Muchos a Muchos
        La foreign key se debe estar en una tabla intermedia


    Lo mejor es que el la tabla prioritaria tenga la PK, la segunda tabla (puede tener una PK), pero lo mas 
    recomendable es que la segunda tabla tenga solo la FK de la primera tabla, para evitar errores !IMPORTANTE



Tarea: 
    10 - Oct:
        Insertar Consulta de Gerentes
        Insertar Consulta de Habitaciones



Configurar SQL



Jueves - Carrito de Compras, Base de Datos
        Interfaz Node-Js


Carrito de Compra - Para el Jueves - Pre


http -> No guarda sesiones, solo muestra



Variables de Sesion

Instalar 

npm install express-session


Ver fotos y usar variables de sesion


Equipo - 5 **

EN CUALQUIER PROYECTO SE REALIZA PRIMERO LA BASE DE DATOS

Base de Datos para Proyecto Final

Base de Datos Videojuegos (1 MES)

    Roles 1 - N Usuario (PRIMERA SEMANA)

    Usuario 1 - N Carrito 

    Usuario 1 - N Forma_pago

    Forma_pago 1 - 1 Carrito

    Carrito 1 - N Carrito_videojuego

    Carrito_Videojuego N - 1 Videojuego

    Videojuego 1 - N Videojuego_plataforma (SEGUNDA SEMANA) - SIGUIENTE SEMANA (29 - 31 Octubre)
 
    Videojuego_Plataforma N - 1 Plataforma (SEGUNDA SEMANA)

    

