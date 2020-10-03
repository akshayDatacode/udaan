import React, { Component } from 'react';
import Webcam from "react-webcam";

const FACING_MODE_USER = { exact: "user" };
const FACING_MODE_ENVIRONMENT = { exact: "environment" };

class Camera extends Component {
  state = {
    imageData: null,
    imageName: '',
    facingMode: FACING_MODE_USER,
  }

  setRef = webcam => {
    this.webcam = webcam;
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ imageData: imageSrc })
    console.log(imageSrc)
    //this.props.handleImgData(imageSrc)
  }

  handleSwitchCamera = () => {
    this.setState({ facingMode: prevState =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER})
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: this.state.facingMode
    };
    return (
      <>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={150}
          videoConstraints={videoConstraints}
        />
        {this.state.imageData && <h4 className="text-success">Image Captured</h4>}
        <button onClick={this.capture}>Capture photo</button>
        <button onClick={this.handleSwitchCamera}>Switch camera</button>
      </>
    );
  }
}

export default Camera;