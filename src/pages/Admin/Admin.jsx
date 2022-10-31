import React from 'react'
import axios from 'axios';
import './Admin.css'
import { images } from '../../constants';
import { useState } from 'react';

const Admin = () => {
  const [image, setImage] = useState(null);
  const [img,setImg] = useState(null)
  const HandleClick = () => {
    axios.post('http://localhost:4000/image-upload', image)
    .then(res => {
      console.log('Axios response: ', res)
    })
    .then(res => {
      //WE CAN REMOVE THIS NEXT LINE
      console.log('Axios POST request successful!') 
      console.log('Axios response: ', res)
    })
  }
  const getFileInfo = (e) => {
    //NOTE THE ADDITION OF 'e' PARAMETER
        console.log('File info working!')
        console.log(e.target.files[0]);
        const formData = new FormData(); 
        //FILE INFO NAME WILL BE "my-image-file"
        formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
        setImage(formData);
        setImg(URL.createObjectURL(e.target.files[0]))
    
      }
  const handleChange = () => { 

    console.log('The checkbox was toggled'); 
    
  }; 

  return (
    <div className="app__admin">
        <img src={images.fishPhoto}></img>
        <h1 className='headtext__cormorant' style={{'text-align':'center',padding:'1rem'}}>Admin Panel</h1>
        <div className='app__admin-upload flex__center'>
          <p className='p__opensans' style={{"font-size":'50px',"padding-bottom":'2rem'}}>Changer une image</p>
          <input type="file" onChange={getFileInfo}></input>
          <img src={img} alt='upload_img'/>
          <button type='button' className='custom__button' onClick={HandleClick}><p className='custom__button-text'>Upload</p></button>
        </div>
        <div className='app__admin-upload flex__center'>
          <p className='p__opensans' style={{"font-size":'50px',"padding-bottom":'2rem'}}>Changer le text</p>
          <div className='app__admin-upload-checkbox flex__center'>
            <div>
              <input type="checkbox" id="txtFR" name="txtFR" onChange={handleChange}/>
              <label for="scales" style={{color:'black','margin':'1rem'}}>FR</label>
            </div>
            <div>
              <input type="checkbox" id="txtEN" name="txtFEN" onChange={handleChange}/>
              <label for="scales" style={{color:'black','margin':'1rem'}}>EN</label>
            </div>
            <div>
              <input type="checkbox" id="txtDE" name="txtDE" onChange={handleChange}/>
              <label for="scales" style={{color:'black','margin':'1rem'}}>DE</label>
            </div>
          </div>
          <input type="file" onChange={getFileInfo}></input>
          <button type='button' className='custom__button' onClick={HandleClick}><p className='custom__button-text'>Upload</p></button>
        </div>
    </div>
  )
}
export default Admin;
