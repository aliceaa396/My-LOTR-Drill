function createCharacter ( name, nickname, race, origin, attack,defense) {
  let newObj = {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe:function () {
      return `${name} is a ${race} from ${origin}.`
    }
    evaluateFight:function (character) {
      let oppDam = character.attack - character.defense;
      let yourDam = character.attack - character.defense;
    }
  };
  return `Your opponent takes ${oppDam} damage and you take ${youDam} damage.`
}
console.log (`Your opponent takes ${oppDam} damage and you take ${youDam} damage.`)
  let character = [
    const createCharacter.gandalf = ['Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6]
    const createCharacter.bilbo = ['Bilbo Baggins','bilbo','Hobbit' , 'The Shire' , 2 , 1]
    const createCharacter.frodo = ['Frodo Baggins','frodo','Hobbit','The Shire' 3, 2]
    const createCharacter.aragorn = ['Aragorn son of Arathorn' , 'aragorn' , 'Man' , 'Dunnedain' , 6, 8]
    const createCharacter.legolas = ['Legolas', 'legolas' , 'Elf' ,'Woodland Realm', 8 , 5]
    character.forEach(describe.evaluateFight);
  ]
  
  character.push('Angel', 'Legna', 'Wolf','Parts Uknown',7,8');
  
  character.find(arragon(describe));
  
  character.filter(Createcharacters.attack > 5;