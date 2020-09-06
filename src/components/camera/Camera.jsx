import React, { Component } from 'react';
import Webcam from "react-webcam";

class Camera extends Component {
  state = {
    imageData: null,
    imageName: ''
  }

  setRef = webcam => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ imageData: imageSrc })
    console.log(imageSrc)
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };
    return (
      <>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        {this.state.imageData && <h4 className="text-success">Image Captured</h4>}
        <button onClick={this.capture}>Capture photo</button>
      </>
    );
  }
}

export default Camera;