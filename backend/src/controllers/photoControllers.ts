import {Request, Response} from 'express';
import Photo from '../models/photo'
import fs from 'fs-extra';
import path from 'path';

export async function getPhotos(req: Request, res: Response): Promise<Response>{
    const photos = await Photo.find();
    return res.json(photos);
};

export async function getPhoto(req: Request, res: Response): Promise<Response>{
    //desestructuracion.. del req.params solo quiero el id
    const {id} = req.params;
    const photo= await Photo.findById(id);
    return res.json(photo);
}

export async function deletePhotos(req: Request, res: Response): Promise<Response>{
    const {id} = req.params;
    const photo = await Photo.findByIdAndRemove(id);
    //para borrar la foto de la carpeta uploads
    if(photo){
        await fs.unlink(path.resolve(photo.imagePath))
    }
    return res.json({
        message: 'Foto borrada',
        photo
    });
}

export async function createPhotos(req: Request, res: Response): Promise<Response>{
    const {title, description} = req.body;
    //objeto para guardar en mongodb
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    };

    const photo = new Photo(newPhoto);
    await photo.save();

    //console.log('guardando foto');
    //console.log(req.body) //muestra en consola lo que envia el servidor
    return res.json({
        message: 'foto guardada con exito',
        photo
    })
};

export async function updatePhotos(req: Request, res: Response): Promise<Response>{
    const {id} = req.params;
    const {title, description} = req.body;
    const update = await Photo.findByIdAndUpdate(id, {
        title,
        description
    },{new: true});
    return res.json({
        message:'Foto actualizada',
        update
    })
}