// Package details object
const packageDetails = {
    premium: {
        name: 'Premium Package',
        price: 35000,
        features: [
            'Luxury Flight Travel',
            '5-Star Heritage Resort Stay in Hampi',
            'Private Archaeological Tour Guide',
            'All Karnataka Cuisine Meals Included',
            'Priority Access to UNESCO Heritage Sites & Cultural Performances'
        ]
    },
    gold: {
        name: 'Gold Package',
        price: 25000,
        features: [
            'AC Bus Travel',
            '4-Star Resort Stay Near Tungabhadra River',
            'Expert Local Guide',
            'Hampi Special Breakfast & Dinner',
            'Standard Access to Vijayanagar Ruins & Temples'
        ]
    },
    silver: {
        name: 'Silver Package',
        price: 15000,
        features: [
            'Train Travel (AC Class)',
            '3-Star Hotel Stay in Hampi',
            'Group Tour Guide',
            'Hampi Breakfast Only',
            'Basic Sightseeing of Virupaksha Temple & Sunset Point'
        ]
    }
};

// Updated flight data with more cities and routes
const flightData = {
    delhi: [
        { id: 1, airline: 'IndiGo', departure: '06:00', arrival: '09:15', duration: '3h 15m', price: 6200, flightNo: '6E-201', via: 'Hubli' },
        { id: 2, airline: 'Air India', departure: '17:30', arrival: '20:45', duration: '3h 15m', price: 6500, flightNo: 'AI-789', via: 'Belgaum' }
    ],
    mumbai: [
        { id: 3, airline: 'Vistara', departure: '07:15', arrival: '09:30', duration: '2h 15m', price: 5800, flightNo: 'UK-654', via: 'Hubli' },
        { id: 4, airline: 'IndiGo', departure: '18:45', arrival: '21:00', duration: '2h 15m', price: 6000, flightNo: '6E-789', via: 'Belgaum' }
    ],
    bangalore: [
        { id: 5, airline: 'IndiGo', departure: '09:00', arrival: '10:00', duration: '1h', price: 4500, flightNo: '6E-456', via: 'Hubli' },
        { id: 6, airline: 'SpiceJet', departure: '19:30', arrival: '20:30', duration: '1h', price: 4700, flightNo: 'SG-321', via: 'Belgaum' }
    ],
    chennai: [
        { id: 7, airline: 'Air India', departure: '06:45', arrival: '09:00', duration: '2h 15m', price: 5500, flightNo: 'AI-777', via: 'Hubli' },
        { id: 8, airline: 'Vistara', departure: '20:15', arrival: '22:30', duration: '2h 15m', price: 5700, flightNo: 'UK-890', via: 'Belgaum' }
    ],
    kolkata: [
        { id: 9, airline: 'SpiceJet', departure: '07:30', arrival: '10:30', duration: '3h', price: 6800, flightNo: 'SG-234', via: 'Hubli' },
        { id: 10, airline: 'IndiGo', departure: '21:00', arrival: '00:00', duration: '3h', price: 7000, flightNo: '6E-567', via: 'Belgaum' }
    ],
    hyderabad: [
        { id: 11, airline: 'IndiGo', departure: '06:30', arrival: '07:30', duration: '1h', price: 4800, flightNo: '6E-678', via: 'Hubli' },
        { id: 12, airline: 'Vistara', departure: '19:45', arrival: '20:45', duration: '1h', price: 5000, flightNo: 'UK-901', via: 'Belgaum' }
    ],
    kanpur: [
        { id: 13, airline: 'Air India', departure: '08:15', arrival: '11:30', duration: '3h 15m', price: 7200, flightNo: 'AI-123', via: 'Hubli' },
        { id: 14, airline: 'SpiceJet', departure: '22:00', arrival: '01:15', duration: '3h 15m', price: 7500, flightNo: 'SG-456', via: 'Belgaum' }
    ],
    surat: [
        { id: 15, airline: 'IndiGo', departure: '09:45', arrival: '12:00', duration: '2h 15m', price: 5900, flightNo: '6E-789', via: 'Hubli' },
        { id: 16, airline: 'Vistara', departure: '20:30', arrival: '22:45', duration: '2h 15m', price: 6100, flightNo: 'UK-678', via: 'Belgaum' }
    ],
    indore: [
        { id: 17, airline: 'SpiceJet', departure: '07:30', arrival: '10:00', duration: '2h 30m', price: 6300, flightNo: 'SG-234', via: 'Hubli' },
        { id: 18, airline: 'IndiGo', departure: '21:15', arrival: '23:45', duration: '2h 30m', price: 6500, flightNo: '6E-567', via: 'Belgaum' }
    ],
    aurangabad: [
        { id: 19, airline: 'IndiGo', departure: '07:00', arrival: '09:30', duration: '2h 30m', price: 6200, flightNo: '6E-456', via: 'Mumbai' },
        { id: 20, airline: 'SpiceJet', departure: '18:00', arrival: '20:30', duration: '2h 30m', price: 6400, flightNo: 'SG-789', via: 'Bangalore' }
    ],
    coimbatore: [
        { id: 21, airline: 'Air India', departure: '06:30', arrival: '08:45', duration: '2h 15m', price: 6000, flightNo: 'AI-234', via: 'Hyderabad' },
        { id: 22, airline: 'Vistara', departure: '19:30', arrival: '21:45', duration: '2h 15m', price: 6200, flightNo: 'UK-567', via: 'Chennai' }
    ],
    madurai: [
        { id: 23, airline: 'IndiGo', departure: '08:15', arrival: '10:45', duration: '2h 30m', price: 6400, flightNo: '6E-678', via: 'Bangalore' },
        { id: 24, airline: 'SpiceJet', departure: '21:30', arrival: '00:00', duration: '2h 30m', price: 6600, flightNo: 'SG-901', via: 'Hyderabad' }
    ],
    visakhapatnam: [
        { id: 25, airline: 'Air India', departure: '07:30', arrival: '10:00', duration: '2h 30m', price: 6500, flightNo: 'AI-345', via: 'Chennai' },
        { id: 26, airline: 'IndiGo', departure: '19:00', arrival: '21:30', duration: '2h 30m', price: 6700, flightNo: '6E-456', via: 'Bangalore' }
    ],
    vijayawada: [
        { id: 27, airline: 'SpiceJet', departure: '06:45', arrival: '09:15', duration: '2h 30m', price: 6300, flightNo: 'SG-789', via: 'Hyderabad' },
        { id: 28, airline: 'Vistara', departure: '18:15', arrival: '20:45', duration: '2h 30m', price: 6500, flightNo: 'UK-678', via: 'Bangalore' }
    ],
    vadodara: [
        { id: 29, airline: 'IndiGo', departure: '09:00', arrival: '11:30', duration: '2h 30m', price: 6600, flightNo: '6E-890', via: 'Mumbai' },
        { id: 30, airline: 'Air India', departure: '21:30', arrival: '00:00', duration: '2h 30m', price: 6800, flightNo: 'AI-901', via: 'Bangalore' }
    ],
    gwalior: [
        { id: 31, airline: 'IndiGo', departure: '07:15', arrival: '09:45', duration: '2h 30m', price: 6200, flightNo: '6E-456', via: 'Delhi' },
        { id: 32, airline: 'SpiceJet', departure: '20:30', arrival: '23:00', duration: '2h 30m', price: 6400, flightNo: 'SG-567', via: 'Hyderabad' }
    ],
    amritsar: [
        { id: 33, airline: 'Vistara', departure: '06:30', arrival: '09:00', duration: '2h 30m', price: 6700, flightNo: 'UK-678', via: 'Delhi' },
        { id: 34, airline: 'Air India', departure: '19:15', arrival: '21:45', duration: '2h 30m', price: 6900, flightNo: 'AI-345', via: 'Bangalore' }
    ],
    vadodara: [
        { id: 35, airline: 'IndiGo', departure: '07:30', arrival: '10:00', duration: '2h 30m', price: 6200, flightNo: '6E-101', via: 'Mumbai' },
        { id: 36, airline: 'Air India', departure: '19:15', arrival: '21:45', duration: '2h 30m', price: 6400, flightNo: 'AI-202', via: 'Bangalore' }
    ],
    ludhiana: [
        { id: 37, airline: 'SpiceJet', departure: '08:45', arrival: '11:30', duration: '2h 45m', price: 6500, flightNo: 'SG-303', via: 'Delhi' },
        { id: 38, airline: 'Vistara', departure: '21:00', arrival: '23:30', duration: '2h 30m', price: 6700, flightNo: 'UK-404', via: 'Mumbai' }
    ],
    kochi: [
        { id: 39, airline: 'IndiGo', departure: '07:15', arrival: '09:45', duration: '2h 30m', price: 5800, flightNo: '6E-505', via: 'Bangalore' },
        { id: 40, airline: 'SpiceJet', departure: '19:30', arrival: '22:00', duration: '2h 30m', price: 6000, flightNo: 'SG-606', via: 'Hyderabad' }
    ],
    mysore: [
        { id: 41, airline: 'Air India', departure: '06:30', arrival: '08:45', duration: '2h 15m', price: 5600, flightNo: 'AI-707', via: 'Bangalore' },
        { id: 42, airline: 'Vistara', departure: '20:30', arrival: '22:45', duration: '2h 15m', price: 5800, flightNo: 'UK-808', via: 'Chennai' }
    ],
    mangalore: [
        { id: 43, airline: 'IndiGo', departure: '09:15', arrival: '11:30', duration: '2h 15m', price: 6000, flightNo: '6E-909', via: 'Bangalore' },
        { id: 44, airline: 'SpiceJet', departure: '22:15', arrival: '00:30', duration: '2h 15m', price: 6200, flightNo: 'SG-101', via: 'Hyderabad' }
    ],
    ahmedabad: [
        { id: 45, airline: 'Air India', departure: '08:00', arrival: '10:30', duration: '2h 30m', price: 6300, flightNo: 'AI-202', via: 'Mumbai' },
        { id: 46, airline: 'IndiGo', departure: '21:30', arrival: '23:45', duration: '2h 15m', price: 6500, flightNo: '6E-303', via: 'Bangalore' }
    ],
    pune: [
        { id: 47, airline: 'Vistara', departure: '07:45', arrival: '10:00', duration: '2h 15m', price: 6200, flightNo: 'UK-404', via: 'Mumbai' },
        { id: 48, airline: 'SpiceJet', departure: '20:15', arrival: '22:30', duration: '2h 15m', price: 6400, flightNo: 'SG-505', via: 'Bangalore' }
    ],
    srinagar: [
        { id: 49, airline: 'IndiGo', departure: '09:30', arrival: '12:00', duration: '2h 30m', price: 7100, flightNo: '6E-606', via: 'Delhi' },
        { id: 50, airline: 'Air India', departure: '22:45', arrival: '01:15', duration: '2h 30m', price: 7300, flightNo: 'AI-707', via: 'Mumbai' }
    ],
    nagpur: [
        { id: 51, airline: 'IndiGo', departure: '08:15', arrival: '10:30', duration: '2h 15m', price: 5900, flightNo: '6E-808', via: 'Bangalore' },
        { id: 52, airline: 'Vistara', departure: '21:45', arrival: '23:45', duration: '2h 00m', price: 6100, flightNo: 'UK-909', via: 'Hyderabad' }
    ],
    varanasi: [
        { id: 53, airline: 'SpiceJet', departure: '07:00', arrival: '09:30', duration: '2h 30m', price: 6800, flightNo: 'SG-101', via: 'Delhi' },
        { id: 54, airline: 'Air India', departure: '19:30', arrival: '22:00', duration: '2h 30m', price: 7000, flightNo: 'AI-202', via: 'Mumbai' }
    ]
};


