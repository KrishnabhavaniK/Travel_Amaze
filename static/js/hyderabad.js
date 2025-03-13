// Package details object
const packageDetails = {
    premium: {
        name: 'Premium Package',
        price: 35000,
        features: [
            'Luxury Flight Travel',
            '5-Star Hotel Accommodation in Hyderabad',
            'Private Tour Guide',
            'All Hyderabadi Cuisine Meals Included',
            'Priority Access to Charminar, Golconda Fort & Cultural Shows'
        ]
    },
    gold: {
        name: 'Gold Package',
        price: 25000,
        features: [
            'AC Bus Travel',
            '4-Star Resort Stay in Hyderabad',
            'Expert Local Guide',
            'Hyderabadi Breakfast & Dinner',
            'Standard Access to Tourist Spots'
        ]
    },
    silver: {
        name: 'Silver Package',
        price: 15000,
        features: [
            'Train Travel (AC Class)',
            '3-Star Hotel in Hyderabad',
            'Group Tour Guide',
            'Hyderabadi Breakfast Only',
            'Basic Sightseeing Package'
        ]
    }
};

// Updated flight data with more cities and routes
const flightData = {
    delhi: [
        { id: 1, airline: 'IndiGo', departure: '06:00', arrival: '08:15', duration: '2h 15m', price: 5800, flightNo: '6E-201' },
        { id: 2, airline: 'Air India', departure: '14:00', arrival: '16:20', duration: '2h 20m', price: 6000, flightNo: 'AI-345' }
    ],
    mumbai: [
        { id: 3, airline: 'Vistara', departure: '09:30', arrival: '11:45', duration: '2h 15m', price: 5000, flightNo: 'UK-567' },
        { id: 4, airline: 'IndiGo', departure: '18:00', arrival: '20:15', duration: '2h 15m', price: 5200, flightNo: '6E-789' }
    ],
    bangalore: [
        { id: 5, airline: 'Air India', departure: '07:15', arrival: '08:45', duration: '1h 30m', price: 4500, flightNo: 'AI-456' },
        { id: 6, airline: 'SpiceJet', departure: '19:00', arrival: '20:30', duration: '1h 30m', price: 4700, flightNo: 'SG-321' }
    ],
    chennai: [
        { id: 7, airline: 'IndiGo', departure: '10:30', arrival: '12:00', duration: '1h 30m', price: 4800, flightNo: '6E-234' },
        { id: 8, airline: 'Vistara', departure: '21:00', arrival: '22:30', duration: '1h 30m', price: 5000, flightNo: 'UK-678' }
    ],
    kolkata: [
        { id: 9, airline: 'Air India', departure: '06:45', arrival: '09:15', duration: '2h 30m', price: 6500, flightNo: 'AI-567' },
        { id: 10, airline: 'SpiceJet', departure: '15:30', arrival: '18:00', duration: '2h 30m', price: 6700, flightNo: 'SG-789' }
    ],
    kanpur: [
        { id: 11, airline: 'IndiGo', departure: '08:30', arrival: '10:00', duration: '1h 30m', price: 5000, flightNo: '6E-456' },
        { id: 12, airline: 'Vistara', departure: '19:30', arrival: '21:00', duration: '1h 30m', price: 5200, flightNo: 'UK-123' }
    ],
    surat: [
        { id: 13, airline: 'Air India', departure: '09:00', arrival: '11:30', duration: '2h 30m', price: 7000, flightNo: 'AI-890' },
        { id: 14, airline: 'SpiceJet', departure: '16:45', arrival: '19:15', duration: '2h 30m', price: 7200, flightNo: 'SG-654' }
    ],
    indore: [
        { id: 15, airline: 'IndiGo', departure: '07:45', arrival: '09:15', duration: '1h 30m', price: 4900, flightNo: '6E-876' },
        { id: 16, airline: 'Vistara', departure: '17:15', arrival: '18:45', duration: '1h 30m', price: 5100, flightNo: 'UK-432' }
    ],
    aurangabad: [
        { id: 17, airline: 'IndiGo', departure: '07:00', arrival: '08:30', duration: '1h 30m', price: 4800, flightNo: '6E-234' },
        { id: 18, airline: 'SpiceJet', departure: '19:45', arrival: '21:15', duration: '1h 30m', price: 5000, flightNo: 'SG-567' }
    ],
    coimbatore: [
        { id: 19, airline: 'Vistara', departure: '06:15', arrival: '07:45', duration: '1h 30m', price: 4500, flightNo: 'UK-890' },
        { id: 20, airline: 'Air India', departure: '20:30', arrival: '22:00', duration: '1h 30m', price: 4700, flightNo: 'AI-123' }
    ],
    madurai: [
        { id: 21, airline: 'IndiGo', departure: '08:30', arrival: '10:00', duration: '1h 30m', price: 4600, flightNo: '6E-678' },
        { id: 22, airline: 'SpiceJet', departure: '18:45', arrival: '20:15', duration: '1h 30m', price: 4800, flightNo: 'SG-901' }
    ],
    visakhapatnam: [
        { id: 23, airline: 'Air India', departure: '07:45', arrival: '09:15', duration: '1h 30m', price: 5200, flightNo: 'AI-456' },
        { id: 24, airline: 'Vistara', departure: '19:30', arrival: '21:00', duration: '1h 30m', price: 5400, flightNo: 'UK-789' }
    ],
    vijayawada: [
        { id: 25, airline: 'IndiGo', departure: '06:45', arrival: '08:15', duration: '1h 30m', price: 4300, flightNo: '6E-123' },
        { id: 26, airline: 'SpiceJet', departure: '17:15', arrival: '18:45', duration: '1h 30m', price: 4500, flightNo: 'SG-567' }
    ],
    vadodara: [
        { id: 27, airline: 'Air India', departure: '09:00', arrival: '11:00', duration: '2h', price: 5500, flightNo: 'AI-789' },
        { id: 28, airline: 'IndiGo', departure: '20:30', arrival: '22:30', duration: '2h', price: 5700, flightNo: '6E-890' }
    ],
    gwalior: [
        { id: 29, airline: 'IndiGo', departure: '07:15', arrival: '09:15', duration: '2h', price: 6000, flightNo: '6E-234' },
        { id: 30, airline: 'Vistara', departure: '19:45', arrival: '21:45', duration: '2h', price: 6200, flightNo: 'UK-567' }
    ],
    amritsar: [
        { id: 31, airline: 'SpiceJet', departure: '06:30', arrival: '09:00', duration: '2h 30m', price: 6800, flightNo: 'SG-890' },
        { id: 32, airline: 'Air India', departure: '21:00', arrival: '23:30', duration: '2h 30m', price: 7000, flightNo: 'AI-345' }
    ],
    vadodara: [
        { id: 33, airline: 'IndiGo', departure: '07:30', arrival: '09:30', duration: '2h', price: 5500, flightNo: '6E-789' },
        { id: 34, airline: 'SpiceJet', departure: '20:15', arrival: '22:15', duration: '2h', price: 5700, flightNo: 'SG-456' }
    ],
    ludhiana: [
        { id: 35, airline: 'Air India', departure: '06:45', arrival: '09:15', duration: '2h 30m', price: 6000, flightNo: 'AI-234' },
        { id: 36, airline: 'Vistara', departure: '19:30', arrival: '22:00', duration: '2h 30m', price: 6200, flightNo: 'UK-567' }
    ],
    kochi: [
        { id: 37, airline: 'IndiGo', departure: '08:00', arrival: '09:30', duration: '1h 30m', price: 4900, flightNo: '6E-890' },
        { id: 38, airline: 'SpiceJet', departure: '21:00', arrival: '22:30', duration: '1h 30m', price: 5100, flightNo: 'SG-901' }
    ],
    mysore: [
        { id: 39, airline: 'Air India', departure: '07:15', arrival: '08:45', duration: '1h 30m', price: 4600, flightNo: 'AI-678' },
        { id: 40, airline: 'Vistara', departure: '19:45', arrival: '21:15', duration: '1h 30m', price: 4800, flightNo: 'UK-345' }
    ],
    mangalore: [
        { id: 41, airline: 'IndiGo', departure: '06:30', arrival: '08:00', duration: '1h 30m', price: 4500, flightNo: '6E-567' },
        { id: 42, airline: 'SpiceJet', departure: '18:15', arrival: '19:45', duration: '1h 30m', price: 4700, flightNo: 'SG-234' }
    ],
    ahmedabad: [
        { id: 43, airline: 'Air India', departure: '09:00', arrival: '11:00', duration: '2h', price: 5300, flightNo: 'AI-123' },
        { id: 44, airline: 'IndiGo', departure: '20:30', arrival: '22:30', duration: '2h', price: 5500, flightNo: '6E-678' }
    ],
    pune: [
        { id: 45, airline: 'Vistara', departure: '07:30', arrival: '09:00', duration: '1h 30m', price: 5000, flightNo: 'UK-789' },
        { id: 46, airline: 'SpiceJet', departure: '19:15', arrival: '20:45', duration: '1h 30m', price: 5200, flightNo: 'SG-901' }
    ],
    srinagar: [
        { id: 47, airline: 'IndiGo', departure: '09:45', arrival: '12:15', duration: '2h 30m', price: 6200, flightNo: '6E-890' },
        { id: 48, airline: 'Air India', departure: '22:30', arrival: '01:00', duration: '2h 30m', price: 6400, flightNo: 'AI-345' }
    ],
    nagpur: [
        { id: 49, airline: 'IndiGo', departure: '06:15', arrival: '07:45', duration: '1h 30m', price: 4700, flightNo: '6E-234' },
        { id: 50, airline: 'Vistara', departure: '20:00', arrival: '21:30', duration: '1h 30m', price: 4900, flightNo: 'UK-567' }
    ],
    varanasi: [
        { id: 51, airline: 'SpiceJet', departure: '07:00', arrival: '09:30', duration: '2h 30m', price: 5700, flightNo: 'SG-678' },
        { id: 52, airline: 'Air India', departure: '19:30', arrival: '22:00', duration: '2h 30m', price: 5900, flightNo: 'AI-901' }
    ]
};


