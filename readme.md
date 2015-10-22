# hapi-namespace

[![NPM Version](https://img.shields.io/npm/v/hapi-namespace.svg)](https://www.npmjs.com/package/hapi-namespace)
[![Build Status](https://travis-ci.org/dsernst/hapi-namespace.svg?branch=master)](https://travis-ci.org/dsernst/hapi-namespace)
[![Coverage Status](https://coveralls.io/repos/dsernst/hapi-namespace/badge.svg?branch=master&service=github)](https://coveralls.io/github/dsernst/hapi-namespace?branch=master)

## Install

Install from npm:

```
npm i --save hapi-namespace
```

Then require in your routing file:

```
var namespace = require('hapi-namespace')
```


## Usage

### `namespace(prefix, routes)`

`prefix` is a string.

`routes` is an array of [hapi route objects](http://hapijs.com/tutorials/routing)

Here's an example:

```js
'use strict'

var handlers = require('./handlers')
var namespace = require('hapi-namespace')

module.exports = namespace('/users', [{
    path: '',
    method: 'GET',
    handler: handlers.find,
}, {
    path: '',
    method: 'POST',
    handler: handlers.create,
}, {
    path: '/{id}',
    method: 'GET',
    handler: handlers.findById,
}, {
    path: '/{id}',
    method: 'PUT',
    handler: handlers.updateById,
}, {
    path: '/{id}',
    method: 'DELETE',
    handler: handlers.removeById,
}])
```

## Tests

Use `npm test` to run the unit tests.
