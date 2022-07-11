# TestMillicom

Para ejecutar solo es necesario tener instalado NodeJS y ejecutar el script testMillicom.js.
node testMillicom.js

Luego acceder a http://localhost:8080/home

Otra opcion es utilizar Docker, para esto deje el archivo Dockerfile preparado, las instrucciones serian las siguiente:

Requisito: 

* Tener instalado Docker

Pasos:

1) ubicarse en la raiz del proyecto y ejecutar los siguientes comandos:
    
    "Crear imagen Docker"
  $ docker build -t franklin/nodejs-test-millicom .

    "Iniciar contenedor" 
  $ docker run --name nodejs-image-demo -p 8080:8080 -d ariasfranklin/nodejs-test-millicom
  
Para acceder al sitio abrir el navegador y acceder al siguiente enlace:

http://localhost:8080/home
