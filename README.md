# Para utilizar el pryecto deberás seguir los siguientes pasos


`git clone git clone https://github.com/Facundojs/Js-challenge/`


## Node app (Backend)


 Primeramente deberemos instalar todas las dependencias para que funcione la aplicación del lado del backend.
 Esta será la **API** donde nuestra aplicación de **ReactJS** hará todas las peticiones. Nosotros como usuarios no interactuaremos con ella directamente en ningún momento.
 Para que estas se instalen correctamente es importante contar con **NodeJS** instalado en nuestro sistema así mismo como su gestor de paquetes **NPM**.

 En este caso, principalmente son Express, Sequelize y jsonwebtoken entre otras.

 También deberemos generar la base de datos donde se harán las peticiones y se almacenará la información.
 En este caso la generaremos a través de migraciones y seeders utilizando comandos nativos de Sequelize.

### Primera vez

    
    cd challenge-js                 // Accedemos a la carpeta del proyecto, donde encontraremos tanto la aplicación 
                                    // de ReactJS como NodeJS. Esta última es la que nos interesa por ahora.

    cd challenge-js-node-app        // Accedemos a la carpeta específica de la aplicación de NodeJS.

    npm i                           // Instalamos las dependencías de la API.
     
    npm run install-project         // Este comando creará la base de datos a traves de migraciones y seeders.
                                    // También iniciará el proyecto en el puerto 3010.
  
### Otros comandos de backend
  
  
    npm run startdev                // Correr el proyecto normalmente cuando ya tenemos las dependencias instaladas.

    npm run reset-db                // Este comando es para reiniciar la base de datos.


 Para que funcione correctamente, es indispensable tener en funcionamiento una base de datos MySQL (XAMPP prendido en caso de windows).
    


_______________________________________________________________________________________________________________________

## React app (Frontend)
  
  
 Para poder correr la aplicación del lado del cliente (navegador), nuevamente habrá que instalar dependencias, en este caso de ReactJS principalmente.
  
  
    cd challenge-js                 // Nuevamente entramos a la carpeta con ambas aplicaciones. Ahora nos
                                    // centraremos en la de ReactJS.

    cd challenge-js-react-app       // Entramos en la carpeta de la aplicación.
    
    npm i                           // Instalamos sus dependencias. En este caso tardará más tiempo.

    npm start                       // La iniciamos. Esto abrirá automáticamente una ventana en el navegador
                                    // predeterminado. Ya podemos usar la aplicación. 
