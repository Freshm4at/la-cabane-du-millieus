import React from 'react'
import axios from 'axios';
import './Admin.css'
import { images } from '../../constants';
import { useState } from 'react';

const Admin = () => {
  const [image, setImage] = useState(null);
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
    
      }

  return (
    <div className="app__admin">
        <img src={images.fishPhoto}></img>
        <div className='app__admin-upload flex__center'>
          <h1 className='headtext__cormorant'>Admin</h1>
          <input type="file" onChange={getFileInfo}></input>
          <img src={image}/>
          <button type='button' className='custom__button' onClick={HandleClick}><p className='custom__button-text'>Upload</p></button>
        </div>
    </div>
  )
}
export default Admin;
