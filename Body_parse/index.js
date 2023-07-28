import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import bodyparser from 'body-parser'

const app = express()
const _dirname = dirname(fileURLToPath(import.meta.url))
const port = 3000


app.get("/", (req,res)=>{
    
})

app.listen(port, ()=>{
    console.log("listening to port "+port)
})