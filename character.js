export class Character {
  health = 1000;
  level = 1;
  alive = true;
  damage = 800;

  pjAttack(damage, character) {
    character.health = Math.max(character.health - damage, 0);
    if (character.health <= 0) {
      character.alive = false;
    }
  }

  pjHeal(amountHealth, character) {
    character.health = Math.min(character.health + amountHealth, 1000);
  }
}
