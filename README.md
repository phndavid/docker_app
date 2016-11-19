# Docker and Docker-Compose

<p>Aprovicionamiento de servidor web usando Node Js y servidor de bases de datos usando Postgress. </p>

<p>Este repositorio permite aprovisionar automáticamente 2 contenedore que incluyen un servidor de base de datos y web. </p>
<p><b>Nota:</b> realizar en un computador con sistema operativo Ubuntu. Previamente, se debe tener instalado Docker en la computadora que en la que se desea realizar el aprovisionamiento. </p>
<ul>
<li>1. Clonar repositorio</li>
<li>2. Ingresar al directoio docker_app </li>
<li>3. Ejecutar el comando docker-compose up</li>
<li>4. Una vez finalizado este procedimiento, puede ir al navegador y ejecutar la siguientes Ip:</li>
  <ul>
 <table>
  <tr>
    <th>GET<br><br>{{host}}/api/device</th>
    <th>Obtiene<br>los datos de la base de datos Posgresql, ubicada en la imagen postgres_ubuntu.</th>
  </tr>
</table>
<li>a) 120.0.0.1:49160 (Aplicación web) para ingresar al REST de la base de datos digitar la URI /api/device</li>
</ul>
</ul>
<b>Responsable:</b>
Nelson D. Padilla H.
