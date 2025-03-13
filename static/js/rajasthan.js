// Package details object
const packageDetails = {
    premium: {
        name: 'Premium Package',
        price: 40000,
        features: [
            'Luxury Flight Travel',
            '5-Star Palace Hotel Stay in Jaipur & Udaipur',
            'Private Royal Tour Guide',
            'All Rajasthani Cuisine Meals Included',
            'Priority Access to Forts, Palaces & Cultural Shows'
        ]
    },
    gold: {
        name: 'Gold Package',
        price: 30000,
        features: [
            'AC Bus Travel',
            '4-Star Heritage Resort Stay in Jaisalmer',
            'Expert Local Guide',
            'Rajasthani Breakfast & Dinner',
            'Camel Safari & Folk Dance Experience'
        ]
    },
    silver: {
        name: 'Silver Package',
        price: 18000,
        features: [
            'Train Travel (AC Class)',
            '3-Star Hotel in Jodhpur',
            'Group Tour Guide',
            'Rajasthani Breakfast Only',
            'Basic Sightseeing of Forts & Markets'
        ]
    }
};


// Updated flight data with more cities and routes
const flightData = {
    delhi: [
        { id: 1, airline: 'Air India', departure: '06:00', arrival: '07:30', price: 5200, duration: '1h 30m', flightNo: 'AI-101' },
        { id: 2, airline: 'IndiGo', departure: '10:00', arrival: '11:30', price: 5000, duration: '1h 30m', flightNo: '6E-202' }
    ],
    mumbai: [
        { id: 3, airline: 'Vistara', departure: '07:00', arrival: '08:30', price: 5800, duration: '1h 30m', flightNo: 'UK-303' },
        { id: 4, airline: 'SpiceJet', departure: '14:00', arrival: '15:30', price: 5400, duration: '1h 30m', flightNo: 'SG-404' }
    ],
    kanpur: [
        { id: 5, airline: 'IndiGo', departure: '09:00', arrival: '10:45', price: 5600, duration: '1h 45m', flightNo: '6E-505' },
        { id: 6, airline: 'Air India', departure: '16:30', arrival: '18:15', price: 5900, duration: '1h 45m', flightNo: 'AI-606' }
    ],
    surat: [
        { id: 7, airline: 'Vistara', departure: '08:30', arrival: '10:00', price: 5700, duration: '1h 30m', flightNo: 'UK-707' },
        { id: 8, airline: 'IndiGo', departure: '17:30', arrival: '19:00', price: 5500, duration: '1h 30m', flightNo: '6E-808' }
    ],
    indore: [
        { id: 9, airline: 'SpiceJet', departure: '06:45', arrival: '08:15', price: 5300, duration: '1h 30m', flightNo: 'SG-909' },
        { id: 10, airline: 'Air India', departure: '12:15', arrival: '13:45', price: 6000, duration: '1h 30m', flightNo: 'AI-1010' }
    ],
    aurangabad: [
        { id: 11, airline: 'IndiGo', departure: '07:30', arrival: '09:00', price: 5800, duration: '1h 30m', flightNo: '6E-111' },
        { id: 12, airline: 'Vistara', departure: '15:30', arrival: '17:00', price: 6000, duration: '1h 30m', flightNo: 'UK-1212' }
    ],
    coimbatore: [
        { id: 13, airline: 'Air India', departure: '05:30', arrival: '08:00', price: 7500, duration: '2h 30m', flightNo: 'AI-1313' },
        { id: 14, airline: 'SpiceJet', departure: '14:00', arrival: '16:30', price: 7200, duration: '2h 30m', flightNo: 'SG-1414' }
    ],
    madurai: [
        { id: 15, airline: 'Vistara', departure: '06:45', arrival: '09:15', price: 7400, duration: '2h 30m', flightNo: 'UK-1515' },
        { id: 16, airline: 'IndiGo', departure: '13:00', arrival: '15:30', price: 7100, duration: '2h 30m', flightNo: '6E-1616' }
    ],
    srinagar: [
        { id: 17, airline: 'SpiceJet', departure: '07:00', arrival: '09:30', price: 8000, duration: '2h 30m', flightNo: 'SG-1717' },
        { id: 18, airline: 'Air India', departure: '15:45', arrival: '18:15', price: 8200, duration: '2h 30m', flightNo: 'AI-1818' }
    ],
    bangalore: [
        { id: 19, airline: 'IndiGo', departure: '07:00', arrival: '09:30', price: 6200, duration: '2h 30m', flightNo: '6E-321' },
        { id: 20, airline: 'Air India', departure: '12:00', arrival: '14:30', price: 6500, duration: '2h 30m', flightNo: 'AI-654' }
    ],
    chennai: [
        { id: 21, airline: 'SpiceJet', departure: '08:30', arrival: '11:00', price: 6000, duration: '2h 30m', flightNo: 'SG-789' },
        { id: 22, airline: 'Vistara', departure: '14:30', arrival: '17:00', price: 6300, duration: '2h 30m', flightNo: 'UK-567' }
    ],
    kolkata: [
        { id: 23, airline: 'Air India', departure: '06:00', arrival: '08:30', price: 7000, duration: '2h 30m', flightNo: 'AI-234' },
        { id: 24, airline: 'IndiGo', departure: '13:00', arrival: '15:30', price: 6800, duration: '2h 30m', flightNo: '6E-345' }
    ],
    hyderabad: [
        { id: 25, airline: 'Vistara', departure: '07:45', arrival: '10:15', price: 5500, duration: '2h 30m', flightNo: 'UK-456' },
        { id: 26, airline: 'SpiceJet', departure: '18:00', arrival: '20:30', price: 5700, duration: '2h 30m', flightNo: 'SG-123' }
    ],
    visakhapatnam: [
        { id: 27, airline: 'IndiGo', departure: '09:15', arrival: '11:45', price: 7300, duration: '2h 30m', flightNo: '6E-678' },
        { id: 28, airline: 'Air India', departure: '16:00', arrival: '18:30', price: 7500, duration: '2h 30m', flightNo: 'AI-890' }
    ],
    vijayawada: [
        { id: 29, airline: 'SpiceJet', departure: '08:45', arrival: '11:15', price: 6900, duration: '2h 30m', flightNo: 'SG-901' },
        { id: 30, airline: 'Vistara', departure: '19:00', arrival: '21:30', price: 7100, duration: '2h 30m', flightNo: 'UK-234' }
    ],
    vadodara: [
        { id: 31, airline: 'IndiGo', departure: '07:30', arrival: '10:00', price: 6400, duration: '2h 30m', flightNo: '6E-345' },
        { id: 32, airline: 'Air India', departure: '15:00', arrival: '17:30', price: 6700, duration: '2h 30m', flightNo: 'AI-567' }
    ],
    gwalior: [
        { id: 33, airline: 'Vistara', departure: '09:00', arrival: '11:30', price: 6800, duration: '2h 30m', flightNo: 'UK-678' },
        { id: 34, airline: 'SpiceJet', departure: '17:30', arrival: '20:00', price: 7000, duration: '2h 30m', flightNo: 'SG-789' }
    ],
    amritsar: [
        { id: 35, airline: 'Air India', departure: '07:00', arrival: '09:30', price: 6200, duration: '2h 30m', flightNo: 'AI-112' },
        { id: 36, airline: 'IndiGo', departure: '14:00', arrival: '16:30', price: 5900, duration: '2h 30m', flightNo: '6E-223' }
    ],
    ludhiana: [
        { id: 37, airline: 'SpiceJet', departure: '09:30', arrival: '12:00', price: 6400, duration: '2h 30m', flightNo: 'SG-334' },
        { id: 38, airline: 'Vistara', departure: '17:30', arrival: '20:00', price: 6600, duration: '2h 30m', flightNo: 'UK-445' }
    ],
    kochi: [
        { id: 39, airline: 'IndiGo', departure: '06:45', arrival: '09:15', price: 6700, duration: '2h 30m', flightNo: '6E-556' },
        { id: 40, airline: 'Air India', departure: '15:00', arrival: '17:30', price: 6900, duration: '2h 30m', flightNo: 'AI-667' }
    ],
    mysore: [
        { id: 41, airline: 'Vistara', departure: '07:00', arrival: '09:30', price: 7100, duration: '2h 30m', flightNo: 'UK-778' },
        { id: 42, airline: 'SpiceJet', departure: '18:30', arrival: '21:00', price: 7300, duration: '2h 30m', flightNo: 'SG-889' }
    ],
    mangalore: [
        { id: 43, airline: 'Air India', departure: '08:30', arrival: '11:00', price: 7500, duration: '2h 30m', flightNo: 'AI-990' },
        { id: 44, airline: 'IndiGo', departure: '19:00', arrival: '21:30', price: 7700, duration: '2h 30m', flightNo: '6E-101' }
    ],
    ahmedabad: [
        { id: 45, airline: 'SpiceJet', departure: '07:30', arrival: '10:15', price: 6300, duration: '2h 45m', flightNo: 'SG-234' },
        { id: 46, airline: 'Vistara', departure: '11:00', arrival: '13:45', price: 5800, duration: '2h 45m', flightNo: 'UK-345' }
    ],
    pune: [
        { id: 47, airline: 'Air India', departure: '08:45', arrival: '11:30', price: 6100, duration: '2h 45m', flightNo: 'AI-456' },
        { id: 48, airline: 'IndiGo', departure: '12:15', arrival: '15:00', price: 5700, duration: '2h 45m', flightNo: '6E-567' }
    ],
    nagpur: [
        { id: 49, airline: 'IndiGo', departure: '07:00', arrival: '09:30', price: 5900, duration: '2h 30m', flightNo: '6E-678' },
        { id: 50, airline: 'SpiceJet', departure: '11:30', arrival: '14:00', price: 5400, duration: '2h 30m', flightNo: 'SG-789' }
    ],
    varanasi: [
        { id: 51, airline: 'Air India', departure: '08:15', arrival: '10:30', price: 6000, duration: '2h 15m', flightNo: 'AI-890' },
        { id: 52, airline: 'Vistara', departure: '12:45', arrival: '15:00', price: 5600, duration: '2h 15m', flightNo: 'UK-901' }
    ]
};


