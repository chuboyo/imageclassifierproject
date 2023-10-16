import logo from './logo.svg';
import './App.css';
import Classifier from './components/Classifier/Classifier';
import axios from 'axios';
import ImageList from './components/ImageList/ImageList';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <div className='App'>
        <Routes>
          <Route path='/' Component={Classifier}/>
          <Route path='/images' Component={ImageList}/>
          <Route path='/*' Component={Classifier}/>
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
