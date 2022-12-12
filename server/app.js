const express = require('express');
const app = express();
const cors = require("cors");
const multer = require('multer');
const morgan = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto-js');
require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors()); 
dirname = path.join(process.cwd(),'../')

const imageUploadPathMenu = dirname + '/src/assets/menu';
const imageUploadPathPhotos = dirname + '/src/assets/photos';
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

const imageUploadMenu = multer({storage: storageFile(imageUploadPathMenu)})
const imageUploadPhotos = multer({storage: storageFile(imageUploadPathPhotos)})
const txtFRUpload = multer({storage: storageFile(txtFRUploadPath)})
const txtENUpload = multer({storage: storageFile(txtENUploadPath)})
const txtDEUpload = multer({storage: storageFile(txtDEUploadPath)})

morgan.token('id',  function (req, res) { return req.id})
app.use(morgan("[:date[iso] #:id] :method :status at :url from :remote-addr", {
  stream: fs.createWriteStream('./logs/access.log', {flags: 'a'})
}));

app.post('/image-upload-menu', imageUploadMenu.array("my-image-file"), (req, res, next) => {
  fs.appendFileSync("./logs/access.log",JSON.stringify(req.files) , "UTF-8",{'flags': 'a+'});
  res.send('POST request recieved on server to /image-upload.');
})
app.post('/image-upload-photos', imageUploadPhotos.array("my-image-file"), (req, res, next) => {
  fs.appendFileSync("./logs/access.log",JSON.stringify(req.files) , "UTF-8",{'flags': 'a+'});
  res.send('POST request recieved on server to /image-upload.');
})
app.post('/txt-upload-fr', txtFRUpload.array('my-image-file'), (req, res, next) => {
  fs.appendFileSync("./logs/access.log",JSON.stringify(req.files) , "UTF-8",{'flags': 'a+'});
  res.send('POST request recieved on server to /txt-upload-fr.');
})
app.post('/txt-upload-en', txtENUpload.array('my-image-file'), (req, res, next) => {
  fs.appendFileSync("./logs/access.log",JSON.stringify(req.files) , "UTF-8",{'flags': 'a+'});
  res.send('POST request recieved on server to /txt-upload-en.');
})
app.post('/txt-upload-de', txtDEUpload.array('my-image-file'), (req, res, next) => {
  fs.appendFileSync("./logs/access.log",JSON.stringify(req.files) , "UTF-8",{'flags': 'a+'});
  res.send('POST request recieved on server to /txt-upload-de.');
})
app.post('/login',(req,res, next) =>{
  const user = crypto.AES.decrypt(req.body.user,process.env.REACT_APP_PASS).toString(crypto.enc.Utf8)
  const password = crypto.AES.decrypt(req.body.password,process.env.REACT_APP_PASS).toString(crypto.enc.Utf8)
  if(user === crypto.enc.Utf8.stringify(crypto.enc.Base64.parse(process.env.REACT_APP_U)) && 
  password===crypto.enc.Utf8.stringify(crypto.enc.Base64.parse(process.env.REACT_APP_P))){
    console.log('auth succes');
    res.send({'auth':'true','token':'McQfTjWnZr4t7w!z%C*F-JaNdRgUkXp2'});
  }else{
    console.log('auth failed');
    res.send({'auth':'false','token':''});
  }
})
app.post('/auth',(req,res, next) =>{
  if(req.body.auth === 'McQfTjWnZr4t7w!z%C*F-JaNdRgUkXp2'){
    res.send({'auth':'true'});
  }
})



const port = 4000
app.listen(port, process.env.IP, function(){
  console.log(`Server is running on port ${port}`);
});