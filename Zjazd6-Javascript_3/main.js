//Task 1


let hero = {
    strength: +Number(Math.random()*100).toPrecision(2),
    knowledge: "Math",
    stamina: +Number(Math.random()*100).toPrecision(2)
};

let enemy = {
    strength: +Number(Math.random()*100).toPrecision(2),
    knowledge: "Geology",
    stamina: +Number(Math.random()*100).toPrecision(2),
    loot: ["Gold", "Iron", "Sword"]
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


