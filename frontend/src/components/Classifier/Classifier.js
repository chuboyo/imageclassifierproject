import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './Classifier.css'
import { Alert, Button, Spinner, Image } from 'react-bootstrap';
import axios from 'axios';


class Classifier extends Component {
    state = {
        files: [], 
        isLoading: false,
        isClassified: null,
    }

    // componentDidMount(){
    //   this.getImages()
    // }

    // getImages = () => {
    //   axios.get('http://127.0.0.1:8000/api/images/')
    //   .then(resp=>{console.log(resp)})
    // }

    onDrop = (files) => {
        this.setState({
        isLoading: true, 
        isClassified:null})
        this.loadImage(files)
    }

    loadImage = (files) => {
        setTimeout(() => {
            this.setState({files,
            isLoading:false, 
          }, () => {
              console.log(this.state.files)
            })
        }, 1000);
    }

    sendImage = ()=> {
      this.activateSpinner()
      let formData = new FormData()
      formData.append('picture', this.state.files[0], this.state.files[0].name)
      axios.post('http://127.0.0.1:8000/api/images/', formData, {
        headers : {
          'accept': 'application/json',
          'content-type': 'multipart/form-data'
        }
      }).then(resp=>
        {this.getImageClass(resp)
        console.log(resp.data.id)})
      .catch(err=>console.log(err))
    }

    getImageClass = (obj)=>{
      axios.get(`http://127.0.0.1:8000/api/images/${obj.data.id}`)
      .then(resp=>{
        this.setState({isClassified: resp})
        console.log(resp)})
      .catch(err=>console.log(err))
      this.deactivateSpinner()
    }

    activateSpinner = ()=>{
      this.setState({files:[], 
      isLoading: true})
    }

    deactivateSpinner = ()=> {
      this.setState({isLoading: false})
    }

  render() {
    const files = this.state.files.map(file => (
        <li key={file.name}>
          {file.name} - {file.size} bytes
        </li>
      ));

    return (
        <Dropzone onDrop={this.onDrop} >
        {({isDragActive, getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({className: 'dropzone back'})}>
              <input {...getInputProps()} />
              <i className="fa-solid fa-images text-muted" style={{fontSize: 200}}></i>
              <p>{isDragActive ? 'Drop some files': 'Drag "n" drop some files here, or click to select files'}</p>
            </div>
            <aside>
              
              {files}
            </aside>

            {this.state.files.length > 0 &&
            <Button variant='info' size='lg' className='mt-2' onClick={this.sendImage}>Select file</Button>
            }
            {this.state.isLoading &&
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}

            {this.state.isClassified && 
            <React.Fragment>
              <Alert>
                {this.state.isClassified.data.classified}
              </Alert>
              <Image className="justify-content-center" src={this.state.isClassified.data.picture} height='350px' rounded/>
            </React.Fragment>
            }
          </section>
        )}
      </Dropzone>
    )
  }
}

export default Classifier;
