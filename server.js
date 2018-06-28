// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express');        // call express
const app = express();                 // define our app using express
const bodyParser = require('body-parser');
var cors = require('cors');
const Recipe = require('./models/recipe');
const Order = require('./models/order');
const User = require('./models/user');

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT ||8080;   // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

//on route that end in /recipes

//----------
router.route('/recipes')
    .post((req,res) => {
        let recipe = new Recipe(req.body);
        recipe.save((err) => {
            if(err)
            res.send(err);
            res.json({message: 'Recipe created!'});
        });
        res.status(201).send(recipe);
    })
    .get((req,res) => {
        Recipe.find((err, recipes) => {
            if(err)
                res.send(err);
                res.json(recipes);
        })
    })
// on routes that end in /recipes/:recipe_id
// ---------------------------------------------------
router.route('/recipes/:recipeId')

    // get the recipe with that id (accessed at GET http://localhost:8080/api/recipes/:recipe_id)
    .get((req, res) =>  {
        Recipe.findById(req.params.recipeId, (err, recipe) => {
            if (err)
                res.send(err);
            res.json(recipe);
        });
    });
//on route that end in /orders
router.route('/orders')
    .get((req,res) => {
    Order.find((err, orders) => {
        if(err)
            res.send(err);
            res.json(orders);
        })
    })
    .post((req,res) => {
        let order = new Order(req.body);
        order.save((err) => {
            if(err)
            res.send(err);
            res.json({message: 'Order created!'});
        });
        res.status(201).send(order);
    })
//on route that end in /users
router.route('/users')
.post((req,res) => {
    let user = new User(req.body);
    user.save((err) => {
        if(err)
        res.send(err);
        res.json({message: 'User created!'});
    });
    res.status(201).send(user);
})
router.route('/users/:email')
.get((req,res) => {
   const email =  req.params['email'];
    User.find({email: email},(err, user) => {
        if(err)
        res.send(err);
        res.json(recipes);
    })
})
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

//DATABASE 
//=============================================================================
const mongoose = require('mongoose');
mongoose.connect('mongodb://natalia:occupation12@ds263740.mlab.com:63740/freshbox');



