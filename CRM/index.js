import express from 'express';

// execution of express
const app = express();
// port number
const PORT = 4000; 

app.get('/', (req, res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

// to console
app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);