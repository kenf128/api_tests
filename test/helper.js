const chai = require('chai');
const _ = require('lodash');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);

const PLACES = {
   'HK': [{"lat": 22.375384, "lng": 113.918480}, {"lat": 22.2730272412, "lng": 114.158957697}, {"lat": 22.307998768, "lng": 114.039333176},
		  {"lat": 22.334570, "lng": 114.199500}, {"lat": 22.331660, "lng": 114.195400}, {"lat": 22.333870, "lng": 114.198930}],
   'HCMC': [{"lat": 10.81239, "lng": 106.66404}, {"lat": 10.77710, "lng": 106.68817}, {"lat": 10.72213, "lng": 106.71452}],
   'USA': [{"lat": 30.44555, "lng": 91.10217}, {"lat": 30.15726, "lng": 90.91480}, {"lat": 29.95107, "lng": 90.07153}]
}

module.exports = {
	getPlaces: (city) => {
        // return 2 or more places in a given city or country
		var num_places = 2 + Math.round(Math.random() * (PLACES[city].length - 2))
		return PLACES[city].slice(0, num_places) 
	},
	localTime: (time, timezone) => {
		return new Date(new Date(time).toLocaleString('en-US', {timeZone: timezone})).toLocaleString();
	},
	sometimeTomorrow: () => {
		var d = new Date();
		start = d.setHours(0,0,0);
		end = d.setHours(23,59,59);
		return new Date(start + Math.random() * (end - start)).toISOString();
	},
	calculateFare: (distanceMeters, localTime) => {
		var baseFare, incrementalFare;
		if (_.inRange(new Date(localTime).getHours(), 5, 22)) {
			baseFare = 20;
			incrementalFare = 5;
		}
		else {
			baseFare = 30;
			incrementalFare = 8;
		}
		return baseFare + incrementalFare * Math.max(distanceMeters - 2000, 0) / 200.0;
	},
	chai,
	_
}
