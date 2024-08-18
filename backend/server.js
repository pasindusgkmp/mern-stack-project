// const express = require('express');
// const app = express();
// const cors = require('cors');

// const port = 3001;
// const host = '127.0.0.1';
// const mongoose = require('mongoose');
// const router = require('./router');

// app.use(cors());
// app.use(express.json());

// const uri = `mongodb+srv://pasindugunasekara889:sGsOhEhflDsvPhX9@cluster1.diqrujx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

// const connect = async () => {
//     try {
//         await mongoose.connect(uri);
//         console.log('Connected to MongoDB');
//     }catch(error){
//         console.log(error);
        
//     }
// }

// const server = app.listen(3001,'127.0.0.1', () => {
//     console.log(`Server is running on port to ${server.address().port}`);
    
// });


// app.use('/api', router);


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();
const port = 3001;
const host = 'localhost';
const uri = `mongodb+srv://pasindugunasekara889:sGsOhEhflDsvPhX9@cluster1.diqrujx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

app.use(cors());
app.use(express.json());

const connect = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

connect();

app.use('/api', router);

const server = app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
