const express =require('express');
// Import express .js files
const app = express();
const connect =require('./config/connection');
// Import routes files
const routes =require ('./routes');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Import routes
app.use(routes);
// Import PORT to run server
connect.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on  ${PORT}!`);
    });
  });
  