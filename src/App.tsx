import React from 'react';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';



function App() {
  return (
     <BrowserRouter>
      <Home/>
     </BrowserRouter>
   
  );
}

export default App;
