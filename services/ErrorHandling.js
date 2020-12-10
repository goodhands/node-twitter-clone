class ErrorService extends Error{
    constructor(message){
        super();
        this.message = message;
    }

    getCode(){
        if (this instanceof BadRequest){
            return 403;
        } if(this instanceof NotFound){
            return 404;
        }
        return 500;
    }
}

class BadRequest extends ErrorService{}
class NotFound extends ErrorService{}

module.exports = {
    ErrorService,
    BadRequest,
    NotFound
}