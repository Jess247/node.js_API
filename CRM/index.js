import express from 'express';
import routes from '/Users/jessicasingletary/Documents/GitHub/node.js_API/CRM/src/routes/crmRoutes.js';

// execution of express
const app = express();
// port number
const PORT = 4000; 

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

// to console
app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);