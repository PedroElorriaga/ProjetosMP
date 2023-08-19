const app = require('./src/app/app');
require('dotenv').config();

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Acessar em http://localhost:${PORT}`);
});
