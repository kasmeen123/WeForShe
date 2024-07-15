import mongoose from 'mongoose'

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-2ky3zvv-shard-00-00.f4de4xk.mongodb.net:27017,ac-2ky3zvv-shard-00-01.f4de4xk.mongodb.net:27017,ac-2ky3zvv-shard-00-02.f4de4xk.mongodb.net:27017/?ssl=true&replicaSet=atlas-e3k3yk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('Database connected successfully')
    }
    catch(error){
        console.log('Error while connecting to database',error.message);
    }
}

export default Connection