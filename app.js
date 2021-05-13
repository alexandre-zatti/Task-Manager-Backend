require("dotenv").config();

const
    express = require('express');
    app = express();
    port = process.env.PORT;
    routes = require('./src/Routes/routes')

app.use(express.json());
app.use('/',routes);

app.listen(port, () => {
    console.log(`Server iniciado na porta ${port}`);
  });