require("dotenv").config();
const
    express = require('express');
    app = express();
    cors = require('cors');
    port = process.env.PORT;
    routes = require('./src/Routes/routes')

app.use(express.json());

app.use(cors({
    credentials:true,
    origin:['http://localhost:3000']
}))
app.use('/',routes);

app.listen(port, () => {
    console.log(`Server iniciado na porta ${port}`);
  });