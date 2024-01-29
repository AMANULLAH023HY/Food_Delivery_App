
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const connectionToDB = async()=>{

    try { 
        const {connection}= await mongoose.connect(process.env.MONGO_URI || `mongodb://127.0.0.1:27017/Food_App`
        );
    
        if(connection){
            console.log(`Connected to mongodb ${connection.host}`);
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}

module.exports = connectionToDB;


