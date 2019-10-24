const createCharacter = {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe:function(){
      return `${name} is a ${race} from ${origin}.`;
    }
    evaluateFight:function(character){
      let oppDam = character.attack - character.defense;
      let yourDam = character.attack - character.defense;
    }
    return `Your opponent takes ${oppDam} damage and you take ${youDam} damage.`
  };
  
  let character = [
    createCharacter.forEach(describe.evaluateFight)
  ]
  
  character.push('Angel, Anhell, Wolf,Parts Uknown,7,8');
  
  arr.find(arragon(describe));
  
  arr.filter(characters.attack > 5);