const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  let arr = [0, 2, 4, 6, 8];

  


  function checkWinner() {
 
    let crossArr =  [1, 2, 3, 5, 7];
    let circleArr = [0, 4, 6, 8];

   


    

    
  
    // Check if all the turns were made, if not change player and return to game
    
  
    for (let i = 0; i < winCondition.length; i++) {
      let crossCount = 0;
      let circleCount = 0;
   
  
      for (let i = 0; i < winCondition.length; i++){
          for(let j = 0; j < winCondition[i].length; j++){
              for (let x = 0; x < crossArr.length; x++){
                  
                
                   if (winCondition[i][j] == crossArr[x]){
                      crossCount ++;
                      if (crossCount == 3){
                        console.log(crossCount);
                        return 'cross win';
                     }
                  }

                  
  
                  
      
              }
          }
          crossCount = 0;
        }
  
        for (let i = 0; i < winCondition.length; i++){
            let cellsWinner = [];
          for(let j = 0; j < winCondition[i].length; j++){           
              for (let x = 0; x < circleArr.length; x++){
                
                  
      
                  if (winCondition[i][j] == circleArr[x]){
                      circleCount ++;
                      cellsWinner.push(winCondition[i][j]);
                      if (circleCount == 3){
                        console.log(circleCount);
                        return `circle win with ${cellsWinner}`;
                     }
                  }
  
                  
      
              }
              
          }
          circleCount = 0;
        }
        console.log(circleCount);
        console.log(crossCount);
  
        if (circleCount >= 3) {
          return 'circle win';
  
        }
  
        else if (crossCount >= 3){
          return 'cross win';
        }
  
        else {
          return 'Draw';
        }
  
  
    }
   
  }

  console.log(checkWinner());