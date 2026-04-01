import supertest from "supertest";
import { describe, expect, it } from "vitest";
import Server from "../../../server/core/server";

// describe (from vitest), permet de regrouper plusieurs tests
describe("homepage controller test suites", () => {
	const apiRoute = "/api";
	const route = "/";
	// it: permet de créer un test
	// tester le code 200 renvoyer par la route
	it("it should returns a 200 status code", async () => {
		// arrange: organiser
		// expected est le resultat attendu (il doit etre connu a l'avance)
		const expected = 200;

		// test sut: System Under Test
		const sut = supertest(new Server().startServer());

		// act: agir sur le système que l'on test
		// actual: permet de définir l'obtention du resultat
		const response = await sut.get(`${apiRoute}${route}`);
		const actual = response.status;

		// console.log(response);

		// assert: affirmer le / assertion du resultat attendu
		expect(actual).toBe(expected);
	});
});
