const express = require('express');
const app = express();

app.use( '/', (req, res) => {
    res.send('Hello World!')
})

const port = 3000;
app.listen( (port, () => {
    console.log(`App is listening on port ${port}`)

}))