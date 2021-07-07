"use strict"

let assert = require('assert');
const User = require('../src/User')

describe('User', () => {
  const user = new User('john', ['elena', 'henry'])

  it('should return user name', () => {
    assert.strictEqual(user.name, 'john')
  })

  it('should return a list of friends', ()=> {
    assert.deepStrictEqual(user.friends, ['elena', 'henry'])
  })

  describe('#getFriends', ()=>{
    it('should return a list of friends of the user', ()=> {
      assert.deepStrictEqual(user.getFriends(), ['elena', 'henry'])
    })
  })
});