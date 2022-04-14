const express = require('express')
const app = express()

app.get('/seatbooking/authenticate/username=:user&password=:password', (req, res) => {
    console.log(req.params.user, req.params.password);
  res.send('hello world')
}) 

app.listen(4000)