// Sample bus data with all cities
const busData = {
    delhi: [
        { id: 1, operator: 'VRL Travels', departure: '14:00', arrival: '06:30 ', duration: '40h 30m', price: 4800, busNo: 'VRL-101', via: 'Mumbai' },
        { id: 2, operator: 'SRS Travels', departure: '18:00', arrival: '10:30 ', duration: '40h 30m', price: 4700, busNo: 'SRS-234', via: 'Hyderabad' }
    ],
    mumbai: [
        { id: 3, operator: 'VRL Travels', departure: '16:00', arrival: '10:30 ', duration: '18h 30m', price: 2500, busNo: 'VRL-456', via: 'Pune' },
        { id: 4, operator: 'Orange Travels', departure: '19:30', arrival: '12:45 ', duration: '17h 15m', price: 2600, busNo: 'OT-789', via: 'Belgaum' }
    ],
    bangalore: [
        { id: 5, operator: 'SRS Travels', departure: '22:00', arrival: '06:00 ', duration: '8h', price: 1200, busNo: 'SRS-678', via: 'Hospet' },
        { id: 6, operator: 'VRL Travels', departure: '23:30', arrival: '07:30 ', duration: '8h', price: 1300, busNo: 'VRL-890', via: 'Hospet' }
    ],
    chennai: [
        { id: 7, operator: 'Parveen Travels', departure: '20:00', arrival: '10:00 ', duration: '14h', price: 2200, busNo: 'PT-901', via: 'Bangalore' },
        { id: 8, operator: 'KPN Travels', departure: '21:30', arrival: '11:30 ', duration: '14h', price: 2300, busNo: 'KPN-234', via: 'Bangalore' }
    ],
    kolkata: [
        { id: 9, operator: 'Royal Cruiser', departure: '15:00', arrival: '12:00 ', duration: '45h', price: 5500, busNo: 'RC-567', via: 'Hyderabad' },
        { id: 10, operator: 'GreenLine Travels', departure: '17:30', arrival: '15:30 ', duration: '46h', price: 5400, busNo: 'GL-678', via: 'Bangalore' }
    ],
    hyderabad: [
        { id: 11, operator: 'Orange Travels', departure: '20:00', arrival: '06:00 ', duration: '10h', price: 1800, busNo: 'OT-789', via: 'Hospet' },
        { id: 12, operator: 'VRL Travels', departure: '21:30', arrival: '07:30 ', duration: '10h', price: 1900, busNo: 'VRL-890', via: 'Hospet' }
    ],
    kanpur: [
        { id: 13, operator: 'UPSRTC Volvo', departure: '14:30', arrival: '10:30 ', duration: '44h', price: 5200, busNo: 'UPSRTC-345', via: 'Hyderabad' },
        { id: 14, operator: 'Raj Ratan Travels', departure: '16:45', arrival: '12:45 ', duration: '44h', price: 5100, busNo: 'RRT-567', via: 'Bangalore' }
    ],
    surat: [
        { id: 15, operator: 'Shrinath Travels', departure: '18:30', arrival: '10:30 ', duration: '16h', price: 2700, busNo: 'ST-789', via: 'Pune' },
        { id: 16, operator: 'Mahavat Travels', departure: '20:00', arrival: '12:00 ', duration: '16h', price: 2800, busNo: 'MT-890', via: 'Belgaum' }
    ],
    indore: [
        { id: 17, operator: 'Hans Travels', departure: '19:30', arrival: '12:30 ', duration: '17h', price: 2900, busNo: 'HT-901', via: 'Mumbai' },
        { id: 18, operator: 'Chartered Bus', departure: '21:00', arrival: '14:00 ', duration: '17h', price: 3000, busNo: 'CB-123', via: 'Bangalore' }
    ],
    aurangabad: [
        { id: 19, operator: 'VRL Travels', departure: '15:30', arrival: '08:00 ', duration: '16h 30m', price: 2800, busNo: 'VRL-123', via: 'Pune' },
        { id: 20, operator: 'SRS Travels', departure: '18:00', arrival: '10:30 ', duration: '16h 30m', price: 2900, busNo: 'SRS-234', via: 'Mumbai' }
    ],
    coimbatore: [
        { id: 21, operator: 'GreenLine Travels', departure: '17:00', arrival: '08:00 ', duration: '15h', price: 2500, busNo: 'GL-567', via: 'Bangalore' },
        { id: 22, operator: 'KPN Travels', departure: '19:30', arrival: '09:30 ', duration: '14h', price: 2600, busNo: 'KPN-678', via: 'Bangalore' }
    ],
    madurai: [
        { id: 23, operator: 'Parveen Travels', departure: '18:45', arrival: '08:45 ', duration: '14h', price: 2600, busNo: 'PT-789', via: 'Bangalore' },
        { id: 24, operator: 'SRS Travels', departure: '20:30', arrival: '10:30 ', duration: '14h', price: 2700, busNo: 'SRS-890', via: 'Bangalore' }
    ],
    visakhapatnam: [
        { id: 25, operator: 'Orange Travels', departure: '16:00', arrival: '10:30 ', duration: '18h 30m', price: 3200, busNo: 'OT-901', via: 'Hyderabad' },
        { id: 26, operator: 'VRL Travels', departure: '20:00', arrival: '12:30 ', duration: '16h 30m', price: 3300, busNo: 'VRL-102', via: 'Hyderabad' }
    ],
    vijayawada: [
        { id: 27, operator: 'APSRTC', departure: '17:45', arrival: '09:30 ', duration: '15h 45m', price: 2800, busNo: 'APSRTC-345', via: 'Hyderabad' },
        { id: 28, operator: 'Kaveri Travels', departure: '21:00', arrival: '11:45 ', duration: '14h 45m', price: 2900, busNo: 'KT-456', via: 'Hyderabad' }
    ],
    vadodara: [
        { id: 29, operator: 'GSRTC Express', departure: '15:30', arrival: '08:30 ', duration: '17h', price: 3000, busNo: 'GSRTC-567', via: 'Mumbai' },
        { id: 30, operator: 'Shrinath Travels', departure: '19:30', arrival: '10:30 ', duration: '15h', price: 3100, busNo: 'ST-678', via: 'Mumbai' }
    ],
    gwalior: [
        { id: 31, operator: 'Hans Travels', departure: '14:00', arrival: '06:30 ', duration: '16h 30m', price: 3300, busNo: 'HT-789', via: 'Indore' },
        { id: 32, operator: 'Chartered Bus', departure: '19:00', arrival: '09:30 ', duration: '14h 30m', price: 3200, busNo: 'CB-890', via: 'Indore' }
    ],
    amritsar: [
        { id: 33, operator: 'Royal Travels', departure: '16:30', arrival: '10:00 ', duration: '41h 30m', price: 5500, busNo: 'RT-901', via: 'Delhi' },
        { id: 34, operator: 'GreenLine Travels', departure: '20:00', arrival: '12:30 ', duration: '40h 30m', price: 5400, busNo: 'GL-102', via: 'Hyderabad' }
    ],
    vadodara: [
        { id: 35, operator: 'VRL Travels', departure: '17:00', arrival: '10:30 ', duration: '17h 30m', price: 3100, busNo: 'VRL-111', via: 'Mumbai' },
        { id: 36, operator: 'Shrinath Travels', departure: '19:30', arrival: '11:30 ', duration: '16h', price: 3200, busNo: 'ST-222', via: 'Mumbai' }
    ],
    ludhiana: [
        { id: 37, operator: 'PEPSU Roadways', departure: '16:30', arrival: '08:30 ', duration: '40h', price: 5600, busNo: 'PRTC-333', via: 'Delhi' },
        { id: 38, operator: 'Royal Travels', departure: '20:00', arrival: '12:30 ', duration: '40h 30m', price: 5700, busNo: 'RT-444', via: 'Hyderabad' }
    ],
    kochi: [
        { id: 39, operator: 'KSRTC', departure: '18:30', arrival: '10:30 ', duration: '16h', price: 3000, busNo: 'KSRTC-555', via: 'Bangalore' },
        { id: 40, operator: 'SRS Travels', departure: '20:45', arrival: '11:30 ', duration: '14h 45m', price: 3100, busNo: 'SRS-666', via: 'Bangalore' }
    ],
    mysore: [
        { id: 41, operator: 'KSRTC', departure: '19:00', arrival: '06:30 ', duration: '11h 30m', price: 2000, busNo: 'KSRTC-777', via: 'Hospet' },
        { id: 42, operator: 'VRL Travels', departure: '21:00', arrival: '08:00 ', duration: '11h', price: 2100, busNo: 'VRL-888', via: 'Hospet' }
    ],
    mangalore: [
        { id: 43, operator: 'Durgamba Motors', departure: '17:30', arrival: '08:30 ', duration: '15h', price: 2800, busNo: 'DM-999', via: 'Bangalore' },
        { id: 44, operator: 'Sugama Travels', departure: '20:30', arrival: '11:00 ', duration: '14h 30m', price: 2900, busNo: 'ST-101', via: 'Bangalore' }
    ],
    ahmedabad: [
        { id: 45, operator: 'GSRTC Volvo', departure: '16:45', arrival: '10:30 ', duration: '17h 45m', price: 3200, busNo: 'GSRTC-202', via: 'Mumbai' },
        { id: 46, operator: 'VRL Travels', departure: '21:00', arrival: '12:00 ', duration: '15h', price: 3300, busNo: 'VRL-303', via: 'Mumbai' }
    ],
    pune: [
        { id: 47, operator: 'MSRTC Shivneri', departure: '18:00', arrival: '08:00 ', duration: '14h', price: 2800, busNo: 'MSRTC-404', via: 'Belgaum' },
        { id: 48, operator: 'National Travels', departure: '20:30', arrival: '10:30 ', duration: '14h', price: 2900, busNo: 'NT-505', via: 'Belgaum' }
    ],
    srinagar: [
        { id: 49, operator: 'JKSRTC', departure: '17:30', arrival: '12:30 ', duration: '43h', price: 5800, busNo: 'JKSRTC-606', via: 'Delhi' },
        { id: 50, operator: 'Luxury Travels', departure: '20:45', arrival: '14:45 ', duration: '42h', price: 5900, busNo: 'LT-707', via: 'Hyderabad' }
    ],
    nagpur: [
        { id: 51, operator: 'Hans Travels', departure: '19:30', arrival: '12:00 ', duration: '16h 30m', price: 2900, busNo: 'HT-808', via: 'Hyderabad' },
        { id: 52, operator: 'Orange Travels', departure: '21:00', arrival: '13:30 ', duration: '16h 30m', price: 3000, busNo: 'OT-909', via: 'Hyderabad' }
    ],
    varanasi: [
        { id: 53, operator: 'UPSRTC Volvo', departure: '16:15', arrival: '10:30 ', duration: '42h 15m', price: 5500, busNo: 'UPSRTC-101', via: 'Delhi' },
        { id: 54, operator: 'Raj Ratan Travels', departure: '19:30', arrival: '13:45 ', duration: '42h 15m', price: 5600, busNo: 'RRT-202', via: 'Hyderabad' }
    ]
};


