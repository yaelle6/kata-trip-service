"use strict"
let assert = require('assert');
const TripDAO = require('../src/TripDAO');
const User = require('../src/User');

describe('TripDAO', () => {
  const trip = new TripDAO
  it('should return the traveler', () => {
    assert.strictEqual(trip.traveler, 'Elsa');
  })

  it('should return the trips of the traveler', () => {
    assert.deepStrictEqual(trip.trips, ['Tanzania', 'Australia', 'Mexico']);
  })

  describe('#findTripsByUser', () => {
    context('when user has trips', () => {
      it('should return a list of countries', () => {
        const user = new User;
        assert.deepStrictEqual(trip.findTripsByUser(user), ['Tanzania', 'Australia', 'Mexico'])
      })
    });

    context('when user has trips', () => {
      it('should return an empty list', () => {
        const user = new User('Maria');
        assert.deepStrictEqual(trip.findTripsByUser(user), [])
      })
    })
  });
});