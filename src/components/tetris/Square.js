const Square = (props) => {
    return (
    <div  row={props.row} col={props.col} available='true' 
    className={props.className}
    ></div>
    )
}

export default Square;