// Sample bus data with all cities
const busData = {
    delhi: [
        { id: 1, operator: 'VRL Travels', departure: '14:00', arrival: '08:30 (2 Days Later)', duration: '42h 30m', price: 4800, busNo: 'VRL-101', via: 'Nagpur' },
        { id: 2, operator: 'SRS Travels', departure: '18:00', arrival: '12:00 (2 Days Later)', duration: '42h', price: 4700, busNo: 'SRS-234', via: 'Bhopal' }
    ],
    mumbai: [
        { id: 3, operator: 'VRL Travels', departure: '16:00', arrival: '08:00 (Next Day)', duration: '16h', price: 2500, busNo: 'VRL-456', via: 'Pune' },
        { id: 4, operator: 'Orange Travels', departure: '19:30', arrival: '11:45 (Next Day)', duration: '16h 15m', price: 2600, busNo: 'OT-789', via: 'Solapur' }
    ],
    bangalore: [
        { id: 5, operator: 'SRS Travels', departure: '22:00', arrival: '06:00 (Next Day)', duration: '8h', price: 1200, busNo: 'SRS-678', via: 'Anantapur' },
        { id: 6, operator: 'VRL Travels', departure: '23:30', arrival: '07:30 (Next Day)', duration: '8h', price: 1300, busNo: 'VRL-890', via: 'Kurnool' }
    ],
    chennai: [
        { id: 7, operator: 'Parveen Travels', departure: '20:00', arrival: '07:30 (Next Day)', duration: '11h 30m', price: 2200, busNo: 'PT-901', via: 'Nellore' },
        { id: 8, operator: 'KPN Travels', departure: '21:30', arrival: '08:30 (Next Day)', duration: '11h', price: 2300, busNo: 'KPN-234', via: 'Tirupati' }
    ],
    kolkata: [
        { id: 9, operator: 'Royal Cruiser', departure: '15:00', arrival: '12:00 (2 Days Later)', duration: '45h', price: 5500, busNo: 'RC-567', via: 'Nagpur' },
        { id: 10, operator: 'GreenLine Travels', departure: '17:30', arrival: '15:30 (2 Days Later)', duration: '46h', price: 5400, busNo: 'GL-678', via: 'Bhubaneswar' }
    ],
    hyderabad: [
        { id: 11, operator: 'TSRTC', departure: '20:00', arrival: '06:00 (Next Day)', duration: '10h', price: 1800, busNo: 'TSRTC-789', via: 'Karimnagar' },
        { id: 12, operator: 'VRL Travels', departure: '21:30', arrival: '07:30 (Next Day)', duration: '10h', price: 1900, busNo: 'VRL-890', via: 'Warangal' }
    ],
    kanpur: [
        { id: 13, operator: 'UPSRTC Volvo', departure: '14:30', arrival: '12:30 (2 Days Later)', duration: '46h', price: 5200, busNo: 'UPSRTC-345', via: 'Nagpur' },
        { id: 14, operator: 'Raj Ratan Travels', departure: '16:45', arrival: '14:30 (2 Days Later)', duration: '45h 45m', price: 5100, busNo: 'RRT-567', via: 'Bhopal' }
    ],
    surat: [
        { id: 15, operator: 'Shrinath Travels', departure: '18:30', arrival: '10:30 (Next Day)', duration: '16h', price: 2700, busNo: 'ST-789', via: 'Pune' },
        { id: 16, operator: 'Mahavat Travels', departure: '20:00', arrival: '12:00 (Next Day)', duration: '16h', price: 2800, busNo: 'MT-890', via: 'Solapur' }
    ],
    indore: [
        { id: 17, operator: 'Hans Travels', departure: '19:30', arrival: '12:30 (Next Day)', duration: '17h', price: 2900, busNo: 'HT-901', via: 'Nagpur' },
        { id: 18, operator: 'Chartered Bus', departure: '21:00', arrival: '14:00 (Next Day)', duration: '17h', price: 3000, busNo: 'CB-123', via: 'Bhopal' }
    ],
    aurangabad: [
        { id: 19, operator: 'VRL Travels', departure: '16:00', arrival: '06:00 (Next Day)', duration: '14h', price: 2800, busNo: 'VRL-111', via: 'Solapur' },
        { id: 20, operator: 'SRS Travels', departure: '18:30', arrival: '08:30 (Next Day)', duration: '14h', price: 2900, busNo: 'SRS-222', via: 'Pune' }
    ],
    coimbatore: [
        { id: 21, operator: 'KPN Travels', departure: '19:30', arrival: '09:30 (Next Day)', duration: '14h', price: 2500, busNo: 'KPN-333', via: 'Bangalore' },
        { id: 22, operator: 'GreenLine Travels', departure: '20:45', arrival: '10:45 (Next Day)', duration: '14h', price: 2600, busNo: 'GL-444', via: 'Chennai' }
    ],
    madurai: [
        { id: 23, operator: 'Parveen Travels', departure: '17:00', arrival: '07:00 (Next Day)', duration: '14h', price: 2700, busNo: 'PT-555', via: 'Chennai' },
        { id: 24, operator: 'SRS Travels', departure: '20:30', arrival: '10:30 (Next Day)', duration: '14h', price: 2800, busNo: 'SRS-666', via: 'Bangalore' }
    ],
    visakhapatnam: [
        { id: 25, operator: 'Orange Travels', departure: '16:00', arrival: '06:00 (Next Day)', duration: '14h', price: 3200, busNo: 'OT-777', via: 'Rajahmundry' },
        { id: 26, operator: 'VRL Travels', departure: '22:00', arrival: '10:00 (Next Day)', duration: '12h', price: 3300, busNo: 'VRL-888', via: 'Vijayawada' }
    ],
    vijayawada: [
        { id: 27, operator: 'APSRTC', departure: '20:00', arrival: '06:00 (Next Day)', duration: '10h', price: 2200, busNo: 'APSRTC-999', via: 'Nalgonda' },
        { id: 28, operator: 'Kaveri Travels', departure: '21:30', arrival: '07:30 (Next Day)', duration: '10h', price: 2300, busNo: 'KT-101', via: 'Warangal' }
    ],
    vadodara: [
        { id: 29, operator: 'GSRTC Volvo', departure: '17:30', arrival: '10:30 (Next Day)', duration: '17h', price: 3200, busNo: 'GSRTC-202', via: 'Mumbai' },
        { id: 30, operator: 'Shrinath Travels', departure: '20:30', arrival: '12:30 (Next Day)', duration: '16h', price: 3300, busNo: 'ST-303', via: 'Pune' }
    ],
    gwalior: [
        { id: 31, operator: 'Hans Travels', departure: '19:00', arrival: '12:30 (Next Day)', duration: '17h 30m', price: 3500, busNo: 'HT-404', via: 'Bhopal' },
        { id: 32, operator: 'Chartered Bus', departure: '22:00', arrival: '13:30 (Next Day)', duration: '15h 30m', price: 3400, busNo: 'CB-505', via: 'Nagpur' }
    ],
    amritsar: [
        { id: 33, operator: 'Royal Travels', departure: '16:30', arrival: '12:30 (2 Days Later)', duration: '42h', price: 5500, busNo: 'RT-606', via: 'Delhi' },
        { id: 34, operator: 'GreenLine Travels', departure: '20:30', arrival: '14:30 (2 Days Later)', duration: '42h', price: 5400, busNo: 'GL-707', via: 'Nagpur' }
    ],
    vadodara: [
        { id: 35, operator: 'VRL Travels', departure: '18:00', arrival: '11:00 (Next Day)', duration: '17h', price: 3200, busNo: 'VRL-111', via: 'Mumbai' },
        { id: 36, operator: 'Shrinath Travels', departure: '21:30', arrival: '13:30 (Next Day)', duration: '16h', price: 3300, busNo: 'ST-222', via: 'Pune' }
    ],
    ludhiana: [
        { id: 37, operator: 'PEPSU Roadways', departure: '16:30', arrival: '10:30 (2 Days Later)', duration: '42h', price: 5700, busNo: 'PRTC-333', via: 'Delhi' },
        { id: 38, operator: 'Royal Travels', departure: '21:00', arrival: '12:30 (2 Days Later)', duration: '41h 30m', price: 5800, busNo: 'RT-444', via: 'Nagpur' }
    ],
    kochi: [
        { id: 39, operator: 'KSRTC', departure: '19:00', arrival: '09:00 (Next Day)', duration: '14h', price: 3100, busNo: 'KSRTC-555', via: 'Bangalore' },
        { id: 40, operator: 'SRS Travels', departure: '21:30', arrival: '11:30 (Next Day)', duration: '14h', price: 3200, busNo: 'SRS-666', via: 'Chennai' }
    ],
    mysore: [
        { id: 41, operator: 'KSRTC', departure: '17:00', arrival: '05:00 (Next Day)', duration: '12h', price: 2800, busNo: 'KSRTC-777', via: 'Anantapur' },
        { id: 42, operator: 'VRL Travels', departure: '19:30', arrival: '07:30 (Next Day)', duration: '12h', price: 2900, busNo: 'VRL-888', via: 'Kurnool' }
    ],
    mangalore: [
        { id: 43, operator: 'Durgamba Motors', departure: '18:00', arrival: '08:00 (Next Day)', duration: '14h', price: 3500, busNo: 'DM-999', via: 'Bangalore' },
        { id: 44, operator: 'Sugama Travels', departure: '20:30', arrival: '10:30 (Next Day)', duration: '14h', price: 3600, busNo: 'ST-101', via: 'Anantapur' }
    ],
    ahmedabad: [
        { id: 45, operator: 'GSRTC Volvo', departure: '16:45', arrival: '09:45 (Next Day)', duration: '17h', price: 3500, busNo: 'GSRTC-202', via: 'Mumbai' },
        { id: 46, operator: 'VRL Travels', departure: '20:30', arrival: '11:30 (Next Day)', duration: '15h', price: 3600, busNo: 'VRL-303', via: 'Pune' }
    ],
    pune: [
        { id: 47, operator: 'MSRTC Shivneri', departure: '18:30', arrival: '06:30 (Next Day)', duration: '12h', price: 3100, busNo: 'MSRTC-404', via: 'Solapur' },
        { id: 48, operator: 'National Travels', departure: '21:00', arrival: '09:00 (Next Day)', duration: '12h', price: 3200, busNo: 'NT-505', via: 'Nanded' }
    ],
    srinagar: [
        { id: 49, operator: 'JKSRTC', departure: '17:00', arrival: '13:00 (2 Days Later)', duration: '44h', price: 5900, busNo: 'JKSRTC-606', via: 'Delhi' },
        { id: 50, operator: 'Luxury Travels', departure: '20:30', arrival: '15:30 (2 Days Later)', duration: '43h', price: 6000, busNo: 'LT-707', via: 'Nagpur' }
    ],
    nagpur: [
        { id: 51, operator: 'Hans Travels', departure: '19:30', arrival: '07:30 (Next Day)', duration: '12h', price: 3200, busNo: 'HT-808', via: 'Nizamabad' },
        { id: 52, operator: 'Orange Travels', departure: '21:30', arrival: '09:30 (Next Day)', duration: '12h', price: 3300, busNo: 'OT-909', via: 'Nanded' }
    ],
    varanasi: [
        { id: 53, operator: 'UPSRTC Volvo', departure: '16:15', arrival: '12:15 (2 Days Later)', duration: '44h', price: 5600, busNo: 'UPSRTC-101', via: 'Nagpur' },
        { id: 54, operator: 'Raj Ratan Travels', departure: '19:45', arrival: '14:45 (2 Days Later)', duration: '43h', price: 5700, busNo: 'RRT-202', via: 'Bhopal' }
    ]
};


