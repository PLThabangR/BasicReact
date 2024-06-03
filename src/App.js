import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import BackgroundColor from './EventHandling/background';
import UserInput from './EventHandling/userInput';

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
      <BackgroundColor/>
      <UserInput/>
    </div>
  );
}

export default App;
