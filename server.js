const express = require('express')
const app = express()
const env = require('dotenv').config()
const {Sequelize} = require('sequelize')

const userRoute = require('./routes/v1/user.route')

const PORT = process.env.PORT || 8000

const sequelize = new Sequelize(
    'codesprinkle',
    'root',
    '',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );
  
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch(error => {
      console.error("Unable to connect to the database: ", error);
    });

app.use(express.json({}))

app.use('/v1/users',userRoute)

app.get('/',(req,res)=>{
  res.send('It working 😀')
})

app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`)
})
