import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import bodyparser from 'body-parser'

const app = express()
const _dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000


app.get("/", (req,res)=>{
    res.sendFile(_dirname+ "/index.html")
})

app.use(bodyparser.urlencoded({extended: true}))

app.post("/submit", (req,res)=>{
    req.body
})

app.listen(port, ()=>{
    console.log("listening to port "+port)
})