const express = require('express')
const app = express()

app.get('/seatbooking/authenticate/username=:user&password=:password', (req, res) => {
  
    if((req.params.user === "admin" && req.params.password === "password") || (req.params.user === "vishnu" && req.params.password === "1234")){
      
      res.send(200)
    }else {
      res.sendStatus(401).send("authentication failure")
    }
  // res.send('hello world')
}) 

app.listen(4000)                                            