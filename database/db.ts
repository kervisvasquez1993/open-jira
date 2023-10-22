import mongoose from 'mongoose';


const mongooConnect = {
    isConnected: 0,
}

export const connect = async () => {
    if (mongooConnect.isConnected) {
        console.log("estaba conectado :)")
        return
    }
    if (mongoose.connections.length > 0) {
        mongooConnect.isConnected = mongoose.connections[0].readyState
        if (mongooConnect.isConnected === 1) {
            console.log("usando conexion anteiror")
        }

        await mongoose.disconnect()
    }

    await mongoose.connect(process.env.MONGO_URL || "");
    mongooConnect.isConnected = 1

    console.log("conectado a mongodb")
}

export const disconnect = async () => {
    if (mongooConnect.isConnected === 0) return
    await mongoose.disconnect();
    console.log("desconectado del mongodb")
}
