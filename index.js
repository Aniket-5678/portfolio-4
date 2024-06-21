import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import portfolioRoutes from "./routes/portfolioRoutes.js"
import connectionDB from "./db/db.js"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

 // dotenv configuration
 dotenv.config()

 connectionDB()

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, './client/build')))

app.use('/api/v1/portfolio', portfolioRoutes )



app.use('*', function(req, res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
    })

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on PORt ${process.env.PORT}`);
})