// Sample bus data with all cities
const busData = {
    delhi: [
        { id: 1, operator: 'Raj Express', departure: '18:00', arrival: '08:00', price: 1200, type: 'AC Sleeper' },
        { id: 2, operator: 'VRL Travels', departure: '20:30', arrival: '10:30', price: 1300, type: 'Non-AC Sleeper' }
    ],
    mumbai: [
        { id: 3, operator: 'Neeta Travels', departure: '19:00', arrival: '09:00', price: 1400, type: 'Volvo AC' },
        { id: 4, operator: 'SRS Travels', departure: '21:00', arrival: '11:00', price: 1500, type: 'AC Sleeper' }
    ],
    kanpur: [
        { id: 5, operator: 'UPSRTC', departure: '17:30', arrival: '07:00', price: 1100, type: 'Sleeper' },
        { id: 6, operator: 'Sharma Travels', departure: '19:00', arrival: '08:30', price: 1250, type: 'AC Sleeper' }
    ],
    surat: [
        { id: 7, operator: 'Gujarat Travels', departure: '16:00', arrival: '06:30', price: 1350, type: 'Luxury AC' },
        { id: 8, operator: 'Raj Travels', departure: '20:00', arrival: '09:00', price: 1450, type: 'Non-AC Sleeper' }
    ],
    indore: [
        { id: 9, operator: 'Hans Travels', departure: '18:45', arrival: '07:45', price: 1200, type: 'AC Seater' },
        { id: 10, operator: 'Raj Ratan Travels', departure: '22:00', arrival: '09:30', price: 1300, type: 'Volvo Sleeper' }
    ],
    aurangabad: [
        { id: 11, operator: 'MSRTC', departure: '17:15', arrival: '06:45', price: 1400, type: 'Luxury AC' },
        { id: 12, operator: 'Purple Bus', departure: '21:45', arrival: '09:15', price: 1500, type: 'AC Sleeper' }
    ],
    coimbatore: [
        { id: 13, operator: 'KPN Travels', departure: '16:30', arrival: '08:00', price: 1800, type: 'AC Sleeper' },
        { id: 14, operator: 'Parveen Travels', departure: '20:00', arrival: '10:00', price: 1850, type: 'Luxury Volvo' }
    ],
    madurai: [
        { id: 15, operator: 'SRS Travels', departure: '17:45', arrival: '08:45', price: 1750, type: 'AC Sleeper' },
        { id: 16, operator: 'YBM Travels', departure: '21:30', arrival: '10:30', price: 1800, type: 'Volvo AC' }
    ],
    visakhapatnam: [
        { id: 17, operator: 'APSRTC', departure: '15:30', arrival: '07:30', price: 1650, type: 'AC Seater' },
        { id: 18, operator: 'SVR Travels', departure: '19:30', arrival: '09:30', price: 1700, type: 'Luxury Sleeper' }
    ],
    vijayawada: [
        { id: 19, operator: 'Orange Travels', departure: '16:00', arrival: '06:00', price: 1550, type: 'AC Sleeper' },
        { id: 20, operator: 'Komitla Travels', departure: '20:45', arrival: '08:45', price: 1600, type: 'Luxury AC' }
    ],
    vadodara: [
        { id: 21, operator: 'GSRTC', departure: '18:00', arrival: '07:30', price: 1400, type: 'Luxury AC' },
        { id: 22, operator: 'Patel Travels', departure: '22:15', arrival: '09:45', price: 1450, type: 'AC Sleeper' }
    ],
    gwalior: [
        { id: 23, operator: 'MP Travels', departure: '17:00', arrival: '07:15', price: 1300, type: 'AC Sleeper' },
        { id: 24, operator: 'Rajasthan Travels', departure: '21:30', arrival: '08:45', price: 1350, type: 'Luxury AC' }
    ],
    amritsar: [
        { id: 25, operator: 'Punjab Travels', departure: '16:30', arrival: '08:00', price: 1450, type: 'Luxury Sleeper' },
        { id: 26, operator: 'Golden Travels', departure: '20:15', arrival: '09:45', price: 1500, type: 'AC Volvo' }
    ],
    ludhiana: [
        { id: 27, operator: 'North Travels', departure: '18:30', arrival: '07:45', price: 1400, type: 'AC Sleeper' },
        { id: 28, operator: 'City Travels', departure: '22:00', arrival: '09:30', price: 1450, type: 'Luxury AC' }
    ],
    kochi: [
        { id: 29, operator: 'Kallada Travels', departure: '17:45', arrival: '08:15', price: 1900, type: 'Luxury Sleeper' },
        { id: 30, operator: 'Suresh Kallada', departure: '21:00', arrival: '10:30', price: 1950, type: 'AC Volvo' }
    ],
    mysore: [
        { id: 31, operator: 'KSRTC', departure: '18:15', arrival: '07:45', price: 1750, type: 'Luxury AC' },
        { id: 32, operator: 'VRL Travels', departure: '22:45', arrival: '09:15', price: 1800, type: 'AC Sleeper' }
    ],
    mangalore: [
        { id: 33, operator: 'Canara Travels', departure: '17:30', arrival: '08:30', price: 1850, type: 'Luxury Sleeper' },
        { id: 34, operator: 'Durgamba Travels', departure: '21:15', arrival: '09:45', price: 1900, type: 'AC Volvo' }
    ],
    ahmedabad: [
        { id: 35, operator: 'GSRTC', departure: '17:30', arrival: '06:30', price: 1300, type: 'AC Seater' },
        { id: 36, operator: 'Patel Tours', departure: '21:00', arrival: '08:00', price: 1400, type: 'Luxury AC' }
    ],
    pune: [
        { id: 37, operator: 'MSRTC', departure: '19:00', arrival: '08:00', price: 1450, type: 'AC Sleeper' },
        { id: 38, operator: 'Purple Travels', departure: '22:30', arrival: '10:30', price: 1550, type: 'Volvo AC' }
    ],
    srinagar: [
        { id: 39, operator: 'Kashmir Travels', departure: '16:00', arrival: '08:00', price: 1750, type: 'Luxury AC' },
        { id: 40, operator: 'Himalayan Express', departure: '20:30', arrival: '10:30', price: 1850, type: 'AC Sleeper' }
    ],
    nagpur: [
        { id: 41, operator: 'VRL Travels', departure: '18:00', arrival: '07:30', price: 1500, type: 'AC Sleeper' },
        { id: 42, operator: 'Orange Travels', departure: '21:30', arrival: '09:30', price: 1600, type: 'Luxury Volvo' }
    ],
    varanasi: [
        { id: 43, operator: 'Shri Ram Travels', departure: '17:45', arrival: '08:30', price: 1400, type: 'Sleeper' },
        { id: 44, operator: 'UP Express', departure: '20:45', arrival: '10:15', price: 1500, type: 'AC Seater' }
    ],
    bangalore: [
        { id: 45, operator: 'KSRTC', departure: '18:00', arrival: '09:00', price: 1750, type: 'Luxury AC' },
        { id: 46, operator: 'VRL Travels', departure: '22:00', arrival: '11:30', price: 1850, type: 'AC Sleeper' }
    ],
    chennai: [
        { id: 47, operator: 'KPN Travels', departure: '19:30', arrival: '08:30', price: 1650, type: 'AC Sleeper' },
        { id: 48, operator: 'Parveen Express', departure: '23:00', arrival: '10:00', price: 1750, type: 'Luxury AC' }
    ],
    kolkata: [
        { id: 49, operator: 'WBSTC', departure: '17:30', arrival: '09:00', price: 1600, type: 'Volvo AC' },
        { id: 50, operator: 'Royal Express', departure: '20:30', arrival: '11:30', price: 1700, type: 'AC Sleeper' }
    ],
    hyderabad: [
        { id: 51, operator: 'TSRTC', departure: '18:45', arrival: '07:45', price: 1550, type: 'Luxury Sleeper' },
        { id: 52, operator: 'Orange Tours', departure: '22:45', arrival: '10:45', price: 1650, type: 'AC Volvo' }
    ]
};


