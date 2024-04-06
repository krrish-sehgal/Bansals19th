const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const helmet = require('helmet');
const compression = require('compression');

const app = express();

app.set('view engine', 'ejs');      
app.set('views', 'views');          

const adminRoutes = require('./routes/admin.js');
const errorController = require('./controllers/error.js')

// app.use(helmet());
app.use(compression());

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);

app.use(errorController.get404);
const PORT = process.env.PORT || 3000; 

// https.createServer({key:privateKey , cert:certificate } , app)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});