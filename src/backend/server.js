const express = require('express')
const multer = require('multer')
const cors = require('cors')
const path = require('path')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static('uploads'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage })
app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file){
        return res.status(400).send("No file upload")
    }
    res.send({filePath: `http://localhost:${PORT}/${file.filename}`})
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})