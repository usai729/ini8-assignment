#INI8 ASSIGNMENT

API Routes <br>
`POST /api/user` - Create a new user <br>
`PUT /api/user` - Update user email <br>
`DELETE /api/user/:id` - Delete a user by id <br>
`GET /api/user` - Get all users <br>
`GET /api/user/:id` - Get a user by id <br>

.env <br>
<code>
HOST= "localhost" <br>
PORT= 3306 <br>
DB_NAME= 'ini8' <br>
USER= "root" <br>
PASSWORD= "rootmysql@1#" <br>
</code>
<br>
Steps to get the API working<br>
Step 1: Install Node.js <br>
Step 2: Run the following command `npm i express mysql nodemon dotenv bcrypt` to install the packages <br>
Step 3: Create a <i>.env</i> file with about contents <br>
Step 4: Run command `nodemon` <br>
