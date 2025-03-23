import './config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import * as Sentry from "@sentry/node";
import { clerlWebhooks } from './controllers/webHooks.js'
import companyRoutes from './routes/CompanyRoutes.js'
import connectCloudinary from './config/Cloudinary.js'

//Initialize Express
const app = express()

//Connect to DataBase
await connectDB()
await connectCloudinary()

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.get('/',(req,res)=>res.send("Api Is Working"))

//Verify Sentry
app.get("/", function rootHandler(req, res) {
    res.end("Hello world!");
  });

app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
//Route
app.post('/webhooks',clerlWebhooks)
app.use('/api/company',companyRoutes)  

//Port
const port = process.env.PORT || 5000

//sentry Configuration
Sentry.setupExpressErrorHandler(app);

app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`);
    
})