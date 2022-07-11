# TestMillicom

1) Para ejecutar es necesario tener instalado NodeJS y ejecutar el script testMillicom.js.
   
   Requisito:
   
   * Tener instalado NodeJS

   Ubicarse en la raiz del proyecto y ejecutar los siguientes comandos:
   
      "Primero descargue el proyecto"
   $ git clone https://github.com/franklinarias/TestMillicom.git
      
      "Luego instale las dependecias con npm" 
   $ npm i package.json
      
      "Ejecute el script testMillicom.js"
   $ node testMillicom.js
   
   Luego acceder a 
   http://localhost:8080/home


2) Otra opcion es utilizar Docker, para esto deje el archivo Dockerfile preparado, las instrucciones serian las siguientes:

Requisito: 

* Tener Docker instalado

Pasos:

    Ubicarse en la raiz del proyecto y ejecutar los siguientes comandos:
    
    "Para crear imagen Docker"
  $ docker build -t franklin/nodejs-test-millicom .

    "Para iniciar contenedor" 
  $ docker run --name nodejs-image-demo -p 8080:8080 -d ariasfranklin/nodejs-test-millicom
  
  Luego podra acceder al sitio
  http://localhost:8080/home
