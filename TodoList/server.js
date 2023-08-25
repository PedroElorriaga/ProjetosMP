const app = require('./src/app/app');
require('dotenv').config();

const PORT = process.env.PORT || 3006

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Acessar em http://localhost:${PORT}`);
});
