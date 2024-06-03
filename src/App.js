import logo from './logo.svg';
import './App.css';
import Home from './components/Home'


const BtnFunction =()=>{
  const clickHandler = () => console.log("Clicked")
  return (
    <button onClick={()=> console.log("Inline function")}>Click me</button>
  )
}
function App() {
 
  return (
    <div className="App">
      <Home/>
      <BtnFunction/>
    </div>
  );
}

export default App;
