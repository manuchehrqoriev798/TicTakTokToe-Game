// // todo: effect of background change while clicking
// // todo: logic of wininng combination
// // todo: design, styling
// // todo: random generator that after putting your name, determines who starts first
// // todo: you can clean oponents box but you are not allowed to put your sign in recently deleted form
// // todo: animation to the game is tired




//   // todo: 550 line of code just for logic of this program. What I have learned? There is always easy option that you must know in order to write less and effective line of code
//   // Logic to check winner                                                                        //Logic of  writing places of all winning combination
//   // important: Horizontal 
//   // First
//   if (zero && zero === one && zero === two  && zero === three ) { 
//     handleWin(one);
//     cellDivs[0].classList.add('won');
//     cellDivs[1].classList.add('won');
//     cellDivs[2].classList.add('won');
//     cellDivs[3].classList.add('won');
//   } else if (one && one === two && one === three && four === four) {
//     handleWin(four);
//     cellDivs[1].classList.add('won');
//     cellDivs[2].classList.add('won');
//     cellDivs[3].classList.add('won');
//     cellDivs[4].classList.add('won');
//   } else if (two && two === three  && two === four && two === five) {
//     handleWin(two);
//     cellDivs[2].classList.add('won');
//     cellDivs[3].classList.add('won');
//     cellDivs[4].classList.add('won');
//     cellDivs[5].classList.add('won');
//   } else if (three && three  === four && three  === five && three  === six) {
//     handleWin(three);
//     cellDivs[3].classList.add('won');
//     cellDivs[4].classList.add('won');
//     cellDivs[5].classList.add('won');
//     cellDivs[6].classList.add('won');
//   }
//   // Second
//   else if (seven && seven === eight && seven === nine  && seven === ten ) {
//     handleWin(seven);
//     cellDivs[7].classList.add('won');
//     cellDivs[8].classList.add('won');
//     cellDivs[9].classList.add('won');
//     cellDivs[10].classList.add('won');
//   } else if (eight && eight === nine && eight === ten  && eight === eleven ) {
//     handleWin(eight);
//     cellDivs[8].classList.add('won');
//     cellDivs[9].classList.add('won');
//     cellDivs[10].classList.add('won');
//     cellDivs[11].classList.add('won');
//   } else if (nine && nine === ten && nine === eleven  && nine === twelve ) {
//     handleWin(nine);
//     cellDivs[9].classList.add('won');
//     cellDivs[10].classList.add('won');
//     cellDivs[11].classList.add('won');
//     cellDivs[12].classList.add('won');
//   } else if (ten && ten === eleven && ten === twelve  && ten === thirteen ) {
//     handleWin(ten);
//     cellDivs[10].classList.add('won');
//     cellDivs[11].classList.add('won');
//     cellDivs[12].classList.add('won');
//     cellDivs[13].classList.add('won');
//   }
//   //Third
//   else if (fourteen && fourteen === fifteen && fourteen === sixteen  && fourteen === seventeen ) {
//     handleWin(fourteen);
//     cellDivs[14].classList.add('won');
//     cellDivs[15].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[17].classList.add('won');
//   }  else if (fifteen && fifteen === sixteen && fifteen === seventeen  && fifteen === eighteen ) {
//     handleWin(fifteen);
//     cellDivs[15].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[18].classList.add('won');
//   }  else if (sixteen && sixteen === seventeen && sixteen === eighteen  && sixteen === nineteen ) {
//     handleWin(sixteen);
//     cellDivs[16].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[19].classList.add('won');
//   }  else if (seventeen && seventeen === eighteen && seventeen === nineteen  && seventeen === twenty ) {
//     handleWin(seventeen);
//     cellDivs[17].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[19].classList.add('won');
//     cellDivs[20].classList.add('won');
//   }
//   //Fourth
//   else if (twentyOne && twentyOne === twentyTwo && twentyOne === twentyThree  && twentyOne === twentyFour ) {
//     handleWin(twentyOne);
//     cellDivs[21].classList.add('won');
//     cellDivs[22].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[24].classList.add('won');
//   } else if (twentyTwo && twentyTwo === twentyThree && twentyTwo === twentyFour  && twentyTwo === twentyFive ) {
//     handleWin(twentyTwo);
//     cellDivs[22].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[25].classList.add('won');
//   } else if (twentyThree && twentyThree === twentyFour && twentyThree === twentyFive  && twentyThree === twentySix) {
//     handleWin(twentyThree);
//     cellDivs[23].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[26].classList.add('won');
//   } else if (twentyFour && twentyFour === twentyFive && twentyFour === twentySix  && twentyFour === twentySeven ) {
//     handleWin(twentyFour);
//     cellDivs[24].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[26].classList.add('won');
//     cellDivs[27].classList.add('won');
//   }
//   //Fifth
//   else if (twentyEight && twentyEight === twentyNine && twentyEight === thirty  && twentyEight === thirtyOne ) {
//     handleWin(twentyEight);
//     cellDivs[28].classList.add('won');
//     cellDivs[29].classList.add('won');
//     cellDivs[30].classList.add('won');
//     cellDivs[31].classList.add('won');
//   } else if (twentyNine && twentyNine === thirty && twentyNine === thirtyOne  && twentyNine === thirtyTwo ) {
//     handleWin(twentyNine);
//     cellDivs[29].classList.add('won');
//     cellDivs[30].classList.add('won');
//     cellDivs[31].classList.add('won');
//     cellDivs[32].classList.add('won');
//   } else if (thirty && thirty === thirtyOne && thirty === thirtyTwo  && thirty === thirtyThree ) {
//     handleWin(thirty);
//     cellDivs[30].classList.add('won');
//     cellDivs[31].classList.add('won');
//     cellDivs[32].classList.add('won');
//     cellDivs[33].classList.add('won');
//   } else if (thirtyOne && thirtyOne === thirtyTwo && thirtyOne === thirtyThree  && thirtyOne === thirtyFour ) {
//     handleWin(thirtyOne);
//     cellDivs[31].classList.add('won');
//     cellDivs[32].classList.add('won');
//     cellDivs[33].classList.add('won');
//     cellDivs[34].classList.add('won');
//   }
//   //Sixth
//   else if (thirtyFive && thirtyFive === thirtySix && thirtyFive === thirtySeven  && thirtyFive === thirtyEight ) {
//     handleWin(thirtyFive);
//     cellDivs[35].classList.add('won');
//     cellDivs[36].classList.add('won');
//     cellDivs[37].classList.add('won');
//     cellDivs[38].classList.add('won');
//   } else if (thirtySix && thirtySix === thirtySeven && thirtySix === thirtyEight  && thirtySix === thirtyNine ) {
//     handleWin(thirtySix);
//     cellDivs[36].classList.add('won');
//     cellDivs[37].classList.add('won');
//     cellDivs[38].classList.add('won');
//     cellDivs[39].classList.add('won');
//   } else if (thirtySeven && thirtySeven === thirtyEight && thirtySeven === thirtyNine  && thirtySeven === fourty ) {
//     handleWin(thirtySeven);
//     cellDivs[35].classList.add('won');
//     cellDivs[36].classList.add('won');
//     cellDivs[37].classList.add('won');
//     cellDivs[38].classList.add('won');
//   } else if (thirtyEight && thirtyEight === thirtyNine && thirtyEight === fourty  && thirtyEight === fourty ) {
//     handleWin(thirtyEight);
//     cellDivs[38].classList.add('won');
//     cellDivs[39].classList.add('won');
//     cellDivs[40].classList.add('won');
//     cellDivs[41].classList.add('won');
//   }

