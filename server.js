const http = require('http');
const app = require('./app.js');
const {PORT} = require('./config')
const server = http.createServer(app);

server.listen(PORT, (err) => {
  if (err) console.error('❌ Unable to connect the server: ', err);
    console.log(`🌍 Server listening on port ${PORT}`);
});
