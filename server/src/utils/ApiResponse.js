class ApiResponse{
    constructor(status, data, message = "Success"){
        this.status = status;
        this.message = message;
        this.data = data;
        this.success = status < 400;
    }

}

export {ApiResponse}