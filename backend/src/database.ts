import {connect} from "mongoose";

export async function startConnection(){
    await connect('mongodb://localhost/foto-gallery-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};
console.log('database is connected');