// Sample train data with all cities
const trainData = {
    delhi: [
        { id: 1, trainName: 'Rajdhani Express', departure: '16:00', arrival: '08:00', price: 2200, type: 'AC First Class', trainNo: '12951' },
        { id: 2, trainName: 'Garib Rath Express', departure: '19:30', arrival: '10:00', price: 1500, type: 'AC 3 Tier', trainNo: '12910' }
    ],
    mumbai: [
        { id: 3, trainName: 'Mumbai Rajdhani', departure: '17:10', arrival: '08:35', price: 2500, type: 'AC First Class', trainNo: '12953' },
        { id: 4, trainName: 'Mumbai Superfast', departure: '20:15', arrival: '11:45', price: 1800, type: 'Sleeper Class', trainNo: '22979' }
    ],
    kanpur: [
        { id: 5, trainName: 'Kanpur Shatabdi', departure: '15:45', arrival: '07:30', price: 2100, type: 'AC Chair Car', trainNo: '12034' },
        { id: 6, trainName: 'Kanpur Express', departure: '22:00', arrival: '12:45', price: 1600, type: 'Sleeper Class', trainNo: '12448' }
    ],
    surat: [
        { id: 7, trainName: 'Surat Express', departure: '18:25', arrival: '09:50', price: 2000, type: 'AC 2 Tier', trainNo: '12979' },
        { id: 8, trainName: 'Surat Passenger', departure: '21:00', arrival: '11:30', price: 1400, type: 'Sleeper Class', trainNo: '19045' }
    ],
    indore: [
        { id: 9, trainName: 'Indore Express', departure: '19:40', arrival: '10:55', price: 2300, type: 'AC First Class', trainNo: '19312' },
        { id: 10, trainName: 'Indore Superfast', departure: '23:10', arrival: '13:20', price: 1700, type: 'AC 3 Tier', trainNo: '22943' }
    ],
    aurangabad: [
        { id: 11, trainName: 'Aurangabad Express', departure: '16:30', arrival: '07:15', price: 1900, type: 'AC 2 Tier', trainNo: '17618' },
        { id: 12, trainName: 'Aurangabad Passenger', departure: '20:45', arrival: '10:30', price: 1300, type: 'Sleeper Class', trainNo: '17222' }
    ],
    coimbatore: [
        { id: 13, trainName: 'Coimbatore Rajdhani', departure: '14:20', arrival: '05:30', price: 2700, type: 'AC First Class', trainNo: '22657' },
        { id: 14, trainName: 'Coimbatore Superfast', departure: '18:15', arrival: '08:45', price: 2000, type: 'AC 3 Tier', trainNo: '22637' }
    ],
    madurai: [
        { id: 15, trainName: 'Madurai Express', departure: '17:50', arrival: '08:10', price: 2500, type: 'AC First Class', trainNo: '12687' },
        { id: 16, trainName: 'Madurai Passenger', departure: '22:20', arrival: '11:50', price: 1800, type: 'Sleeper Class', trainNo: '12667' }
    ],
    visakhapatnam: [
        { id: 17, trainName: 'Vizag Rajdhani', departure: '15:10', arrival: '06:30', price: 2600, type: 'AC First Class', trainNo: '12437' },
        { id: 18, trainName: 'Vizag Superfast', departure: '19:50', arrival: '09:15', price: 1900, type: 'AC 3 Tier', trainNo: '12861' }
    ],
    vijayawada: [
        { id: 19, trainName: 'Vijayawada Express', departure: '16:40', arrival: '07:55', price: 2200, type: 'AC First Class', trainNo: '12718' },
        { id: 20, trainName: 'Vijayawada Passenger', departure: '21:15', arrival: '10:40', price: 1600, type: 'Sleeper Class', trainNo: '12842' }
    ],
    bangalore: [
        { id: 21, trainName: 'Bangalore Rajdhani', departure: '18:20', arrival: '07:50', price: 2800, type: 'AC First Class', trainNo: '22691' },
        { id: 22, trainName: 'Bangalore Express', departure: '21:30', arrival: '10:45', price: 1900, type: 'Sleeper Class', trainNo: '16587' }
    ],
    chennai: [
        { id: 23, trainName: 'Chennai Superfast', departure: '19:45', arrival: '09:20', price: 2500, type: 'AC First Class', trainNo: '12621' },
        { id: 24, trainName: 'Chennai Express', departure: '22:10', arrival: '11:35', price: 1800, type: 'Sleeper Class', trainNo: '12641' }
    ],
    kolkata: [
        { id: 25, trainName: 'Howrah Rajdhani', departure: '15:00', arrival: '06:30', price: 2700, type: 'AC First Class', trainNo: '12301' },
        { id: 26, trainName: 'Kolkata Express', departure: '20:45', arrival: '10:20', price: 2000, type: 'Sleeper Class', trainNo: '12321' }
    ],
    hyderabad: [
        { id: 27, trainName: 'Hyderabad Superfast', departure: '18:10', arrival: '08:40', price: 2600, type: 'AC First Class', trainNo: '12723' },
        { id: 28, trainName: 'Charminar Express', departure: '22:30', arrival: '11:55', price: 1900, type: 'Sleeper Class', trainNo: '12719' }
    ],
    vadodara: [
        { id: 29, trainName: 'Vadodara Express', departure: '17:50', arrival: '09:30', price: 2500, type: 'AC First Class', trainNo: '19037' },
        { id: 30, trainName: 'Vadodara Superfast', departure: '21:10', arrival: '11:15', price: 1800, type: 'Sleeper Class', trainNo: '12927' }
    ],
    gwalior: [
        { id: 31, trainName: 'Gwalior Rajdhani', departure: '16:20', arrival: '07:45', price: 2600, type: 'AC First Class', trainNo: '12433' },
        { id: 32, trainName: 'Gwalior Express', departure: '20:30', arrival: '10:10', price: 1900, type: 'Sleeper Class', trainNo: '12407' }
    ],
    amritsar: [
        { id: 33, trainName: 'Golden Temple Express', departure: '18:40', arrival: '09:30', price: 2700, type: 'AC First Class', trainNo: '12904' },
        { id: 34, trainName: 'Amritsar Superfast', departure: '22:10', arrival: '10:50', price: 2000, type: 'Sleeper Class', trainNo: '12460' }
    ],
    ludhiana: [
        { id: 35, trainName: 'Ludhiana Express', departure: '19:10', arrival: '08:45', price: 2500, type: 'AC First Class', trainNo: '12426' },
        { id: 36, trainName: 'Punjab Superfast', departure: '21:50', arrival: '10:40', price: 1800, type: 'Sleeper Class', trainNo: '12498' }
    ],
    kochi: [
        { id: 37, trainName: 'Kochi Rajdhani', departure: '16:30', arrival: '07:00', price: 2800, type: 'AC First Class', trainNo: '22633' },
        { id: 38, trainName: 'Kochi Express', departure: '21:15', arrival: '10:45', price: 2100, type: 'Sleeper Class', trainNo: '12617' }
    ],
    mysore: [
        { id: 39, trainName: 'Mysore Superfast', departure: '17:45', arrival: '08:20', price: 2600, type: 'AC First Class', trainNo: '12785' },
        { id: 40, trainName: 'Mysore Express', departure: '22:10', arrival: '11:35', price: 2000, type: 'Sleeper Class', trainNo: '16209' }
    ],
    mangalore: [
        { id: 41, trainName: 'Mangalore Express', departure: '18:10', arrival: '09:30', price: 2700, type: 'AC First Class', trainNo: '12685' },
        { id: 42, trainName: 'Mangalore Superfast', departure: '21:40', arrival: '11:15', price: 2200, type: 'Sleeper Class', trainNo: '16687' }
    ],
    ahmedabad: [
        { id: 43, trainName: 'Ahmedabad Express', departure: '18:30', arrival: '07:00', price: 2600, type: 'AC First Class', trainNo: '19011' },
        { id: 44, trainName: 'Ahmedabad Superfast', departure: '22:20', arrival: '10:50', price: 2000, type: 'Sleeper Class', trainNo: '22929' }
    ],
    pune: [
        { id: 45, trainName: 'Pune Rajdhani', departure: '17:55', arrival: '08:15', price: 2700, type: 'AC First Class', trainNo: '12149' },
        { id: 46, trainName: 'Pune Express', departure: '21:10', arrival: '10:30', price: 2100, type: 'Sleeper Class', trainNo: '11077' }
    ],
    srinagar: [
        { id: 47, trainName: 'Srinagar Superfast', departure: '18:20', arrival: '09:40', price: 2800, type: 'AC First Class', trainNo: '12471' },
        { id: 48, trainName: 'Srinagar Express', departure: '22:30', arrival: '11:50', price: 2300, type: 'Sleeper Class', trainNo: '12472' }
    ],
    nagpur: [
        { id: 49, trainName: 'Nagpur Express', departure: '16:50', arrival: '06:30', price: 2600, type: 'AC First Class', trainNo: '12807' },
        { id: 50, trainName: 'Nagpur Superfast', departure: '20:40', arrival: '10:20', price: 1900, type: 'Sleeper Class', trainNo: '12616' }
    ],
    varanasi: [
        { id: 51, trainName: 'Varanasi Rajdhani', departure: '17:10', arrival: '07:45', price: 2700, type: 'AC First Class', trainNo: '12335' },
        { id: 52, trainName: 'Varanasi Express', departure: '21:30', arrival: '10:55', price: 2000, type: 'Sleeper Class', trainNo: '12307' }
    ]
};