//   // important: vertical
//   // Zero
//   else if (zero && zero === seven && zero === fourteen  && zero === twentyOne ) {
//     handleWin(zero);
//     cellDivs[0].classList.add('won');
//     cellDivs[7].classList.add('won');
//     cellDivs[14].classList.add('won');
//     cellDivs[21].classList.add('won');
//   } else if (seven && seven === fourteen && seven === twentyOne  && seven === twentyEight ) {
//     handleWin(seven);
//     cellDivs[7].classList.add('won');
//     cellDivs[14].classList.add('won');
//     cellDivs[21].classList.add('won');
//     cellDivs[28].classList.add('won');
//   } else if (fourteen && fourteen === twentyOne && fourteen === twentyEight  && fourteen === thirtyFive ) {
//     handleWin(fourteen);
//     cellDivs[14].classList.add('won');
//     cellDivs[21].classList.add('won');
//     cellDivs[28].classList.add('won');
//     cellDivs[35].classList.add('won');
//   }
//   //One
//   else if (one && one === eight && one === fifteen  && one === twentyTwo ) {
//     handleWin(one);
//     cellDivs[1].classList.add('won');
//     cellDivs[8].classList.add('won');
//     cellDivs[15].classList.add('won');
//     cellDivs[22].classList.add('won');
//   }
//   else if (eight && eight === fifteen && eight === twentyTwo  && eight === twentyNine ) {
//     handleWin(eight);
//     cellDivs[8].classList.add('won');
//     cellDivs[15].classList.add('won');
//     cellDivs[22].classList.add('won');
//     cellDivs[29].classList.add('won');
//   }  else if (fifteen && fifteen === twentyTwo && fifteen === twentyNine  && fifteen === thirtySix ) {
//     handleWin(fifteen);
//     cellDivs[15].classList.add('won');
//     cellDivs[22].classList.add('won');
//     cellDivs[29].classList.add('won');
//     cellDivs[36].classList.add('won');
//   }
//   // Two
//   else if (two && two === nine && two === sixteen && two === twentyThree ) {
//     handleWin(two);
//     cellDivs[2].classList.add('won');
//     cellDivs[9].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[23].classList.add('won');
//   }  else if (nine && nine === sixteen && nine === twentyThree && nine === thirty ) {
//     handleWin(nine);
//     cellDivs[9].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[30].classList.add('won');
//   }  else if (sixteen && sixteen === twentyThree && sixteen === thirty && sixteen === twentySeven ) {
//     handleWin(sixteen);
//     cellDivs[16].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[30].classList.add('won');
//     cellDivs[37].classList.add('won');
//   }
//   // Three 
//   else if (three && three === ten && three === seventeen && three === twentyFour ) {
//     handleWin(three);
//     cellDivs[3].classList.add('won');
//     cellDivs[10].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[24].classList.add('won');
//   } else if (ten && ten === seventeen && ten === twentyFour && ten === thirtyOne ) {
//     handleWin(ten);
//     cellDivs[10].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[31].classList.add('won');
//   } else if (seventeen && seventeen === twentyFour && seventeen === thirtyOne && seventeen === thirtyEight ) {
//     handleWin(seventeen);
//     cellDivs[17].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[31].classList.add('won');
//     cellDivs[38].classList.add('won');
//   }
//   // Four
//   else if (four && four === eleven && four === eighteen && four === twentyFive ) {
//     handleWin(four);
//     cellDivs[4].classList.add('won');
//     cellDivs[11].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[25].classList.add('won');
//   }  else if (eleven && eleven === eighteen && eleven === twentyFive && eleven === thirtyTwo ) {
//     handleWin(eleven);
//     cellDivs[11].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[32].classList.add('won');
//   } else if (eighteen && eighteen === twentyFive && eighteen === thirtyTwo && eighteen === thirtyNine ) {
//     handleWin(eighteen);
//     cellDivs[18].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[32].classList.add('won');
//     cellDivs[39].classList.add('won');
//   }
//   // Five
//   else if (five && five === twelve && five === nineteen && five === twentySix ) {
//     handleWin(five);
//     cellDivs[5].classList.add('won');
//     cellDivs[12].classList.add('won');
//     cellDivs[19].classList.add('won');
//     cellDivs[26].classList.add('won');
//   }  else if (twelve && twelve === nineteen && twelve === twentySix && twelve === thirtyThree ) {
//     handleWin(twelve);
//     cellDivs[12].classList.add('won');
//     cellDivs[19].classList.add('won');
//     cellDivs[26].classList.add('won');
//     cellDivs[33].classList.add('won');
//   } else if (nineteen && nineteen === twentySix && nineteen === thirtyThree && nineteen === fourty ) {
//     handleWin(nineteen);
//     cellDivs[19].classList.add('won');
//     cellDivs[26].classList.add('won');
//     cellDivs[33].classList.add('won');
//     cellDivs[40].classList.add('won');
//   }
//   // Six
//   else if (six && six === thirteen && six === twenty && six === twentySeven ) {
//     handleWin(six);
//     cellDivs[6].classList.add('won');
//     cellDivs[13].classList.add('won');
//     cellDivs[20].classList.add('won');
//     cellDivs[27].classList.add('won');
//   } else if (thirteen && thirteen === twenty && thirteen === twentySeven && thirteen === thirtyFour ) {
//     handleWin(thirteen);
//     cellDivs[13].classList.add('won');
//     cellDivs[20].classList.add('won');
//     cellDivs[27].classList.add('won');
//     cellDivs[34].classList.add('won');
//   } else if (twenty && twenty === twentySeven && twenty === thirtyFour && twenty === fourtyOne ) {
//     handleWin(twenty);
//     cellDivs[20].classList.add('won');
//     cellDivs[27].classList.add('won');
//     cellDivs[34].classList.add('won');
//     cellDivs[41].classList.add('won');
//   }


