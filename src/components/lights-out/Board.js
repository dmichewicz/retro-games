import { ReactDOM } from "react";
import { useState } from "react";
import Light from "./Light";
// import './Board.css'

function Board(props) {



    const lightsArr = [
        {
            row: 1,
            col: 1,
            groups: [1, 2, 6],
            isOn: Math.floor(Math.random()*2),  
        },
        {
            row: 1,
            col: 2,
            groups: [1, 2, 3,  7],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 1,
            col: 3,
            groups: [2, 3, 4, 8],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 1,
            col: 4,
            groups: [3, 4, 5, 9],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 1,
            col: 5,
            groups: [4, 5, 10],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 2,
            col: 1,
            groups: [1, 6, 7, 11],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 2,
            col: 2,
            groups:[2, 6, 7, 8, 12],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 2,
            col: 3,
            groups: [3, 7, 8, 9, 13],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 2,
            col: 4,
            groups: [4, 8, 9, 10 , 14],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 2,
            col: 5,
            groups: [5, 9, 10, 15],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 3,
            col: 1,
            groups: [6, 11, 12, 16],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 3,
            col: 2,
            groups: [7, 11, 12, 13, 17],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 3,
            col: 3,
            groups: [8, 12, 13, 14, 18],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 3,
            col: 4,
            groups: [9, 13,14,15, 19],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 3,
            col: 5,
            groups: [10, 14, 15, 20],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 4,
            col: 1,
            groups: [11, 16, 17, 21],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 4,
            col: 2,
            groups: [12, 16, 17, 18, 22],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 4,
            col: 3,
            groups: [13, 17, 18, 19, 23],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 4,
            col: 4,
            groups: [14, 18, 19, 20, 24],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 4,
            col: 5,
            groups: [15, 19, 20, 25],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 5,
            col: 1,
            groups: [16, 21, 22],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 5,
            col: 2,
            groups: [17, 21, 22, 23],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 5,
            col: 3,
            groups: [18, 22, 23, 24],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 5,
            col: 4,
            groups:[19, 23,24,25],
            isOn: Math.floor(Math.random()*2),
        },
        {
            row: 5,
            col: 5,
            groups: [20, 24, 25],
            isOn: Math.floor(Math.random()*2),
        },
    ]

 
    const [isOn0, setIsOn0] = useState(lightsArr[0].isOn);
    const [isOn1, setIsOn1] = useState(lightsArr[1].isOn);
    const [isOn2, setIsOn2] = useState(lightsArr[2].isOn);
    const [isOn3, setIsOn3] = useState(lightsArr[3].isOn);
    const [isOn4, setIsOn4] = useState(lightsArr[4].isOn);
    const [isOn5, setIsOn5] = useState(lightsArr[5].isOn);
    const [isOn6, setIsOn6] = useState(lightsArr[6].isOn);
    const [isOn7, setIsOn7] = useState(lightsArr[7].isOn);
    const [isOn8, setIsOn8] = useState(lightsArr[8].isOn);
    const [isOn9, setIsOn9] = useState(lightsArr[9].isOn);
    const [isOn10, setIsOn10] = useState(lightsArr[10].isOn);
    const [isOn11, setIsOn11] = useState(lightsArr[11].isOn);
    const [isOn12, setIsOn12] = useState(lightsArr[12].isOn);
    const [isOn13, setIsOn13] = useState(lightsArr[13].isOn);
    const [isOn14, setIsOn14] = useState(lightsArr[14].isOn);
    const [isOn15, setIsOn15] = useState(lightsArr[15].isOn);
    const [isOn16, setIsOn16] = useState(lightsArr[16].isOn);
    const [isOn17, setIsOn17] = useState(lightsArr[17].isOn);
    const [isOn18, setIsOn18] = useState(lightsArr[18].isOn);
    const [isOn19, setIsOn19] = useState(lightsArr[19].isOn);
    const [isOn20, setIsOn20] = useState(lightsArr[20].isOn);
    const [isOn21, setIsOn21] = useState(lightsArr[21].isOn);
    const [isOn22, setIsOn22] = useState(lightsArr[22].isOn);
    const [isOn23, setIsOn23] = useState(lightsArr[23].isOn);
    const [isOn24, setIsOn24] = useState(lightsArr[24].isOn);
    
 

    function changeLight(index) {


        lightsArr[index].groups.forEach((num) => {
            
                eval(`isOn${num-1}`) === 0 ? eval(`setIsOn${num-1}(1)`) : eval(`setIsOn${num-1}(0)`);

            
        })

        let check = [];

        for (let index = 0; index < 25; index++) {
            
            

            if (eval(`isOn${index}`) === 1) {
                check.push('checking');
                if (check.length === 25) {
                    alert('you win');
                }
            }
            
        }

        // setCounter(props.counter++);
        
    }


    
    return(
        <div className="Board">

            {lightsArr.map((item, index) => {       
                return <div onClick={props.onClick} key={`clickhandler${index}`}><Light 
                
                row={item.row} 
                col={item.col} 
                key={index} 
                isOn = {eval(`isOn${index}`)}
                groups = {item.groups}
                onClick = {(() => {
                    changeLight(index);
                    
                })}
                /></div>
            })}

        </div>
    )
}

export default Board