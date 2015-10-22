# hapi-namespace

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

module.exports = namespace('/companies', [{
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