//   // important: Diagnal ///////////////
//   // THREE
//   else if (three && three === nine && three === fifteen && three === twentyOne ) { 
//     handleWin(three);
//     cellDivs[3].classList.add('won');
//     cellDivs[9].classList.add('won');
//     cellDivs[15].classList.add('won');
//     cellDivs[21].classList.add('won');
//   }
//   // FOUR
//   else if (four && four === ten && four === sixteen && four === twentyTwo ) { 
//     handleWin(four);
//     cellDivs[4].classList.add('won');
//     cellDivs[10].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[22].classList.add('won');
//   } else if (ten && ten === sixteen && ten === twentyTwo && ten === twentyEight ) { 
//     handleWin(ten);
//     cellDivs[10].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[22].classList.add('won');
//     cellDivs[28].classList.add('won');
//   }
//   // FIVE
//   else if (five && five === eleven && five === seventeen && five === twentyThree ) { 
//     handleWin(five);
//     cellDivs[5].classList.add('won');
//     cellDivs[11].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[23].classList.add('won');
//   } else if (eleven && eleven === seventeen && eleven === twentyThree && eleven === twentyNine ) { 
//     handleWin(eleven);
//     cellDivs[11].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[29].classList.add('won');
//   } else if (seventeen && seventeen === twentyThree && seventeen === twentyNine && seventeen === thirtyFive ) { 
//     handleWin(seventeen);
//     cellDivs[17].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[29].classList.add('won');
//     cellDivs[35].classList.add('won');
//   }
//   // SIX 
//   else if (six && six === twenteen && six === eighteen && six === twentyFour ) { 
//     handleWin(six);
//     cellDivs[6].classList.add('won');
//     cellDivs[12].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[24].classList.add('won');
//   }  else if (twelve && twelve === eighteen && twelve === twentyFour && twelve === thirty ) { 
//     handleWin(twelve);
//     cellDivs[12].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[30].classList.add('won');
//   } else if (eighteen && eighteen === twentyFour && eighteen === thirty && eighteen === thirtySix ) { 
//     handleWin(eighteen);
//     cellDivs[18].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[30].classList.add('won');
//     cellDivs[36].classList.add('won');
//   }
//   // THIRTEEN
//   else if (thirteen && thirteen === nineteen && thirteen === twentyFive && thirteen === thirtyOne ) { 
//     handleWin(thirteen);
//     cellDivs[13].classList.add('won');
//     cellDivs[19].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[31].classList.add('won');
//   } else if (nineteen && nineteen === twentyFive && nineteen === thirtyOne && nineteen === thirtySeven ) { 
//     handleWin(nineteen);
//     cellDivs[19].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[31].classList.add('won');
//     cellDivs[37].classList.add('won');
//   }
//   // TWENTY
//   else if (twenty && twenty === twentySix && twenty === thirtyTwo && twenty === thirtyEight ) { 
//     handleWin(twenty);
//     cellDivs[20].classList.add('won');
//     cellDivs[26].classList.add('won');
//     cellDivs[32].classList.add('won');
//     cellDivs[38].classList.add('won');
//   }
  
