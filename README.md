#INI8 ASSIGNMENT

API Routes
`POST /api/user` - Create a new user
`PUT /api/user` - Update user email
`DELETE /api/user/:id` - Delete a user by id
`GET /api/user` - Get all users
`GET /api/user/:id` - Get a user by id

.env
<code>
HOST= "localhost"
PORT= 3306
DB_NAME= 'ini8'
USER= "root"
PASSWORD= "rootmysql@1#"
</code>

Steps to get the API working<br>
Step 1: Install Node.js
Step 2: Run the following command `npm i express mysql nodemon dotenv bcrypt` to install the packages
Step 3: Create a .env file with about contents
Step 4: Run command `nodemon`