let currentPackageType = null;
const destination = 'Rajasthan';

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
                        <span class="city">Rajasthan</span>
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
                        <span class="city">Rajasthan</span>
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
                        <span class="city">Rajasthan</span>
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
                    <span class="city">Rajasthan</span>
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
                    <span class="city">Rajasthan</span>
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
                <span>From: ${flightType === 'outbound' ? fromCity : 'Rajasthan'}</span>
                <span>To: ${flightType === 'outbound' ? 'Rajasthan' : fromCity}</span>
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

// Hotel data for different packages in Rajasthan
const hotelData = {
    premium: [
        {
            name: "Taj Lake Palace",
            rating: 5,
            price: 50000,
            features: ["Lake View Rooms", "Private Boat Ride", "Royal Dining", "Luxury Spa"],
            distance: "Udaipur",
            image: "../static/images/hotels/taj-lake-palace.jpg"
        },
        {
            name: "The Oberoi Udaivilas",
            rating: 5,
            price: 45000,
            features: ["Palatial Rooms", "Private Pool", "Multiple Dining Options", "Cultural Performances"],
            distance: "Udaipur",
            image: "../static/images/hotels/oberoi-udaivilas.jpg"
        },
        {
            name: "Umaid Bhawan Palace",
            rating: 5,
            price: 40000,
            features: ["Royal Rooms", "Indoor Pool", "World-Class Dining", "Spa & Wellness"],
            distance: "Jodhpur",
            image: "../static/images/hotels/umaid-bhawan-palace.jpg"
        }
    ],
    gold: [
        {
            name: "Trident Jaipur",
            rating: 4,
            price: 18000,
            features: ["Luxury Rooms", "Rajasthani Cuisine", "Spa & Pool", "Cultural Events"],
            distance: "Jaipur",
            image: "../static/images/hotels/trident-jaipur.jpg"
        },
        {
            name: "The Lalit Laxmi Vilas Palace",
            rating: 4,
            price: 16000,
            features: ["Comfortable Rooms", "Restaurant & Bar", "Swimming Pool", "Heritage Ambience"],
            distance: "Udaipur",
            image: "../static/images/hotels/lalit-laxmi-vilas.jpg"
        },
        {
            name: "Jai Mahal Palace",
            rating: 4,
            price: 15000,
            features: ["Heritage Rooms", "Swimming Pool", "Restaurant", "Business Center"],
            distance: "Jaipur",
            image: "../static/images/hotels/jai-mahal-palace.jpg"
        }
    ],
    silver: [
        {
            name: "Hotel Pearl Palace",
            rating: 3,
            price: 8000,
            features: ["Affordable Rooms", "Restaurant", "Room Service", "Cultural Decor"],
            distance: "Jaipur",
            image: "../static/images/hotels/pearl-palace.jpg"
        },
        {
            name: "Hotel Jodhpur Heritage",
            rating: 3,
            price: 7000,
            features: ["Comfortable Rooms", "Budget-Friendly", "Restaurant", "Easy Access to City Center"],
            distance: "Jodhpur",
            image: "../static/images/hotels/jodhpur-heritage.jpg"
        },
        {
            name: "Rajasthan Palace Hotel",
            rating: 3,
            price: 6000,
            features: ["Basic Rooms", "Restaurant", "Room Service", "Budget Stay"],
            distance: "Jaipur",
            image: "../static/images/hotels/rajasthan-palace.jpg"
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
        const fromLocation = type === 'outbound' ? fromCity : 'Rajasthan';
        const toLocation = type === 'outbound' ? 'Rajasthan' : fromCity;

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