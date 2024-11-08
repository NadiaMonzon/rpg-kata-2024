export class Character {
  health = 1000;
  level = 1;
  alive = true;
  damage = 800;

  pjAttack(damage, character) {
    if (damage > character.health) {
      character.health = 0;
      character.alive = false;
    } else {
      character.health = character.health - damage;
    }
  }

  pjHeal(amountHealth, character) {
    character.health = character.health + amountHealth;

    if (character.health > 1000) {
      character.health = 1000;
    }
  }
}
