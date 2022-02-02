let hunger=80;
let happiness=50;
let energy=40;

function displayInfo(){
    document.getElementById("hungerInfo").innerHTML=`JS-Hunger
    ${hunger}`;
    document.getElementById("happinessInfo").innerHTML=`JS-Happiness
    ${happiness}`;
    document.getElementById("energyInfo").innerHTML=`JS-Energy
    ${energy}`;
}

function feed(){
    console.log("Feed function");
    hunger=hunger-10;
    happiness=happiness+10;
    energy=energy+20
    //affect vars (increase the happiness +10 and decrease hunger -10)

    //call the display info
    displayInfo();
}

function pet(){
    console.log("Pet Function");
    happiness=happiness+10;
    displayInfo();
}

function play(){
    console.log("Play Function");
    happiness=happiness+10;
    hunger=hunger+10;
    energy=energy-15;
    displayInfo();
}

displayInfo();