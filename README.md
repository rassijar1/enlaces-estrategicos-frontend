Sistema post

1 Paso.

Dar clic en Code y luego en Download zip Crear una carpeta, luego van a copiar los proyectos a htdocs y abren el cmd con la ruta del proyecto. 2 paso.

en el backend deben ejecutar el siguiente comando para que se les cree el usuario que tiene por defecto:

-php artisan migrate:fresh --seed

van a ejecutar las migraciones del proyecto con el siguiente comando:

-php artisan migrate

3 paso

-correr el server en la carpeta del proyecto con el comando: php artisan serve

4 paso

Repetimos el paso 1 pero con la carpeta del frontend

5 paso

Ejecutamos el siguiente comando para correr el vue en nuestro navegador

npm run dev

6 paso Para hacer el respectivo logueo de deben ingresar las siguientes credenciales: usuario:test@example.com clave:password

Ahora ya se puede ingresar a la ventana del sistema con el usuario y contraseña creados, ya es posible loguearse entonces una vez logueados con usuario y contraseña podemos entrar a los modulos del sistema que son los post. El sistema de clientes tiene su respectivo crud.

Nota: deben instalar el node js de lo contrario no funciona. Para pruebas se va a dejar la coleccion de los postman en este repositorio. cambiar las carpetas descargadas por frontend enlaces estrategicos y backend enlaces estrategicos
