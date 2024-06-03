import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import BackgroundColor from './EventHandling/background';
import UserInput from './EventHandling/userInput';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Footer from './components/Footer'
const BtnFunction =()=>{
  const clickHandler = () => console.log("Clicked")
  return (
    <button onClick={()=> console.log("Inline function")}>Click me</button>
  )
}
function App() {
 
  return (
    <div className="App">
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/footer' element={<Footer/>}/>
    </Routes>


    <BackgroundColor/>
      {/* 
      <Home/>
      <BtnFunction/>
     
      <UserInput/> */}
    </div>
  );
}

export default App;
