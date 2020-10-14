import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index';
import path from 'path';
import cors from 'cors';

const app = express();
//config
app.set('port', process.env.PORT || 4000);

//middlerware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes
app.use('/api', indexRoutes);

// uploads es la carpeta usada para guardar imagenes
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;