// Sample train data with all cities
const trainData = {
    delhi: [
        { id: 1, trainName: 'Goa Express', departure: '15:00', arrival: '04:30 ', duration: '37h 30m', price: 3200, trainNo: '12779', via: 'Gwalior' },
        { id: 2, trainName: 'Karnataka Sampark Kranti Express', departure: '08:00', arrival: '22:00 ', duration: '38h', price: 3400, trainNo: '12630', via: 'Hyderabad' }
    ],
    mumbai: [
        { id: 3, trainName: 'Mumbai CSMT - Hubli Express', departure: '21:00', arrival: '11:30 ', duration: '14h 30m', price: 2600, trainNo: '17318', via: 'Hubli' },
        { id: 4, trainName: 'LTT - Vijayapura Express', departure: '16:45', arrival: '09:30 ', duration: '16h 45m', price: 2500, trainNo: '22117', via: 'Hospet' }
    ],
    bangalore: [
        { id: 5, trainName: 'Hampi Express', departure: '21:50', arrival: '07:10 ', duration: '9h 20m', price: 1600, trainNo: '16592', via: 'Hospet' },
        { id: 6, trainName: 'Vasco Express', departure: '14:30', arrival: '23:45', duration: '9h 15m', price: 1700, trainNo: '17311', via: 'Hospet' }
    ],
    chennai: [
        { id: 7, trainName: 'Chennai - Vasco Express', departure: '15:00', arrival: '08:30 ', duration: '17h 30m', price: 2800, trainNo: '17311', via: 'Hubli' },
        { id: 8, trainName: 'Chennai - SSS Hubballi Express', departure: '21:45', arrival: '13:15 ', duration: '15h 30m', price: 2700, trainNo: '17315', via: 'Hospet' }
    ],
    kolkata: [
        { id: 9, trainName: 'Howrah - Vasco Da Gama Amaravati Express', departure: '23:30', arrival: '11:45 ', duration: '60h 15m', price: 4100, trainNo: '18047', via: 'Hospet' },
        { id: 10, trainName: 'Howrah - Yeshvantpur Duronto Express', departure: '11:00', arrival: '04:30 ', duration: '41h 30m', price: 3900, trainNo: '12245', via: 'Bangalore' }
    ],
    hyderabad: [
        { id: 11, trainName: 'Hyderabad - Kolhapur Express', departure: '21:10', arrival: '07:30 ', duration: '10h 20m', price: 2200, trainNo: '11303', via: 'Hospet' },
        { id: 12, trainName: 'Hyderabad - Vijayapura Express', departure: '20:45', arrival: '06:45 ', duration: '10h', price: 2100, trainNo: '17031', via: 'Hospet' }
    ],
    kanpur: [
        { id: 13, trainName: 'Goa Express', departure: '16:30', arrival: '05:45 ', duration: '37h 15m', price: 3300, trainNo: '12779', via: 'Delhi' },
        { id: 14, trainName: 'Karnataka Express', departure: '21:15', arrival: '11:00 ', duration: '37h 45m', price: 3400, trainNo: '12628', via: 'Bangalore' }
    ],
    surat: [
        { id: 15, trainName: 'Surat - Hospet Express', departure: '19:30', arrival: '11:45 ', duration: '16h 15m', price: 2900, trainNo: '19667', via: 'Mumbai' },
        { id: 16, trainName: 'Mumbai CSMT - Hubli Express', departure: '20:30', arrival: '10:45 ', duration: '14h 15m', price: 2800, trainNo: '17318', via: 'Pune' }
    ],
    indore: [
        { id: 17, trainName: 'Indore - Yesvantpur Express', departure: '18:30', arrival: '11:00 ', duration: '40h 30m', price: 3500, trainNo: '19301', via: 'Bangalore' },
        { id: 18, trainName: 'Rajkot - Secunderabad Express', departure: '22:45', arrival: '15:30 ', duration: '16h 45m', price: 3000, trainNo: '17017', via: 'Hospet' }
    ],
    aurangabad: [
        { id: 19, trainName: 'Hazur Sahib Nanded - Bangalore Express', departure: '16:45', arrival: '09:30 ', duration: '16h 45m', price: 2800, trainNo: '16593', via: 'Pune' },
        { id: 20, trainName: 'Aurangabad - Renigunta Express', departure: '21:30', arrival: '12:15 ', duration: '14h 45m', price: 2700, trainNo: '17621', via: 'Hospet' }
    ],
    coimbatore: [
        { id: 21, trainName: 'Coimbatore - Hubli Express', departure: '20:15', arrival: '10:30 ', duration: '14h 15m', price: 2900, trainNo: '22698', via: 'Bangalore' },
        { id: 22, trainName: 'Kongu Express', departure: '16:45', arrival: '06:15 ', duration: '13h 30m', price: 2800, trainNo: '12647', via: 'Hospet' }
    ],
    madurai: [
        { id: 23, trainName: 'Madurai - Yesvantpur Express', departure: '14:30', arrival: '06:30 ', duration: '16h', price: 3100, trainNo: '16568', via: 'Bangalore' },
        { id: 24, trainName: 'Tuticorin - Mysuru Express', departure: '18:45', arrival: '09:45 ', duration: '15h', price: 3000, trainNo: '16236', via: 'Hospet' }
    ],
    visakhapatnam: [
        { id: 25, trainName: 'Visakhapatnam - Vasco Da Gama Express', departure: '08:30', arrival: '21:00 ', duration: '36h 30m', price: 4000, trainNo: '18519', via: 'Hospet' },
        { id: 26, trainName: 'Visakhapatnam - Hubli Express', departure: '20:15', arrival: '10:45 ', duration: '14h 30m', price: 3900, trainNo: '18597', via: 'Bangalore' }
    ],
    vijayawada: [
        { id: 27, trainName: 'Vijayawada - Hubli Express', departure: '19:00', arrival: '10:00 ', duration: '15h', price: 3500, trainNo: '17415', via: 'Hospet' },
        { id: 28, trainName: 'Vijayawada - Vasco Da Gama Express', departure: '22:30', arrival: '12:45 ', duration: '14h 15m', price: 3400, trainNo: '17419', via: 'Hubli' }
    ],
    vadodara: [
        { id: 29, trainName: 'Vadodara - Hubli Express', departure: '15:15', arrival: '07:30 ', duration: '16h 15m', price: 3600, trainNo: '16589', via: 'Mumbai' },
        { id: 30, trainName: 'Surat - Hospet Express', departure: '18:45', arrival: '09:45 ', duration: '15h', price: 3500, trainNo: '19667', via: 'Pune' }
    ],
    gwalior: [
        { id: 31, trainName: 'Goa Express', departure: '17:00', arrival: '06:45 ', duration: '37h 45m', price: 4000, trainNo: '12779', via: 'Delhi' },
        { id: 32, trainName: 'Sampark Kranti Express', departure: '20:30', arrival: '10:30 ', duration: '38h', price: 3900, trainNo: '12630', via: 'Hyderabad' }
    ],
    amritsar: [
        { id: 33, trainName: 'Goa Express', departure: '15:45', arrival: '07:30 ', duration: '39h 45m', price: 4200, trainNo: '12779', via: 'Delhi' },
        { id: 34, trainName: 'Amritsar - Vasco Da Gama Express', departure: '18:30', arrival: '09:45 ', duration: '39h 15m', price: 4100, trainNo: '17321', via: 'Bangalore' }
    ],
    vadodara: [
        { id: 35, trainName: 'Vadodara - Hubli Express', departure: '14:30', arrival: '06:30 ', duration: '16h', price: 3700, trainNo: '16589', via: 'Mumbai' },
        { id: 36, trainName: 'Surat - Hospet Express', departure: '17:45', arrival: '09:45 ', duration: '16h', price: 3600, trainNo: '19667', via: 'Pune' }
    ],
    ludhiana: [
        { id: 37, trainName: 'Goa Express', departure: '18:30', arrival: '10:00 ', duration: '39h 30m', price: 4100, trainNo: '12779', via: 'Delhi' },
        { id: 38, trainName: 'Sampark Kranti Express', departure: '20:00', arrival: '11:00 ', duration: '39h', price: 4000, trainNo: '12630', via: 'Hyderabad' }
    ],
    kochi: [
        { id: 39, trainName: 'Kerala Express', departure: '15:15', arrival: '07:30 ', duration: '16h 15m', price: 3900, trainNo: '12625', via: 'Bangalore' },
        { id: 40, trainName: 'Kochi - Hubli Express', departure: '17:45', arrival: '09:30 ', duration: '15h 45m', price: 3800, trainNo: '16526', via: 'Hospet' }
    ],
    mysore: [
        { id: 41, trainName: 'Mysore - Hubli Express', departure: '20:30', arrival: '07:00 ', duration: '10h 30m', price: 2500, trainNo: '17302', via: 'Hospet' },
        { id: 42, trainName: 'Karnataka Express', departure: '18:45', arrival: '06:30 ', duration: '11h 45m', price: 2400, trainNo: '12627', via: 'Bangalore' }
    ],
    mangalore: [
        { id: 43, trainName: 'Mangalore - Hubli Express', departure: '14:15', arrival: '06:00 ', duration: '15h 45m', price: 3200, trainNo: '16575', via: 'Bangalore' },
        { id: 44, trainName: 'Mangalore - Vasco Express', departure: '19:30', arrival: '10:00 ', duration: '14h 30m', price: 3100, trainNo: '17310', via: 'Hospet' }
    ],
    ahmedabad: [
        { id: 45, trainName: 'Ahmedabad - Hubli Express', departure: '16:45', arrival: '09:00 ', duration: '16h 15m', price: 3900, trainNo: '16587', via: 'Mumbai' },
        { id: 46, trainName: 'Ahmedabad - Vasco Da Gama Express', departure: '21:00', arrival: '11:45 ', duration: '14h 45m', price: 3800, trainNo: '17306', via: 'Hospet' }
    ],
    pune: [
        { id: 47, trainName: 'Pune - Hubli Express', departure: '19:00', arrival: '08:00 ', duration: '13h', price: 3500, trainNo: '17317', via: 'Hospet' },
        { id: 48, trainName: 'Pune - Vasco Da Gama Express', departure: '22:30', arrival: '11:30 ', duration: '13h', price: 3400, trainNo: '11099', via: 'Hubli' }
    ],
    srinagar: [
        { id: 49, trainName: 'Jammu - Vasco Express', departure: '16:00', arrival: '06:30 ', duration: '62h 30m', price: 5000, trainNo: '17322', via: 'Delhi' },
        { id: 50, trainName: 'Shri Shakti Express', departure: '18:45', arrival: '07:15 ', duration: '60h 30m', price: 4900, trainNo: '22461', via: 'Hyderabad' }
    ],
    nagpur: [
        { id: 51, trainName: 'Nagpur - Vasco Da Gama Express', departure: '17:30', arrival: '07:30 ', duration: '14h', price: 3200, trainNo: '12741', via: 'Hospet' },
        { id: 52, trainName: 'Nagpur - Hubli Express', departure: '20:30', arrival: '10:30 ', duration: '14h', price: 3100, trainNo: '12755', via: 'Hubli' }
    ],
    varanasi: [
        { id: 53, trainName: 'Varanasi - Vasco Da Gama Express', departure: '15:45', arrival: '06:45 ', duration: '39h', price: 4200, trainNo: '17324', via: 'Delhi' },
        { id: 54, trainName: 'Banaras - Hubli Express', departure: '19:30', arrival: '09:30 ', duration: '38h', price: 4100, trainNo: '17334', via: 'Hyderabad' }
    ]
};

