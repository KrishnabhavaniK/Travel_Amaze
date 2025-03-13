// Package details object
const packageDetails = {
    premium: {
        name: 'Premium Package',
        price: 40000,
        features: [
            'Luxury Flight Travel',
            '5-Star Beach Resort Stay in North & South Goa',
            'Private Tour Guide',
            'All Goan Cuisine Meals Included',
            'VIP Access to Beach Clubs & Water Sports'
        ]
    },
    gold: {
        name: 'Gold Package',
        price: 28000,
        features: [
            'AC Bus Travel',
            '4-Star Resort Stay Near Baga Beach',
            'Expert Local Guide',
            'Goan Breakfast & Dinner',
            'Sunset Cruise & Standard Access to Water Sports'
        ]
    },
    silver: {
        name: 'Silver Package',
        price: 18000,
        features: [
            'Train Travel (AC Class)',
            '3-Star Hotel in Panaji',
            'Group Tour Guide',
            'Goan Breakfast Only',
            'Basic Sightseeing of Beaches & Churches'
        ]
    }
};

// Updated flight data with more cities and routes
const flightData = {
    delhi: [
        { id: 1, airline: 'Air India', departure: '06:30', arrival: '09:15', price: 5500, duration: '2h 45m', flightNo: 'AI-203' },
        { id: 2, airline: 'IndiGo', departure: '11:00', arrival: '13:45', price: 5000, duration: '2h 45m', flightNo: '6E-456' }
    ],
    mumbai: [
        { id: 3, airline: 'Vistara', departure: '08:00', arrival: '10:30', price: 5800, duration: '2h 30m', flightNo: 'UK-789' },
        { id: 4, airline: 'SpiceJet', departure: '14:00', arrival: '16:30', price: 5400, duration: '2h 30m', flightNo: 'SG-123' }
    ],
    bangalore: [
        { id: 5, airline: 'IndiGo', departure: '07:15', arrival: '09:45', price: 6000, duration: '2h 30m', flightNo: '6E-901' },
        { id: 6, airline: 'Air India', departure: '12:30', arrival: '15:00', price: 5700, duration: '2h 30m', flightNo: 'AI-456' }
    ],
    chennai: [
        { id: 7, airline: 'SpiceJet', departure: '09:00', arrival: '11:30', price: 6200, duration: '2h 30m', flightNo: 'SG-234' },
        { id: 8, airline: 'Vistara', departure: '16:00', arrival: '18:30', price: 5900, duration: '2h 30m', flightNo: 'UK-567' }
    ],
    kolkata: [
        { id: 9, airline: 'Air India', departure: '05:30', arrival: '08:15', price: 7000, duration: '2h 45m', flightNo: 'AI-789' },
        { id: 10, airline: 'IndiGo', departure: '13:00', arrival: '15:45', price: 6500, duration: '2h 45m', flightNo: '6E-123' }
    ],
    hyderabad: [
        { id: 11, airline: 'Vistara', departure: '06:45', arrival: '09:15', price: 6800, duration: '2h 30m', flightNo: 'UK-321' },
        { id: 12, airline: 'SpiceJet', departure: '15:30', arrival: '18:00', price: 6400, duration: '2h 30m', flightNo: 'SG-876' }
    ],
    kanpur: [
        { id: 13, airline: 'IndiGo', departure: '07:00', arrival: '09:45', price: 5800, duration: '2h 45m', flightNo: '6E-789' },
        { id: 14, airline: 'Air India', departure: '14:00', arrival: '16:45', price: 5400, duration: '2h 45m', flightNo: 'AI-234' }
    ],
    surat: [
        { id: 15, airline: 'SpiceJet', departure: '08:30', arrival: '11:00', price: 6200, duration: '2h 30m', flightNo: 'SG-543' },
        { id: 16, airline: 'Vistara', departure: '17:00', arrival: '19:30', price: 5900, duration: '2h 30m', flightNo: 'UK-678' }
    ],
    indore: [
        { id: 17, airline: 'Air India', departure: '06:00', arrival: '08:45', price: 6000, duration: '2h 45m', flightNo: 'AI-901' },
        { id: 18, airline: 'IndiGo', departure: '13:30', arrival: '16:15', price: 5700, duration: '2h 45m', flightNo: '6E-345' }
    ],
    aurangabad: [
        { id: 23, airline: 'IndiGo', departure: '08:00', arrival: '10:30', price: 6200, duration: '2h 30m', flightNo: '6E-789' },
        { id: 24, airline: 'Air India', departure: '17:00', arrival: '19:30', price: 5900, duration: '2h 30m', flightNo: 'AI-234' }
    ],
    madurai: [
        { id: 25, airline: 'SpiceJet', departure: '07:30', arrival: '10:00', price: 6300, duration: '2h 30m', flightNo: 'SG-567' },
        { id: 26, airline: 'Vistara', departure: '15:30', arrival: '18:00', price: 6000, duration: '2h 30m', flightNo: 'UK-456' }
    ],
    visakhapatnam: [
        { id: 27, airline: 'Air India', departure: '06:45', arrival: '09:15', price: 6500, duration: '2h 30m', flightNo: 'AI-789' },
        { id: 28, airline: 'IndiGo', departure: '14:15', arrival: '16:45', price: 6100, duration: '2h 30m', flightNo: '6E-123' }
    ],
    vijayawada: [
        { id: 29, airline: 'Vistara', departure: '09:00', arrival: '11:30', price: 6400, duration: '2h 30m', flightNo: 'UK-234' },
        { id: 30, airline: 'SpiceJet', departure: '18:00', arrival: '20:30', price: 6100, duration: '2h 30m', flightNo: 'SG-345' }
    ],
    vadodara: [
        { id: 31, airline: 'IndiGo', departure: '07:45', arrival: '10:15', price: 6600, duration: '2h 30m', flightNo: '6E-456' },
        { id: 32, airline: 'Air India', departure: '16:00', arrival: '18:30', price: 6200, duration: '2h 30m', flightNo: 'AI-678' }
    ],
    gwalior: [
        { id: 33, airline: 'SpiceJet', departure: '08:30', arrival: '11:00', price: 6700, duration: '2h 30m', flightNo: 'SG-789' },
        { id: 34, airline: 'Vistara', departure: '17:15', arrival: '19:45', price: 6400, duration: '2h 30m', flightNo: 'UK-567' }
    ],
    amritsar: [
        { id: 35, airline: 'Air India', departure: '06:30', arrival: '09:00', price: 6800, duration: '2h 30m', flightNo: 'AI-890' },
        { id: 36, airline: 'IndiGo', departure: '15:30', arrival: '18:00', price: 6500, duration: '2h 30m', flightNo: '6E-234' }
    ],
    coimbatore: [
        { id: 37, airline: 'IndiGo', departure: '07:15', arrival: '09:45', price: 6200, duration: '2h 30m', flightNo: '6E-678' },
        { id: 38, airline: 'SpiceJet', departure: '16:30', arrival: '19:00', price: 5900, duration: '2h 30m', flightNo: 'SG-789' }
    ],
    ludhiana: [
        { id: 39, airline: 'Vistara', departure: '08:30', arrival: '11:00', price: 6400, duration: '2h 30m', flightNo: 'UK-345' },
        { id: 40, airline: 'Air India', departure: '18:00', arrival: '20:30', price: 6100, duration: '2h 30m', flightNo: 'AI-678' }
    ],
    kochi: [
        { id: 41, airline: 'IndiGo', departure: '06:30', arrival: '09:00', price: 6900, duration: '2h 30m', flightNo: '6E-890' },
        { id: 42, airline: 'SpiceJet', departure: '15:45', arrival: '18:15', price: 6500, duration: '2h 30m', flightNo: 'SG-234' }
    ],
    mysore: [
        { id: 43, airline: 'Vistara', departure: '07:00', arrival: '09:30', price: 6700, duration: '2h 30m', flightNo: 'UK-567' },
        { id: 44, airline: 'Air India', departure: '17:30', arrival: '20:00', price: 6300, duration: '2h 30m', flightNo: 'AI-123' }
    ],
    mangalore: [
        { id: 45, airline: 'IndiGo', departure: '08:15', arrival: '10:45', price: 6800, duration: '2h 30m', flightNo: '6E-901' },
        { id: 46, airline: 'SpiceJet', departure: '19:00', arrival: '21:30', price: 6400, duration: '2h 30m', flightNo: 'SG-678' }
    ],
    ahmedabad: [
        { id: 47, airline: 'Vistara', departure: '07:45', arrival: '10:15', price: 6600, duration: '2h 30m', flightNo: 'UK-456' },
        { id: 48, airline: 'Air India', departure: '18:30', arrival: '21:00', price: 6200, duration: '2h 30m', flightNo: 'AI-789' }
    ],
    pune: [
        { id: 49, airline: 'IndiGo', departure: '06:45', arrival: '09:15', price: 6700, duration: '2h 30m', flightNo: '6E-234' },
        { id: 50, airline: 'SpiceJet', departure: '17:00', arrival: '19:30', price: 6300, duration: '2h 30m', flightNo: 'SG-567' }
    ],
    srinagar: [
        { id: 51, airline: 'Air India', departure: '07:30', arrival: '10:00', price: 7000, duration: '2h 30m', flightNo: 'AI-345' },
        { id: 52, airline: 'IndiGo', departure: '19:15', arrival: '21:45', price: 6600, duration: '2h 30m', flightNo: '6E-678' }
    ],
    nagpur: [
        { id: 53, airline: 'Vistara', departure: '08:30', arrival: '11:00', price: 6900, duration: '2h 30m', flightNo: 'UK-901' },
        { id: 54, airline: 'SpiceJet', departure: '20:00', arrival: '22:30', price: 6500, duration: '2h 30m', flightNo: 'SG-789' }
    ],
    varanasi: [
        { id: 55, airline: 'IndiGo', departure: '09:15', arrival: '11:45', price: 7100, duration: '2h 30m', flightNo: '6E-123' },
        { id: 56, airline: 'Air India', departure: '21:00', arrival: '23:30', price: 6700, duration: '2h 30m', flightNo: 'AI-234' }
    ]
};

