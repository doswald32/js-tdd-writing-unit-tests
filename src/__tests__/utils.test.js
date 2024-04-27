import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
    it("calculatese the total points for a word (1 point per vowel, 2 per consonant)", () => {
        const word = "tEst";

        const points = pointsForWord(word);

        expect(points).toBe(7);
    });
});
