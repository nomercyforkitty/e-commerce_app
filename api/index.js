//import libs 
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

import path from 'path';
import { fileURLToPath } from "url";
import fileUpload from 'express-fileupload';

import router from './routes/index.js';

import errHandle from "./middleware/errorHandlingMiddleware.js"


dotenv.config()

// conenct db 
mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log('db connected'))
        .catch((err) => console.log(`db ${err}`));

const app = express();

app.use(express.json());

const filename = fileURLToPath(import.meta.url);
app.use(express.static(path.resolve(path.dirname(filename), 'static')))
app.use(fileUpload({}));

app.use('/api', router);
//err handle, lust middleware
app.use(errHandle)


app.listen(process.env.PORT, (err) => {
    if (err){
        return console.log(err);
    }

    console.log('ok');
})