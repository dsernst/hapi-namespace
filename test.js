/* eslint-env mocha */

'use strict'

require('should')
var namespace = require('./index.js')

describe('namespace(prefix, routes)', function () {

  it('should correctly add a prefix', function () {
    namespace('/foobar', [{
      path: '',
      method: 'GET'
    }, {
      path: '',
      method: 'POST'
    }, {
      path: '/{id}',
      method: 'GET'
    }, {
      path: '/{id}',
      method: 'PUT'
    }, {
      path: '/{id}',
      method: 'DELETE'
    }]).should.deepEqual([{
      path: '/foobar',
      method: 'GET'
    }, {
      path: '/foobar',
      method: 'POST'
    }, {
      path: '/foobar/{id}',
      method: 'GET'
    }, {
      path: '/foobar/{id}',
      method: 'PUT'
    }, {
      path: '/foobar/{id}',
      method: 'DELETE'
    }])

  })

})
