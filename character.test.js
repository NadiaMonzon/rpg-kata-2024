import { describe, expect, it } from "vitest";
import { Character } from "./character.js";

describe("basic pj", () => {
  it("should have 1000 health when the character is created", () => {
    const character = new Character();
    expect(character.health).toBe(1000);
  });

  it("should be level 1 when the character is created", () => {
    const character = new Character();
    expect(character.level).toBe(1);
  });

  it("should be alive when the character is created", () => {
    const character = new Character();
    expect(character.alive).toBeTruthy();
  });

  it("character should be able to attack", () => {
    const character = new Character();
    const characterTwo = new Character();
    character.dealDamage(800, characterTwo);
    expect(characterTwo.health).toBe(200);
  });

  it(" When damage received exceeds current Health, Health becomes 0", () => {
    const character = new Character();
    const characterTwo = new Character();
    character.dealDamage(1500, characterTwo);
    expect(characterTwo.health).toBe(0);
  });

  it("When the pj health is equal to 0, the pj is dead", () => {
    const character = new Character();
    const characterTwo = new Character();
    character.dealDamage(1500, characterTwo);
    expect(characterTwo.alive).toBeFalsy();
  });

  it("A character can heal a character", () => {
    const character = new Character();
    const characterTwo = new Character();

    character.dealDamage(800, characterTwo);
    characterTwo.heal(200, characterTwo);

    expect(characterTwo.health).toBe(400);
  });

  it("A character cannot be healed over 1000 health points", () => {
    const character = new Character();

    character.heal(200, character);

    expect(character.health).toBe(1000);
  });

  it("A dead character cannot be healed", () => {
    const character = new Character();
    const characterTwo = new Character();

    character.dealDamage(1000, characterTwo);
    characterTwo.heal(200, characterTwo);

    expect(characterTwo.health).toBe(0);
  });
  it("A character shouldn't do damage to itself", () => {
    const character = new Character();
    character.dealDamage(1000, character);
    expect(character.health).toBe(1000);
  })
});
