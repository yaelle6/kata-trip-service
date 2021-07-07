"use strict";

const assert = require('assert');
const sinon = require('sinon');
const TripService = require('../src/TripService');
const UserSession =  require('../src/UserSession');
const TripDAO = require('../src/TripDAO')
const User = require('../src/User');

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

    describe('when the user is logged', () => {
        before(()=> {
            sinon.stub(UserSession, 'getLoggedUser').returns('jean')
        });
        after(()=>{
            UserSession.getLoggedUser.restore()
        })
        
        context('when the user is not friend with the loggedUser', () => {
            it('should return an empty list of trip', () => {
                const user = new User;
                const trip = new TripService;
                assert.deepStrictEqual(trip.getTripsByUser(user), []);
            });
        })
    });
});
