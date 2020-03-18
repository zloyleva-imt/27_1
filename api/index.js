const app = require('./server');
const router = require('./routes');
const port = process.env.API_PORT || 3000;


app.use('/api',router);


app.listen(port, () => {
    console.log(`App has been loaded on port ${port}`);
});