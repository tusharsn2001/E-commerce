const express = require('express');
const app = express();
const cors = require('cors');


// Get Api Data
app.use(cors(
    {
        origin: "*"
    }
));
const cpuRouter = require('./routes/cpuRoutes')
const gpuRouter = require('./routes/gpuRoutes')
const ramRouter = require('./routes/ramRoutes')

app.use('/api/processors', cpuRouter)
app.use('/api/graphiccards', gpuRouter)
app.use('/api/rams', ramRouter)




module.exports = app