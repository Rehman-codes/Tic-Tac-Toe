import { ZERO_Success_Scenarios, ZERO_Success_Scenarios_Live, CROSS_Success_Scenarios, CROSS_Success_Scenarios_Live } from './helper.js';

let turnCross = false;
let turnCount = 0;
let winner = "-";
let victoryZero = false;
let victoryCross = false;
let endGame = false;
let winnerType = document.getElementById("winner-type");

// Storing all the cell elements in an array.
let cells = document.querySelectorAll(".cell");

// Attaching event handler to all the elements one by one.
cells.forEach(cell => {

  cell.addEventListener("click", function () {

    if(turnCount<=9 && !endGame)
    {
    
    let cellImage = cell.querySelector("img");

    if (turnCross === false) 
      {

      if (cellImage.getAttribute("src") === "") 
        {
        cellImage.setAttribute("src", `zero.png`);
        cell.setAttribute("data-state", "zero");

        ZERO_Success_Scenarios_Live.forEach(scenario => {

          if (scenario.id1 === cell.getAttribute("id")) 
            {
            scenario.boxState1 = "zero";
            } 
            else if (scenario.id2 === cell.getAttribute("id")) 
            {
            scenario.boxState2 = "zero";
            } 
            else if (scenario.id3 === cell.getAttribute("id")) 
            {
            scenario.boxState3 = "zero";
            }

        });

        turnCross = true;

        turnCount++;

        checkWinner();
      }
    } 
    else 
    {

      if (cellImage.getAttribute("src") === "") 
        {

        cellImage.setAttribute("src", `cross.png`);
        cell.setAttribute("data-state", "cross");

        CROSS_Success_Scenarios_Live.forEach(scenario => {

          if (scenario.id1 === cell.getAttribute("id")) 
          {
            scenario.boxState1 = "cross";
          } 
          else if (scenario.id2 === cell.getAttribute("id")) 
          {
            scenario.boxState2 = "cross";
          } 
          else if (scenario.id3 === cell.getAttribute("id")) 
          {
            scenario.boxState3 = "cross";
          }

        });

        turnCross = false;

        turnCount++;

        checkWinner();
      }
    }

  }
  });
});

function checkWinner()
{

  ZERO_Success_Scenarios.forEach(scenario =>{

    ZERO_Success_Scenarios_Live.forEach(livescenario =>{

        if (scenario.boxState1 === livescenario.boxState1 && scenario.boxState2 === livescenario.boxState2 && scenario.boxState3 === livescenario.boxState3) 
        {
           victoryZero = true;
        } 

    })

  })


  CROSS_Success_Scenarios.forEach(scenario =>{

    CROSS_Success_Scenarios_Live.forEach(livescenario =>{

        if (scenario.boxState1 === livescenario.boxState1 && scenario.boxState2 === livescenario.boxState2 && scenario.boxState3 === livescenario.boxState3) 
        {
           victoryCross = true;
        } 

    })

  })


  if(victoryZero === true)
  {
     winner  = "0";
     endGame = true;
  }
  else if(victoryCross === true)
  {
    winner  = "x";
    endGame = true;
  }
  else
  {
    winner  = "-";
  }

  winnerType.innerText = winner;
    
}
