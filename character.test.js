import { describe, expect, it } from "vitest";
import { Character } from "./character.js";

describe("test", () => {
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
});