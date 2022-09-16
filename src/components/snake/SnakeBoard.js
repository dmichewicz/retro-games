import Square from "../tetris/Square";

const SnakeBoard = () => {
    return(
        <Square row={square.row} col={square.col} idx={index} active={eval(`isOn${index}`)} key={`${square.row} ${square.col}`}
              className='SnakeSquare'
               />
    )
}