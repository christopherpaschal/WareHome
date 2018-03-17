'use strict';

const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g https://prosper.auth0.com
        jwksUri: "https://warehome.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'https://warehome.com',
    issuer: "https://warehome.auth0.com/",
    algorithms: ['RS256']
});

app.get('/api/items', (req, res) => {
  let items = [
    {
      id: 1,
      name: 'Signed Tech Football'
    },
    {
      id: 2,
      name: 'Tech Memorabilia'
    },
    {
      id: 3,
      name: 'Star Student Award'
    },
    {
      id: 4,
      name: 'WWII Helmets'
    }
  ];
  res.json(items);
});

app.get('/api/jokes/food', (req, res) => {
  let foodJokes = [
  {
    id: 99991,
    joke: "When Chuck Norris was a baby, he didn't suck his mother's breast. His mother served him whiskey, straight out of the bottle."
  },
  {
    id: 99992,
    joke: 'When Chuck Norris makes a burrito, its main ingredient is real toes.'
  },
  {
    id: 99993,
    joke: 'Chuck Norris eats steak for every single meal. Most times he forgets to kill the cow.'
  },
  {
    id: 99994,
    joke: "Chuck Norris doesn't believe in ravioli. He stuffs a live turtle with beef and smothers it in pig's blood."
  },
  {
    id: 99995,
    joke: "Chuck Norris recently had the idea to sell his urine as a canned beverage. We know this beverage as Red Bull."
  },
  {
    id: 99996,
    joke: 'When Chuck Norris goes to out to eat, he orders a whole chicken, but he only eats its soul.'
  }
  ];
  res.json(foodJokes);
})



app.listen(3333);
console.log('Listening on localhost:3333');
