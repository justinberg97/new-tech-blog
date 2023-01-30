const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require('./config/config');

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    sequelize.sync({ force: false});
})
