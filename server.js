const http = require('http');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config/config.env' });

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

const listener = server.listen(
  PORT,
  console.log(
    `Server started in ${process.env.NODE_ENV} mode on port ${PORT}...`
  )
);

process.on('unhandledRejection', err => {
  console.log(`Error: ${err.message}`);
  listener.close(() => process.exit(1));
});
