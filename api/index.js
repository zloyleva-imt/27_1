const express = require('express');
const app = express();
const port = process.env.API_PORT || 3000;

app.listen(port, () => {
    console.log(`App has been loaded on port ${port}`);
})