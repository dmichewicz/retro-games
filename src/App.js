
import './App.css';
import Tetris from './components/tetris/Tetris';
import LightsOut from './components/lights-out/LightsOut';
import Clue from './Clue';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {

  const Home = () => {
    return (
      <div>
      <div className='Home'>
        <h1 className='MainTitle'>RETRO GAMES</h1>
      <nav>
        <Link to="/lights-out">LIGHTS OUT</Link>
        <Link to="/tetris">TETRIS</Link>
        <Link to="/snake">SNAKE</Link>
        <Link to="/chess">CHESS</Link>
      </nav>
      
      </div>
      <Clue val='RETRO GAMES - CHOOSE ONE AND HAVE FUN'/>
      </div>
    )
  }
  return (
    <div className="App">
      <BrowserRouter >
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/tetris" element={<Tetris />} />
      <Route path="/lights-out" element={<LightsOut />} />
    </Routes>
    </BrowserRouter>
    
    </div>


  );


}

export default App;
