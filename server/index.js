const express = require('express');

const app = express()


//settings
const PORT = process.env.PORT || 4000;


//starting the server
app.listen(PORT, () => {console.log(`server listening on port ${PORT}`)})