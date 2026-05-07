import dotenv from 'dotenv';
dotenv.config();

import app from './app'

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.APP_PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port http://${HOST}:${PORT}/api`)
})