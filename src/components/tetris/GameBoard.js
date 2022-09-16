import { useEffect, useState } from "react";
import Square from './Square';


const GameBoard = () => {

    //random column nr




    const squares = [
        {row: 1, col: 1},
        {row: 1, col: 2},
        {row: 1, col: 3},
        {row: 1, col: 4},
        {row: 1, col: 5},
        {row: 1, col: 6},
        {row: 1, col: 7},
        {row: 1, col: 8},
        {row: 1, col: 9},
        {row: 1, col: 10},

        {row: 2, col: 1},
        {row: 2, col: 2},
        {row: 2, col: 3},
        {row: 2, col: 4},
        {row: 2, col: 5},
        {row: 2, col: 6},
        {row: 2, col: 7},
        {row: 2, col: 8},
        {row: 2, col: 9},
        {row: 2, col: 10},

        {row: 3, col: 1},
        {row: 3, col: 2},
        {row: 3, col: 3},
        {row: 3, col: 4},
        {row: 3, col: 5},
        {row: 3, col: 6},
        {row: 3, col: 7},
        {row: 3, col: 8},
        {row: 3, col: 9},
        {row: 3, col: 10},

        {row: 4, col: 1},
        {row: 4, col: 2},
        {row: 4, col: 3},
        {row: 4, col: 4},
        {row: 4, col: 5},
        {row: 4, col: 6},
        {row: 4, col: 7},
        {row: 4, col: 8},
        {row: 4, col: 9},
        {row: 4, col: 10},

        {row: 5, col: 1},
        {row: 5, col: 2},
        {row: 5, col: 3},
        {row: 5, col: 4},
        {row: 5, col: 5},
        {row: 5, col: 6},
        {row: 5, col: 7},
        {row: 5, col: 8},
        {row: 5, col: 9},
        {row: 5, col: 10},

        {row: 6, col: 1},
        {row: 6, col: 2},
        {row: 6, col: 3},
        {row: 6, col: 4},
        {row: 6, col: 5},
        {row: 6, col: 6},
        {row: 6, col: 7},
        {row: 6, col: 8},
        {row: 6, col: 9},
        {row: 6, col: 10},

        {row: 7, col: 1},
        {row: 7, col: 2},
        {row: 7, col: 3},
        {row: 7, col: 4},
        {row: 7, col: 5},
        {row: 7, col: 6},
        {row: 7, col: 7},
        {row: 7, col: 8},
        {row: 7, col: 9},
        {row: 7, col: 10},

        {row: 8, col: 1},
        {row: 8, col: 2},
        {row: 8, col: 3},
        {row: 8, col: 4},
        {row: 8, col: 5},
        {row: 8, col: 6},
        {row: 8, col: 7},
        {row: 8, col: 8},
        {row: 8, col: 9},
        {row: 8, col: 10},

        {row: 9, col: 1},
        {row: 9, col: 2},
        {row: 9, col: 3},
        {row: 9, col: 4},
        {row: 9, col: 5},
        {row: 9, col: 6},
        {row: 9, col: 7},
        {row: 9, col: 8},
        {row: 9, col: 9},
        {row: 9, col: 10},

        {row: 10, col: 1},
        {row: 10, col: 2},
        {row: 10, col: 3},
        {row: 10, col: 4},
        {row: 10, col: 5},
        {row: 10, col: 6},
        {row: 10, col: 7},
        {row: 10, col: 8},
        {row: 10, col: 9},
        {row: 10, col: 10},

        {row: 11, col: 1},
        {row: 11, col: 2},
        {row: 11, col: 3},
        {row: 11, col: 4},
        {row: 11, col: 5},
        {row: 11, col: 6},
        {row: 11, col: 7},
        {row: 11, col: 8},
        {row: 11, col: 9},
        {row: 11, col: 10},

        {row: 12, col: 1},
        {row: 12, col: 2},
        {row: 12, col: 3},
        {row: 12, col: 4},
        {row: 12, col: 5},
        {row: 12, col: 6},
        {row: 12, col: 7},
        {row: 12, col: 8},
        {row: 12, col: 9},
        {row: 12, col: 10},

        {row: 13, col: 1},
        {row: 13, col: 2},
        {row: 13, col: 3},
        {row: 13, col: 4},
        {row: 13, col: 5},
        {row: 13, col: 6},
        {row: 13, col: 7},
        {row: 13, col: 8},
        {row: 13, col: 9},
        {row: 13, col: 10},

        {row: 14, col: 1},
        {row: 14, col: 2},
        {row: 14, col: 3},
        {row: 14, col: 4},
        {row: 14, col: 5},
        {row: 14, col: 6},
        {row: 14, col: 7},
        {row: 14, col: 8},
        {row: 14, col: 9},
        {row: 14, col: 10},

        {row: 15, col: 1},
        {row: 15, col: 2},
        {row: 15, col: 3},
        {row: 15, col: 4},
        {row: 15, col: 5},
        {row: 15, col: 6},
        {row: 15, col: 7},
        {row: 15, col: 8},
        {row: 15, col: 9},
        {row: 15, col: 10},

        {row: 16, col: 1},
        {row: 16, col: 2},
        {row: 16, col: 3},
        {row: 16, col: 4},
        {row: 16, col: 5},
        {row: 16, col: 6},
        {row: 16, col: 7},
        {row: 16, col: 8},
        {row: 16, col: 9},
        {row: 16, col: 10},

        {row: 17, col: 1},
        {row: 17, col: 2},
        {row: 17, col: 3},
        {row: 17, col: 4},
        {row: 17, col: 5},
        {row: 17, col: 6},
        {row: 17, col: 7},
        {row: 17, col: 8},
        {row: 17, col: 9},
        {row: 17, col: 10},

        {row: 18, col: 1},
        {row: 18, col: 2},
        {row: 18, col: 3},
        {row: 18, col: 4},
        {row: 18, col: 5},
        {row: 18, col: 6},
        {row: 18, col: 7},
        {row: 18, col: 8},
        {row: 18, col: 9},
        {row: 18, col: 10},

        {row: 19, col: 1},
        {row: 19, col: 2},
        {row: 19, col: 3},
        {row: 19, col: 4},
        {row: 19, col: 5},
        {row: 19, col: 6},
        {row: 19, col: 7},
        {row: 19, col: 8},
        {row: 19, col: 9},
        {row: 19, col: 10},

        {row: 20, col: 1},
        {row: 20, col: 2},
        {row: 20, col: 3},
        {row: 20, col: 4},
        {row: 20, col: 5},
        {row: 20, col: 6},
        {row: 20, col: 7},
        {row: 20, col: 8},
        {row: 20, col: 9},
        {row: 20, col: 10}



    ]


    const [isOn0, setIsOn0] = useState(false);
    const [isOn1, setIsOn1] = useState(false);
    const [isOn2, setIsOn2] = useState(false);
    const [isOn3, setIsOn3] = useState(false);
    const [isOn4, setIsOn4] = useState(false);
    const [isOn5, setIsOn5] = useState(false);
    const [isOn6, setIsOn6] = useState(false);
    const [isOn7, setIsOn7] = useState(false);
    const [isOn8, setIsOn8] = useState(false);
    const [isOn9, setIsOn9] = useState(false);
    const [isOn10, setIsOn10] = useState(false);
    const [isOn11, setIsOn11] = useState(false);
    const [isOn12, setIsOn12] = useState(false);
    const [isOn13, setIsOn13] = useState(false);
    const [isOn14, setIsOn14] = useState(false);
    const [isOn15, setIsOn15] = useState(false);
    const [isOn16, setIsOn16] = useState(false);
    const [isOn17, setIsOn17] = useState(false);
    const [isOn18, setIsOn18] = useState(false);
    const [isOn19, setIsOn19] = useState(false);
    const [isOn20, setIsOn20] = useState(false);
    const [isOn21, setIsOn21] = useState(false);
    const [isOn22, setIsOn22] = useState(false);
    const [isOn23, setIsOn23] = useState(false);
    const [isOn24, setIsOn24] = useState(false);
    const [isOn25, setIsOn25] = useState(false);
    const [isOn26, setIsOn26] = useState(false);
    const [isOn27, setIsOn27] = useState(false);
    const [isOn28, setIsOn28] = useState(false);
    const [isOn29, setIsOn29] = useState(false);
    const [isOn30, setIsOn30] = useState(false);
    const [isOn31, setIsOn31] = useState(false);
    const [isOn32, setIsOn32] = useState(false);
    const [isOn33, setIsOn33] = useState(false);
    const [isOn34, setIsOn34] = useState(false);
    const [isOn35, setIsOn35] = useState(false);
    const [isOn36, setIsOn36] = useState(false);
    const [isOn37, setIsOn37] = useState(false);
    const [isOn38, setIsOn38] = useState(false);
    const [isOn39, setIsOn39] = useState(false);
    const [isOn40, setIsOn40] = useState(false);
    const [isOn41, setIsOn41] = useState(false);
    const [isOn42, setIsOn42] = useState(false);
    const [isOn43, setIsOn43] = useState(false);
    const [isOn44, setIsOn44] = useState(false);
    const [isOn45, setIsOn45] = useState(false);
    const [isOn46, setIsOn46] = useState(false);
    const [isOn47, setIsOn47] = useState(false);
    const [isOn48, setIsOn48] = useState(false);
    const [isOn49, setIsOn49] = useState(false);
    const [isOn50, setIsOn50] = useState(false);
    const [isOn51, setIsOn51] = useState(false);
    const [isOn52, setIsOn52] = useState(false);
    const [isOn53, setIsOn53] = useState(false);
    const [isOn54, setIsOn54] = useState(false);
    const [isOn55, setIsOn55] = useState(false);
    const [isOn56, setIsOn56] = useState(false);
    const [isOn57, setIsOn57] = useState(false);
    const [isOn58, setIsOn58] = useState(false);
    const [isOn59, setIsOn59] = useState(false);
    const [isOn60, setIsOn60] = useState(false);
    const [isOn61, setIsOn61] = useState(false);
    const [isOn62, setIsOn62] = useState(false);
    const [isOn63, setIsOn63] = useState(false);
    const [isOn64, setIsOn64] = useState(false);
    const [isOn65, setIsOn65] = useState(false);
    const [isOn66, setIsOn66] = useState(false);
    const [isOn67, setIsOn67] = useState(false);
    const [isOn68, setIsOn68] = useState(false);
    const [isOn69, setIsOn69] = useState(false);
    const [isOn70, setIsOn70] = useState(false);
    const [isOn71, setIsOn71] = useState(false);
    const [isOn72, setIsOn72] = useState(false);
    const [isOn73, setIsOn73] = useState(false);
    const [isOn74, setIsOn74] = useState(false);
    const [isOn75, setIsOn75] = useState(false);
    const [isOn76, setIsOn76] = useState(false);
    const [isOn77, setIsOn77] = useState(false);
    const [isOn78, setIsOn78] = useState(false);
    const [isOn79, setIsOn79] = useState(false);
    const [isOn80, setIsOn80] = useState(false);
    const [isOn81, setIsOn81] = useState(false);
    const [isOn82, setIsOn82] = useState(false);
    const [isOn83, setIsOn83] = useState(false);
    const [isOn84, setIsOn84] = useState(false);
    const [isOn85, setIsOn85] = useState(false);
    const [isOn86, setIsOn86] = useState(false);
    const [isOn87, setIsOn87] = useState(false);
    const [isOn88, setIsOn88] = useState(false);
    const [isOn89, setIsOn89] = useState(false);
    const [isOn90, setIsOn90] = useState(false);
    const [isOn91, setIsOn91] = useState(false);
    const [isOn92, setIsOn92] = useState(false);
    const [isOn93, setIsOn93] = useState(false);
    const [isOn94, setIsOn94] = useState(false);
    const [isOn95, setIsOn95] = useState(false);
    const [isOn96, setIsOn96] = useState(false);
    const [isOn97, setIsOn97] = useState(false);
    const [isOn98, setIsOn98] = useState(false);
    const [isOn99, setIsOn99] = useState(false);
    const [isOn100, setIsOn100] = useState(false);
    const [isOn101, setIsOn101] = useState(false);
    const [isOn102, setIsOn102] = useState(false);
    const [isOn103, setIsOn103] = useState(false);
    const [isOn104, setIsOn104] = useState(false);
    const [isOn105, setIsOn105] = useState(false);
    const [isOn106, setIsOn106] = useState(false);
    const [isOn107, setIsOn107] = useState(false);
    const [isOn108, setIsOn108] = useState(false);
    const [isOn109, setIsOn109] = useState(false);
    const [isOn110, setIsOn110] = useState(false);
    const [isOn111, setIsOn111] = useState(false);
    const [isOn112, setIsOn112] = useState(false);
    const [isOn113, setIsOn113] = useState(false);
    const [isOn114, setIsOn114] = useState(false);
    const [isOn115, setIsOn115] = useState(false);
    const [isOn116, setIsOn116] = useState(false);
    const [isOn117, setIsOn117] = useState(false);
    const [isOn118, setIsOn118] = useState(false);
    const [isOn119, setIsOn119] = useState(false);
    const [isOn120, setIsOn120] = useState(false);
    const [isOn121, setIsOn121] = useState(false);
    const [isOn122, setIsOn122] = useState(false);
    const [isOn123, setIsOn123] = useState(false);
    const [isOn124, setIsOn124] = useState(false);
    const [isOn125, setIsOn125] = useState(false);
    const [isOn126, setIsOn126] = useState(false);
    const [isOn127, setIsOn127] = useState(false);
    const [isOn128, setIsOn128] = useState(false);
    const [isOn129, setIsOn129] = useState(false);
    const [isOn130, setIsOn130] = useState(false);
    const [isOn131, setIsOn131] = useState(false);
    const [isOn132, setIsOn132] = useState(false);
    const [isOn133, setIsOn133] = useState(false);
    const [isOn134, setIsOn134] = useState(false);
    const [isOn135, setIsOn135] = useState(false);
    const [isOn136, setIsOn136] = useState(false);
    const [isOn137, setIsOn137] = useState(false);
    const [isOn138, setIsOn138] = useState(false);
    const [isOn139, setIsOn139] = useState(false);
    const [isOn140, setIsOn140] = useState(false);
    const [isOn141, setIsOn141] = useState(false);
    const [isOn142, setIsOn142] = useState(false);
    const [isOn143, setIsOn143] = useState(false);
    const [isOn144, setIsOn144] = useState(false);
    const [isOn145, setIsOn145] = useState(false);
    const [isOn146, setIsOn146] = useState(false);
    const [isOn147, setIsOn147] = useState(false);
    const [isOn148, setIsOn148] = useState(false);
    const [isOn149, setIsOn149] = useState(false);
    const [isOn150, setIsOn150] = useState(false);
    const [isOn151, setIsOn151] = useState(false);
    const [isOn152, setIsOn152] = useState(false);
    const [isOn153, setIsOn153] = useState(false);
    const [isOn154, setIsOn154] = useState(false);
    const [isOn155, setIsOn155] = useState(false);
    const [isOn156, setIsOn156] = useState(false);
    const [isOn157, setIsOn157] = useState(false);
    const [isOn158, setIsOn158] = useState(false);
    const [isOn159, setIsOn159] = useState(false);
    const [isOn160, setIsOn160] = useState(false);
    const [isOn161, setIsOn161] = useState(false);
    const [isOn162, setIsOn162] = useState(false);
    const [isOn163, setIsOn163] = useState(false);
    const [isOn164, setIsOn164] = useState(false);
    const [isOn165, setIsOn165] = useState(false);
    const [isOn166, setIsOn166] = useState(false);
    const [isOn167, setIsOn167] = useState(false);
    const [isOn168, setIsOn168] = useState(false);
    const [isOn169, setIsOn169] = useState(false);
    const [isOn170, setIsOn170] = useState(false);
    const [isOn171, setIsOn171] = useState(false);
    const [isOn172, setIsOn172] = useState(false);
    const [isOn173, setIsOn173] = useState(false);
    const [isOn174, setIsOn174] = useState(false);
    const [isOn175, setIsOn175] = useState(false);
    const [isOn176, setIsOn176] = useState(false);
    const [isOn177, setIsOn177] = useState(false);
    const [isOn178, setIsOn178] = useState(false);
    const [isOn179, setIsOn179] = useState(false);
    const [isOn180, setIsOn180] = useState(false);
    const [isOn181, setIsOn181] = useState(false);
    const [isOn182, setIsOn182] = useState(false);
    const [isOn183, setIsOn183] = useState(false);
    const [isOn184, setIsOn184] = useState(false);
    const [isOn185, setIsOn185] = useState(false);
    const [isOn186, setIsOn186] = useState(false);
    const [isOn187, setIsOn187] = useState(false);
    const [isOn188, setIsOn188] = useState(false);
    const [isOn189, setIsOn189] = useState(false);
    const [isOn190, setIsOn190] = useState(false);
    const [isOn191, setIsOn191] = useState(false);
    const [isOn192, setIsOn192] = useState(false);
    const [isOn193, setIsOn193] = useState(false);
    const [isOn194, setIsOn194] = useState(false);
    const [isOn195, setIsOn195] = useState(false);
    const [isOn196, setIsOn196] = useState(false);
    const [isOn197, setIsOn197] = useState(false);
    const [isOn198, setIsOn198] = useState(false);
    const [isOn199, setIsOn199] = useState(false);
   
    

    //prosty
    const kloc1 = (rand) => {
      return [
        {
          col: rand,
          row:1,
          idx: rand
        },
        {
          col: rand+1,
          row: 1,
          idx: rand+1
        },
        {
          col: rand+2,
          row: 1,
          idx: rand+2
        },
        {
          col: rand+3,
          row: 1,
          idx: rand+3
        }

      ]
    }

    //KWADRAT
    const kloc2 = (rand) => {
      return [
        {
          col: rand,
          row:1,
          idx: rand
        },
        {
          col: rand + 1,
          row:1,
          idx: rand+1
        },
        {
          col: rand,
          row: 2,
          idx: rand+10
        },
        {
          col: rand + 1,
          row: 2,
          idx: rand+11
        }

      ]
    }

    //TE
    
    const kloc3 = (rand) => {
      return [
        {
          col: rand,
          row:1,
          idx: rand
        },
        {
          col: rand,
          row: 2,
          idx: rand+10
        },
        {
          col: rand-1,
          row: 2,
          idx: rand+9
        },
        {
          col: rand+1,
          row: 2,
          idx: rand+11
        }
      ]
    }

    //EL
    const kloc4 = (rand) => {
      return [
        {
          col: rand,
          row:1,
          idx: rand
        },
        {
          col: rand+1,
          row: 1,
          idx: rand+1
        },
        {
          col: rand+2,
          row: 1,
          idx: rand+2
        },
        {
          col: rand,
          row: 2,
          idx: rand+10
        }

      ]
    }

    //EL REV
    const kloc5 = (rand) => {
      return [
        {
          col: rand,
          row:1,
          idx: rand
        },
        {
          col: rand+1,
          row: 1,
          idx: rand+1
        },
        {
          col: rand+2,
          row: 1,
          idx: rand+2
        },
        {
          col: rand+2,
          row: 2,
          idx: rand+12
        }

      ]
    }

    //ZET

    const kloc6 = (rand) => {
      return [
        {
          col: rand,
          row:1,
          idx: rand
        },
        {
          col: rand+1,
          row: 1,
          idx: rand+1
        },
        {
          col: rand+1,
          row: 2,
          idx: rand+11
        },
        {
          col: rand+2,
          row: 2,
          idx: rand+12
        }

      ]
    }
    
    //ZET REV

    const kloc7 = (rand) => {
      return [
        {
          col: rand,
          row:1,
          idx: rand
        },
        {
          col: rand+1,
          row: 1,
          idx: rand+1
        },
        {
          col: rand,
          row: 2,
          idx: rand+10
        },
        {
          col: rand-1,
          row: 2,
          idx: rand+9
        }
      ]
    }

 
  //roboczy random kloc
  
  let randomKloc = eval(`kloc${Math.floor(Math.random()*7) + 1}(${Math.floor((Math.random()*5)+1)})`);
  

  const printKloc = () => {
    for (let index = 0; index < 200; index++) {
      console.log(randomKloc)
      eval(`setIsOn${index}`)(false)

      randomKloc.forEach(klocek => {
      (index===(klocek.idx-1)) ? 
      eval(`setIsOn${index}`)(true)
      :      
      console.log('jajo')


    }
      )
    }


  }



  const move = () => {

    for (let index = 0; index < 200; index++) {
      console.log(eval(`isOn${index}`))
      (eval(`isOn${index}`)===true) ?

        console.log(eval(`isOn${index}`)) :
        console.log(`off ${index}`)
      
      
      // randomKloc = randomKloc.map(klocek=> {
      //  { klocek.col
      //   klocek.row +1;
      //   klocek.idx + 10;
      //  }
      // })

      console.log(randomKloc)

    }
  }
 

  const playTetris = () => {
    printKloc();
    setTimeout(()=>move(), 500);

  }



    const PrintSquares = () => {
       return (squares.map((square, index) => {
              return <Square row={square.row} col={square.col} idx={index} active={eval(`isOn${index}`)} key={`${square.row} ${square.col}`}
              className = {   
                 (eval(`isOn${index}`) === true) ? 'Square active' : 'Square'
            }
               />


        }))
    }

   return( 
    <div className="GameBoard">
   <div className="BoardSquares">
   <PrintSquares />
   
   </div>
   <button className='startBtn' onClick={playTetris}>START</button>
   </div>
   )


}

export default GameBoard;