# Docker and Docker-Compose

<p>Aprovicionamiento de servidor web usando Node Js y servidor de bases de datos usando Postgress. </p>

<p>Este repositorio permite aprovisionar automáticamente 2 contenedore que incluyen un servidor de base de datos y web. </p>
<p><b>Nota:</b> realizar en un computador con sistema operativo Ubuntu. Previamente, se debe tener instalado Docker en la computadora que en la que se desea realizar el aprovisionamiento. </p>

## 1. Clonar repositorio

```
$ git clone https://github.com/phndavid13/docker_app
```
## 2. Crear imagenes
Ingrese al directorio docker_nodejs, para crear la imagen del servicio web ejecute la siguiente instrucción:
```
$ docker build -t node_ubuntu .
```
Ingrese al directorio docker_postgres, para crear la imagen del servicio de base de datos ejecute la siguiente instrucción:
```
$ docker build -t postgres_ubuntu .
```
## 3. Ejecutar docker-compose
Ingrese al directorio docker_app y ejecute la siguiente instrucción:
```
$ docker-compose up
```


Una vez finalizado este procedimiento, puede ir al navegador y ejecutar la siguientes Ip:
<ul>
<li>a) 120.0.0.1:49160 (Aplicación web) para ingresar al REST de la base de datos digitar la URI /api/device</li>
</ul>

<h2><b>Contrato de API REST</b></h2>
 HTTP METHOD | POST            | GET       | PUT         | DELETE |
| ----------- | --------------- | --------- | ----------- | ------ |
| CRUD OP     | CREATE          | READ      | UPDATE      | DELETE |
| /api/device |                 | Lee dispositivos |      |        |
<b>Responsable:</b>
Nelson D. Padilla H.
