const express = require('express');
const routes = require('./controllers');
const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require('./config/config');

app.use(express.json());

app.use()
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    sequelize.sync({ force: false});
})
