// import http from 'http';
// import app from './app.js';
// import dotenv from 'dotenv';
// import { connectDB } from './config/db.js';

// dotenv.config();

// let server = null;
// const PORT = process.env.PORT || null;
// if(!PORT) {
//     console.error('PORT is Missing in environment variables');
//     process.exit(1);
// }

// (async () => {
//   // await connectDB();

//   server = http.createServer(app);

//   server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// })();

// export { server };
import http from 'http';
import dotenv from 'dotenv';
import app from './app.js';
import { error } from 'console';
import { connectDB } from './config/db.js';

dotenv.config();

const PORT = process.env.PORT ?? NULL;

if (!PORT) {
  console.log("PORT does not exixt");
  process.exit(1);
}

(async () => {
  //data base connecting before creating the server 
  await connectDB();

  //creating http server
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
  });

})();
