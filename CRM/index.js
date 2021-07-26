import express from 'express';
import routes from '/Users/jessicasingletary/Documents/GitHub/node.js_API/CRM/src/routes/crmRoutes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// execution of express
const app = express();
// port number
const PORT = 4000; 

// mongoose connection 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    // prevent errors
    useNewUrlParser: true,
    useUnifiedTopology:true
});

// bodyparser setup (bodyoarser is deprecated)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

// to console
app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);