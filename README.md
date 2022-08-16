Prueba técnica entravision
--
* * *
 - Instalar AdonisJS **npm i -g @adonisjs/cli**.
 - Clonar el repositorio con **git clone https://github.com/Gustavo-Botero/football-api.git**.
 - Crear el archivo **.env** en la raíz del proyecto en base al archivo **.env.example** y configurar las variables de entorno.
    - La base de datos que se usa es MySQL.
 - En la terminar ingresar a la ruta donde tiene el proyecto y correr el comando **adonis key:generate**.
 - Correr el comando **npm install** para que instale todas las dependencias.
 - Ingresar en la terminal el comando **adonis migration:run** para generar las tablas en la base de datos. **NOTA:** la base de datos debe estar creada en MySQL antes de correr el comando.
 - Por último debemos iniciar el servidor de adonis **(adonis serve --dev)** para poder consumir los Endpoints.
 - Los Endpoint que llevan parámetros con espacios se deben reemplazar los espacios con un guión medio **(-)**.

Puertos a utilizar que no deben estar ocupados o con los servicios locales apagados:

___Mysql: 3306___

___AdonisJS: 3333___

Endpoints:

| Path | Verb | Body Params |
| -- | -- | -- |
| http://localhost:3333/api/football-api/import/:leagueCode | GET | leagueCode:string |
| http://localhost:3333/api/football-api/players/:leagueCode/:team? | GET | leagueCode: string / team: string|
| http://localhost:3333/api/football-api/team | GET |  |
| http://localhost:3333/api/football-api/team/:team/:players? | GET | team: string / players: boolean |
| http://localhost:3333/api/football-api/competition | GET |  |
| http://localhost:3333/api/football-api/competition/:competition | GET | competition: string |

Autor: Gustavo Adolfo Botero Villalobos © 2022