//   // important: Diagnal \\\\\\\\\\\\\\\\
//   //THREE 
//   else if (three && three === eleven && three === nineteen && three === twentySeven ) { 
//     handleWin(three);
//     cellDivs[3].classList.add('won');
//     cellDivs[11].classList.add('won');
//     cellDivs[19].classList.add('won');
//     cellDivs[27].classList.add('won');
//   }
//   //TWO
//   else if (two && two === ten && two === eighteen && two ===twentySix ) { 
//     handleWin(two);
//     cellDivs[2].classList.add('won');
//     cellDivs[10].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[26].classList.add('won');
//   } else if (ten && ten === eighteen && ten === twentySix && ten === thirtyFour ) { 
//     handleWin(ten);
//     cellDivs[10].classList.add('won');
//     cellDivs[18].classList.add('won');
//     cellDivs[26].classList.add('won');
//     cellDivs[34].classList.add('won');
//   }
//   // FIRST 
//   else if (one && one === nine && one === seventeen && one === twentyFive ) { 
//     handleWin(one);
//     cellDivs[1].classList.add('won');
//     cellDivs[9].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[25].classList.add('won');
//   } else if (nine && nine === seventeen && nine === twentyFive && nine === thirtyThree ) { 
//     handleWin(nine);
//     cellDivs[9].classList.add('won');
//     cellDivs[17].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[33].classList.add('won');
//   } else if (seventeen && seventeen === twentyFive && seventeen === thirtyThree && seventeen === fourtyOne ) { 
//     handleWin(seventeen);
//     cellDivs[17].classList.add('won');
//     cellDivs[25].classList.add('won');
//     cellDivs[33].classList.add('won');
//     cellDivs[41].classList.add('won');
//   }
//   // ZERO
//   else if (zero && zero === eight && zero === sixteen && zero === twentyFour ) { 
//     handleWin(zero);
//     cellDivs[0].classList.add('won');
//     cellDivs[8].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[24].classList.add('won');
//   }  else if (eight && eight === sixteen && eight === twentyFour && eight === thirtyTwo ) { 
//     handleWin(eight);
//     cellDivs[8].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[32].classList.add('won');
//   }  else if (sixteen && sixteen === twentyFour && sixteen === thirtyTwo && sixteen === fourty ) { 
//     handleWin(sixteen);
//     cellDivs[8].classList.add('won');
//     cellDivs[16].classList.add('won');
//     cellDivs[24].classList.add('won');
//     cellDivs[32].classList.add('won');
//   } 
//   // SEVEN
//   else if (seven && seven === fifteen && seven === twentyThree && seven === thirtyOne ) { 
//     handleWin(seven);
//     cellDivs[7].classList.add('won');
//     cellDivs[15].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[31].classList.add('won');
//   } else if (fifteen && fifteen === twentyThree && fifteen === thirtyOne && fifteen === thirtyNine ) { 
//     handleWin(fifteen);
//     cellDivs[15].classList.add('won');
//     cellDivs[23].classList.add('won');
//     cellDivs[31].classList.add('won');
//     cellDivs[39].classList.add('won');
//   }
//   // FOURTEEN
//   else if (fourteen && fourteen === twentyTwo && fourteen === thirty && fourteen === thirtyEight ) { 
//     handleWin(fourteen);
//     cellDivs[14].classList.add('won');
//     cellDivs[22].classList.add('won');
//     cellDivs[30].classList.add('won');
//     cellDivs[38].classList.add('won');
//   }  
  

