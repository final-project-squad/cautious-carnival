require('./db/connection');
const express = require('express');
const app = express();
const cors = require('cors');
const {userRouter} = require('./User/user.routes')
const {plantRouter} = require('./Plant/plant.routes')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(userRouter);
app.use(plantRouter); 

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})