// Sample bus data with all cities
const busData = {
    delhi: [
        { id: 1, operator: 'RedBus', departure: '18:00', arrival: '12:00', price: 1800, duration: '18h', busNo: 'RB-101' },
        { id: 2, operator: 'VRL Travels', departure: '20:30', arrival: '14:30', price: 2000, duration: '18h', busNo: 'VRL-202' }
    ],
    mumbai: [
        { id: 3, operator: 'SRS Travels', departure: '19:00', arrival: '11:30', price: 1700, duration: '16h 30m', busNo: 'SRS-303' },
        { id: 4, operator: 'Orange Tours', departure: '21:00', arrival: '13:00', price: 1900, duration: '16h', busNo: 'ORNG-404' }
    ],
    bangalore: [
        { id: 5, operator: 'KSRTC', departure: '17:30', arrival: '10:00', price: 1600, duration: '16h 30m', busNo: 'KSRTC-505' },
        { id: 6, operator: 'VRL Travels', departure: '22:00', arrival: '12:30', price: 2000, duration: '14h 30m', busNo: 'VRL-606' }
    ],
    chennai: [
        { id: 7, operator: 'Parveen Travels', departure: '18:45', arrival: '11:00', price: 1900, duration: '16h 15m', busNo: 'PRVN-707' },
        { id: 8, operator: 'SRS Travels', departure: '20:15', arrival: '10:30', price: 1750, duration: '14h 15m', busNo: 'SRS-808' }
    ],
    kolkata: [
        { id: 9, operator: 'Royal Cruiser', departure: '16:00', arrival: '09:00', price: 2100, duration: '17h', busNo: 'RC-909' },
        { id: 10, operator: 'GreenLine Travels', departure: '21:30', arrival: '12:30', price: 1950, duration: '15h', busNo: 'GLT-1010' }
    ],
    hyderabad: [
        { id: 11, operator: 'Orange Tours', departure: '19:00', arrival: '10:00', price: 1800, duration: '15h', busNo: 'ORNG-1111' },
        { id: 12, operator: 'VRL Travels', departure: '21:45', arrival: '12:15', price: 2000, duration: '14h 30m', busNo: 'VRL-1212' }
    ],
    kanpur: [
        { id: 13, operator: 'Shatabdi Travels', departure: '17:15', arrival: '08:45', price: 1700, duration: '15h 30m', busNo: 'STB-1313' },
        { id: 14, operator: 'UPSRTC', departure: '20:30', arrival: '11:00', price: 1850, duration: '14h 30m', busNo: 'UPS-1414' }
    ],
    surat: [
        { id: 15, operator: 'Neeta Travels', departure: '18:30', arrival: '10:30', price: 1750, duration: '16h', busNo: 'NEETA-1515' },
        { id: 16, operator: 'VRL Travels', departure: '22:00', arrival: '12:30', price: 1950, duration: '14h 30m', busNo: 'VRL-1616' }
    ],
    indore: [
        { id: 17, operator: 'Hans Travels', departure: '19:45', arrival: '10:15', price: 1800, duration: '14h 30m', busNo: 'HANS-1717' },
        { id: 18, operator: 'Ashok Travels', departure: '21:15', arrival: '11:45', price: 1900, duration: '14h 30m', busNo: 'ASHOK-1818' }
    ],
    aurangabad: [
        { id: 19, operator: 'Sharma Travels', departure: '18:00', arrival: '09:30', price: 1700, duration: '15h 30m', busNo: 'ST-1919' },
        { id: 20, operator: 'VRL Travels', departure: '21:00', arrival: '12:00', price: 1850, duration: '15h', busNo: 'VRL-2020' }
    ],
    coimbatore: [
        { id: 21, operator: 'Parveen Travels', departure: '17:30', arrival: '10:00', price: 1750, duration: '16h 30m', busNo: 'PRVN-2121' },
        { id: 22, operator: 'SRS Travels', departure: '22:00', arrival: '12:30', price: 1900, duration: '14h 30m', busNo: 'SRS-2222' }
    ],
    madurai: [
        { id: 23, operator: 'Madurai Travels', departure: '18:45', arrival: '11:00', price: 1800, duration: '16h 15m', busNo: 'MT-2323' },
        { id: 24, operator: 'Orange Tours', departure: '20:15', arrival: '10:30', price: 1950, duration: '14h 15m', busNo: 'ORNG-2424' }
    ],
    visakhapatnam: [
        { id: 25, operator: 'Vizag Travels', departure: '16:00', arrival: '09:00', price: 2000, duration: '17h', busNo: 'VT-2525' },
        { id: 26, operator: 'GreenLine Travels', departure: '21:30', arrival: '12:30', price: 1850, duration: '15h', busNo: 'GLT-2626' }
    ],
    vijayawada: [
        { id: 27, operator: 'Vijayawada Express', departure: '19:00', arrival: '10:00', price: 1750, duration: '15h', busNo: 'VE-2727' },
        { id: 28, operator: 'VRL Travels', departure: '21:45', arrival: '12:15', price: 1900, duration: '14h 30m', busNo: 'VRL-2828' }
    ],
    gwalior: [
        { id: 29, operator: 'Gwalior Express', departure: '17:15', arrival: '08:45', price: 1700, duration: '15h 30m', busNo: 'GE-2929' },
        { id: 30, operator: 'UPSRTC', departure: '20:30', arrival: '11:00', price: 1800, duration: '14h 30m', busNo: 'UPS-3030' }
    ],
    amritsar: [
        { id: 31, operator: 'Punjab Travels', departure: '18:30', arrival: '10:30', price: 1850, duration: '16h', busNo: 'PT-3131' },
        { id: 32, operator: 'VRL Travels', departure: '22:00', arrival: '12:30', price: 2000, duration: '14h 30m', busNo: 'VRL-3232' }
    ],
    vadodara: [
        { id: 33, operator: 'GSRTC', departure: '19:00', arrival: '10:30', price: 1800, duration: '15h 30m', busNo: 'GSRTC-3333' },
        { id: 34, operator: 'VRL Travels', departure: '22:15', arrival: '11:45', price: 1950, duration: '13h 30m', busNo: 'VRL-3434' }
    ],
    ludhiana: [
        { id: 35, operator: 'Punjab Roadways', departure: '18:45', arrival: '10:15', price: 1900, duration: '15h 30m', busNo: 'PR-3535' },
        { id: 36, operator: 'Indo Canadian', departure: '21:30', arrival: '12:00', price: 2000, duration: '14h 30m', busNo: 'IC-3636' }
    ],
    kochi: [
        { id: 37, operator: 'KTC Travels', departure: '17:00', arrival: '09:30', price: 1850, duration: '16h 30m', busNo: 'KTC-3737' },
        { id: 38, operator: 'Parveen Travels', departure: '20:00', arrival: '10:30', price: 2000, duration: '14h 30m', busNo: 'PRVN-3838' }
    ],
    mysore: [
        { id: 39, operator: 'KSRTC', departure: '18:30', arrival: '09:45', price: 1750, duration: '15h 15m', busNo: 'KSRTC-3939' },
        { id: 40, operator: 'VRL Travels', departure: '21:45', arrival: '11:45', price: 1900, duration: '14h', busNo: 'VRL-4040' }
    ],
    mangalore: [
        { id: 41, operator: 'SRS Travels', departure: '19:15', arrival: '10:30', price: 1700, duration: '15h 15m', busNo: 'SRS-4141' },
        { id: 42, operator: 'VRL Travels', departure: '22:00', arrival: '12:30', price: 1850, duration: '14h 30m', busNo: 'VRL-4242' }
    ],
    ahmedabad: [
        { id: 43, operator: 'GSRTC', departure: '19:45', arrival: '10:15', price: 1800, duration: '14h 30m', busNo: 'GSRTC-4343' },
        { id: 44, operator: 'Neeta Travels', departure: '21:30', arrival: '11:30', price: 1950, duration: '14h', busNo: 'NEETA-4444' }
    ],
    pune: [
        { id: 45, operator: 'Purple Travels', departure: '18:00', arrival: '09:00', price: 1750, duration: '15h', busNo: 'PURP-4545' },
        { id: 46, operator: 'VRL Travels', departure: '21:15', arrival: '11:15', price: 1900, duration: '14h', busNo: 'VRL-4646' }
    ],
    srinagar: [
        { id: 47, operator: 'JKSRTC', departure: '17:30', arrival: '09:30', price: 2000, duration: '16h', busNo: 'JKSRTC-4747' },
        { id: 48, operator: 'Himachal Roadways', departure: '20:45', arrival: '10:45', price: 2100, duration: '14h', busNo: 'HRTC-4848' }
    ],
    nagpur: [
        { id: 49, operator: 'Hans Travels', departure: '18:15', arrival: '09:30', price: 1800, duration: '15h 15m', busNo: 'HANS-4949' },
        { id: 50, operator: 'SRS Travels', departure: '21:00', arrival: '11:00', price: 1950, duration: '14h', busNo: 'SRS-5050' }
    ],
    varanasi: [
        { id: 51, operator: 'UPSRTC', departure: '19:00', arrival: '10:00', price: 1900, duration: '15h', busNo: 'UPSRTC-5151' },
        { id: 52, operator: 'Shatabdi Travels', departure: '22:30', arrival: '12:30', price: 2000, duration: '14h', busNo: 'STB-5252' }
    ]
};