//   // the rest 
//   else if (one && one && two  && four && five && six && eight && nine && ten && 
//            eleven && twelve && thirteen && fourteen && fifteen && sixteen && seventeen && eighteen && nineteen &&
//            twenty && twentyOne && twentyTwo  && twentyThree && twentyFour && twentyFive && twentySix && twentySeven && twentyEight && twentyNine &&
//            thirty && thirtyOne && thirtyTwo  && thirtyThree && thirtyFour && thirtyFive && thirtySix && thirtySeven && thirtyEight && thirtyNine &&
//            fourty && fourtyOne
//            ){  
//     gameIsLive = false;
//     statusDiv.innerHTML = 'Game is tied!';                                                                   // if all cells are filled but there is no winning combination, game is draw
//   } else {
//     xIsNext = !xIsNext;
//     if (xIsNext) {
//       statusDiv.innerHTML = `${xSymbol} now is your turn`;                                                   // if x is true type this, but afterzero true it becomes false
//     } else {
//       statusDiv.innerHTML = `<span>${oSymbol} now is you turn </span>`;                                     // if x is false type o
//     }
//   }
// };



























// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.cell'); // Updated class name to match HTML

// Game Constants
const xSymbol = '×';
const oSymbol = '○';

// Game Variables
let gameIsLive = true;
let xIsNext = true;

// Functions
const letterToSymbol = (letter) => (letter === 'x' ? xSymbol : oSymbol);

const handleWin = (letter) => {
  gameIsLive = false;
  statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
  statusDiv.style.backgroundColor = 'red';
};


