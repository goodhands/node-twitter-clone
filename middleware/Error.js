const { ErrorService } = require('../services/ErrorHandling');

const handleErrors = (error, res, req, next) => {
    if(error instanceof ErrorService) {
        return res.status(error.getCode()).json({
            status: 'Error',
            message: error.message
        })
    }

    return res.status(500).json({
        status: 'Error',
        message: error.message
    })
}

module.exports = handleErrors;