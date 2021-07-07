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
    it('should return a list of user\'s friends', ()=> {
      assert.deepStrictEqual(user.getFriends(), ['elena', 'henry'])
    })
  })

  describe('#amIFriendWith', () => {
    context('when the user is not friend with the loggedUser', () => {
      it('should return false', () => {
          const user = new User;
          const loggedUser = new User('Paul', [])

          assert.strictEqual(loggedUser.amIFriendWith(user), false);
      });
  })

  context('when the user is friend with the loggedUser', ()=>{
      const user = new User('Lucas', ['jean']);
      const loggedUser = new User('Jean', ['Lucas'])

      it('should return true', () => {
        assert.strictEqual(loggedUser.amIFriendWith(user), true);
      });
  })
  })
});