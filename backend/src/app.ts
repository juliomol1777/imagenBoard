import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index';
import path from 'path';

const app = express();
//config
app.set('port', process.env.PORT || 3000);

//middlerware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api', indexRoutes);

// uploads es la carpeta usada para guardar imagenes
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;