import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    username : {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        index : true
    },
    email : {
        type : String,
        required : true,
        lowercase: true,
        unique : true,
        trim : true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    password : {
        type : String,
        required : [true, 'Password is required!'] 
    },
    history : {
        type : Schema.Types.ObjectId,
        ref : "UserData"
    },
    refreshToken : {
        type : String
    }
}, {timestamps: true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
});

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(this.password, password)
}

userSchema.methods.generateAccessTokens = function() {
    return jwt.sign(
        {
            _id : this._id,
            username : this.username,
            email : this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshTokens = function () {
    return jwt.sign(
        {
            _id : this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model('User', userSchema)