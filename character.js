export class Character {
  health = 1000;
  level = 1;
  alive = true;  
  damage = 800;

  pjAttack(damage, character){
    if (damage > character.health){
      character.health = 0;
    }
    else {
      character.health = character.health - damage;
    }
  }
}
