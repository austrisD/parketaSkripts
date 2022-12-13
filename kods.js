let FloorPlan = [];
for (let i = 0; i < 20; i++) {
  FloorPlan.push([
    ["_disabled_"],
    ["_disabled_"],
    ["_disabled_"],
    ["_disabled_"],
    ["_disabled_"],
    ["_disabled_"],
    ["_disabled_"],
    ["_disabled_"],
    ["_disabled_"],
    ["_disabled_"],
    ["_disabled_"],
    ["_disabled_"],
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
  let cycleCountLimit = 500;
  let cycleCount = 0;

  while (0 < cycleCountLimit) {
    let selectRandomPlank = Math.floor(Math.random() * laminatdeeli.length);
    let ROW = Math.floor(Math.random() * FloorPlan.length);
    let SPOT = Math.floor(Math.random() * 12);
    let DisabledLocation = ROW < 9 && SPOT < 4;
    let DisabledLocationNext = FloorPlan[ROW][SPOT + 1] == "_disabled_";
    let FilledLocation = FloorPlan[ROW][SPOT] == "_disabled_";
    let isPairNumberLocation = ROW % 2 == 0 && SPOT % 2 == 1;
    let inventoryEmpty = false;
    let attemptsCount = 200;

    function newNumbers() {
      ROW = Math.floor(Math.random() * FloorPlan.length);
      SPOT = Math.floor(Math.random() * 12);
      DisabledLocation = ROW < 9 && SPOT < 4;
      DisabledLocationNext = FloorPlan[ROW][SPOT + 1] == "_disabled_";
      FilledLocation = FloorPlan[ROW][SPOT] == "_disabled_";
      isPairNumberLocation = ROW % 2 == 0 && SPOT % 2 == 1;
    }

    //lokācijas pārbaude, ja vieta aizpildīta paņem citu  aa
    while (
      attemptsCount > 0 &&
      DisabledLocation &&
      FilledLocation
    ) {
      if (DisabledLocation) console.log("changing numbers=disabled location");
      if (FilledLocation) console.log("changing numbers=spot already taken");
      newNumbers();
      attemptsCount--;
    }

    //ja nav vairs dēli paņemt citu
    while (attemptsCount > 0 && laminatdeeli[selectRandomPlank].count < 1) {
      selectRandomPlank = Math.floor(Math.random() * laminatdeeli.length);
      if (laminatdeeli[selectRandomPlank].count == 0) console.log("there is no more:" + laminatdeeli[selectRandomPlank].key);
       attemptsCount--;
    }

    //viss labi, var ievietot dēli
    if (
      attemptsCount > 0 &&
      !inventoryEmpty &&
      !DisabledLocation &&
      FilledLocation &&
      isPairNumberLocation
    ) {
      FloorPlan[ROW][SPOT] = laminatdeeli[selectRandomPlank].key;
      laminatdeeli[selectRandomPlank].count =
        laminatdeeli[selectRandomPlank].count - 1; //noņet dēli no inventorija
    }




    if (
      laminatdeeli[0].count < 1 &&
      laminatdeeli[1].count < 1 &&
      laminatdeeli[2].count < 1 &&
      laminatdeeli[3].count < 1 &&
      laminatdeeli[4].count < 1
    ) {
      cycleCountLimit = 0;
      inventoryEmpty = true;
      console.log("inventorijs ir tukš cycleCount:" + cycleCount);
    }

    // laminatdeeli.map((item) => {
    //   if (item.count < 1) {
    //     cycleCountLimit = 0;
    //     inventoryEmpty = true;
    //     console.log(item.key, "inventorijs ir tukš");
    //   }
    // });

    cycleCountLimit--;
    cycleCount++;

    //***********************display into html functions****************************//
     const div = document.getElementById("plan");

      let element = "";

      const darkSimple = "rgb(83, 55, 26)";
      const lite = "rgb(205, 172, 139)";
      const dark = "rgb(133, 88, 41)";
      const darkLite = "rgb(197, 142, 86)";
      const main = "rgb(134, 98, 61)";

      FloorPlan.forEach(function (value, key) {
        let row = "";
        value.forEach(function (spot, key) {
          let color = "rgb(255, 255, 255)";
            switch (spot) {
            case "darkSimple": color = darkSimple; break;
            case "___lite___": color = lite; break;
            case "___dark___": color = dark; break;
            case "_darkLite_": color = darkLite; break;
            case "___main___": color = main; break;          
            default:break;
          }

          row += `<td style="background-color: ${color}" >${spot}</td>`;
        });
        element += `<tr>${row}</tr>`;
      });

      setTimeout(() => {
          div.innerHTML = element;        
      }, 1000);


  }
}

veidotPlaanu();

console.log("====================================");
console.log(FloorPlan);
console.log(laminatdeeli);
console.log("====================================");
