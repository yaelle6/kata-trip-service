"use strict";

class TripDAO {
    constructor(traveler, trips) {
        this.traveler = traveler || 'Elsa'
        this.trips = trips || ['Tanzania', 'Australia', 'Mexico']
    }

    findTripsByUser(user) {
        if(user.name === 'Maria') {
            return [];
        } else {
            return ['Tanzania', 'Australia', 'Mexico']
        }
      
    }
}

module.exports = TripDAO
