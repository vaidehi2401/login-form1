import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Form1 from './components/Form1'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
   <Routes>
<Route path ='/' element ={<Form1/>}/>
<Route path = 'home' element ={<Home/>}/>
   </Routes> 
  );
}

export default App;
