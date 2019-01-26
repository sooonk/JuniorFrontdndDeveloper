let hero = {
    strength: +Number(Math.random()*100).toPrecision(2)+1000,
    knowledge: "Math",
    stamina: +Number(Math.random()*100).toPrecision(2)
};

 

let precious = +Number(Math.random()*10000).toPrecision(2);
console.log("You want to claim " + precious+ " gold!");
let winnings = 0;
let death = false;




while((death == false) && (winnings < precious)){

    let groupOfEnemies = +Number(Math.floor(Math.random()*10)+1); 
    console.log("Group of enemies contains " + groupOfEnemies + " people!")

    for(let i = 0; i < groupOfEnemies; i++){

        let enemy = {
            strength: +Number(Math.random()*100).toPrecision(2),
            knowledge: "Geology",
            stamina: +Number(Math.random()*100).toPrecision(2),
            loot: ["Iron", "Sword", "Gold"],
            gold: +Number(Math.random()*100).toPrecision(2)
            };

        console.log("Hero strength is " + hero.strength);
        console.log("Enemy strength is " + enemy.strength);
        
        if(hero.strength <= enemy.strength){
            console.log("Hero is weaker, game over!");
            death = true;
            break;
        }
        else{
            for (let i = 0; i <= enemy['loot'].length; i++){
            
                if(enemy.loot[i] == "Gold"){
                    console.warn("You have found "+ enemy['gold'] +" gold!");
                    winnings = winnings + enemy['gold'];
                    console.error("Your earned "+ winnings);               
                }
            }
        }
        if(winnings >= precious){
            console.log("You have " + winnings + " of gold, you can be Jarl!")
            break;
        }   
    }

}

