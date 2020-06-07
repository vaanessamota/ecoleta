import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json()); //por padrao o express nao entende que estamos desenvolvendo uma Restul API

app.use(routes); 

app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads'))); //servir para aplicação arquivos estaticos

app.listen(3333);