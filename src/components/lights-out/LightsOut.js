import Board from "./Board";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Clue from "../../Clue";


function LightsOut() {

    let [counter, setCounter] = useState(0)


    return(
        <div className="gameComp">
            <Link to='../' className="back">{`< back`}</Link>
        <div className="LightsOut Game">
            <Board onClick={()=>{
                counter++
                setCounter(counter)}} />
            <div className="LightsOutPanel">
            <h1 className="LightsOutTitle">LIGHTS OUT</h1>
            <div className='clicks'>
            <h4>CLICKS</h4>
            <p>{counter}</p>
            </div>
            </div>
        </div>
        <Clue val='TURN THE LIGHTS OFF WITH AS FEW CLICKS AS YOU CAN!'/>
        </div>
    )
}

export default LightsOut;

