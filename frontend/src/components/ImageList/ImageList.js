import React, { Component } from 'react';
import axios from 'axios';
import Imagee from './Imagee';
import { Row, Col, Button, Container, Spinner } from 'react-bootstrap';

class ImageList extends Component {
    state = {
        images:[],
        visible: 8, 
        isLoading: true,
        newLoaded: false,

    }

    componentDidMount(){
      
      setTimeout(this.getImages, 1500)
    }

    getImages = () => {
      axios.get('http://127.0.0.1:8000/api/images/')
      .then(resp=>{
        this.setState({images:resp.data})
        console.log(resp)})
      .catch(error=>{console.log(error)})
      this.setState({isLoading: false})
    }

    visibleHandler = ()=> {
        const visible = this.state.visible
        const new_visible = visible + 8
        this.setState({newLoaded: true})
        setTimeout(() => {this.setState({newLoaded: false, visible: new_visible})}, 300)
        
    }

  render() {
    
    return (
    <Container>
        {this.state.isLoading ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> :
            <React.Fragment>
                <Row>
                    {this.state.images.slice(0, this.state.visible).map(image=>{
                    
                    return <Col key={image.id} xs={3}>
                        
                        <Imagee  picture={image.picture} name={image.classified}/>
                    </Col>
                    
                    })}
                </Row>
                {this.state.newLoaded && <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>}
                    <br/>
                {((this.state.images.length > this.state.visible)) ? 
                <Button variant='info' size='lg' onClick={this.visibleHandler}>Load more</Button>
                : <h3>No images</h3>}
                
            </React.Fragment>
            
            }
      
    </Container>
    )
  }
}

export default ImageList

