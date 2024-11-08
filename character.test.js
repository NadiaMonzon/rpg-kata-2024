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
    character.pjAttack(800, characterTwo);
    expect(characterTwo.health).toBe(200);   
  } )
  it(" When damage received exceeds current Health, Health becomes 0", () => {
    const character = new Character();
    const characterTwo = new Character();
    character.pjAttack(1500, characterTwo);
    expect(characterTwo.health).toBe(0);
  })
});
