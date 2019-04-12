require('dotenv').config();

const server = require('./api/server.js');

const port = process.env || 5000;
server.listen(port, () => console.log(`--- Good stuff going on at Port ${port} ---`));