"use strict";

const assert = require('assert');
const sinon = require('sinon');
const TripService = require('../src/TripService');
const UserSession =  require('../src/UserSession');
const TripDAO = require('../src/TripDAO')
const User = require('../src/User');

describe('TripService', () => {
    describe('#getTripsByUser', () => {
        const loggedUser = new User;
        const tripDAO = new TripDAO;

        before(()=> {
            sinon.stub(UserSession, 'getLoggedUser');
            sinon.stub(tripDAO, 'findTripsByUser').returns(['Tanzania', 'Australia', 'Mexico']);
        });

        afterEach(()=>{
            UserSession.getLoggedUser.reset()
        })

        after(()=>{
            UserSession.getLoggedUser.restore()
            tripDAO.findTripsByUser.restore()
        })

        context('when the user is not logged', () => {
            it('should return an error', () => {
                const trip  = new TripService
                UserSession.getLoggedUser.returns(null)
                
                assert.throws(()=> { trip.getTripsByUser(loggedUser) }, Error, 'User not logged in.');
            });
          });
        
        context('when the user is not friend with the loggedUser', () => {
            it('should return an empty array', () => {
                const person = new User('Lucas', ['Roger']);
                const trip = new TripService(loggedUser);
                assert.deepStrictEqual(trip.getTripsByUser(person), []);
            });
        })

        context('when the user is friend with the loggedUser', ()=>{
            const person = new User('Françoise', ['jean', 'Alain']);
            const trip = new TripService(loggedUser, tripDAO)

            it('should return the user trip list', () => {
                assert.deepStrictEqual(trip.getTripsByUser(person), ['Tanzania', 'Australia', 'Mexico']);
            });
        })
    });
});
