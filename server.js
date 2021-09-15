const express = require("express");
const app = express();
const port = 3000;
const drinks = require("./models/drinks")

function capitalize(drink) {
    const newDrink = {...drink} 
    newDrink.name = drink.name.charAt(0).toUpperCase() + drink.name.slice(1)
    return newDrink
};

app.get('/', (req, res) => {
    res.send("Welcome to the Gitpub App!")
});

app.get('/drinks', (req, res) => {
    res.render("drinks_index.ejs", {allDrinks: drinks.map(capitalize)})
});

app.listen(3000 , () => {
    console.log(`Listening on port ${port}`)
});