// Sample train data with all cities
const trainData = {
    delhi: [
        { id: 1, trainName: 'Goa Rajdhani Express', departure: '18:00', arrival: '08:00', price: 2500, type: 'AC First Class', trainNo: '12951' },
        { id: 2, trainName: 'Goa Express', departure: '20:30', arrival: '10:00', price: 1800, type: 'Sleeper Class', trainNo: '12779' }
    ],
    mumbai: [
        { id: 3, trainName: 'Konkan Kanya Express', departure: '21:00', arrival: '09:30', price: 2000, type: 'AC 2 Tier', trainNo: '10111' },
        { id: 4, trainName: 'Mandovi Express', departure: '07:10', arrival: '18:45', price: 1700, type: 'AC 3 Tier', trainNo: '10103' }
    ],
    kanpur: [
        { id: 5, trainName: 'Goa Sampark Kranti', departure: '19:00', arrival: '08:30', price: 2200, type: 'AC 2 Tier', trainNo: '12779' },
        { id: 6, trainName: 'Goa Express', departure: '22:00', arrival: '11:30', price: 1900, type: 'Sleeper Class', trainNo: '12780' }
    ],
    surat: [
        { id: 7, trainName: 'Surat-Goa Express', departure: '20:15', arrival: '09:45', price: 2100, type: 'AC First Class', trainNo: '22911' },
        { id: 8, trainName: 'Konkan Express', departure: '23:30', arrival: '12:15', price: 1800, type: 'AC 3 Tier', trainNo: '10111' }
    ],
    indore: [
        { id: 9, trainName: 'Indore-Goa Superfast', departure: '18:45', arrival: '08:15', price: 2300, type: 'AC First Class', trainNo: '22909' },
        { id: 10, trainName: 'Indore Express', departure: '21:45', arrival: '10:30', price: 2000, type: 'Sleeper Class', trainNo: '22910' }
    ],
    aurangabad: [
        { id: 11, trainName: 'Aurangabad-Goa Express', departure: '19:10', arrival: '09:40', price: 1900, type: 'AC 2 Tier', trainNo: '12745' },
        { id: 12, trainName: 'Deccan Queen', departure: '22:30', arrival: '11:50', price: 1700, type: 'Sleeper Class', trainNo: '12746' }
    ],
    coimbatore: [
        { id: 13, trainName: 'Coimbatore-Goa Express', departure: '18:20', arrival: '07:50', price: 2500, type: 'AC First Class', trainNo: '12685' },
        { id: 14, trainName: 'Nilgiri Express', departure: '21:10', arrival: '09:30', price: 2200, type: 'AC 3 Tier', trainNo: '12686' }
    ],
    madurai: [
        { id: 15, trainName: 'Madurai-Goa Express', departure: '19:30', arrival: '08:45', price: 2600, type: 'AC First Class', trainNo: '12687' },
        { id: 16, trainName: 'Madurai Superfast', departure: '22:00', arrival: '11:15', price: 2300, type: 'AC 3 Tier', trainNo: '12688' }
    ],
    visakhapatnam: [
        { id: 17, trainName: 'Vizag-Goa Express', departure: '17:50', arrival: '07:30', price: 2400, type: 'AC 2 Tier', trainNo: '12841' },
        { id: 18, trainName: 'Vizag Superfast', departure: '20:30', arrival: '10:00', price: 2100, type: 'Sleeper Class', trainNo: '12842' }
    ],
    vijayawada: [
        { id: 19, trainName: 'Vijayawada-Goa Express', departure: '18:40', arrival: '07:00', price: 2300, type: 'AC First Class', trainNo: '12741' },
        { id: 20, trainName: 'Krishna Express', departure: '21:15', arrival: '09:45', price: 2000, type: 'AC 3 Tier', trainNo: '12742' }
    ],
    bangalore: [
        { id: 21, trainName: 'Bangalore-Goa Express', departure: '19:15', arrival: '08:45', price: 2400, type: 'AC First Class', trainNo: '16589' },
        { id: 22, trainName: 'Karwar Express', departure: '22:10', arrival: '10:30', price: 2100, type: 'AC 3 Tier', trainNo: '16513' }
    ],
    chennai: [
        { id: 23, trainName: 'Chennai-Goa Express', departure: '18:30', arrival: '07:50', price: 2500, type: 'AC First Class', trainNo: '12685' },
        { id: 24, trainName: 'Chennai Superfast', departure: '20:45', arrival: '09:30', price: 2200, type: 'AC 3 Tier', trainNo: '12686' }
    ],
    kolkata: [
        { id: 25, trainName: 'Howrah-Goa Express', departure: '17:50', arrival: '07:30', price: 2600, type: 'AC 2 Tier', trainNo: '12841' },
        { id: 26, trainName: 'Kolkata Superfast', departure: '20:15', arrival: '10:00', price: 2300, type: 'Sleeper Class', trainNo: '12842' }
    ],
    hyderabad: [
        { id: 27, trainName: 'Hyderabad-Goa Express', departure: '19:10', arrival: '08:30', price: 2500, type: 'AC First Class', trainNo: '12741' },
        { id: 28, trainName: 'Hyderabad Superfast', departure: '21:30', arrival: '09:45', price: 2200, type: 'AC 3 Tier', trainNo: '12742' }
    ],
    vadodara: [
        { id: 29, trainName: 'Vadodara-Goa Express', departure: '18:40', arrival: '07:00', price: 2400, type: 'AC First Class', trainNo: '22911' },
        { id: 30, trainName: 'Vadodara Superfast', departure: '20:55', arrival: '09:30', price: 2100, type: 'AC 3 Tier', trainNo: '22912' }
    ],
    gwalior: [
        { id: 31, trainName: 'Gwalior-Goa Express', departure: '17:30', arrival: '06:50', price: 2500, type: 'AC 2 Tier', trainNo: '12685' },
        { id: 32, trainName: 'Gwalior Superfast', departure: '20:10', arrival: '09:15', price: 2200, type: 'Sleeper Class', trainNo: '12686' }
    ],
    amritsar: [
        { id: 33, trainName: 'Amritsar-Goa Express', departure: '18:50', arrival: '08:20', price: 2700, type: 'AC First Class', trainNo: '12903' },
        { id: 34, trainName: 'Amritsar Superfast', departure: '21:40', arrival: '09:50', price: 2300, type: 'AC 3 Tier', trainNo: '12904' }
    ],
    ludhiana: [
        { id: 35, trainName: 'Ludhiana-Goa Express', departure: '19:25', arrival: '07:40', price: 2600, type: 'AC First Class', trainNo: '12723' },
        { id: 36, trainName: 'Ludhiana Superfast', departure: '22:15', arrival: '09:30', price: 2200, type: 'Sleeper Class', trainNo: '12724' }
    ],
    kochi: [
        { id: 37, trainName: 'Kochi-Goa Express', departure: '18:10', arrival: '07:40', price: 2600, type: 'AC First Class', trainNo: '12679' },
        { id: 38, trainName: 'Kochi Superfast', departure: '21:20', arrival: '09:30', price: 2300, type: 'AC 3 Tier', trainNo: '12680' }
    ],
    mysore: [
        { id: 39, trainName: 'Mysore-Goa Express', departure: '19:15', arrival: '08:30', price: 2500, type: 'AC First Class', trainNo: '16585' },
        { id: 40, trainName: 'Mysore Superfast', departure: '22:10', arrival: '10:00', price: 2200, type: 'Sleeper Class', trainNo: '16586' }
    ],
    mangalore: [
        { id: 41, trainName: 'Mangalore-Goa Express', departure: '17:50', arrival: '07:15', price: 2400, type: 'AC First Class', trainNo: '12617' },
        { id: 42, trainName: 'Mangalore Superfast', departure: '20:45', arrival: '09:15', price: 2100, type: 'AC 3 Tier', trainNo: '12618' }
    ],
    ahmedabad: [
        { id: 43, trainName: 'Ahmedabad-Goa Express', departure: '18:30', arrival: '07:45', price: 2500, type: 'AC First Class', trainNo: '22913' },
        { id: 44, trainName: 'Ahmedabad Superfast', departure: '21:30', arrival: '09:30', price: 2200, type: 'Sleeper Class', trainNo: '22914' }
    ],
    pune: [
        { id: 45, trainName: 'Pune-Goa Express', departure: '19:00', arrival: '08:15', price: 2300, type: 'AC 2 Tier', trainNo: '12721' },
        { id: 46, trainName: 'Pune Superfast', departure: '22:00', arrival: '09:45', price: 2000, type: 'AC 3 Tier', trainNo: '12722' }
    ],
    srinagar: [
        { id: 47, trainName: 'Srinagar-Goa Express', departure: '17:30', arrival: '08:00', price: 2700, type: 'AC First Class', trainNo: '12905' },
        { id: 48, trainName: 'Srinagar Superfast', departure: '20:30', arrival: '09:30', price: 2400, type: 'Sleeper Class', trainNo: '12906' }
    ],
    nagpur: [
        { id: 49, trainName: 'Nagpur-Goa Express', departure: '18:45', arrival: '08:10', price: 2600, type: 'AC First Class', trainNo: '12843' },
        { id: 50, trainName: 'Nagpur Superfast', departure: '21:15', arrival: '10:00', price: 2300, type: 'AC 3 Tier', trainNo: '12844' }
    ],
    varanasi: [
        { id: 51, trainName: 'Varanasi-Goa Express', departure: '19:20', arrival: '08:40', price: 2500, type: 'AC First Class', trainNo: '12571' },
        { id: 52, trainName: 'Varanasi Superfast', departure: '22:00', arrival: '10:15', price: 2200, type: 'Sleeper Class', trainNo: '12572' }
    ]
};

