import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req,res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('server is running on https://localhost:3000');
});