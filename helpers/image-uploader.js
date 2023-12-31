const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: function(req, file, cb){
        cb(null, new Data().getTime() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimeType === 'image/jpeg' || file.mimeType === 'image/png'){
       cb(null, true);
    } else{
        cb(new Error('Unsupported files'), false);
    }
}

const upload = multer({
    storage : storage,
    limits: {
        fieldSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
});

module.exports = {
    upload: upload
}