let currentPackageType = null;
const destination = 'Goa';

// Show booking form
function showBookingForm(packageType) {
    currentPackageType = packageType;
    document.getElementById('bookingDetails').style.display = 'block';
    document.getElementById('packageHotels').style.display = 'block';

    // Reset and initialize form elements
    document.getElementById('fromCity').value = 'Delhi';
    document.getElementById('departDate').value = '';

    // Show the appropriate meal section based on package type
    document.querySelectorAll('.package-meals').forEach(section => {
        section.style.display = 'none';
    });

    // Show the appropriate tourist places section based on package type
    document.getElementById('touristPlacesSection').style.display = 'block';
    document.querySelectorAll('.package-places').forEach(section => {
        section.style.display = 'none';
    });

    if (packageType === 'premium') {
        document.getElementById('premiumMeals').style.display = 'block';
        document.getElementById('premiumPlaces').style.display = 'block';
    } else if (packageType === 'gold') {
        document.getElementById('goldMeals').style.display = 'block';
        document.getElementById('goldPlaces').style.display = 'block';
    } else if (packageType === 'silver') {
        document.getElementById('silverMeals').style.display = 'block';
        document.getElementById('silverPlaces').style.display = 'block';
    }

    document.getElementById('mealSelection').style.display = 'block';

    // Configure transport section based on package type
    const transportSection = document.getElementById('flightDetails');
    const searchBtn = document.getElementById('searchFlights');

    // Display hotels for the selected package
    displayPackageHotels(packageType);

    // Initialize other form elements
    initializeDates();
    displayPackageDetails();
    initializeEventListeners();
}
// Initialize dates
function initializeDates() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const departDate = document.getElementById('departDate');
    const returnDate = document.getElementById('returnDate');
    const travelDate = document.getElementById('travelDate');

    // Set minimum dates
    departDate.min = today.toISOString().split('T')[0];
    returnDate.min = today.toISOString().split('T')[0];
    travelDate.min = today.toISOString().split('T')[0];

    // Set default values to empty
    departDate.value = '';
    returnDate.value = '';
    travelDate.value = '';
}

// Display package details
function displayPackageDetails() {
    const details = packageDetails[currentPackageType];
    if (details) {
        document.getElementById('package-details').innerHTML = `
        <div class="selected-package">
            <h3>${details.name} - ${destination}</h3>
            <ul class="features-list">
                ${details.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
            </ul>
        </div>
    `;

        // Show transport details section based on package type
        const transportDetailsSection = document.getElementById('flightDetails');
        const searchResults = document.getElementById('searchResults');
        const resultsContainer = document.querySelector('.flight-results');
        const fromCity = document.getElementById('fromCity').value.toLowerCase();

        if (currentPackageType === 'premium') {
            transportDetailsSection.style.display = 'block';
            document.querySelector('.flight-section h3').textContent = 'Search Flights';
            document.querySelector('.flight-type[data-type="round"]').style.display = 'block';
            document.querySelector('.flight-type[data-type="oneway"]').style.display = 'block';
            document.getElementById('returnDate').style.display = 'block';
            const searchBtn = document.getElementById('searchFlights');
            searchBtn.textContent = 'Search Flights';

            // Show initial flight results
            searchResults.style.display = 'block';
            searchResults.querySelector('h5').textContent = 'Available Flights';
            const flights = flightData[fromCity] || [];
            resultsContainer.innerHTML = flights.map(flight => `
            <div class="flight-result-card">
                <div class="airline-info">
                    <i class="fas fa-plane fa-2x"></i>
                    <span class="airline-name">${flight.airline}</span>
                    <span class="flight-number">${flight.flightNo}</span>
                </div>
                <div class="flight-time">
                    <div class="departure">
                        <span class="time">${flight.departure}</span>
                        <span class="city">${fromCity.charAt(0).toUpperCase() + fromCity.slice(1)}</span>
                    </div>
                    <div class="flight-duration">
                        <span class="line"></span>
                        <span class="duration">${flight.duration}</span>
                    </div>
                    <div class="arrival">
                        <span class="time">${flight.arrival}</span>
                        <span class="city">Goa</span>
                    </div>
                </div>
                <div class="flight-price">
                    <span class="price">₹${flight.price}</span>
                    <button class="select-flight" data-flight-id="${flight.id}">Select</button>
                </div>
            </div>
        `).join('');

        } else if (currentPackageType === 'gold') {
            transportDetailsSection.style.display = 'block';
            document.querySelector('.flight-section h3').textContent = 'Search Buses';
            document.querySelector('.flight-type[data-type="round"]').style.display = 'none';
            document.querySelector('.flight-type[data-type="oneway"]').classList.add('active');
            document.getElementById('returnDate').style.display = 'none';
            const searchBtn = document.getElementById('searchFlights');
            searchBtn.textContent = 'Search Buses';

            // Show initial bus results
            searchResults.style.display = 'block';
            searchResults.querySelector('h5').textContent = 'Available Buses';
            const buses = busData[fromCity] || [];
            resultsContainer.innerHTML = buses.map(bus => `
            <div class="flight-result-card">
                <div class="airline-info">
                    <i class="fas fa-bus fa-2x"></i>
                    <span class="airline-name">${bus.operator}</span>
                </div>
                <div class="flight-time">
                    <div class="departure">
                        <span class="time">${bus.departure}</span>
                        <span class="city">${fromCity.charAt(0).toUpperCase() + fromCity.slice(1)}</span>
                    </div>
                    <div class="flight-duration">
                        <span class="line"></span>
                        <span class="duration">4h</span>
                    </div>
                    <div class="arrival">
                        <span class="time">${bus.arrival}</span>
                        <span class="city">Goa</span>
                    </div>
                </div>
                <div class="flight-price">
                    <span class="bus-type">${bus.type}</span>
                    <span class="price">₹${bus.price}</span>
                    <button class="select-flight" data-bus-id="${bus.id}">Select</button>
                </div>
            </div>
        `).join('');
        } else if (currentPackageType === 'silver') {
            transportDetailsSection.style.display = 'block';
            document.querySelector('.flight-section h3').textContent = 'Search Trains';
            // Hide round trip option for trains
            document.querySelector('.flight-type[data-type="round"]').style.display = 'none';
            document.querySelector('.flight-type[data-type="oneway"]').classList.add('active');
            document.getElementById('returnDate').style.display = 'none';
            const searchBtn = document.getElementById('searchFlights');
            searchBtn.textContent = 'Search Trains';

            // Show initial train results
            searchResults.style.display = 'block';
            searchResults.querySelector('h5').textContent = 'Available Trains';
            const trains = trainData[fromCity] || [];
            resultsContainer.innerHTML = trains.map(train => `
            <div class="flight-result-card">
                <div class="airline-info">
                    <i class="fas fa-train fa-2x"></i>
                    <span class="airline-name">${train.trainName}</span>
                </div>
                <div class="flight-time">
                    <div class="departure">
                        <span class="time">${train.departure}</span>
                        <span class="city">${fromCity.charAt(0).toUpperCase() + fromCity.slice(1)}</span>
                    </div>
                    <div class="flight-duration">
                        <span class="line"></span>
                        <span class="duration">1h 40m</span>
                    </div>
                    <div class="arrival">
                        <span class="time">${train.arrival}</span>
                        <span class="city">Goa</span>
                    </div>
                </div>
                <div class="flight-price">
                    <span class="train-type">${train.type}</span>
                    <span class="price">₹${train.price}</span>
                    <button class="select-flight" data-train-id="${train.id}">Select</button>
                </div>
            </div>
        `).join('');
        }
        // Add event listeners to select buttons
        document.querySelectorAll('.select-flight').forEach(button => {
            button.addEventListener('click', function () {
                let transportId, selectedTransport;
                if (currentPackageType === 'premium') {
                    transportId = this.dataset.flightId;
                    selectedTransport = flightData[fromCity].find(f => f.id == transportId);
                } else if (currentPackageType === 'gold') {
                    transportId = this.dataset.busId;
                    selectedTransport = busData[fromCity].find(b => b.id == transportId);
                } else if (currentPackageType === 'silver') {
                    transportId = this.dataset.trainId;
                    selectedTransport = trainData[fromCity].find(t => t.id == transportId);
                }

                updateTransportSummary(selectedTransport, currentPackageType);

                document.querySelectorAll('.select-flight').forEach(btn => {
                    btn.classList.remove('active');
                    btn.textContent = 'Select';
                });
                this.classList.add('active');
                this.textContent = 'Selected';
            });
        });

        updateSummary();
    }
}

