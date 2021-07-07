"use strict";

let assert = require('assert');
let sinon = require('sinon');
let TripService = require('../src/TripService');
let UserSession =  require('../src/UserSession');
let User = require('../src/User');

describe('TripService', () => {
    describe('when the user is not logged', () => {
        beforeEach(()=> {
            sinon.stub(UserSession, 'getLoggedUser').returns(null)
        })
        afterEach(()=>{
            UserSession.getLoggedUser.restore()
        })

        it('should return an error', () => {
            const trip = new TripService
            assert.throws(()=> { trip.getTripsByUser() }, Error, 'User not logged in.');
        });
    });
});
