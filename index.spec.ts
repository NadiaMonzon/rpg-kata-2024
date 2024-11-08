import { it } from "node:test";
import { describe, expect } from "vitest";

describe('test', () => {
    it('should have 1000 health when the character is created', ()=> {
        expect(character.health).toBe(1000)
    }) 
    it('should be level 1 when the character is created', ()=> {
        expect(character.level).toBe(1)
    }) 
    it('should be alive when the character is created', ()=> {
        expect(character.alive).toBeTruthy()
    }) 
})