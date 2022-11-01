console.log(".⋆｡⋆☂˚｡⋆｡˚☽˚｡⋆♡ Happy Halloween ♡.⋆｡⋆☂˚｡⋆｡˚☽˚｡⋆")


var costume = prompt("Pick a number from 1 to 3 for a surprize constume :D");
function getCostume(num){
    if (num == 1){
      return "You're a spooky Witch";
    }
    else if (num == 2){
      return "You're a rotting Zombie";
    }
    else if (num == 3){
      return "You're a cold, pale Vampire";
    }
    else {
        return "There are only 3 Costumes!";
    }
  }

  console.log(getCostume(costume));
