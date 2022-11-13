import "./App.css";
import {useState} from "react";
import axios from "axios";

function App(){

  const [res, setRes] = useState(undefined);
  const [imageUrl, setImageUrl] = useState(undefined);
  const [image, setImage] = useState(undefined)

  const handleSubmit= () =>{
    let fileToUpload = image
    const formData = new FormData()
    formData.append('file', fileToUpload)
    const Upload = async() => {
      await axios.post('http://127.0.0.1:5000/predict', formData)
      .then(res => {setRes(res.data.number)})
    }
    Upload();
    // setImage(undefined);
    // setImageUrl(undefined);
  }

  function handleImageUpload(event){
      setRes(undefined);
      setImage(event.target.files[0]);
      setImageUrl(URL.createObjectURL(event.target.files[0]))
  }

  return(
    <div className="app">
      <h3 className="app-header">A Novel Method for Handwritten Digit Recoginition</h3>
      <div className="app-container">
        <div className="app-left-container app-inner-container">
          <div className="app-image-container">
            {!imageUrl && <h3 className="app-image-container-text">
              <label style={{cursor:"pointer"}} >
                <input style={{display: "none"}} onChange={handleImageUpload} type="file" accept="image/*"/>
                Upload Image Here <i className="fas fa-cloud-upload-alt"></i>
              </label>
            </h3>}
            {imageUrl && 
            <div style={{width: "100%", height:"100%", backgroundColor: "white"}}>
              <img style={{width: "100%", height: "100%"}} src={imageUrl} alt="Hand Written Digit"/>
            </div>
            }
            <button className="app-submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="app-right-container app-inner-container">
          <div className="app-result-container">{res}</div>
        </div>
      </div>
    </div>
  );
}

export default App;


// import './App.css';
// import React from 'react';
// import {useState, useEffect, useRef} from 'react';
// import axios from 'axios';
// import Webcam from "react-webcam";

// function App() {

//   const [cameraOpened, setCameraOpened] = useState(false);
//   const [progress, setProgress] = useState(false);
//   const [image, setImage] = useState(undefined);
//   const [imageUrl, setImageUrl] = useState(undefined)
//   const [devices, setDevices] = useState([]);
//   const [res, setRes] = useState();
//   const webcamRef = useRef(null);

//   const handleImageUpload = (event) =>{
    // setRes(undefined);
    // setImage(event.target.files[0]);
    // setImageUrl(URL.createObjectURL(event.target.files[0]))
//   }

//   const handleCamera = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCameraOpened(false);
//     setImage(imageSrc);
//     setImageUrl(imageSrc);
//   }
  
//   const handleRemove = () => {
//     setImage(undefined);
//     setImageUrl(undefined)
//   }

  // const handleSubmit= () =>{
  //   setProgress(true);
  //   console.log(image);
  //   let fileToUpload = image
  //   const formData = new FormData()
  //   formData.append('file', fileToUpload)
  //   const Upload = async() => {
  //     await axios.post('http://127.0.0.1:5000/predict', formData)
  //     .then(res => {setRes(res.data)})
  //   }
  //   Upload();
  //   setImage(undefined);
  //   setImageUrl(undefined);
  //   setProgress(false);
  // }

//   const handleDevices = mediaDevices => {
//     setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput"))
//   }

//   return (
//     <div className="app">
//       {
//         progress &&
//         <div className="loader">
//           <div className="inner-loader"></div>
//         </div>
//       }
//       <h2>Automated Optical Inspection System</h2>
//       <div className="image-container" style={res && res.product === "Bad" ? {background: "#FF0F0F22"}:{background: "#32CD3222"}}>
//         {
//           res &&
//           <div className="res" style={res && res.product === "Bad" ? {color: "#FF0F0F"}:{color: "#32CD32"}}>
//             <h1>{res.product}</h1>
//             <h2>{res.predict_value} %</h2>
//           </div>
//         }
//         {
//           !image && !cameraOpened &&
//           <button className='button' style={res && res.product === "Bad" ? {background: "#FF0F0F"}:{background: "#32CD32"}}>
//           <label style={{cursor:"pointer"}} >
//             <input style={{display: "none"}} onChange={handleImageUpload} type="file" accept="image/*"/>
//             Upload <i className="fas fa-cloud-upload-alt"></i>
//           </label>
//         </button>
//         }
//         {
//           cameraOpened && devices.length !== 0 &&
//           <React.Fragment>
//           <Webcam
//           style={{borderRadius: "5px"}}
//           audio={false}
//           height={400}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           width={400}
//           videoConstraints={{
//             width: 400,
//             height: 400,
//             deviceId: devices[0].deviceId
//           }}
//           />

//           <button style={{height: "20px"}} className="button" onClick={handleCamera}><i className="fas fa-camera"></i></button>
//           </React.Fragment>
//         }
//         {
//           image &&
//           <img src={imageUrl} style={{borderRadius:"5px", border: "3px solid black"}} alt='pcb' width="100%" height="100%" />
//         }
//         {
//           image &&
//           <button className="remove" onClick={handleRemove}>
//             <i className="fas fa-times"></i>
//           </button>
//         }
//       </div>
//       {
//         image &&
//         <button onClick={handleSubmit} className='button'>Scan</button>
//       }
//     </div>
//   );
// }

// export default App;
