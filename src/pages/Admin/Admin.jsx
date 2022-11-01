import React from 'react'
import axios from 'axios';
import './Admin.css'
import { images } from '../../constants';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';



const Admin = () => {
  const [image, setImage] = useState(null);
  const [img,setImg] = useState(null)
  const [lang, setLang] = useState(null);
  const [txt,setTxt] = useState(null)

  const handleChange = (event) => {
    setLang(event.target.value);
  };
  const handleClickTxt = () =>{
    axios.post(`http://localhost:4000/txt-upload-${lang}`, txt)
    .then(res => {
      console.log('Axios response: ', res)
    })
  }

  const HandleClickImg = () => {
    axios.post('http://localhost:4000/image-upload', image)
    .then(res => {
      console.log('Axios response: ', res)
    })
  }
  const getFileInfo = (e) => {
        const formData = new FormData(); 
        //FILE INFO NAME WILL BE "my-image-file"
        formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
        setImage(formData);
        setTxt(formData)
        setImg(URL.createObjectURL(e.target.files[0]))
    
      }

  return (
    <div className="app__admin">
        <img src={images.fishPhoto} alt='img_seafish'></img>
        <h1 className='headtext__cormorant' style={{'text-align':'center',padding:'1rem'}}>Admin Panel</h1>
        <div className='app__admin-upload flex__center'>
          <p className='p__opensans' style={{"font-size":'50px',"padding-bottom":'2rem'}}>Changer une image</p>
          <input type="file" onChange={getFileInfo}></input>
          <img src={img} alt='upload_img'/>
          <button type='button' className='custom__button' onClick={HandleClickImg}><p className='custom__button-text'>Upload</p></button>
        </div>
        <div className='app__admin-upload flex__center'>
          <p className='p__opensans' style={{"font-size":'50px',"padding-bottom":'2rem'}}>Changer les textes</p>
          <div className='app__admin-upload-checkbox flex__center'>
          <Box sx={{ minWidth: 80 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Langues</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                label="langue"
                onChange={handleChange}>
                <MenuItem value='fr'>FR</MenuItem>
                <MenuItem value='en'>EN</MenuItem>
                <MenuItem value='de'>DE</MenuItem>
              </Select>
            </FormControl>
            </Box>
          </div>
          <input type="file" onChange={getFileInfo}></input>
          <button type='button' className='custom__button' onClick={handleClickTxt}><p className='custom__button-text'>Upload</p></button>
        </div>
    </div>
  )
}
export default Admin;
