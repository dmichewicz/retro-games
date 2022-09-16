// import './Light.css'

function Light(props) {

    return(
    <div className={'Light isOn' + props.isOn} onClick={props.onClick}/>


        )
}

export default Light;
