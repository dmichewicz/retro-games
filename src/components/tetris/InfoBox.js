import { useState } from "react";



const InfoBox = (props) => {

    const [gameStarted, setGameStarted] = useState(false);

    const squares = [
        {row: 1, col: 1},
        {row: 1, col: 2},
        {row: 1, col: 3},
        {row: 1, col: 4},
        {row: 2, col: 1},
        {row: 2, col: 2},
        {row: 2, col: 3},
        {row: 2, col: 4},
        {row: 3, col: 1},
        {row: 3, col: 2},
        {row: 3, col: 3},
        {row: 3, col: 4},
        {row: 4, col: 1},
        {row: 4, col: 2},
        {row: 4, col: 3},
        {row: 4, col: 4}
    ]

    
    
    const PrintSquares = () => {
        return (squares.map(square => {
               return <div className="Square PreviewSquare" row={square.row} col={square.col} key={`next ${square.row} ${square.col}`}></div>
         }))
     }

    const NextBlock = () => {
        return (<div className="PreviewSquares"><PrintSquares/></div>)
    }

    const Score = () => {
        return(<div className="Score">
            <h4>SCORE</h4>
            <p>0000</p>
        </div>)
    }



    return(
        <div className="InfoBox">
            <NextBlock />
            <Score />
        </div>
    )
}

export default InfoBox;
