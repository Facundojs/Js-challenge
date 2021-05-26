# Para utilizar el pryecto deberás seguir los siguientes pasos


`git clone git clone https://github.com/Facundojs/Js-challenge/`


## Node app (Backend)


 Primeramente denberemos instalar todas las dependencias para que funcione la aplicación del lado del backend.
 Para que estas se instalen correctamente es importante contar con NodeJS instalado en nuestro sistema así mismo como su gestor de paquetes **NPM**.

 En este caso, principalmente son Express, Sequelize y jsonwebtoken entre otras.

 También deberemos generar la base de datos donde se harán las peticiones y se almacenará la información.
 En este caso la generaremos a través de migraciones y seeders utilizando comandos nativos de Sequelize.

### Primera vez

    
    cd challenge-js                  

    cd challenge-js-node-app

    npm i                           // Instalamos las dependencías de la aplicación de NodeJS
     
    npm run install-project         // Este comando creará la base de datos a traves de migraciones y seeders.
                                    // También iniciará el proyecto
  
### Otros comandos de backend
  
  
    npm run startdev                // Correr el proyecto normalmente cuando ya tenemos las dependencias instaladas.

    npm run reset-db                // Si queremos reiniciar la base de datos.


 Para que funcione correctamente, es indispensable tener en funcionamiento una base de datos MySQL (XAMPP prendido en caso de windows).
    


_______________________________________________________________________________________________________________________

## React app (Frontend)
  
  
 Para poder correr la aplicación del lado del cliente (navegador), nuevamente habrá que instalar dependencias, en este caso de ReactJS principalmente.
  
  
    cd challenge-js

    cd challenge-js-react-app
    
    npm i

    npm start
