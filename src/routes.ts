import express from 'express' 
import db from './database/connection'

const routes = express.Router()

routes.post("/classes", async (request, response) => {
  const { 
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = request.body
  
 const insertedUserId = await db("users").insert({
   name,
   avatar,
   whatsapp,
   bio,
 })
  
  const user_id = insertedUserId[0]

  console.log(request.body);
  
   await db("classes").insert({
     subject,
     cost,
     user_id,
   })


  return response.json(request.body)
  
 
})

export default routes