let FloorPlan = [];
for(let i = 0; i < 20; i++) {
  FloorPlan.push([
    ['_disabled_'],
    ['_disabled_'],
    ['_disabled_'],
    ['_disabled_'],
    ['_disabled_'],
    ['_disabled_'],
    ['_disabled_'],
    ['_disabled_'],
    ['_disabled_'],
    ['_disabled_'],
    ['_disabled_'],
    ['_disabled_'],
  ]);
}

let laminatdeeli = [
  { count: 10, key: "darkSimple" }, //darkSimple
  { count: 19, key: "___lite___" }, //___lite___
  { count: 26, key: "___dark___" }, //___dark___
  { count: 27, key: "_darkLite_" }, //_darkLite_
  { count: 33, key: "___main___" }, //___main___
];

function veidotPlaanu() {
  let prefillCount = 200;

  while (0 < prefillCount) {
    let selectRandomPlank = Math.floor(Math.random() * laminatdeeli.length);
    let ROW = Math.floor(Math.random() * FloorPlan.length);
    let SPOT = Math.floor(Math.random() * 12);
    let notDisabledLocation = ROW < 9 && SPOT < 4;
    let notDisabledLocationNext = FloorPlan[ROW][SPOT+1] == "_disabled_";
    let isPairNumberLocation = ROW % 2 == 0 && SPOT % 2 == 0;
    let inventoryEmpty = false;
    let attemptsCount = 500;



    console.log('[paara rinda'+ ROW);
    console.log(ROW % 2 == 0  );


    function newNumbers() {
      ROW = Math.floor(Math.random() * FloorPlan.length);
      SPOT = Math.floor(Math.random() * 12);
      notDisabledLocation = ROW < 9 && SPOT < 4;
      notDisabledLocationNext = FloorPlan[ROW][SPOT+1] == "_disabled_";
      isPairNumberLocation = ROW % 2 == 0 && SPOT % 2 == 0 ;
    }

    //lokācijas pārbaude, ja vieta aizpildīta paņem citu  aa
    while (attemptsCount > 0  && notDisabledLocation) {
      //make new numbers
      newNumbers();
      attemptsCount--;
    }


    ////
    // console.log(isPairNumberLocation + " :" + ROW + " :" + SPOT);
    ////
    //ja nav vairs dēli paņemt citu
    while (
      attemptsCount > 0 &&
      laminatdeeli[selectRandomPlank].count <= 0 
    ) {
      selectRandomPlank = Math.floor(Math.random() * laminatdeeli.length);
      attemptsCount--;
    }



    //viss labi, var ievietot dēli
    if (isPairNumberLocation || !inventoryEmpty) {
      FloorPlan[ROW][SPOT] = laminatdeeli[selectRandomPlank].key;
      laminatdeeli[selectRandomPlank].count = laminatdeeli[selectRandomPlank].count - 1; //noņet dēli no inventorija

         


      //ievietot deli nakosa pozīcijaa

      // if (notDisabledLocationNext && SPOT + 1 == "_disabled_") {
      //   FloorPlan[ROW][SPOT + 1] = laminatdeeli[selectRandomPlank].key;
      //   if ((ROW + 1).valueOf() < 9 && (SPOT + 1).valueOf() > 4) {
      //     FloorPlan[ROW][SPOT + 1] = laminatdeeli[selectRandomPlank].key;
      //   }

      //   if (
      //     ROW + 1 < FloorPlan.length &&
      //     ROW + 1 > 9
      //   ) {
      //     FloorPlan[ROW + 1][0] = laminatdeeli[selectRandomPlank].key;
      //   }
      // }
    }
   

    if (
      laminatdeeli[0].count < 1 &&
      laminatdeeli[1].count < 1 &&
      laminatdeeli[2].count < 1 &&
      laminatdeeli[3].count < 1 &&
      laminatdeeli[4].count < 1 ) {
      prefillCount = 0 
      inventoryEmpty = true;
      console.log("inventorijs ir tukš");
    }
    if (attemptsCount > 0) console.log("mēģinājumu skaits izmelts");


    // laminatdeeli.map((item) => {
    //   if (item.count < 1) {
    //     prefillCount = 0;
    //     inventoryEmpty = true;
    //     console.log(item.key, "inventorijs ir tukš");
    //   }
    // });

    prefillCount--;
    
  }
}

veidotPlaanu();

// let vienaadoSkaits = 0;

// for (index = 0; index < FloorPlan.length; index++) {
//   for (rowNr = 0; rowNr < FloorPlan[rowNr].length; rowNr++) {
//     let attemtCount = 0;
//     while (
//       FloorPlan[index][rowNr - 1] == FloorPlan[index][rowNr] &&
//       attemtCount < 100
//     ) {
//       attemtCount = attemtCount + 1;
//       veidotPlaanu();
//     }
//     console.log("plaana veidošanas skaits:" + attemtCount);
//   }
// }

console.log("====================================");
console.log(FloorPlan);
console.log(laminatdeeli);
console.log("====================================");
