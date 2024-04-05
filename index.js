const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');      
app.set('views', 'views');          

const adminRoutes = require('./routes/admin.js');
const errorController = require('./controllers/error.js')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);

app.use(errorController.get404);
const PORT = process.env.PORT || 3000; // Use process.env.PORT for production environment
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});