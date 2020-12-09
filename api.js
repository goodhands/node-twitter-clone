require('dotenv').config()
const http = require('http');
const app = require('./index');
const port = parseInt(process.env.PORT) || 3000;

const server = http.createServer(app);
server.listen(port);


console.log(`Server is running at http://localhost:${port}`);

console.log(process.env.DB_NAME);