const http = require('http');
const app = require('./app.js');

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, (err) => {
  if (err) console.error('❌ Unable to connect the server: ', err);
    console.log(`🌍 Server listening on port ${port}`);
});
