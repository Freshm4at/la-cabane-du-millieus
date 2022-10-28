import React from 'react'
import axios from 'axios';
import './Admin.css'
import { images } from '../../constants';

const Admin = () => {
  return (
    <div className="maincontainer">
        <img src={images.fishPhoto}></img>
    </div>
  )
}
export default Admin;
