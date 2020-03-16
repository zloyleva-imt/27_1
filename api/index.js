const app = require('./server');

const port = process.env.API_PORT || 3000;

app.listen(port, () => {
    console.log(`App has been loaded on port ${port}`);
});