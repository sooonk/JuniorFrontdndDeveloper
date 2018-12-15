//Task 1

/*
let hero = {
    strength: +Number(Math.random()*100).toPrecision(2),
    knowledge: "Math",
    stamina: +Number(Math.random()*100).toPrecision(2)
};

let enemy = {
    strength: +Number(Math.random()*100).toPrecision(2),
    knowledge: "Geology",
    stamina: +Number(Math.random()*100).toPrecision(2),
    loot: ["Iron", "Sword", "Gold"]
};


console.log("Hero strength is " + hero.strength);
console.log("Enemy strength is " + enemy.strength);


if (hero.strength > enemy.strength){

    for (let i = 0; i <= enemy['loot'].length; i++){
        
        if(enemy.loot[i] == "Gold"){

            console.warn("You have found gold!");
        }
    }
}
else{

    console.log("Hero is weaker :(");

}
*/

//Task 2

/*
let str1 = new String("STRElanger THinevgsen");
let str2 = new String("STRElanger THinevgsen");
let str3 = str2;


if(str1 !== str2){
    console.error("Poor me");
}

if (str2 === str3) {
    
    console.log("str2 is equal str3");
    let str4 = str2.slice(3,5) + str2.slice(15,17) + str2.slice(19,21);     
    console.log(`I am ${str4}`);
    console.log('I am ' + str4);       
}*/

//Task 3a

let groundZerg = {
    power: 10,
    health: 10,
    armor: 10,
    range: 1
};

let flyingZerg = {
    power: 10,
    health: 10,
    armor: 10,
    range: 10
};

let evolutionMethod1 = function(zerg){

    if(zerg.range !== 1){
        return;    
    }
           
    zerg.health += 10;
    zerg.armor += 10;
};

let evolutionMethod2 = function(zerg){

    if (zerg.range <= 1) {
        return;
    }
              
    zerg.power += 5;
    zerg.range += 5;  
};


let evolutionPool = function(zerg, evolutionMethod){

    evolutionMethod(zerg);
};

evolutionPool(groundZerg,evolutionMethod1);
console.log(groundZerg);


evolutionPool(flyingZerg,evolutionMethod1);
console.log(flyingZerg);





