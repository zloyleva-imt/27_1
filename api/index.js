const app = require('./server');
const router = require('./routes');
const port = process.env.API_PORT || 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
 
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api',router);


app.listen(port, () => {
    console.log(`App has been loaded on port ${port}`);
});