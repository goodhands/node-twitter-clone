//add multer to handle file uploads
const multer  = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
    
        const folderpath = path.join(__dirname, '../public');
        
        if(!fs.existsSync(folderpath)){
            fs.mkdirSync(folderpath);
        }

      callback(null, folderpath);
    },
    filename: function (req, file, callback) {
        //append a unique string to the picture name
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        //construct file name
        const filename = file.fieldname + uniqueSuffix + '.' + path.extname(file.originalname);

        callback(null, filename);
    }
});

const upload = multer({ storage: storage });


module.exports = upload;
