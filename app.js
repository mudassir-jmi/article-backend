import express from 'express'
import mongoose  from 'mongoose'
import router from './routes/user-routes'
import cors from 'cors';

const app = express()
app.use(cors());
app.use(express.json())
  
app.use("/api/user",router)
const DB = 'mongodb+srv://mudassir-akhter:LrsNZzKLHKIHCfc6@cluster0.ceixgna.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));

app.listen(process.env.PORT | 4000, () => {
    console.log("Server Started");
})