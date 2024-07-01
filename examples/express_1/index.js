const express = require('express')
const app = express();
const port = 3000;
const userRouter = require('./userRoutes')

app.use('/', userRouter)
app.get('/',(req,res) =>{
   res.send('Hello express!');
});

app.listen( port, () => {
    console.log(`Server is running on port ${port}`)
}

)