// Logic for win
const checkGameStatus = () => {
  for (let i = 0; i < 42; i += 7) { // Iterate through each column
    for (let j = 0; j < 3; j++) { // Iterate through rows within a column
      const cell1 = cellDivs[i + j];
      const cell2 = cellDivs[i + j + 1];
      const cell3 = cellDivs[i + j + 2];
      const cell4 = cellDivs[i + j + 3];

      // Check for a winning combination in columns
      if (
        cell1.classList.contains('x') &&
        cell2.classList.contains('x') &&
        cell3.classList.contains('x') &&
        cell4.classList.contains('x')
      ) {
        handleWin('x');
        return;
      } else if (
        cell1.classList.contains('o') &&
        cell2.classList.contains('o') &&
        cell3.classList.contains('o') &&
        cell4.classList.contains('o')
      ) {
        handleWin('o');
        return;
      }
    }
  }

  // Check for winning combinations in rows
  for (let i = 0; i < 42; i += 7) {
    for (let j = 0; j < 7; j++) {
      const cell1 = cellDivs[i + j];
      const cell2 = cellDivs[i + 7 + j];
      const cell3 = cellDivs[i + 14 + j];
      const cell4 = cellDivs[i + 21 + j];

      if (
        cell1.classList.contains('x') &&
        cell2.classList.contains('x') &&
        cell3.classList.contains('x') &&
        cell4.classList.contains('x')
      ) {
        handleWin('x');
        return;
      } else if (
        cell1.classList.contains('o') &&
        cell2.classList.contains('o') &&
        cell3.classList.contains('o') &&
        cell4.classList.contains('o')
      ) {
        handleWin('o');
        return;
      }
    }
  }

  // Check for winning combinations in diagonals (from top-left to bottom-right)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      const cell1 = cellDivs[i * 7 + j];
      const cell2 = cellDivs[i * 7 + j + 8];
      const cell3 = cellDivs[i * 7 + j + 16];
      const cell4 = cellDivs[i * 7 + j + 24];

      if (
        cell1.classList.contains('x') &&
        cell2.classList.contains('x') &&
        cell3.classList.contains('x') &&
        cell4.classList.contains('x')
      ) {
        handleWin('x');
        return;
      } else if (
        cell1.classList.contains('o') &&
        cell2.classList.contains('o') &&
        cell3.classList.contains('o') &&
        cell4.classList.contains('o')
      ) {
        handleWin('o');
        return;
      }
    }
  }

  // Check for winning combinations in diagonals (from top-right to bottom-left)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      const cell1 = cellDivs[i * 7 + j + 3];
      const cell2 = cellDivs[i * 7 + j + 9];
      const cell3 = cellDivs[i * 7 + j + 15];
      const cell4 = cellDivs[i * 7 + j + 21];

      if (
        cell1.classList.contains('x') &&
        cell2.classList.contains('x') &&
        cell3.classList.contains('x') &&
        cell4.classList.contains('x')
      ) {
        handleWin('x');
        return;
      } else if (
        cell1.classList.contains('o') &&
        cell2.classList.contains('o') &&
        cell3.classList.contains('o') &&
        cell4.classList.contains('o')
      ) {
        handleWin('o');
        return;
      }
    }
  }

  // Check for a tie
  const isBoardFull = [...cellDivs].every((cell) =>
    cell.classList.contains('x') || cell.classList.contains('o')
  );
  if (isBoardFull) {
    gameIsLive = false;
    statusDiv.innerHTML = 'Game is tied!';
  } else {
    xIsNext = !xIsNext;
    statusDiv.innerHTML = `${xSymbol} now is your turn`;
  }
};


// Event Handlers
const handleReset = () => {
  xIsNext = true;
  statusDiv.innerHTML = `${xSymbol} is next`;
  cellDivs.forEach((cell) => {
    cell.classList.remove('x');
    cell.classList.remove('o');
  });
  gameIsLive = true;
  statusDiv.style.backgroundColor = 'black';
};

const handleCellClick = (e) => {
  const classList = e.target.classList;

  if (!gameIsLive || classList.contains('x') || classList.contains('o')) {
    return;
  }

  if (xIsNext) {
    classList.add('x');
  } else {
    classList.add('o');
  }
  checkGameStatus();
};

// Event Listeners
resetDiv.addEventListener('click', handleReset);
cellDivs.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});

// Initial State
statusDiv.innerHTML = `${xSymbol} is next`;
