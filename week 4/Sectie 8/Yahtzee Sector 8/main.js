// Variabelen 
let diceNumbers = [0, 0, 0, 0, 0];
let diceHold = [false, false, false, false, false];
let roll = 0;
var count = 3;

// Bereken rollenning voor het van de dobbelstenen
// & voor het houden van de dobbelstenen die je wilt
function DiceRoll() {
    for (let i = 0; i < diceNumbers.length; i++) {
        if (!diceHold[i] && roll == 0) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.border = "0.5px solid black";
        } else if (!diceHold[i] && roll == 1) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.border = "0.5px solid black";
        } else if (!diceHold[i] && roll == 2) {
            diceNumbers[i] = Math.floor(Math.random() * 6) + 1;
            document.querySelector("#dice" + (i + 1)).style.border = "0.5px solid black";
        }

        document.getElementById("dice" + (i + 1)).innerHTML = diceNumbers[i];
    }
    if (roll <= 2) {
        roll++;
    } else if (roll == 3) {
        
        roll = 0;
        for (i = 0; i < diceNumbers.length; i++) {
            document.querySelector(".dice" + (i + 1))
            document.querySelector(".dice" + (i + 1)).innerHTML = "*";
            document.querySelector(".dice" + (i + 1)).style.border = "0.5px solid black";
            diceHold = [false, false, false, false, false];
        }
    }
}

// Fuctie voor de dobbelstenen die je kunt houden
function HoldDice(number) {
    diceHold[number] = !diceHold[number];
    if (diceHold[number]) {
        document.querySelector(".dice" + (number + 1)).style.border = "5px solid white";
    } else {
        document.querySelector(".dice" + (number + 1)).style.border = "0.5px solid black";
    }

}

// Count voor hoeveel rolls je nog over hebt
function rollcount(){
var oText=document.getElementById("span");
count -=1;
oText.innerHTML=count;

if (count === 0){
    count = 3 + 1;
}

return;
}

// De functie die 2 dingen aanroept voor het rollen van de dice's
function myfunction(){
    rollcount();
    DiceRoll();
}

// Dit zijn variabelen die worden omgezet waardoor het makkelijker word voor script
var inputFormDiv = document.getElementById('inputForm');
var Uitkomstdeel1 = document.getElementById('Uitkomstdeel1')
var Uitkomstdeel2 = document.getElementById('Uitkomstdeel2')
var Uitkomstpart2totaal = document.getElementById('Uitkomstpart2totaal')
var Uitkomstdeel1eind = document.getElementById('Uitkomstdeel1eind')
var Uitkomstpart1totaal = document.getElementById('Uitkomstpart1totaal')
var Totaaluitkomst = document.getElementById('Totaaluitkomst')
var Bonus = document.getElementById('Bonus')

// Optellen van het invoer vakjes Deel 1
var vakjes = [];
    for(var i = 1; i <= 6; i++){
        var temp = document.getElementById(`SC${i}`)
        temp.addEventListener("change", optellen)
        vakjes.push(temp)
    }
    
function optellen(){
    var totaal = 0;
    for(var i = 0; i < vakjes.length; i++){
        totaal = totaal + Number(vakjes[i].value)
    }

    Uitkomstdeel1.value = totaal
    Uitkomstdeel1eind.value = totaal
    Uitkomstpart1totaal.value = totaal
    optellen3();
}

// Optellen van het invoer vakjes Deel 2
var vakjes2 = [];
    for(var i = 7; i <= 13; i++){
        var temp2 = document.getElementById(`SC${i}`)
        temp2.addEventListener("change", optellen2)
        vakjes2.push(temp2)
    }
    
function optellen2(){
    var totaal2 = 0;
    for(var i = 0; i < vakjes2.length; i++){
        totaal2 = totaal2 + Number(vakjes2[i].value)
    }

    Uitkomstdeel2.value = totaal2
    Uitkomstpart2totaal.value = totaal2
    optellen3();
}

// De bonus word hier opgeteld
var BonusC = [];
        var temp0 = document.getElementById(`Bonus`)
        temp0.addEventListener("change", optellenbonus)
        BonusC.push(temp0)
    
function optellenbonus(){
    var totaal0 = 0;

    totaal0 = Number(Uitkomstdeel1.value) + Number(Bonus.value)

    document.getElementById('Uitkomstdeel1eind').value = totaal0
    document.getElementById('Uitkomstpart1totaal').value = totaal0  
    optellen3(); 
}

// Het totaal optellen van de 2 uitkomste van Deel 1 & deel 2
function optellen3(){
    var totaal3 = 0;

    totaal3 = Number(Uitkomstpart1totaal.value) + Number(Uitkomstpart2totaal.value)

    document.getElementById('Totaaluitkomst').value = totaal3
}

function countNums(num) {
    let count = 0;
    for (let i = 0; i < dobbelstenen.length; i++){
        if(dobbelstenen[i] == num){
            count++
        }
    }
    return num * count;
}