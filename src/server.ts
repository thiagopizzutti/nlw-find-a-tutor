import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  const users = [
    {
      name: "Pedro",
      age: 37
    }
  ]
  
  
  return response.json(users)
})


app.listen(3333)