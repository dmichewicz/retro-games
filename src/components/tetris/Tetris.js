
import GameBoard from './GameBoard';
import InfoBox from './InfoBox';
import Clue from '../../Clue';
import { Link } from 'react-router-dom'

function Tetris() {
  return (
    <div className='gameComp'>
    <Link to='../' className="back">{`< back`}</Link>
    <div className="Tetris Game">
      <GameBoard />
      <div className="rightPanel">
      <InfoBox />
      <h1 className="TetrisTitle">TETRIS</h1>
      </div>
    </div>
    <Clue val='YOU KNOW TETRIS FOR SURE. ITS NOT WORKING YET BUT WILL BE SOON, I PROMISE'/>
    </div>
  );
}

export default Tetris;
