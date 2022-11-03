const express = require('express');
const app = express();
const cors = require("cors");
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOrigin = 'http://localhost:3000';
app.use(cors({
  origin:[corsOrigin],
  methods:['GET','POST'],
  credentials: true 
})); 
dirname = path.join(process.cwd(),'../')
console.log(dirname)

const imageUploadPath = dirname + '/src/assets';
const txtFRUploadPath = dirname + '/public/assets/locales/fr';
const txtENUploadPath = dirname + '/public/assets/locales/en';
const txtDEUploadPath = dirname + '/public/assets/locales/de';

const storageFile = (path) => (
  multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path)
    },
    filename: function(req, file, cb) {
      cb(null, `${file.originalname}`)
    }
  })
)

const imageUpload = multer({storage: storageFile(imageUploadPath)})
const txtFRUpload = multer({storage: storageFile(txtFRUploadPath)})
const txtENUpload = multer({storage: storageFile(txtENUploadPath)})
const txtDEUpload = multer({storage: storageFile(txtDEUploadPath)})

app.post('/image-upload', imageUpload.array("my-image-file"), (req, res) => {
  console.log('POST request received to /image-upload.');
  console.log('Axios POST body: ', req.body);
  res.send('POST request recieved on server to /image-upload.');
})
app.post('/txt-upload-fr', txtFRUpload.array('my-image-file'), (req, res) => {
  console.log('POST request received to /txt-upload-en.');
  console.log('Axios POST body: ', req.body);
  res.send('POST request recieved on server to /txt-upload-fr.');
})
app.post('/txt-upload-en', txtENUpload.array('my-image-file'), (req, res) => {
  console.log('POST request received to /txt-upload-en.');
  console.log('Axios POST body: ', req.body);
  res.send('POST request recieved on server to /txt-upload-en.');
})
app.post('/txt-upload-de', txtDEUpload.array('my-image-file'), (req, res) => {
  console.log('POST request received to /txt-upload-de.');
  console.log('Axios POST body: ', req.body);
  res.send('POST request recieved on server to /txt-upload-de.');
})
app.post('/login',(req,res) =>{
  console.log('POST request received to /login');
  if(req.body.user === 'auriel' && req.body.password==='test'){
    console.log('auth succes');
    res.send({'token':'McQfTjWnZr4t7w!z%C*F-JaNdRgUkXp2'});
  } 
})

const port = 4000
app.listen(port, process.env.IP, function(){
  console.log(`Server is running on port ${port}`);
});