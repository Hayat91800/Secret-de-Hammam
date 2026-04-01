import { describe, expect, it } from "vitest";

const sum = (n1: number, n2: number) => n1 + n2;

// describe (from vitest), permet de regrouper plusieurs tests
describe("sum test suites", () => {
	// it: permet de créer un test
	it("it should returns a sum of two numbers", () => {
		// arrange: organiser
		// expected est le resultat attendu (il doit etre connu a l'avance)
		const expected = 5;
		const notExpected = 4;
		const n1 = 2;
		const n2 = 3;

		// act: agir sure système que l'on test
		// actual: permet de définir l'obtention du resultat
		const actual = sum(n1, n2);

		// assert: affirmer le / assertion du resultat attendu
		expect(actual).toBe(expected);
		expect(actual).not.toBe(notExpected);
	});
});
