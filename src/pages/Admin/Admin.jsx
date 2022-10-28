import React from 'react'
import axios from 'axios';
import ImageUploading from "react-images-uploading";
import './Admin.css'
import { images } from '../../constants';

const Admin = () => {
    const onChange = (imageList) => {
        // data for submit
        
        // Create an object of formData 
        const formData = new FormData(); 
         
        // Update the formData object 
        formData.append( 
          "myFile", 
          imageList[0].file, 
          imageList[0].file.name
        ); 
       
        // Details of the uploaded file 
        console.log(imageList[0].file); 
       
        // Request made to the backend api 
        // Send formData object to my php file for save in folder
        axios.post("http://localhost/reactimageupload.php", formData); 
      }; 
  return (
    <div className="maincontainer">
        <img src={images.fishPhoto}></img>
        <h1 className="mr-5 ml-5 mt-5">TheRichPost</h1>
        <div className="container mb-5 mt-5">
        <ImageUploading
        onChange={onChange}>
        {({ imageList, onImageUpload }) => (
          // write your building UI
          <div className="imageuploader">

            <div className="mainBtns">
            <button className="btn btn-primary mr-1" onClick={onImageUpload}>Upload Image</button>
            
            </div>
            {imageList.map((image) => (
              <div className="imagecontainer" key={image.key}>
                <img src={image.dataURL} />
              </div>
            ))}
          </div>
        )}
      </ImageUploading>  
      </div>
      </div>
  )
}
export default Admin;
