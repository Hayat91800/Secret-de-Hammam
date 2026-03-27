// mongosh -u root -p ---authenticationDatabase admin
// use secretDeHammam_dev
// load("secretDeHammam.dev.js")
// Afficher les collections presentes dans la base de donné: show collections
// Affiche le contenue de la collection: db.contact.find()
// Supprimer une base: use secretDeHammam_dev
                    // db.dropDatabase()


db.contact.insertMany([
    {
        email: "client1@test.com",
        sujet: "test 1 formulaire contact",
        message: "Test 1",
        date: "2020-01-01T09:00:00.00Z",
    },
    {
        email: "client2@test.com",
        sujet: "test 2 formulaire contact",
        message: "Test 2",
        date: "2020-01-01T09:05:00.00Z",
    },
    {
        email: "client3@test.com",
        sujet: "test 3 formulaire contact",
        message: "Test 3",
        date: "2020-01-01T09:10:00.00Z",
}
])