let currentPackageType = null;
const destination = 'Hampi';

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
                        <span class="city">Hubli</span>
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
                        <span class="city">Hampi</span>
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
                        <span class="city">Hampi</span>
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
                    <span class="city">Hampi</span>
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
                    <span class="city">Hampi</span>
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
                <span>From: ${flightType === 'outbound' ? fromCity : 'Hampi'}</span>
                <span>To: ${flightType === 'outbound' ? 'Hampi' : fromCity}</span>
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

// Hotel data for different packages in Hampi
const hotelData = {
    premium: [
        {
            name: "Evolve Back Hampi",
            rating: 5,
            price: 30000,
            features: ["Luxury Suites", "Private Pool", "Ayurvedic Spa", "Fine Dining"],
            distance: "5km from Virupaksha Temple",
            image: "../static/images/hotels/evolve-back-hampi.jpg"
        },
        {
            name: "Heritage Resort Hampi",
            rating: 5,
            price: 28000,
            features: ["Cottage-Style Villas", "Swimming Pool", "Yoga & Meditation", "Multi-Cuisine Restaurant"],
            distance: "6km from Hampi Bazaar",
            image: "../static/images/hotels/heritage-resort-hampi.jpg"
        },
        {
            name: "Hyatt Place Hampi",
            rating: 5,
            price: 26000,
            features: ["Modern Rooms", "Business Center", "Gym & Pool", "Luxury Dining"],
            distance: "12km from Hampi Ruins",
            image: "../static/images/hotels/hyatt-hampi.jpg"
        }
    ],
    gold: [
        {
            name: "Clark’s Inn Hampi",
            rating: 4,
            price: 14000,
            features: ["Spacious Rooms", "Restaurant & Bar", "Fitness Center", "Free Wi-Fi"],
            distance: "3km from Virupaksha Temple",
            image: "../static/images/hotels/clarks-inn-hampi.jpg"
        },
        {
            name: "Royal Orchid Central Kireeti",
            rating: 4,
            price: 13000,
            features: ["Elegant Interiors", "Swimming Pool", "Multi-Cuisine Restaurant", "Conference Facilities"],
            distance: "Hospet (10km from Hampi)",
            image: "../static/images/hotels/royal-orchid-hampi.jpg"
        },
        {
            name: "Hotel Malligi",
            rating: 4,
            price: 12000,
            features: ["Budget Luxury", "Spa & Wellness", "Outdoor Pool", "Multiple Dining Options"],
            distance: "Hospet (9km from Hampi)",
            image: "../static/images/hotels/malligi-hampi.jpg"
        }
    ],
    silver: [
        {
            name: "KSTDC Mayura Bhuvaneshwari",
            rating: 3,
            price: 8000,
            features: ["Simple & Clean Rooms", "Basic Amenities", "Near Heritage Sites", "On-Site Restaurant"],
            distance: "Kamalapur (3km from Hampi)",
            image: "../static/images/hotels/mayura-hampi.jpg"
        },
        {
            name: "Padma Guest House",
            rating: 3,
            price: 7500,
            features: ["Budget-Friendly", "Family Atmosphere", "Close to Hampi Bazaar", "Free Wi-Fi"],
            distance: "Hampi Bazaar Area",
            image: "../static/images/hotels/padma-guest-house.jpg"
        },
        {
            name: "Gopi Guest House",
            rating: 3,
            price: 7000,
            features: ["Scenic Rooftop Restaurant", "Budget Stay", "Close to Virupaksha Temple", "Local Cultural Vibes"],
            distance: "Near Virupaksha Temple, Hampi",
            image: "../static/images/hotels/gopi-guest-house.jpg"
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
        const fromLocation = type === 'outbound' ? fromCity : 'Hampi';
        const toLocation = type === 'outbound' ? 'Hampi' : fromCity;

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