// Search transport options
document.getElementById('searchFlights').addEventListener('click', function () {
    const fromCity = document.getElementById('fromCity').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    const resultsContainer = document.querySelector('.flight-results');

    if (!fromCity) {
        alert('Please select departure city');
        return;
    }

    searchResults.style.display = 'block';

    if (currentPackageType === 'premium') {
        const isRoundTrip = document.querySelector('.flight-type.active').dataset.type === 'round';

        if (isRoundTrip && !document.getElementById('returnDate').value) {
            alert('Please select return date for round trip');
            return;
        }

        const flights = flightData[fromCity] || [];
        let resultsHTML = `
        <h3>Outbound Flights</h3>
        <div class="outbound-flights">
            ${generateFlightResults(flights, 'outbound')}
        </div>
    `;

        if (isRoundTrip) {
            resultsHTML += `
            <h3 class="mt-4">Return Flights</h3>
            <div class="return-flights">
                ${generateFlightResults(flights, 'return')}
            </div>
        `;
        }

        resultsContainer.innerHTML = resultsHTML;

        // Add event listeners to select buttons
        document.querySelectorAll('.select-flight').forEach(button => {
            button.addEventListener('click', function () {
                const flightId = this.dataset.flightId;
                const flightType = this.dataset.flightType;
                const selectedFlight = flightData[fromCity].find(f => f.id == flightId);

                // Update only the buttons in the same section (outbound or return)
                const section = this.closest(`.${flightType}-flights`);
                section.querySelectorAll('.select-flight').forEach(btn => {
                    btn.classList.remove('active');
                    btn.textContent = 'Select';
                });

                this.classList.add('active');
                this.textContent = 'Selected';

                updateTransportSummary(selectedFlight, currentPackageType, flightType);
            });
        });
    } else if (currentPackageType === 'gold') {
        const buses = busData[fromCity] || [];
        resultsContainer.innerHTML = buses.map(bus => `
        <div class="flight-result-card">
            <div class="airline-info">
                <i class="fas fa-bus fa-2x"></i>
                <span class="airline-name">${bus.operator}</span>
            </div>
            <div class="flight-time">
                <div class="departure">
                    <span class="time">${bus.departure}</span>
                    <span class="city">${fromCity.charAt(0).toUpperCase() + fromCity.slice(1)}</span>
                </div>
                <div class="flight-duration">
                    <span class="line"></span>
                    <span class="duration">4h</span>
                </div>
                <div class="arrival">
                    <span class="time">${bus.arrival}</span>
                    <span class="city">Goa</span>
                </div>
            </div>
            <div class="flight-price">
                <span class="bus-type">${bus.type}</span>
                <span class="price">₹${bus.price}</span>
                <button class="select-flight" data-bus-id="${bus.id}">Select</button>
            </div>
        </div>
    `).join('');
    } else if (currentPackageType === 'silver') {
        const trains = trainData[fromCity] || [];
        resultsContainer.innerHTML = trains.map(train => `
        <div class="flight-result-card">
            <div class="airline-info">
                <i class="fas fa-train fa-2x"></i>
                <span class="airline-name">${train.trainName}</span>
            </div>
            <div class="flight-time">
                <div class="departure">
                    <span class="time">${train.departure}</span>
                    <span class="city">${fromCity.charAt(0).toUpperCase() + fromCity.slice(1)}</span>
                </div>
                <div class="flight-duration">
                    <span class="line"></span>
                    <span class="duration">1h 40m</span>
                </div>
                <div class="arrival">
                    <span class="time">${train.arrival}</span>
                    <span class="city">Goa</span>
                </div>
            </div>
            <div class="flight-price">
                <span class="train-type">${train.type}</span>
                <span class="price">₹${train.price}</span>
                <button class="select-flight" data-train-id="${train.id}">Select</button>
            </div>
        </div>
    `).join('');
    }

    // Add event listeners to select buttons
    document.querySelectorAll('.select-flight').forEach(button => {
        button.addEventListener('click', function () {
            let transportId, selectedTransport;
            if (currentPackageType === 'premium') {
                transportId = this.dataset.flightId;
                selectedTransport = flightData[fromCity].find(f => f.id == transportId);
            } else if (currentPackageType === 'gold') {
                transportId = this.dataset.busId;
                selectedTransport = busData[fromCity].find(b => b.id == transportId);
            } else if (currentPackageType === 'silver') {
                transportId = this.dataset.trainId;
                selectedTransport = trainData[fromCity].find(t => t.id == transportId);
            }

            updateTransportSummary(selectedTransport, currentPackageType);

            document.querySelectorAll('.select-flight').forEach(btn => {
                btn.classList.remove('active');
                btn.textContent = 'Select';
            });
            this.classList.add('active');
            this.textContent = 'Selected';
        });
    });
});
// Update transport summary
function updateTransportSummary(transport, type, flightType = 'outbound') {
    const summaryDetails = document.getElementById('summary-details');
    const passengers = parseInt(document.getElementById('transportPassengers').value) || 1;
    const transportPrice = transport.price * passengers;
    const fromCity = document.getElementById('fromCity').value;

    // Get selected dates
    const departDate = document.getElementById('departDate').value;
    const returnDate = document.getElementById('returnDate').value;

    // Remove existing transport info for this flight type only
    const existingTransportInfo = summaryDetails.querySelector(`.transport-info-${flightType}`);
    if (existingTransportInfo) {
        existingTransportInfo.remove();
    }

    // For return flights, adjust timings to be later in the day
    let departureTime = transport.departure;
    let arrivalTime = transport.arrival;
    if (flightType === 'return') {
        // Convert departure time to afternoon (add 12 hours)
        const [depHour, depMin] = transport.departure.split(':');
        const [arrHour, arrMin] = transport.arrival.split(':');
        departureTime = `${(parseInt(depHour) + 12).toString().padStart(2, '0')}:${depMin}`;
        arrivalTime = `${(parseInt(arrHour) + 12).toString().padStart(2, '0')}:${arrMin}`;
    }

    const transportInfo = `
    <div class="summary-item transport-info transport-info-${flightType}">
        <span>${flightType === 'outbound' ? 'Outbound' : 'Return'} Transportation:</span>
        <div class="transport-details">
            ${type === 'premium' ? `
                <span>Date: ${flightType === 'outbound' ? departDate : returnDate}</span>
                <span>Airline: ${transport.airline} (${transport.flightNo})</span>
                <span>From: ${flightType === 'outbound' ? fromCity : 'Goa'}</span>
                <span>To: ${flightType === 'outbound' ? 'Goa' : fromCity}</span>
                <span>Departure: ${flightType === 'outbound' ? departureTime : arrivalTime}</span>
                <span>Arrival: ${flightType === 'outbound' ? arrivalTime : departureTime}</span>
                <span>Duration: ${transport.duration}</span>
            ` : type === 'gold' ? `
                <span>Date: ${departDate}</span>
                <span>Bus Operator: ${transport.operator}</span>
                <span>From: ${fromCity}</span>
                <span>To: Agra</span>
                <span>Departure: ${transport.departure}</span>
                <span>Arrival: ${transport.arrival}</span>
                <span>Type: ${transport.type}</span>
            ` : `
                <span>Date: ${departDate}</span>
                <span>Train: ${transport.trainName}</span>
                <span>From: ${fromCity}</span>
                <span>To: Agra</span>
                <span>Departure: ${transport.departure}</span>
                <span>Arrival: ${transport.arrival}</span>
                <span>Class: ${transport.type}</span>
            `}
            <span>Passengers: ${passengers}</span>
            <span>Price: ₹${transportPrice}</span>
        </div>
    </div>
`;
    // Find the right position to insert the transport info
    if (flightType === 'outbound') {
        // Insert outbound at the beginning of transport info
        const firstTransportInfo = summaryDetails.querySelector('.transport-info-return');
        if (firstTransportInfo) {
            firstTransportInfo.insertAdjacentHTML('beforebegin', transportInfo);
        } else {
            summaryDetails.insertAdjacentHTML('beforeend', transportInfo);
        }
    } else {
        // Insert return after outbound
        const outboundInfo = summaryDetails.querySelector('.transport-info-outbound');
        if (outboundInfo) {
            outboundInfo.insertAdjacentHTML('afterend', transportInfo);
        } else {
            summaryDetails.insertAdjacentHTML('beforeend', transportInfo);
        }
    }

    calculateTotalPrice();
}

