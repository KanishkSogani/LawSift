import mongoose, { Schema } from "mongoose";

const summarySchema = new Schema({
    summary : String
})

const userDataSchema = new Schema({
    summary : {
        type: {summarySchema}
    },
    
},{timestamps: true})

export const UserData = mongoose.model('UserData', userDataSchema)