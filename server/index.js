const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express()


//midelwares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//settings
const PORT = process.env.PORT || 4000;


//starting the server
app.listen(PORT, () => {console.log(`server listening on port ${PORT}`)})