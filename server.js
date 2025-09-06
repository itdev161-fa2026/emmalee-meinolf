import express from 'express';

//init express app
const app = express();

//API endpoints
app.get('/',(req,res) =>
    res.send('ttp get request sent to root api endpoint')
);

//Connection listener
app.listen(3000, () => ('Express server running on port 3000'));