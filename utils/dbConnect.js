import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {
    if (connection.isConnected){
        return;
    }

    const db = await mongoose.connect(process.env.MONGOOSE_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState

    console.log(connection.isConnected)
}

export default dbConnect