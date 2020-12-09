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

class BadRequest extends Error{}
class NotFound extends Error{}

module.exports = {
    ErrorService,
    BadRequest,
    NotFound
}