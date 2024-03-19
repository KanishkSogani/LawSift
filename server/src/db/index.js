<<<<<<< HEAD
// import mongoose from 'mongoose'
// import { DB_Name } from '../constants.js'

// const connectDB = async() => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${DB_Name}`)
//         console.log(`MongoDB connected !! DB Host : ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log('MongoDB Connection Error : ', error)
//         process.exit(1)
//     }
// }
=======
import mongoose from 'mongoose'
// import { DB_Name } from '../constants.js'

const connectDB = async() => {
    try {
        // const dbNameEncoded = encodeURIComponent(DB_Name)
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/LawSift`)
        console.log(`MongoDB connected !! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MongoDB Connection Error : ', error)
        process.exit(1)
    }
}
>>>>>>> c4b147dee059aeef167fb97c0f87a7004047944c

// export default connectDB
