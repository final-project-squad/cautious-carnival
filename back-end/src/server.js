require('./db/connection');
const express = require('express');
const app = express();
const cors = require('cors');
const {userRouter} = require('./User/user.routes')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(userRouter);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})