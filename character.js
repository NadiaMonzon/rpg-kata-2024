export class Character {
  health = 1000;
  level = 1;
  alive = true;
  damage = 800;

  dealDamage(damage, character) {
    character.health = Math.max(character.health - damage, 0);
    this.checkCharacterAliveStatus(character);
  }

  checkCharacterAliveStatus(character) {
    if (character.health <= 0) {
      character.alive = false;
    }
  }

  heal(amountHealth, character) {
    character.health = Math.min(character.health + amountHealth, 1000);
    if (character.alive === false) {
      character.health = 0;
    }
  }
}