// Calculate total price
function calculateTotalPrice() {
    const details = packageDetails[currentPackageType];
    if (!details) return 0;

    const travelers = parseInt(document.getElementById('travelers').value) || 1;
    let transportPrice = 0;
    let hotelPrice = 0;

    // Calculate transport price for both outbound and return flights
    const outboundTransport = document.querySelector('.transport-info-outbound');
    const returnTransport = document.querySelector('.transport-info-return');

    if (outboundTransport) {
        const priceText = outboundTransport.querySelector('.transport-details span:last-child').textContent;
        transportPrice += parseInt(priceText.match(/₹(\d+)/)[1]);
    }

    if (returnTransport) {
        const priceText = returnTransport.querySelector('.transport-details span:last-child').textContent;
        transportPrice += parseInt(priceText.match(/₹(\d+)/)[1]);
    }

    // Get hotel price if hotel is selected
    const hotelInfo = document.querySelector('.hotel-info');
    if (hotelInfo) {
        const hotelDetails = hotelInfo.querySelector('.hotel-details');
        const totalPriceText = hotelDetails.querySelector('span:last-child').textContent;
        hotelPrice = parseInt(totalPriceText.match(/₹(\d+)/)[1]);
        // Store hotel details for price breakdown
        window.hotelDetails = `${hotelInfo.querySelector('span:last-child').textContent} - ${totalPriceText}`;
    }

    const totalPrice = (details.price * travelers) + transportPrice + hotelPrice;
    updatePriceBreakdown(details.price * travelers, transportPrice, hotelPrice, travelers);
    return totalPrice;
}
// Get selected transport details
function getSelectedTransport() {
    const fromCity = document.getElementById('fromCity').value.toLowerCase();
    const selectedButton = document.querySelector('.select-flight.active');

    if (!selectedButton) return null;

    if (currentPackageType === 'premium') {
        const flightId = selectedButton.dataset.flightId;
        return flightData[fromCity].find(f => f.id == flightId);
    } else if (currentPackageType === 'gold') {
        const busId = selectedButton.dataset.busId;
        return busData[fromCity].find(b => b.id == busId);
    } else if (currentPackageType === 'silver') {
        const trainId = selectedButton.dataset.trainId;
        return trainData[fromCity].find(t => t.id == trainId);
    }
    return null;
}

// Update price breakdown
function updatePriceBreakdown(packagePrice, transportPrice, hotelPrice, travelers) {
    const priceDetails = document.getElementById('price-details');

    // Get individual transport prices
    const outboundTransport = document.querySelector('.transport-info-outbound');
    const returnTransport = document.querySelector('.transport-info-return');

    let outboundPrice = 0;
    let returnPrice = 0;

    if (outboundTransport) {
        const priceText = outboundTransport.querySelector('.transport-details span:last-child').textContent;
        outboundPrice = parseInt(priceText.match(/₹(\d+)/)[1]);
    }

    if (returnTransport) {
        const priceText = returnTransport.querySelector('.transport-details span:last-child').textContent;
        returnPrice = parseInt(priceText.match(/₹(\d+)/)[1]);
    }

    priceDetails.innerHTML = `
<div class="price-item">
    <span>Tourist Attractions</span>
    <span>₹${packagePrice}</span>
</div>
${outboundPrice ? `
<div class="price-item">
    <span>Outbound Transportation (${travelers} traveler${travelers > 1 ? 's' : ''})</span>
    <span>₹${outboundPrice}</span>
</div>` : ''}
${returnPrice ? `
<div class="price-item">
    <span>Return Transportation (${travelers} traveler${travelers > 1 ? 's' : ''})</span>
    <span>₹${returnPrice}</span>
</div>` : ''}
${hotelPrice ? `
<div class="price-item">
    <span>Hotel Accommodation</span>
    <span>₹${hotelPrice}</span>
</div>` : ''}
<div class="price-item total">
    <span>Total Price</span>
    <span>₹${packagePrice + transportPrice + hotelPrice}</span>
</div>
`;
}
// Update booking summary
function updateSummary() {
    const details = packageDetails[currentPackageType];
    if (!details) return;

    const summaryDetails = document.getElementById('summary-details');
    summaryDetails.innerHTML = `
<div class="summary-item">
    <span>Package:</span>
    <span>${details.name}</span>
</div>
<div class="summary-item">
    <span>Destination:</span>
    <span>${destination}</span>
</div>
<div class="summary-item">
    <span>Travel Date:</span>
    <span>${document.getElementById('travelDate').value || 'Not selected'}</span>
</div>
<div class="summary-item">
    <span>Number of Travelers:</span>
    <span>${document.getElementById('travelers').value} traveler${document.getElementById('travelers').value > 1 ? 's' : ''}</span>
</div>
`;

    calculateTotalPrice();
}

// Initialize event listeners
function initializeEventListeners() {
    // Flight type toggle
    document.querySelectorAll('.flight-type').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.flight-type').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const isRoundTrip = this.dataset.type === 'round';
            document.getElementById('returnDate').style.display = isRoundTrip ? 'block' : 'none';
        });
    });

    // Add event listeners for price calculation
    document.getElementById('travelers').addEventListener('change', updateSummary);
    document.getElementById('travelDate').addEventListener('change', updateSummary);
    document.getElementById('transportPassengers').addEventListener('change', function () {
        const selectedTransport = getSelectedTransport();
        if (selectedTransport) {
            updateTransportSummary(selectedTransport, currentPackageType);
        }
    });

    // Add event listeners for date inputs
    const dateInputs = ['departDate', 'returnDate', 'travelDate'];
    dateInputs.forEach(id => {
        const input = document.getElementById(id);
        input.addEventListener('focus', function () {
            this.type = 'date';
        });
        input.addEventListener('blur', function () {
            if (!this.value) {
                this.type = 'text';
            }
        });
    });
    // Handle form submission
    document.getElementById('bookingForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Booking submitted successfully! We will contact you shortly.');
        window.location.reload(); // Reload the page to reset the form
    });
}

// Hotel data for different packages in Goa
const hotelData = {
    premium: [
        {
            name: "Taj Exotica Resort & Spa",
            rating: 5,
            price: 32000,
            features: ["Luxury Beachfront Villas", "Private Pool", "Spa & Wellness Center", "Fine Dining"],
            distance: "Benaulim Beach, South Goa",
            image: "../static/images/hotels/taj-exotica.jpg"
        },
        {
            name: "The Leela Goa",
            rating: 5,
            price: 30000,
            features: ["Private Lagoon", "World-Class Golf Course", "Exclusive Beach Access", "Luxury Spa"],
            distance: "Mobor Beach, South Goa",
            image: "../static/images/hotels/leela-goa.jpg"
        },
        {
            name: "Grand Hyatt Goa",
            rating: 5,
            price: 28000,
            features: ["Spacious Suites", "Panoramic Bay Views", "Multiple Swimming Pools", "Casino & Nightlife"],
            distance: "Bambolim Beach, North Goa",
            image: "../static/images/hotels/grand-hyatt-goa.jpg"
        }
    ],
    gold: [
        {
            name: "Novotel Goa Resort & Spa",
            rating: 4,
            price: 15000,
            features: ["Modern Amenities", "Outdoor Pool", "Beach Shuttle Service", "Spa & Gym"],
            distance: "Candolim, North Goa",
            image: "../static/images/hotels/novotel-goa.jpg"
        },
        {
            name: "ITC Fortune Acron Regina",
            rating: 4,
            price: 14000,
            features: ["Spacious Rooms", "Sun Deck", "Multi-Cuisine Restaurant", "Free Wi-Fi"],
            distance: "Candolim Beach, North Goa",
            image: "../static/images/hotels/fortune-acron.jpg"
        },
        {
            name: "Radisson Blu Resort Goa",
            rating: 4,
            price: 13500,
            features: ["Luxury Rooms", "Near Beach", "Swimming Pool", "24/7 Room Service"],
            distance: "Cavelossim Beach, South Goa",
            image: "../static/images/hotels/radisson-goa.jpg"
        }
    ],
    silver: [
        {
            name: "Hotel Colva Kinara",
            rating: 3,
            price: 8000,
            features: ["Budget-Friendly", "Swimming Pool", "Restaurant & Bar", "Close to Beach"],
            distance: "Colva Beach, South Goa",
            image: "../static/images/hotels/colva-kinara.jpg"
        },
        {
            name: "Resort Primo Bom",
            rating: 3,
            price: 7500,
            features: ["Cozy Cottages", "Lagoon View", "Garden & Pool", "Basic Amenities"],
            distance: "Baga Beach, North Goa",
            image: "../static/images/hotels/primo-bom.jpg"
        },
        {
            name: "Silver Sands Beach Resort",
            rating: 3,
            price: 7000,
            features: ["Simple & Clean Rooms", "Close to Beach", "Swimming Pool", "24/7 Room Service"],
            distance: "Candolim Beach, North Goa",
            image: "../static/images/hotels/silver-sands.jpg"
        }
    ]
};

