import express from 'express';
const app = express();
const port  = process.env.port || '3000';

import router from './routes/web.js';

app.use('/' , router);

app.listen(port , ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})