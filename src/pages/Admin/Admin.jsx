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
import importAll from '../../components/Tools/importAll';




const Admin = () => {
  const [image, setImage] = useState(null);
  const [img,setImg] = useState(null)
  const [imgType,setimgType]= useState(null)
  const [lang, setLang] = useState(null);
  const [txt,setTxt] = useState(null)
  const [close,setClose]=useState(null)
  const Base_URL = process.env.REACT_APP_ROUTE

  const handleChangeTxt = (event) => {
    setLang(event.target.value);
  };
  const handleChangeImg = (event) =>{
    setimgType(event.target.value)
  }
  const handleChangeClose = (event) => {
    setClose(event.target.value);
  };
  const handleClickTxt = () =>{
    axios.post(`${Base_URL}/auth`, {
      auth:localStorage.getItem("token") 
    })
    .then(res => {
      if(lang!=null){
        if(res.data.auth==='true' && txt!=null ){
          axios.post(`${Base_URL}/txt-upload-${lang}`, txt)
          alert(`Upload des textes ${lang} réussi!`)
          setTxt(null)
          setLang(null)
        }else{
          alert('veuillez charger un fichier.')
        }
      }else{
        alert("Choisissez la langue changer")
      }
    })
    
  }

  const HandleClickImg = () => {
    axios.post(`${Base_URL}/auth`, {
      auth:localStorage.getItem("token") 
    })
    .then(res => {
      if(imgType!=null){
        if(res.data.auth==='true' && image!=null){
          axios.post(`${Base_URL}/image-upload-${imgType}`, image)
          alert(`Upload de l'image réussi!`)
          setImg(null)
          setImage(null);
        }
        else{
          alert('veuillez charger un fichier.')
        }
    }else{
      alert("Choisissez le type d'image a changer")
    }
    })
  }
  const getFileInfo = (e) => {
      const validFileMenu = ["menu_paper_carte_en.jpg","menu_paper_carte_fr.jpg",
      "menu_paper_menu_en.jpg","menu_paper_menu_fr.jpg","menu_paper_vin_en.jpg","menu_paper_vin_fr.jpg"]
      const validFileLang = "translation.json"
      var verif = false
      const ImgFolder = importAll(require.context('../../assets/photos', false, /\.(png|jpe?g|svg)$/));
      if(validFileMenu.includes(e.target.files[0].name)){
        verif = true
      }else{
        if(e.target.files[0].name === validFileLang){
          verif = true
        }else{
          if(imgType==='photos'){
            verif=true
            }
          }
        }
      
      if(verif===true){
        const formData = new FormData();  
        //FILE INFO NAME WILL BE "my-image-file"
        if(imgType==='photos'){
          formData.append('my-image-file', e.target.files[0], `gallery${ImgFolder[1]+1}.png`);
        }else{
          formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
        }
        setImage(formData);
        setTxt(formData)
        setImg(URL.createObjectURL(e.target.files[0]))
      }else{alert("Mauvais fichier rentré... Contactez l'administrateur.")}}

    const HandleClickClose = () =>{
      axios.post(`${Base_URL}/auth`, {
        auth:localStorage.getItem("token") 
      })
      .then(res => {
        if(close){
          const body = {close:close}
            axios.post(`${Base_URL}/close`, body)
            alert(`Mise à jour réussi!`)
          }else{
            alert(`Faites un choix`)
          }
        }
      )
    }

  return (
    <div className="app__admin">
        <img src={images.fishPhoto} alt='img_seafish'></img>
        <h1 className='headtext__cormorant' style={{'text-align':'center',padding:'1rem'}}>Admin Panel</h1>
        <div className='app__admin-upload flex__center'>
          <p className='p__opensans' style={{"font-size":'50px',"padding-bottom":'2rem'}}>Changer une image</p>
          <Box sx={{ minWidth: 100 }}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Image</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={imgType}
                  label="Image"
                  onChange={handleChangeImg}>
                  <MenuItem value='photos'><p style={{color:'black'}}>Photos</p></MenuItem>
                  <MenuItem value='menu'><p style={{color:'black'}}>Menu</p></MenuItem>
                </Select>
              </FormControl>
              </Box>
              <p className='p__opensans' style={{"font-size":"12px",color:'#808080'}}>photos = gallery/page d'acceuil. menu = image du menu</p>
          <input className='input' type="file" onChange={getFileInfo} accept=".jpg,.png"></input>
          <img src={img} alt='upload_img'/>
          <button type='button' className='custom__button' onClick={HandleClickImg}><p className='custom__button-text'>Upload</p></button>
        </div>
        <div className='app__admin-upload flex__center'>
          <p className='p__opensans' style={{"font-size":'50px',"padding-bottom":'2rem'}}>Changer les textes</p>
          <div className='app__admin-upload-checkbox flex__center'>
          <Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Langues</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                label="langue"
                onChange={handleChangeTxt}>
                <MenuItem value='fr'><p style={{color:'black'}}>FR</p></MenuItem>
                <MenuItem value='en'><p style={{color:'black'}}>EN</p></MenuItem>
                <MenuItem value='de'><p style={{color:'black'}}>DE</p></MenuItem>
                <MenuItem value='it'><p style={{color:'black'}}>IT</p></MenuItem>
              </Select>
            </FormControl>
            </Box>
          </div>
          <input className='input' type="file" onChange={getFileInfo} accept=".json"></input>
          <button type='button' className='custom__button' onClick={handleClickTxt}><p className='custom__button-text'>Upload</p></button>
        </div>
        <div className='app__admin-upload flex__center'>
          <p className='p__opensans' style={{"font-size":'50px',"padding-bottom":'2rem'}}>Fermeture restaurant</p><Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choix</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={close}
                label="Close"
                onChange={handleChangeClose}>
                <MenuItem value='Oui'><p style={{color:'black'}}>Oui</p></MenuItem>
                <MenuItem value='Non'><p style={{color:'black'}}>Non</p></MenuItem>
              </Select>
            </FormControl>
            </Box>
          <button type='button' className='custom__button' onClick={HandleClickClose} style={{marginTop:'1rem'}}><p className='custom__button-text'>Mettre à jour</p></button>
        </div>
    </div>
  )
}
export default Admin;
