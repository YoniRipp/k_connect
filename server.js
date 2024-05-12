const express = require('express');
const bodyParser = require('body-parser');
const setupDatabase = require('./setupDatabase');
const itemRoutes = require('./routes/itemRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const authenticateApiKey = require('./middleware/authenticateApiKey');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(authenticateApiKey);
app.use('/items', itemRoutes);
app.use('/category', categoryRoutes);


setupDatabase();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
