import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asynchandler.js"
import axios from "axios"

const footer = asyncHandler(async(req,res)=> {
    try {
        const response = await axios.post(
            "http://13.48.136.54:8000/api/api-code/",
            {},
            {
                headers : {
                    Authorization : "Bearer efa410d0-0db1-454b-b213-d825256cd22c"
                }
            }
        );
        console.log(response.data)
        res.send(response.data)
    } catch (error) {
        throw new ApiError(400, 'Api Connection Error');
    }
})

export {footer}