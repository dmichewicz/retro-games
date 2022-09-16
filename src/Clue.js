import { useState } from "react";

const Clue = (props) => {
    
    const [state, setState] = useState('closed')

    
    return (
        <div className="Clue">
            {state==='open' ? 
        (<div className="ClueContainer" onMouseLeave={()=>setState('closed')}>
            <p>
                {props.val}
            </p>
        </div>) : (
        <p className="question" onMouseEnter={()=>setState('open')}>?</p>)
    }
        </div>
    )
}

export default Clue;