import * as jose from "jose";
import supertest from "supertest";
import { describe, expect, it } from "vitest";
import type { Product } from "../../../models/product";
import type { User } from "../../../models/user";
import Server from "../../../server/core/server";

// describe (from vitest), permet de regrouper plusieurs tests
describe("product controller test suites", async () => {
	// Configuration du test
	const apiRoute = "/api";
	const route = "/product";

	// création admin pour test
	const admin: User = {
		id: 1,
		email: "admin@hammam.com",
		password:
			"$argon2i$v=19$m=16,t=2,p=1$UjdRQlAwR2FOSnY3eDZNWg$t7mHIlV7pYC64GrfIGq+Sg",
		role_id: 1,
		role: {
			id: 1,
			name: "admin",
		},
		skin_id: 3,
	};

	// création token JWT pour test
	const secret = new TextEncoder().encode(process.env.VITE_JWT_SECRET);
	const alg = "HS256";
	const token = await new jose.SignJWT(admin as User)
		.setProtectedHeader({ alg })
		// Durée de validité du token (10heures)
		.setExpirationTime("10h")
		.sign(secret);

	// création fake data pour test
	const data: Partial<Product> = {
		id: 1,
		name: `name -${Math.random()}`,
		image: "Baume_main_test.png",
		description: "Description produit baume main pour test ",
		price: 6.9,
		category_id: 1,
		skin_ids: "2",
		body_part_ids: "2",
		pack_ids: "1",
	};

	// it: permet de créer un test
	// tester le code 200 renvoyer par la route
	it("it should returns a 201 status code when a product is insert", async () => {
		// arrange: organiser
		// expected est le resultat attendu (il doit etre connu a l'avance)
		const expected = 201;

		// test sut: System Under Test
		const sut = supertest(new Server().startServer());

		// act: agir sur le système que l'on test
		/* 
            Envoyer des donnés dans body:
                - Si une image est présente 
                    => utiliser la methode field pour chaque champs
                    => utiliser la methode attach pour transformer un image
                - Si il n'y a pas d'image
                    => utiliser la methode send
        */
		// actual: permet de définir l'obtention du resultat
		const response = await sut
			.post(`${apiRoute}${route}`)
			// Ajout du token
			.auth(token, { type: "bearer" })
			.field("name", data.name as string)
			.field("description", data.description as string)
			.field("price", data.price as number)
			.field("category_id", data.category_id as number)
			.field("skin_ids", data.skin_ids as string)
			.field("body_part_ids", data.body_part_ids as string)
			.field("pack_ids", data.pack_ids as string)
			.attach("image", `${process.env.PUBLIC_DIR}/img/products/${data.image}`);

		console.log(response);

		const actual = response.status;

		// console.log(response);

		// assert: affirmer le / assertion du resultat attendu (verifie la concordance)
		expect(actual).toBe(expected);
	});
});
