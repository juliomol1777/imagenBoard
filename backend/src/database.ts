import {connect} from "mongoose";

export async function startConnection(){
    await connect('mongodb://localhost/foto-gallery-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
};
console.log('database is connected');