const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get Api Data
app.use(cors(
    {
        origin: "*"
    }
));
const cpuRouter = require('./routes/cpuRoutes')
const gpuRouter = require('./routes/gpuRoutes')
const ramRouter = require('./routes/ramRoutes')
const userRouter = require('./routes/userRoutes')

app.use('/api/processors', cpuRouter)
app.use('/api/graphiccards', gpuRouter)
app.use('/api/rams', ramRouter)
app.use('/api/users', userRouter)



module.exports = app