// Sample train data with all cities
const trainData = {
    delhi: [
        { id: 1, trainName: 'Dakshin Express', departure: '22:50', arrival: '05:00 (2 Days Later)', duration: '30h 10m', price: 3200, trainNo: '12722', via: 'Nagpur' },
        { id: 2, trainName: 'Telangana Express', departure: '16:00', arrival: '17:50 (Next Day)', duration: '25h 50m', price: 3400, trainNo: '12724', via: 'Bhopal' }
    ],
    mumbai: [
        { id: 3, trainName: 'Devagiri Express', departure: '21:35', arrival: '10:45 (Next Day)', duration: '13h 10m', price: 2600, trainNo: '17058', via: 'Aurangabad' },
        { id: 4, trainName: 'LTT - Secunderabad Duronto', departure: '23:05', arrival: '11:05 (Next Day)', duration: '12h', price: 2800, trainNo: '12219', via: 'Pune' }
    ],
    bangalore: [
        { id: 5, trainName: 'Kacheguda Express', departure: '19:20', arrival: '05:50 (Next Day)', duration: '10h 30m', price: 2100, trainNo: '12786', via: 'Kurnool' },
        { id: 6, trainName: 'Bangalore - Hyderabad SF Express', departure: '20:00', arrival: '06:30 (Next Day)', duration: '10h 30m', price: 2200, trainNo: '12603', via: 'Anantapur' }
    ],
    chennai: [
        { id: 7, trainName: 'Charminar Express', departure: '18:10', arrival: '08:10 (Next Day)', duration: '14h', price: 2800, trainNo: '12759', via: 'Nellore' },
        { id: 8, trainName: 'Chennai - Hyderabad Express', departure: '20:00', arrival: '09:30 (Next Day)', duration: '13h 30m', price: 2700, trainNo: '12603', via: 'Vijayawada' }
    ],
    kolkata: [
        { id: 9, trainName: 'East Coast Express', departure: '11:45', arrival: '18:30 (Next Day)', duration: '30h 45m', price: 4100, trainNo: '18645', via: 'Vijayawada' },
        { id: 10, trainName: 'Falaknuma Express', departure: '07:25', arrival: '09:10 (Next Day)', duration: '25h 45m', price: 3900, trainNo: '12703', via: 'Bhubaneswar' }
    ],
    kanpur: [
        { id: 11, trainName: 'Lucknow - Yesvantpur Express', departure: '16:30', arrival: '07:30 (2 Days Later)', duration: '39h', price: 4200, trainNo: '12591', via: 'Bhopal' },
        { id: 12, trainName: 'Rajdhani Express', departure: '21:15', arrival: '08:30 (Next Day)', duration: '35h 15m', price: 4400, trainNo: '12437', via: 'Nagpur' }
    ],
    surat: [
        { id: 13, trainName: 'Nanded Express', departure: '17:20', arrival: '09:30 (Next Day)', duration: '16h 10m', price: 3100, trainNo: '12755', via: 'Pune' },
        { id: 14, trainName: 'Tapovan Express', departure: '20:30', arrival: '12:00 (Next Day)', duration: '15h 30m', price: 2900, trainNo: '17618', via: 'Aurangabad' }
    ],
    indore: [
        { id: 15, trainName: 'Indore - Hyderabad Express', departure: '18:10', arrival: '10:30 (Next Day)', duration: '16h 20m', price: 3500, trainNo: '19301', via: 'Bhopal' },
        { id: 16, trainName: 'Indore - Secunderabad SF Express', departure: '20:45', arrival: '12:15 (Next Day)', duration: '15h 30m', price: 3400, trainNo: '12792', via: 'Nagpur' }
    ],
    aurangabad: [
        { id: 17, trainName: 'Aurangabad - Hyderabad Express', departure: '18:50', arrival: '08:30 (Next Day)', duration: '13h 40m', price: 2800, trainNo: '17649', via: 'Nanded' },
        { id: 18, trainName: 'Devagiri Express', departure: '21:10', arrival: '10:30 (Next Day)', duration: '13h 20m', price: 2700, trainNo: '17058', via: 'Parbhani' }
    ],
    coimbatore: [
        { id: 19, trainName: 'Coimbatore - Kacheguda Express', departure: '14:20', arrival: '08:30 (Next Day)', duration: '18h 10m', price: 3200, trainNo: '22680', via: 'Bangalore' },
        { id: 20, trainName: 'Kongu Express', departure: '17:00', arrival: '10:30 (Next Day)', duration: '17h 30m', price: 3100, trainNo: '12647', via: 'Chennai' }
    ],
    madurai: [
        { id: 21, trainName: 'Madurai - Kacheguda Express', departure: '18:30', arrival: '11:45 (Next Day)', duration: '17h 15m', price: 2900, trainNo: '17616', via: 'Chennai' },
        { id: 22, trainName: 'Nagercoil - Hyderabad Express', departure: '20:10', arrival: '12:30 (Next Day)', duration: '16h 20m', price: 2800, trainNo: '16354', via: 'Bangalore' }
    ],
    visakhapatnam: [
        { id: 23, trainName: 'Visakhapatnam - Secunderabad Duronto', departure: '20:30', arrival: '06:00 (Next Day)', duration: '9h 30m', price: 2500, trainNo: '12246', via: 'Rajahmundry' },
        { id: 24, trainName: 'East Coast Express', departure: '11:00', arrival: '21:00 (Same Day)', duration: '10h', price: 2400, trainNo: '18645', via: 'Vijayawada' }
    ],
    vijayawada: [
        { id: 25, trainName: 'Vijayawada - Hyderabad SF Express', departure: '21:30', arrival: '05:30 (Next Day)', duration: '8h', price: 2200, trainNo: '12775', via: 'Guntur' },
        { id: 26, trainName: 'Satavahana Express', departure: '16:00', arrival: '23:30 (Same Day)', duration: '7h 30m', price: 2100, trainNo: '12713', via: 'Warangal' }
    ],
    vadodara: [
        { id: 27, trainName: 'Vadodara - Secunderabad Express', departure: '19:20', arrival: '12:45 (Next Day)', duration: '17h 25m', price: 3600, trainNo: '12756', via: 'Mumbai' },
        { id: 28, trainName: 'Tapovan Express', departure: '21:45', arrival: '14:30 (Next Day)', duration: '16h 45m', price: 3500, trainNo: '17618', via: 'Pune' }
    ],
    gwalior: [
        { id: 29, trainName: 'Dakshin Express', departure: '22:30', arrival: '07:30 (2 Days Later)', duration: '33h', price: 3900, trainNo: '12722', via: 'Nagpur' },
        { id: 30, trainName: 'Sampark Kranti Express', departure: '20:00', arrival: '05:45 (2 Days Later)', duration: '33h 45m', price: 3800, trainNo: '12630', via: 'Bhopal' }
    ],
    amritsar: [
        { id: 31, trainName: 'Sachkhand Express', departure: '05:30', arrival: '07:50 (Next Day)', duration: '26h 20m', price: 4200, trainNo: '12716', via: 'Delhi' },
        { id: 32, trainName: 'Amritsar - Kacheguda Express', departure: '08:20', arrival: '11:00 (Next Day)', duration: '26h 40m', price: 4100, trainNo: '12708', via: 'Nagpur' }
    ],
    vadodara: [
        { id: 33, trainName: 'Vadodara - Secunderabad Express', departure: '18:30', arrival: '10:45 (Next Day)', duration: '16h 15m', price: 3500, trainNo: '12756', via: 'Mumbai' },
        { id: 34, trainName: 'Mumbai - Hyderabad Express', departure: '22:15', arrival: '14:30 (Next Day)', duration: '16h 15m', price: 3400, trainNo: '17032', via: 'Pune' }
    ],
    ludhiana: [
        { id: 35, trainName: 'Sachkhand Express', departure: '04:50', arrival: '07:30 (Next Day)', duration: '26h 40m', price: 4200, trainNo: '12716', via: 'Delhi' },
        { id: 36, trainName: 'Amritsar - Kacheguda Express', departure: '07:10', arrival: '10:30 (Next Day)', duration: '27h 20m', price: 4100, trainNo: '12708', via: 'Nagpur' }
    ],
    kochi: [
        { id: 37, trainName: 'Kochi - Hyderabad Express', departure: '15:00', arrival: '07:30 (Next Day)', duration: '16h 30m', price: 3700, trainNo: '12649', via: 'Bangalore' },
        { id: 38, trainName: 'Kerala - Kacheguda Express', departure: '17:20', arrival: '09:50 (Next Day)', duration: '16h 30m', price: 3600, trainNo: '16354', via: 'Chennai' }
    ],
    mysore: [
        { id: 39, trainName: 'Mysore - Kacheguda Express', departure: '18:10', arrival: '08:00 (Next Day)', duration: '13h 50m', price: 3100, trainNo: '17602', via: 'Bangalore' },
        { id: 40, trainName: 'Mysore - Hyderabad Express', departure: '19:30', arrival: '09:15 (Next Day)', duration: '13h 45m', price: 3000, trainNo: '12786', via: 'Anantapur' }
    ],
    mangalore: [
        { id: 41, trainName: 'Mangalore - Kacheguda Express', departure: '16:50', arrival: '09:20 (Next Day)', duration: '16h 30m', price: 3300, trainNo: '17606', via: 'Bangalore' },
        { id: 42, trainName: 'Mangalore - Hyderabad Express', departure: '19:15', arrival: '10:45 (Next Day)', duration: '15h 30m', price: 3200, trainNo: '12648', via: 'Hospet' }
    ],
    ahmedabad: [
        { id: 43, trainName: 'Ahmedabad - Secunderabad Express', departure: '14:30', arrival: '06:15 (Next Day)', duration: '15h 45m', price: 3400, trainNo: '17018', via: 'Mumbai' },
        { id: 44, trainName: 'Ahmedabad - Hyderabad Express', departure: '22:45', arrival: '12:30 (Next Day)', duration: '13h 45m', price: 3300, trainNo: '17020', via: 'Pune' }
    ],
    pune: [
        { id: 45, trainName: 'Pune - Hyderabad Express', departure: '19:00', arrival: '07:15 (Next Day)', duration: '12h 15m', price: 3200, trainNo: '17013', via: 'Solapur' },
        { id: 46, trainName: 'Shatabdi Express', departure: '22:30', arrival: '10:30 (Next Day)', duration: '12h', price: 3100, trainNo: '12025', via: 'Nizamabad' }
    ],
    srinagar: [
        { id: 47, trainName: 'Jammu - Hyderabad Express', departure: '16:00', arrival: '08:30 (3 Days Later)', duration: '64h 30m', price: 5000, trainNo: '17322', via: 'Delhi' },
        { id: 48, trainName: 'Shri Shakti Express', departure: '18:45', arrival: '09:15 (3 Days Later)', duration: '62h 30m', price: 4900, trainNo: '22461', via: 'Nagpur' }
    ],
    nagpur: [
        { id: 49, trainName: 'Nagpur - Hyderabad Express', departure: '17:30', arrival: '07:30 (Next Day)', duration: '14h', price: 3200, trainNo: '12741', via: 'Nizamabad' },
        { id: 50, trainName: 'Nagpur - Secunderabad Express', departure: '20:30', arrival: '10:30 (Next Day)', duration: '14h', price: 3100, trainNo: '12755', via: 'Warangal' }
    ],
    varanasi: [
        { id: 51, trainName: 'Varanasi - Hyderabad Express', departure: '15:45', arrival: '07:45 (2 Days Later)', duration: '40h', price: 4200, trainNo: '17324', via: 'Delhi' },
        { id: 52, trainName: 'Banaras - Secunderabad Express', departure: '19:30', arrival: '09:30 (2 Days Later)', duration: '38h', price: 4100, trainNo: '17334', via: 'Nagpur' }
    ]
};

