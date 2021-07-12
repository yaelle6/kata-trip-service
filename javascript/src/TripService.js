"use strict";

let UserSession = require('./UserSession');
let TripDAO = require('./TripDAO');
class TripService {
    constructor(loggedUser = UserSession, tripDAO = TripDAO) {
        this.loggedUser = loggedUser;
        this.tripDAO = tripDAO
    }

    getTripsByUser(person) {
        let trips = [];
        if (this.loggedUser === null) {
            throw new Error('User not logged in.')
           
        } else {
            if(this.loggedUser.amIFriendWith(person)) {
                trips = this.tripDAO.findTripsByUser(person);
            }
            return trips;
        }
    }
}

module.exports = TripService
