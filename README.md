# Universal React Examples

To get started, clone this repository run `npm i`

Uses Browserify to bundle the client side package. And Babel so we can write our modules in ES6 syntax.

If you don't have Browserify, you need to install it: `npm install -g browserify`

Enjoy!

## Basic

This example simply renders a hello world component both on the server an on the client.

```
$ cd basic
$ browserify -t [ babelify ] client.js -o client.bundle.js
$ node index.js
```

The app should now be running at localhost:3000


## Fetch

A slightly more complex example. Involves an API server that provides a list of colours.
The "middle-end" is a node express app, and the front-end is react. They are using the
same module `model.js` to fetch colours from the API using the isomorphic-fetch npm module.

```
// Run API
$ cd fetch
$ node api.js

// In new session
// run middle-end + client
$ cd fetch
$ browserify -t [ babelify ] client.js -o client.bundle.js
$ node index.js
```

The app should now be running at localhost:3000
