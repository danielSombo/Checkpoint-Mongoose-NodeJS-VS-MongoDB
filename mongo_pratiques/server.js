const express = require("express")
const connectDb = require("./config/connect_db")
const person = require("./model/personne")
const dotenv = require("dotenv")
dotenv.config()
connectDb()

const app = express();
const PORT = 8000 || process.env.PORT

/************************ENREGISTRER UNE PERSONNE */

const newPerson = new person({
    name: "Ben",
    age: 16,
    favoriteFoods: ["Cakes", "Souchi"]
})

newPerson.save()
    .then(data => {
        console.log("Personne sauvegardée:", data)
    })
    .catch(err => {
        console.log("Erreur d'enregistrement:", err)
    })

/****************************ENREGISTRER PLUSIEURS PERSONNES */

const arrayPerson = [
    {
        name: "Dan",
        age: 26,
        favoriteFoods: ["Risotto", "Ratatouille"]
    },
    {
        name: "karren",
        age: 8,
        favoriteFoods: ["Tiramisu", "Ramen"]
    },
    {
        name: "Sarah",
        age: 34,
        favoriteFoods: ["Tempura", "Churos"]
    },
    {
        name: "Geo",
        age: 20,
        favoriteFoods: ["Falafel", "Pastilla"]
    },
]

person.create(arrayPerson)
    .then(data => {
        console.log("Personnes sauvegardées:", data)
    })
    .catch(err => {
        console.log("Erreur d'enregistrement:", err)
    })

/***************************TROUVER TOUTES LES PERSONNES********************** */

person.find()
    .then(data => {
        console.log("Personnes sauvegardées:", data)
    })
    .catch(err => {
        console.log("Erreur d'enregistrement:", err)
    })

/***************************TROUVER UNE PERSONNE********************** */

person.findOne({ favoriteFoods: "Risotto" })
    .then(data => {
        console.log("Personne trouvée:", data)
    })
    .catch(err => {
        console.log("Erreur de recherche:", err)
    })

/***************************TROUVER UNE PERSONNE PAR SON ID********************** */

const personId = "675b40bbea46e6e564dd9034"

person.findById(personId)
    .then(data => {
        console.log("Personne trouvée:", data)
    })
    .catch(err => {
        console.log("Cette personne n'existe pas:", err)
    })


/***************************METTRE A JOUR UN DOCUMENT AVEC FIND? EDIT ET SAVE********************** */

const personId = "675b40bbea46e6e564dd9034"

person.findById(personId)
    .then(data => {
        console.log("Personne trouvée:", data)
    })
    .catch(err => {
        console.log("Cette personne n'existe pas:", err)
    })

person.favoriteFoods.push("hamburger");
person.markModified("favoriteFoods");

person.save()
    .then(data => {
        console.log("Personne smis à jour:", data)
    })
    .catch(err => {
        console.log("Erreur de sauvegarde:", err)
    })


/******************METTRE A JOUR UNE PERSONNE*************** */

const personName = "Ben"

person.findOneAndUpdate({name: personName}, {age: 20}, {new: true})
    .then(data => {
        console.log("Personne mise à jour:", data)
    })
    .catch(err => {
        console.log("Erreur de mise à jour:", err)
    })


/******************SUPPRIMER UNE PERSONNE*************** */

const personId = "675b40bbea46e6e564dd9034"

person.findByIdAndDelete(personId)
    .then(data => {
        console.log("Personne supprimée:", data)
    })
    .catch(err => {
        console.log("Erreur de suppression:", err)
    })


/******************SUPPRIMER DE NOMBREUSES PERSONNES NOMMES BEN*************** */

person.deleteOne({ name: "Ben" })
    .then(data => {
        console.log("Personne supprimée:", data)
    })
    .catch(err => {
        console.log("Erreur de suppression:", err)
    })


/******************TROUVER TOUTES LES PERSONNES QUI AIMENT RISOTTO? TRIEZ-LES? LIMITEZ LES RESULTATS ET MASQUEZ L'AGE*************** */

person.find({ favoriteFoods: "Risotto" })
    .sort({ name: 1 })
    .limit(2)
    .select({ age : 0})
    .then(data => {
        console.log("Personne supprimée:", data)
    })
    .catch(err => {
        console.log("Erreur de suppression:", err)
    })













    
app.listen(PORT, () => {
    console.log(`Serveur en marche sur le ${PORT}`)
})