// Function to display hotels based on package type
function displayPackageHotels(packageType) {
    const hotels = hotelData[packageType];
    const hotelsList = document.getElementById('hotelsList');

    if (!hotels) {
        console.error('No hotels found for package type:', packageType);
        return;
    }

    // Ensure the hotels section is visible
    document.getElementById('packageHotels').style.display = 'block';

    hotelsList.innerHTML = `
<div class="row">
    ${hotels.map(hotel => `
        <div class="col-md-4 mb-4">
            <div class="hotel-card">
                <div>
                    <h4>${hotel.name}</h4>
                    <div class="hotel-rating">
                        ${'★'.repeat(hotel.rating)}
                    </div>
                    <p class="hotel-distance">${hotel.distance}</p>
                    <div class="hotel-features">
                        ${hotel.features.map(feature => `
                            <div class="hotel-feature">
                                <i class="fas fa-check"></i>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                    <p class="hotel-price">₹${hotel.price} per night</p>
                </div>
                <div class="hotel-selection">
                    <select class="nights-select" id="nights-${hotel.name.replace(/\s+/g, '-').toLowerCase()}">
                        <option value="1">1 Night</option>
                        <option value="2" selected>2 Nights</option>
                        <option value="3">3 Nights</option>
                        <option value="4">4 Nights</option>
                        <option value="5">5 Nights</option>
                    </select>
                    <select class="rooms-select" id="rooms-${hotel.name.replace(/\s+/g, '-').toLowerCase()}">
                        <option value="1">1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3">3 Rooms</option>
                        <option value="4">4 Rooms</option>
                        <option value="5">5 Rooms</option>
                    </select>
                    <button class="select-hotel" onclick="selectHotel('${hotel.name}', ${hotel.price}, this)">
                        Select Hotel
                    </button>
                </div>
            </div>
        </div>
    `).join('')}
</div>
`;
}
// Function to select a hotel
function selectHotel(hotelName, hotelPrice, buttonElement) {
    const nightsSelect = document.getElementById(`nights-${hotelName.replace(/\s+/g, '-').toLowerCase()}`);
    const roomsSelect = document.getElementById(`rooms-${hotelName.replace(/\s+/g, '-').toLowerCase()}`);
    const numberOfNights = parseInt(nightsSelect.value);
    const numberOfRooms = parseInt(roomsSelect.value);
    const totalHotelPrice = hotelPrice * numberOfNights * numberOfRooms;

    // Update the booking summary with selected hotel
    const summaryDetails = document.getElementById('summary-details');
    const existingHotelInfo = summaryDetails.querySelector('.hotel-info');

    if (existingHotelInfo) {
        existingHotelInfo.remove();
    }

    const hotelInfo = `
<div class="summary-item hotel-info">
    <span>Selected Hotel:</span>
    <span>${hotelName}</span>
    <div class="hotel-details">
        <span>Price per night per room: ₹${hotelPrice}</span>
        <span>Number of rooms: ${numberOfRooms}</span>
        <span>Number of nights: ${numberOfNights}</span>
        <span>Room price per night: ₹${hotelPrice * numberOfRooms}</span>
        <span>Total for ${numberOfNights} nights: ₹${totalHotelPrice}</span>
    </div>
</div>
`;

    summaryDetails.insertAdjacentHTML('beforeend', hotelInfo);

    // Update button states
    document.querySelectorAll('.select-hotel').forEach(button => {
        button.classList.remove('selected');
        button.textContent = 'Select Hotel';
    });

    buttonElement.classList.add('selected');
    buttonElement.textContent = 'Selected';

    // Show meal selection after hotel is selected
    document.getElementById('mealSelection').style.display = 'block';

    // Add event listeners for nights and rooms selects to update price
    nightsSelect.addEventListener('change', function () {
        selectHotel(hotelName, hotelPrice, buttonElement);
    });

    roomsSelect.addEventListener('change', function () {
        selectHotel(hotelName, hotelPrice, buttonElement);
    });

    // Update total price
    calculateTotalPrice();
}

// Function to handle checkbox selection
function handleMealSelection(checkbox) {
    const mealItems = checkbox.closest('.meal-items');
    const mealType = mealItems.dataset.mealType;

    if (checkbox.checked) {
        // Uncheck all other checkboxes in the same meal type
        mealItems.querySelectorAll('.meal-checkbox').forEach(cb => {
            if (cb !== checkbox) {
                cb.checked = false;
            }
        });
    }

    updateMealSummary();
}

// Add event listeners for meal checkboxes
document.querySelectorAll('.meal-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => handleMealSelection(checkbox));
});

function updateMealSummary() {
    const packageType = document.querySelector('.package-card.selected').getAttribute('data-package');
    const summaryDetails = document.getElementById('summary-details');
    const existingMealInfo = summaryDetails.querySelector('.meal-info');

    if (existingMealInfo) {
        existingMealInfo.remove();
    }

    let selectedMeals = [];

    if (packageType === 'premium') {
        const breakfast = document.querySelector(`[data-meal-type="premium-breakfast"] .meal-checkbox:checked`);
        const lunch = document.querySelector(`[data-meal-type="premium-lunch"] .meal-checkbox:checked`);
        const dinner = document.querySelector(`[data-meal-type="premium-dinner"] .meal-checkbox:checked`);

        if (breakfast) selectedMeals.push(`Breakfast: ${breakfast.value}`);
        if (lunch) selectedMeals.push(`Lunch: ${lunch.value}`);
        if (dinner) selectedMeals.push(`Dinner: ${dinner.value}`);
    } else if (packageType === 'gold') {
        const breakfast = document.querySelector(`[data-meal-type="gold-breakfast"] .meal-checkbox:checked`);
        const dinner = document.querySelector(`[data-meal-type="gold-dinner"] .meal-checkbox:checked`);

        if (breakfast) selectedMeals.push(`Breakfast: ${breakfast.value}`);
        if (dinner) selectedMeals.push(`Dinner: ${dinner.value}`);
    } else if (packageType === 'silver') {
        const breakfast = document.querySelector(`[data-meal-type="silver-breakfast"] .meal-checkbox:checked`);

        if (breakfast) selectedMeals.push(`Breakfast: ${breakfast.value}`);
    }

    if (selectedMeals.length > 0) {
        const mealInfo = `
    <div class="summary-item meal-info">
        <span>Selected Meals:</span>
        <div class="meal-details">
            ${selectedMeals.map(meal => `<span>${meal} (Included)</span>`).join('')}
        </div>
    </div>
`;
        summaryDetails.insertAdjacentHTML('beforeend', mealInfo);
    }
}

// Initialize date pickers with proper constraints
document.addEventListener('DOMContentLoaded', function () {
    const today = new Date().toISOString().split('T')[0];
    const departDate = document.getElementById('departDate');
    const returnDate = document.getElementById('returnDate');

    // Set minimum dates
    departDate.min = today;
    returnDate.min = today;

    // Update return date minimum when departure date changes
    departDate.addEventListener('change', function () {
        returnDate.min = this.value;
        if (returnDate.value && returnDate.value < this.value) {
            returnDate.value = this.value;
        }
    });

    // Flight type toggle with proper return date handling
    document.querySelectorAll('.flight-type').forEach(button => {
        button.addEventListener('click', function () {
            const returnDateField = document.querySelector('.return-date');
            document.querySelectorAll('.flight-type').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            if (this.dataset.type === 'round') {
                returnDateField.classList.add('visible');
                returnDate.required = true;
            } else {
                returnDateField.classList.remove('visible');
                returnDate.required = false;
                returnDate.value = '';
            }
        });
    });
});

function generateFlightResults(flights, type) {
    const fromCity = document.getElementById('fromCity').value;
    return flights.map(flight => {
        // For return flights, adjust timings to be later in the day
        let departureTime = flight.departure;
        let arrivalTime = flight.arrival;
        if (type === 'return') {
            // Convert times to afternoon (add 12 hours)
            const [depHour, depMin] = flight.departure.split(':');
            const [arrHour, arrMin] = flight.arrival.split(':');
            departureTime = `${(parseInt(depHour) + 12).toString().padStart(2, '0')}:${depMin}`;
            arrivalTime = `${(parseInt(arrHour) + 12).toString().padStart(2, '0')}:${arrMin}`;
        }

        // Swap times for return flights
        const displayDepartureTime = type === 'outbound' ? departureTime : arrivalTime;
        const displayArrivalTime = type === 'outbound' ? arrivalTime : departureTime;
        const fromLocation = type === 'outbound' ? fromCity : 'Goa';
        const toLocation = type === 'outbound' ? 'Goa' : fromCity;

        return `
    <div class="flight-result-card">
        <div class="airline-info">
            <i class="fas fa-plane fa-2x"></i>
            <span class="airline-name">${flight.airline}</span>
            <span class="flight-number">${flight.flightNo}</span>
        </div>
        <div class="flight-time">
            <div class="departure">
                <span class="time">${displayDepartureTime}</span>
                <span class="city">${fromLocation}</span>
            </div>
            <div class="flight-duration">
                <span class="line"></span>
                <span class="duration">${flight.duration}</span>
            </div>
            <div class="arrival">
                <span class="time">${displayArrivalTime}</span>
                <span class="city">${toLocation}</span>
            </div>
        </div>
        <div class="flight-price">
            <span class="price">₹${flight.price}</span>
            <button class="select-flight" data-flight-id="${flight.id}" data-flight-type="${type}">Select</button>
        </div>
    </div>
`;
    }).join('');

}


flatpickr("#departDate", {
    dateFormat: "Y-m-d",
    minDate: "today",
});

// Initialize return date picker when round trip is selected
document.querySelectorAll('.flight-type').forEach(button => {
    button.addEventListener('click', function () {
        const isRoundTrip = this.dataset.type === 'round';
        const returnDate = document.getElementById('returnDate');

        if (isRoundTrip) {
            returnDate.style.display = 'block';
            flatpickr("#returnDate", {
                dateFormat: "Y-m-d",
                minDate: document.getElementById('departDate').value || "today"
            });
        } else {
            returnDate.style.display = 'none';
        }
    });
});

// Update search results visibility
document.getElementById('searchFlights').addEventListener('click', function () {
    document.getElementById('searchResults').style.display = 'block';
});

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Premium Package - Max 4 selections
    const premiumCheckboxes = document.querySelectorAll('.premium-place');
    premiumCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const selectedCount = document.querySelectorAll('.premium-place:checked').length;
            if (selectedCount > 4) {
                this.checked = false;
                alert('You can select up to 4 attractions in the Premium Package');
            }
            updatePlaceSelection(this);
        });
    });

    // Gold Package - Max 2 selections
    const goldCheckboxes = document.querySelectorAll('.gold-place');
    goldCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const selectedCount = document.querySelectorAll('.gold-place:checked').length;
            if (selectedCount > 2) {
                this.checked = false;
                alert('You can select up to 2 attractions in the Gold Package');
            }
            updatePlaceSelection(this);
        });
    });

    // Silver Package - Max 1 selection
    const silverCheckboxes = document.querySelectorAll('.silver-place');
    silverCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const selectedCount = document.querySelectorAll('.silver-place:checked').length;
            if (selectedCount > 1) {
                const otherCheckboxes = document.querySelectorAll('.silver-place:checked');
                otherCheckboxes.forEach(cb => {
                    if (cb !== this) cb.checked = false;
                });
            }
            updatePlaceSelection(this);
        });
    });
});

function updatePlaceSelection(checkbox) {
    const placeCard = checkbox.closest('.place-card');
    if (checkbox.checked) {
        placeCard.classList.add('selected');
    } else {
        placeCard.classList.remove('selected');
    }

    // Update booking summary
    updateAttractionsSummary();
}

function updateAttractionsSummary() {
    const summaryDetails = document.getElementById('summary-details');
    const existingAttractions = summaryDetails.querySelector('.attractions-info');
    if (existingAttractions) {
        existingAttractions.remove();
    }

    let selectedAttractions = [];
    document.querySelectorAll('.place-checkbox:checked').forEach(checkbox => {
        const placeName = checkbox.closest('.place-card').querySelector('h4').textContent;
        selectedAttractions.push(placeName);
    });

    if (selectedAttractions.length > 0) {
        const attractionsInfo = `
            <div class="summary-item attractions-info">
                <span>Selected Attractions:</span>
                <div class="attractions-details">
                    ${selectedAttractions.map(attraction => `<span>${attraction}</span>`).join('<br>')}
                </div>
            </div>
    `;
        summaryDetails.insertAdjacentHTML('beforeend', attractionsInfo);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const fromCityInput = document.getElementById('fromCityInput');
    const fromCityDropdown = document.getElementById('fromCityDropdown');
    const searchBtn = document.getElementById('searchDestinationBtn');

    // Show dropdown when clicking the input
    fromCityInput.addEventListener('click', function () {
        fromCityDropdown.style.display = 'block';
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!fromCityInput.contains(e.target) && !fromCityDropdown.contains(e.target)) {
            fromCityDropdown.style.display = 'none';
        }
    });

    // Handle city selection
    const cityOptions = document.querySelectorAll('.city-option');
    cityOptions.forEach(option => {
        option.addEventListener('click', function () {
            const selectedCity = this.textContent;
            fromCityInput.value = selectedCity;
            fromCityDropdown.style.display = 'none';
            sessionStorage.setItem('selectedFromCity', selectedCity);
        });
    });

    // Check for previously selected city
    const selectedCity = sessionStorage.getItem('selectedFromCity');
    if (selectedCity) {
        fromCityInput.value = selectedCity;
    }

    // Handle search button click
    searchBtn.addEventListener('click', function () {
        if (!fromCityInput.value) {
            alert('Please select a departure city');
            return;
        }
        // Scroll to the booking form
        document.querySelector('.booking-form').scrollIntoView({ behavior: 'smooth' });
    });
});

const cities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad',
    'Ahmedabad', 'Pune', 'Srinagar', 'Nagpur', 'Varanasi', 'Kanpur',
    'Coimbatore', 'Madurai', 'Visakhapatnam', 'Vijayawada', 'Surat',
    'Vadodara', 'Indore', 'Gwalior', 'Amritsar', 'Ludhiana', 'Kochi',
    'Kozhikode', 'Nashik', 'Aurangabad', 'Mangalore', 'Mysore'
];

document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.getElementById('fromCityDropdown');
    cities.forEach(city => {
        const div = document.createElement('div');
        div.className = 'city-option';
        div.textContent = city;
        dropdown.appendChild(div);
    });
});

// Initialize EmailJS
(function () {
    emailjs.init("UrZt5Cm_BKrM2Xiaj"); // Replace with your actual EmailJS public key
})();

document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const confirmButton = bookingForm.querySelector('button[type="submit"]');

    confirmButton.className = 'btn-confirm-booking';

    bookingForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Validate required selections
        const selectedTransport = document.querySelector('.select-flight.active');
        const selectedHotel = document.querySelector('.select-hotel.selected');
        const selectedMeals = document.querySelectorAll('.meal-checkbox:checked');

        if (!selectedTransport) {
            alert('Please select your transportation option');
            return;
        }

        if (!selectedHotel) {
            alert('Please select a hotel');
            return;
        }

        if (selectedMeals.length === 0) {
            alert('Please select your meal preferences');
            return;
        }

        try {
            // Show loading state
            confirmButton.disabled = true;
            confirmButton.innerHTML = 'Processing your booking...';

            // Generate booking ID
            const bookingId = `TA-${Date.now()}`;

            // Get all form data
            const toCityInput = document.getElementById('toCityInput');
            const firstNameInput = document.getElementById('firstName');
            const lastNameInput = document.getElementById('lastName');
            const emailInput = document.getElementById('email');
            const phoneInput = document.getElementById('phone');
            const travelDateInput = document.getElementById('TravelDate');
            const travelersInput = document.getElementById('travelers');
            const specialRequestsInput = document.getElementById('specialRequests');
            const priceDetailsElement = document.getElementById('price-details');

            const formData = {
                dedstination: toCityInput ? toCityInput.value : '',
                firstName: firstNameInput ? firstNameInput.value : '',
                lastName: lastNameInput ? lastNameInput.value : '',
                email: emailInput ? emailInput.value : '',
                phone: phoneInput ? phoneInput.value : '',
                travelDate: travelDateInput ? travelDateInput.value : '',
                travelers: travelersInput ? travelersInput.value : '',
                specialRequests: specialRequestsInput ? specialRequestsInput.value : 'None'
            };

            // Get package details using the currentPackageType variable
            const packageName = currentPackageType.charAt(0).toUpperCase() + currentPackageType.slice(1);

            // Get transport details
            const transportInfo = document.querySelector('.transport-info');
            const transportText = transportInfo ? transportInfo.textContent.trim() : 'No transport selected';

            // Get hotel details
            const hotelInfo = document.querySelector('.hotel-info');
            const hotelText = hotelInfo ? hotelInfo.textContent.trim() : 'No hotel selected';

            // Get meal details
            const mealInfo = document.querySelector('.meal-info');
            const mealText = mealInfo ? mealInfo.textContent.trim() : 'No meals selected';

            // Get price breakdown
            const priceText = priceDetailsElement ? priceDetailsElement.textContent.trim() : 'Price details not available';

            // Format email template parameters
            const templateParams = {
                to_name: `${formData.firstName} ${formData.lastName}`,
                to_email: formData.email,
                booking_id: bookingId,
                package_type: packageName,
                destination_name: formData.dedstination, // Corrected variable name
                travel_date: formData.travelDate,
                num_travelers: formData.travelers,
                transport_details: transportText,
                hotel_details: hotelText,
                meal_details: mealText,
                price_details: priceText,
                special_requests: formData.specialRequests,
                contact_info: `Phone: ${formData.phone}\nEmail: ${formData.email}`
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                'service_l6797ql', // Replace with your EmailJS service ID
                'template_cu3gc95', // Replace with your EmailJS template ID
                templateParams
            );

            if (response.status === 200) {
                alert('Booking confirmed! A detailed confirmation has been sent to your email.');
                // Reset form and reload page after successful booking
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            } else {
                throw new Error('Failed to send confirmation email');
            }

        } catch (error) {
            console.log(error);
            console.error('Booking confirmation failed:', error);
            alert('There was an issue processing your booking. Please try again or contact support.');
        } finally {
            confirmButton.disabled = false;
            confirmButton.innerHTML = 'Confirm Booking';
        }
    });
});