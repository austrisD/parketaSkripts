let lamiPlan = [
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
  [[""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""], [""]],
];

let laminatdeeli = [
  { count: 10, key: "darkSimple" },
  { count: 19, key: "___lite___" },
  { count: 26, key: "___dark___" },
  { count: 27, key: "_darkLite_" },
  { count: 33, key: "___main___" },
];

function veidotPlaanu() {
  let prefillCount = 200;

  while (prefillCount > 0) {
    let selectRandomPlank = Math.floor(Math.random() * laminatdeeli.length);
    let ROW = Math.floor(Math.random() * lamiPlan.length);
    let SPOT = Math.floor(Math.random() * 12);
    let notDisabledLocation = ROW < 9 && SPOT < 4 && !lamiPlan[ROW][SPOT] == "";
    let notDisabledLocationNext = ROW > 9 && !lamiPlan[ROW][(SPOT+1).valueOf()] == "";
    let isPairNumberLocation = (ROW % 2 === 0 && SPOT % 2 == 0) || (ROW % 2 !== 0 && SPOT % 2 !== 0);
    let attemptsCount = 50;
    

    function newNumbers() {
      ROW = Math.floor(Math.random() * lamiPlan.length);
      SPOT = Math.floor(Math.random() * 12);
      notDisabledLocation = ROW < 9 && SPOT < 4 && !lamiPlan[ROW][SPOT] == "";
      notDisabledLocationNext = ROW > 9 && !lamiPlan[ROW][(SPOT+1).valueOf()] == "";
      isPairNumberLocation = (ROW % 2 === 0 && SPOT % 2 == 0) || (ROW % 2 !== 0 && SPOT % 2 !== 0);
    }

    //lokācijas pārbaude, ja vieta aizpildīta paņem citu  aa
    while (attemptsCount > 0 > 0 && notDisabledLocation) {
      //make new numbers
      newNumbers();
      attemptsCount--;
    }

    if (attemptsCount < 0) console.log("mēģinājumu skaits izmelts");

    ////
    console.log(isPairNumberLocation + " :" + ROW + " :" + SPOT);
    ////
    //ja nav vairs dēli paņemt citu
    while (laminatdeeli[selectRandomPlank].count <= 1) {
      selectRandomPlank = Math.floor(Math.random() * laminatdeeli.length);
    }
    //viss labi, var ievietot dēli
    if (attemptsCount > 0 && isPairNumberLocation) {
      lamiPlan[ROW][SPOT] = laminatdeeli[selectRandomPlank].key;

      const nextRow = ROW + 1;
      console.log(notDisabledLocationNext);
      console.log((SPOT + 1).valueOf());
      //ievietot deli nakosa pozīcijaa 
      if (notDisabledLocationNext) {
        lamiPlan[ROW][SPOT + 1] = laminatdeeli[selectRandomPlank].key;
        if ((ROW + 1).valueOf() < 9 && (SPOT + 1).valueOf() > 4) {
          console.log("deelu ievietošana else if");
          lamiPlan[ROW][SPOT + 1] = laminatdeeli[selectRandomPlank].key;
        }
        if ((SPOT + 1).valueOf() > 12 && (ROW + 1).valueOf() < lamiPlan.length &&  (ROW + 1).valueOf() > 9 ) {
          lamiPlan[ROW+1][0] = laminatdeeli[selectRandomPlank].key;
        }
      } 
      laminatdeeli[selectRandomPlank].count =
        laminatdeeli[selectRandomPlank].count - 1; //noņet dēli no inventorija
    }

    prefillCount--;
    
  }
}

veidotPlaanu();

// let vienaadoSkaits = 0;

// for (index = 0; index < lamiPlan.length; index++) {
//   for (rowNr = 0; rowNr < lamiPlan[rowNr].length; rowNr++) {
//     let attemtCount = 0;
//     while (
//       lamiPlan[index][rowNr - 1] == lamiPlan[index][rowNr] &&
//       attemtCount < 100
//     ) {
//       attemtCount = attemtCount + 1;
//       veidotPlaanu();
//     }
//     console.log("plaana veidošanas skaits:" + attemtCount);
//   }
// }

console.log("====================================");
console.log(lamiPlan);
console.log(laminatdeeli);
console.log("====================================");