let currentPackageType = null;
const destination = 'Hyderabad';

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
                        <span class="city">Hyderabad</span>
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
                        <span class="city">Hyderabad</span>
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
                        <span class="city">Hyderabad</span>
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
                    <span class="city">Hyderabad</span>
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
                    <span class="city">Hyderabad</span>
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
                <span>From: ${flightType === 'outbound' ? fromCity : 'Hyderabad'}</span>
                <span>To: ${flightType === 'outbound' ? 'Hyderabad' : fromCity}</span>
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

// Hotel data for different packages in Hyderabad
const hotelData = {
    premium: [
        {
            name: "Taj Falaknuma Palace",
            rating: 5,
            price: 45000,
            features: ["Luxury Heritage Stay", "Royal Dining Experience", "Spa & Wellness", "Palatial Architecture"],
            distance: "4km from Charminar",
            image: "../static/images/hotels/taj-falaknuma.jpg"
        },
        {
            name: "ITC Kohenur",
            rating: 5,
            price: 30000,
            features: ["Luxury Suites", "Infinity Pool", "Multiple Fine Dining Options", "Business Lounge"],
            distance: "HITEC City",
            image: "../static/images/hotels/itc-kohenur.jpg"
        },
        {
            name: "Park Hyatt Hyderabad",
            rating: 5,
            price: 28000,
            features: ["Modern Luxury", "Wellness Spa", "Outdoor Pool", "Fine Dining Restaurants"],
            distance: "Banjara Hills",
            image: "../static/images/hotels/park-hyatt.jpg"
        }
    ],
    gold: [
        {
            name: "Trident Hyderabad",
            rating: 4,
            price: 15000,
            features: ["Business & Leisure Stay", "Pool & Gym", "Premium Rooms", "Multi-Cuisine Restaurant"],
            distance: "HITEC City",
            image: "../static/images/hotels/trident-hyderabad.jpg"
        },
        {
            name: "Novotel Hyderabad Convention Centre",
            rating: 4,
            price: 14000,
            features: ["Convention & Business Hotel", "Outdoor Pool", "Spacious Rooms", "24/7 Dining"],
            distance: "HITEC City",
            image: "../static/images/hotels/novotel-hyderabad.jpg"
        },
        {
            name: "Marriott Hotel & Convention Centre",
            rating: 4,
            price: 13000,
            features: ["Lake View Rooms", "Spa & Pool", "Luxury Dining", "Business Center"],
            distance: "Hussain Sagar Lake",
            image: "../static/images/hotels/marriott-hyderabad.jpg"
        }
    ],
    silver: [
        {
            name: "The Golkonda Hotel",
            rating: 3,
            price: 8000,
            features: ["Comfortable Rooms", "Swimming Pool", "Fitness Center", "Multi-Cuisine Restaurant"],
            distance: "Masab Tank",
            image: "../static/images/hotels/golkonda-hyderabad.jpg"
        },
        {
            name: "Minerva Grand",
            rating: 3,
            price: 7500,
            features: ["Budget-Friendly", "Modern Rooms", "24/7 Room Service", "Conference Facilities"],
            distance: "Secunderabad",
            image: "../static/images/hotels/minerva-grand.jpg"
        },
        {
            name: "Hotel Baseraa",
            rating: 3,
            price: 7000,
            features: ["Budget Stay", "Family-Friendly", "Restaurant & Café", "Near Shopping Areas"],
            distance: "Secunderabad",
            image: "../static/images/hotels/hotel-baseraa.jpg"
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
        const fromLocation = type === 'outbound' ? fromCity : 'Hyderabad';
        const toLocation = type === 'outbound' ? 'Hyderabad' : fromCity;

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