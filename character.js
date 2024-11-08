export class Character {
  health = 1000;
  level = 1;
  alive = true;  
  damage = 800;

  pjAttack(damage, character){
    character.health = character.health - damage;
  }
}
