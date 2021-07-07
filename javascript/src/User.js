"use strict";

module.exports = class User {
  constructor(name, friends) {
    this.name = name || 'Alain';
    this.friends = friends|| ['Gislène', 'Henry', 'Brigitte', 'Corine', 'Françoise'];
  }

  getFriends() {
    return this.friends;
  }

  amIFriendWith(person) {
    if(this.friends.length == 0) return false;
    return this.friends.includes(person.name)
  }
}