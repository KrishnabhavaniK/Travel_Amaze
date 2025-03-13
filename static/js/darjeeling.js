// Package details object
const packageDetails = {
    premium: {
        name: 'Premium Package',
        price: 35000,
        features: [
            'Luxury Flight Travel',
            '5-Star Hotel Stay in Darjeeling',
            'Private Tour Guide',
            'All Darjeeling Cuisine Meals Included',
            'Priority Access to Tiger Hill Sunrise & Tea Estates'
        ]
    },
    gold: {
        name: 'Gold Package',
        price: 25000,
        features: [
            'AC Bus Travel',
            '4-Star Resort Stay Near Mall Road',
            'Expert Local Guide',
            'Darjeeling Breakfast & Dinner',
            'Standard Access to Toy Train Ride & Sightseeing'
        ]
    },
    silver: {
        name: 'Silver Package',
        price: 15000,
        features: [
            'Train Travel (AC Class)',
            '3-Star Hotel in Darjeeling',
            'Group Tour Guide',
            'Darjeeling Breakfast Only',
            'Basic Sightseeing of Batasia Loop & Peace Pagoda'
        ]
    }
};


// Updated flight data with more cities and routes
const flightData = {
    delhi: [
        { id: 65, airline: 'Air India', departure: '07:00', arrival: '10:30', price: 7200, duration: '3h 30m', flightNo: 'AI-765' },
        { id: 66, airline: 'IndiGo', departure: '14:00', arrival: '17:30', price: 6900, duration: '3h 30m', flightNo: '6E-234' }
    ],
    mumbai: [
        { id: 67, airline: 'Vistara', departure: '06:30', arrival: '10:00', price: 7500, duration: '3h 30m', flightNo: 'UK-987' },
        { id: 68, airline: 'SpiceJet', departure: '13:30', arrival: '17:00', price: 7100, duration: '3h 30m', flightNo: 'SG-765' }
    ],
    bangalore: [
        { id: 69, airline: 'IndiGo', departure: '08:00', arrival: '11:30', price: 7800, duration: '3h 30m', flightNo: '6E-543' },
        { id: 70, airline: 'Air India', departure: '15:00', arrival: '18:30', price: 7400, duration: '3h 30m', flightNo: 'AI-654' }
    ],
    chennai: [
        { id: 71, airline: 'SpiceJet', departure: '09:30', arrival: '13:00', price: 7700, duration: '3h 30m', flightNo: 'SG-321' },
        { id: 72, airline: 'Vistara', departure: '16:30', arrival: '20:00', price: 7300, duration: '3h 30m', flightNo: 'UK-876' }
    ],
    kolkata: [
        { id: 73, airline: 'Air India', departure: '06:45', arrival: '09:15', price: 6500, duration: '2h 30m', flightNo: 'AI-321' },
        { id: 74, airline: 'IndiGo', departure: '12:15', arrival: '14:45', price: 6200, duration: '2h 30m', flightNo: '6E-432' }
    ],
    hyderabad: [
        { id: 75, airline: 'IndiGo', departure: '07:30', arrival: '10:30', price: 7600, duration: '3h', flightNo: '6E-654' },
        { id: 76, airline: 'Vistara', departure: '14:30', arrival: '17:30', price: 7200, duration: '3h', flightNo: 'UK-543' }
    ],
    kanpur: [
        { id: 77, airline: 'SpiceJet', departure: '08:45', arrival: '12:00', price: 7400, duration: '3h 15m', flightNo: 'SG-987' },
        { id: 78, airline: 'Air India', departure: '16:00', arrival: '19:15', price: 7100, duration: '3h 15m', flightNo: 'AI-876' }
    ],
    surat: [
        { id: 79, airline: 'IndiGo', departure: '09:00', arrival: '12:30', price: 7600, duration: '3h 30m', flightNo: '6E-987' },
        { id: 80, airline: 'SpiceJet', departure: '17:00', arrival: '20:30', price: 7200, duration: '3h 30m', flightNo: 'SG-654' }
    ],
    indore: [
        { id: 81, airline: 'Vistara', departure: '07:30', arrival: '10:45', price: 7300, duration: '3h 15m', flightNo: 'UK-123' },
        { id: 82, airline: 'Air India', departure: '13:45', arrival: '17:00', price: 7000, duration: '3h 15m', flightNo: 'AI-456' }
    ],
    aurangabad: [
        { id: 1, airline: 'IndiGo', departure: '07:00', arrival: '12:30', duration: '5h 30m', price: 7200, flightNo: '6E-201', layover: 'Delhi' },
        { id: 2, airline: 'Air India', departure: '18:00', arrival: '23:30', duration: '5h 30m', price: 7500, flightNo: 'AI-789', layover: 'Mumbai' }
    ],
    coimbatore: [
        { id: 3, airline: 'Vistara', departure: '06:30', arrival: '12:00', duration: '5h 30m', price: 7800, flightNo: 'UK-654', layover: 'Kolkata' },
        { id: 4, airline: 'SpiceJet', departure: '17:30', arrival: '23:00', duration: '5h 30m', price: 8000, flightNo: 'SG-321', layover: 'Delhi' }
    ],
    madurai: [
        { id: 5, airline: 'IndiGo', departure: '08:15', arrival: '13:45', duration: '5h 30m', price: 7500, flightNo: '6E-777', layover: 'Bangalore' },
        { id: 6, airline: 'Vistara', departure: '19:00', arrival: '00:30', duration: '5h 30m', price: 7700, flightNo: 'UK-890', layover: 'Mumbai' }
    ],
    visakhapatnam: [
        { id: 7, airline: 'Air India', departure: '09:30', arrival: '15:00', duration: '5h 30m', price: 8200, flightNo: 'AI-234', layover: 'Delhi' },
        { id: 8, airline: 'IndiGo', departure: '20:45', arrival: '02:15', duration: '5h 30m', price: 8400, flightNo: '6E-345', layover: 'Kolkata' }
    ],
    vijayawada: [
        { id: 9, airline: 'SpiceJet', departure: '07:45', arrival: '13:15', duration: '5h 30m', price: 7700, flightNo: 'SG-432', layover: 'Hyderabad' },
        { id: 10, airline: 'Vistara', departure: '18:30', arrival: '00:00', duration: '5h 30m', price: 7900, flightNo: 'UK-567', layover: 'Delhi' }
    ],
    vadodara: [
        { id: 11, airline: 'Air India', departure: '06:15', arrival: '11:45', duration: '5h 30m', price: 7400, flightNo: 'AI-678', layover: 'Mumbai' },
        { id: 12, airline: 'IndiGo', departure: '19:15', arrival: '00:45', duration: '5h 30m', price: 7600, flightNo: '6E-789', layover: 'Delhi' }
    ],
    gwalior: [
        { id: 13, airline: 'IndiGo', departure: '08:30', arrival: '14:00', duration: '5h 30m', price: 8100, flightNo: '6E-890', layover: 'Kolkata' },
        { id: 14, airline: 'SpiceJet', departure: '20:15', arrival: '01:45', duration: '5h 30m', price: 8300, flightNo: 'SG-901', layover: 'Delhi' }
    ],
    amritsar: [
        { id: 15, airline: 'Vistara', departure: '07:00', arrival: '12:30', duration: '5h 30m', price: 8500, flightNo: 'UK-234', layover: 'Delhi' },
        { id: 16, airline: 'Air India', departure: '18:45', arrival: '00:15', duration: '5h 30m', price: 8700, flightNo: 'AI-345', layover: 'Kolkata' }
    ],
    vadodara: [
        { id: 17, airline: 'IndiGo', departure: '07:00', arrival: '12:30', duration: '5h 30m', price: 7400, flightNo: '6E-567', layover: 'Delhi' },
        { id: 18, airline: 'Air India', departure: '18:00', arrival: '23:30', duration: '5h 30m', price: 7600, flightNo: 'AI-678', layover: 'Kolkata' }
    ],
    ludhiana: [
        { id: 19, airline: 'Vistara', departure: '06:30', arrival: '12:00', duration: '5h 30m', price: 7800, flightNo: 'UK-234', layover: 'Delhi' },
        { id: 20, airline: 'SpiceJet', departure: '17:30', arrival: '23:00', duration: '5h 30m', price: 8000, flightNo: 'SG-901', layover: 'Mumbai' }
    ],
    kochi: [
        { id: 21, airline: 'IndiGo', departure: '08:15', arrival: '13:45', duration: '5h 30m', price: 7500, flightNo: '6E-890', layover: 'Chennai' },
        { id: 22, airline: 'Vistara', departure: '19:00', arrival: '00:30', duration: '5h 30m', price: 7700, flightNo: 'UK-678', layover: 'Bangalore' }
    ],
    mysore: [
        { id: 23, airline: 'Air India', departure: '09:30', arrival: '15:00', duration: '5h 30m', price: 8200, flightNo: 'AI-567', layover: 'Mumbai' },
        { id: 24, airline: 'IndiGo', departure: '20:45', arrival: '02:15', duration: '5h 30m', price: 8400, flightNo: '6E-432', layover: 'Delhi' }
    ],
    mangalore: [
        { id: 25, airline: 'SpiceJet', departure: '07:45', arrival: '13:15', duration: '5h 30m', price: 7700, flightNo: 'SG-543', layover: 'Hyderabad' },
        { id: 26, airline: 'Vistara', departure: '18:30', arrival: '00:00', duration: '5h 30m', price: 7900, flightNo: 'UK-345', layover: 'Mumbai' }
    ],
    ahmedabad: [
        { id: 27, airline: 'Air India', departure: '06:15', arrival: '11:45', duration: '5h 30m', price: 7400, flightNo: 'AI-654', layover: 'Delhi' },
        { id: 28, airline: 'IndiGo', departure: '19:15', arrival: '00:45', duration: '5h 30m', price: 7600, flightNo: '6E-321', layover: 'Mumbai' }
    ],
    pune: [
        { id: 29, airline: 'IndiGo', departure: '08:30', arrival: '14:00', duration: '5h 30m', price: 8100, flightNo: '6E-678', layover: 'Bangalore' },
        { id: 30, airline: 'SpiceJet', departure: '20:15', arrival: '01:45', duration: '5h 30m', price: 8300, flightNo: 'SG-789', layover: 'Delhi' }
    ],
    srinagar: [
        { id: 31, airline: 'Vistara', departure: '07:00', arrival: '12:30', duration: '5h 30m', price: 8500, flightNo: 'UK-123', layover: 'Delhi' },
        { id: 32, airline: 'Air India', departure: '18:45', arrival: '00:15', duration: '5h 30m', price: 8700, flightNo: 'AI-234', layover: 'Kolkata' }
    ],
    nagpur: [
        { id: 33, airline: 'IndiGo', departure: '09:00', arrival: '14:30', duration: '5h 30m', price: 7900, flightNo: '6E-567', layover: 'Mumbai' },
        { id: 34, airline: 'SpiceJet', departure: '21:15', arrival: '02:45', duration: '5h 30m', price: 8100, flightNo: 'SG-678', layover: 'Hyderabad' }
    ],
    varanasi: [
        { id: 35, airline: 'Vistara', departure: '06:45', arrival: '12:15', duration: '5h 30m', price: 8300, flightNo: 'UK-789', layover: 'Delhi' },
        { id: 36, airline: 'Air India', departure: '20:30', arrival: '02:00', duration: '5h 30m', price: 8500, flightNo: 'AI-890', layover: 'Kolkata' }
    ]
};


// Sample bus data with all cities
const busData = {
    delhi: [
        { id: 1, operator: 'Royal Cruiser', departure: '06:00', arrival: '14:00 ', duration: '32h', price: 3500, busNo: 'RC-101' },
        { id: 2, operator: 'UPSRTC Volvo', departure: '19:00', arrival: '03:00 ', duration: '32h', price: 3400, busNo: 'UP-567' }
    ],
    mumbai: [
        { id: 3, operator: 'VRL Travels', departure: '07:30', arrival: '22:00 ', duration: '38h 30m', price: 4000, busNo: 'VRL-234' },
        { id: 4, operator: 'SRS Travels', departure: '20:00', arrival: '10:30 ', duration: '38h 30m', price: 3900, busNo: 'SRS-789' }
    ],
    bangalore: [
        { id: 5, operator: 'GreenLine Travels', departure: '08:00', arrival: '22:30 ', duration: '38h 30m', price: 4200, busNo: 'GL-456' },
        { id: 6, operator: 'KSRTC', departure: '19:30', arrival: '10:00 ', duration: '38h 30m', price: 4100, busNo: 'KSRTC-901' }
    ],
    chennai: [
        { id: 7, operator: 'Parveen Travels', departure: '06:30', arrival: '18:00 ', duration: '35h 30m', price: 3700, busNo: 'PT-678' },
        { id: 8, operator: 'KPN Travels', departure: '20:00', arrival: '08:30 ', duration: '36h 30m', price: 3600, busNo: 'KPN-789' }
    ],
    kolkata: [
        { id: 9, operator: 'Royal Cruiser', departure: '07:00', arrival: '19:30', duration: '12h 30m', price: 2500, busNo: 'RC-890' },
        { id: 10, operator: 'GreenLine Travels', departure: '21:00', arrival: '09:30', duration: '12h 30m', price: 2400, busNo: 'GL-567' }
    ],
    hyderabad: [
        { id: 11, operator: 'Orange Travels', departure: '06:00', arrival: '20:30 ', duration: '38h 30m', price: 4300, busNo: 'OT-234' },
        { id: 12, operator: 'VRL Travels', departure: '21:00', arrival: '11:30 ', duration: '38h 30m', price: 4200, busNo: 'VRL-678' }
    ],
    kanpur: [
        { id: 13, operator: 'UPSRTC Volvo', departure: '07:00', arrival: '21:30 ', duration: '38h 30m', price: 3900, busNo: 'UPSRTC-345' },
        { id: 14, operator: 'Raj Ratan Travels', departure: '19:30', arrival: '10:00 ', duration: '38h 30m', price: 3800, busNo: 'RRT-901' }
    ],
    surat: [
        { id: 15, operator: 'Shrinath Travels', departure: '06:00', arrival: '18:30 ', duration: '36h 30m', price: 3800, busNo: 'ST-678' },
        { id: 16, operator: 'Mahavat Travels', departure: '21:00', arrival: '09:30 ', duration: '36h 30m', price: 3700, busNo: 'MT-789' }
    ],
    indore: [
        { id: 17, operator: 'Hans Travels', departure: '06:30', arrival: '20:00 ', duration: '37h 30m', price: 4000, busNo: 'HT-234' },
        { id: 18, operator: 'Chartered Bus', departure: '20:00', arrival: '10:30 ', duration: '38h 30m', price: 3900, busNo: 'CB-567' }
    ],
    aurangabad: [
        { id: 19, operator: 'VRL Travels', departure: '07:00', arrival: '21:30 ', duration: '38h 30m', price: 4000, busNo: 'VRL-345' },
        { id: 20, operator: 'SRS Travels', departure: '19:30', arrival: '10:00 ', duration: '38h 30m', price: 3900, busNo: 'SRS-901' }
    ],
    coimbatore: [
        { id: 21, operator: 'GreenLine Travels', departure: '06:30', arrival: '20:00 ', duration: '37h 30m', price: 4100, busNo: 'GL-678' },
        { id: 22, operator: 'KSRTC', departure: '19:30', arrival: '10:30 ', duration: '37h 30m', price: 4000, busNo: 'KSRTC-789' }
    ],
    madurai: [
        { id: 23, operator: 'Parveen Travels', departure: '07:00', arrival: '21:30 ', duration: '38h 30m', price: 3900, busNo: 'PT-456' },
        { id: 24, operator: 'KPN Travels', departure: '20:30', arrival: '11:00 ', duration: '38h 30m', price: 3800, busNo: 'KPN-567' }
    ],
    visakhapatnam: [
        { id: 25, operator: 'Orange Travels', departure: '06:00', arrival: '20:30 ', duration: '38h 30m', price: 4200, busNo: 'OT-234' },
        { id: 26, operator: 'VRL Travels', departure: '20:00', arrival: '10:30 ', duration: '38h 30m', price: 4100, busNo: 'VRL-789' }
    ],
    vijayawada: [
        { id: 27, operator: 'APSRTC', departure: '07:30', arrival: '22:00 ', duration: '38h 30m', price: 4000, busNo: 'APSRTC-345' },
        { id: 28, operator: 'Kaveri Travels', departure: '21:00', arrival: '11:30 ', duration: '38h 30m', price: 3900, busNo: 'KT-567' }
    ],
    vadodara: [
        { id: 29, operator: 'GSRTC Express', departure: '06:30', arrival: '20:00 ', duration: '37h 30m', price: 4100, busNo: 'GSRTC-678' },
        { id: 30, operator: 'Shrinath Travels', departure: '20:00', arrival: '10:30 ', duration: '38h 30m', price: 4000, busNo: 'ST-789' }
    ],
    gwalior: [
        { id: 31, operator: 'Hans Travels', departure: '07:00', arrival: '21:30 ', duration: '38h 30m', price: 3900, busNo: 'HT-890' },
        { id: 32, operator: 'Chartered Bus', departure: '20:00', arrival: '11:00 ', duration: '38h 30m', price: 3800, busNo: 'CB-901' }
    ],
    amritsar: [
        { id: 33, operator: 'Royal Travels', departure: '06:30', arrival: '20:00 ', duration: '37h 30m', price: 4200, busNo: 'RT-234' },
        { id: 34, operator: 'GreenLine Travels', departure: '20:00', arrival: '10:30 ', duration: '38h 30m', price: 4100, busNo: 'GL-567' }
    ],
    vadodara: [
        { id: 35, operator: 'GSRTC Express', departure: '07:00', arrival: '21:30 ', duration: '38h 30m', price: 4100, busNo: 'GSRTC-123' },
        { id: 36, operator: 'Shrinath Travels', departure: '19:30', arrival: '10:00 ', duration: '38h 30m', price: 4000, busNo: 'ST-456' }
    ],
    ludhiana: [
        { id: 37, operator: 'PEPSU Roadways', departure: '06:30', arrival: '20:00 ', duration: '37h 30m', price: 4300, busNo: 'PRTC-789' },
        { id: 38, operator: 'Royal Travels', departure: '20:00', arrival: '10:30 ', duration: '38h 30m', price: 4200, busNo: 'RT-901' }
    ],
    kochi: [
        { id: 39, operator: 'KSRTC', departure: '07:30', arrival: '22:00 ', duration: '38h 30m', price: 4100, busNo: 'KSRTC-234' },
        { id: 40, operator: 'SRS Travels', departure: '20:30', arrival: '11:30 ', duration: '38h 30m', price: 4000, busNo: 'SRS-567' }
    ],
    mysore: [
        { id: 41, operator: 'KSRTC', departure: '06:00', arrival: '21:00 ', duration: '39h', price: 4200, busNo: 'KSRTC-678' },
        { id: 42, operator: 'VRL Travels', departure: '19:30', arrival: '10:30 ', duration: '39h', price: 4100, busNo: 'VRL-789' }
    ],
    mangalore: [
        { id: 43, operator: 'Durgamba Motors', departure: '08:00', arrival: '23:30 ', duration: '39h 30m', price: 4300, busNo: 'DM-901' },
        { id: 44, operator: 'Sugama Travels', departure: '20:30', arrival: '12:00 ', duration: '39h 30m', price: 4200, busNo: 'ST-234' }
    ],
    ahmedabad: [
        { id: 45, operator: 'GSRTC Volvo', departure: '07:00', arrival: '23:00 ', duration: '40h', price: 4500, busNo: 'GSRTC-456' },
        { id: 46, operator: 'VRL Travels', departure: '19:30', arrival: '12:00 ', duration: '40h', price: 4400, busNo: 'VRL-567' }
    ],
    pune: [
        { id: 47, operator: 'MSRTC Shivneri', departure: '06:30', arrival: '22:30 ', duration: '40h', price: 4400, busNo: 'MSRTC-678' },
        { id: 48, operator: 'National Travels', departure: '20:30', arrival: '12:30 ', duration: '40h', price: 4300, busNo: 'NT-789' }
    ],
    srinagar: [
        { id: 49, operator: 'JKSRTC', departure: '07:00', arrival: '22:30 ', duration: '39h 30m', price: 4600, busNo: 'JKSRTC-890' },
        { id: 50, operator: 'Luxury Travels', departure: '19:30', arrival: '12:00 ', duration: '39h 30m', price: 4500, busNo: 'LT-901' }
    ],
    nagpur: [
        { id: 51, operator: 'Hans Travels', departure: '08:00', arrival: '23:30 ', duration: '39h 30m', price: 4400, busNo: 'HT-234' },
        { id: 52, operator: 'Orange Travels', departure: '20:30', arrival: '12:00 ', duration: '39h 30m', price: 4300, busNo: 'OT-345' }
    ],
    varanasi: [
        { id: 53, operator: 'UPSRTC Volvo', departure: '06:30', arrival: '22:00 ', duration: '39h 30m', price: 4600, busNo: 'UPSRTC-456' },
        { id: 54, operator: 'Raj Ratan Travels', departure: '19:30', arrival: '12:00 ', duration: '39h 30m', price: 4500, busNo: 'RRT-567' }
    ]
};


// Sample train data with all cities
const trainData = {
    delhi: [
        { id: 1, trainName: 'New Jalpaiguri Express', departure: '06:30', arrival: '12:45 ', duration: '30h 15m', price: 3200, trainNo: '12524' },
        { id: 2, trainName: 'Mahananda Express', departure: '19:00', arrival: '01:30 ', duration: '30h 30m', price: 3100, trainNo: '15484' }
    ],
    mumbai: [
        { id: 3, trainName: 'Mumbai-NJP Express', departure: '07:45', arrival: '16:00 ', duration: '32h 15m', price: 3500, trainNo: '12520' },
        { id: 4, trainName: 'Guwahati Express', departure: '20:15', arrival: '05:30 ', duration: '33h 15m', price: 3400, trainNo: '15646' }
    ],
    bangalore: [
        { id: 5, trainName: 'Yeshvantpur - NJP Express', departure: '06:00', arrival: '18:30 ', duration: '36h 30m', price: 3700, trainNo: '12552' },
        { id: 6, trainName: 'Bangalore-Guwahati Express', departure: '21:00', arrival: '09:30 ', duration: '36h 30m', price: 3600, trainNo: '12508' }
    ],
    chennai: [
        { id: 7, trainName: 'Chennai-NJP Express', departure: '07:15', arrival: '22:45 ', duration: '39h 30m', price: 3900, trainNo: '12510' },
        { id: 8, trainName: 'Coromandel Express', departure: '19:45', arrival: '10:30 ', duration: '38h 45m', price: 3800, trainNo: '12842' }
    ],
    kolkata: [
        { id: 9, trainName: 'Darjeeling Mail', departure: '22:05', arrival: '08:15', duration: '10h 10m', price: 1500, trainNo: '12343' },
        { id: 10, trainName: 'Padatik Express', departure: '23:55', arrival: '10:10', duration: '10h 15m', price: 1400, trainNo: '12377' }
    ],
    hyderabad: [
        { id: 11, trainName: 'Hyderabad-NJP Express', departure: '05:30', arrival: '18:15 ', duration: '36h 45m', price: 3800, trainNo: '12514' },
        { id: 12, trainName: 'Secunderabad-Guwahati Express', departure: '20:30', arrival: '08:45 ', duration: '36h 15m', price: 3700, trainNo: '12506' }
    ],
    kanpur: [
        { id: 13, trainName: 'Kanpur-NJP Express', departure: '07:00', arrival: '17:30 ', duration: '34h 30m', price: 3500, trainNo: '12522' },
        { id: 14, trainName: 'Avadh Assam Express', departure: '21:30', arrival: '09:45 ', duration: '36h 15m', price: 3400, trainNo: '15910' }
    ],
    surat: [
        { id: 15, trainName: 'Surat-Guwahati Express', departure: '06:45', arrival: '19:00 ', duration: '36h 15m', price: 3700, trainNo: '15668' },
        { id: 16, trainName: 'Okha-NJP Express', departure: '20:15', arrival: '08:30 ', duration: '36h 15m', price: 3600, trainNo: '12556' }
    ],
    indore: [
        { id: 17, trainName: 'Indore-Guwahati Express', departure: '08:30', arrival: '20:30 ', duration: '36h', price: 3700, trainNo: '19305' },
        { id: 18, trainName: 'Indore-NJP Express', departure: '19:45', arrival: '08:45 ', duration: '37h', price: 3600, trainNo: '12512' }
    ],
    aurangabad: [
        { id: 19, trainName: 'Aurangabad-NJP Express', departure: '06:30', arrival: '22:45 ', duration: '40h 15m', price: 4000, trainNo: '12562' },
        { id: 20, trainName: 'Deccan Queen Express', departure: '20:15', arrival: '12:30 ', duration: '40h 15m', price: 3900, trainNo: '12124' }
    ],
    coimbatore: [
        { id: 21, trainName: 'Coimbatore-NJP Express', departure: '07:00', arrival: '23:45 ', duration: '40h 45m', price: 4200, trainNo: '12564' },
        { id: 22, trainName: 'Kongu Express', departure: '19:30', arrival: '11:30 ', duration: '40h', price: 4100, trainNo: '12648' }
    ],
    madurai: [
        { id: 23, trainName: 'Madurai-NJP Express', departure: '08:30', arrival: '00:30 ', duration: '40h', price: 4100, trainNo: '12566' },
        { id: 24, trainName: 'Pandian Express', departure: '21:00', arrival: '13:30 ', duration: '40h 30m', price: 4000, trainNo: '12638' }
    ],
    visakhapatnam: [
        { id: 25, trainName: 'Visakhapatnam-NJP Express', departure: '06:00', arrival: '20:15 ', duration: '38h 15m', price: 3800, trainNo: '22846' },
        { id: 26, trainName: 'East Coast Express', departure: '20:45', arrival: '10:45 ', duration: '38h', price: 3700, trainNo: '18646' }
    ],
    vijayawada: [
        { id: 27, trainName: 'Vijayawada-NJP Express', departure: '07:15', arrival: '21:30 ', duration: '38h 15m', price: 3900, trainNo: '12568' },
        { id: 28, trainName: 'Krishna Express', departure: '19:45', arrival: '10:15 ', duration: '38h 30m', price: 3800, trainNo: '17405' }
    ],
    vadodara: [
        { id: 29, trainName: 'Vadodara-Guwahati Express', departure: '07:30', arrival: '22:00 ', duration: '38h 30m', price: 3900, trainNo: '15636' },
        { id: 30, trainName: 'Sabarmati Express', departure: '20:15', arrival: '10:45 ', duration: '38h 30m', price: 3800, trainNo: '19165' }
    ],
    gwalior: [
        { id: 31, trainName: 'Bundelkhand Express', departure: '06:00', arrival: '20:30 ', duration: '38h 30m', price: 4000, trainNo: '11107' },
        { id: 32, trainName: 'Chambal Express', departure: '19:30', arrival: '10:00 ', duration: '38h 30m', price: 3900, trainNo: '12175' }
    ],
    amritsar: [
        { id: 33, trainName: 'Golden Temple Express', departure: '05:45', arrival: '19:30 ', duration: '37h 45m', price: 4200, trainNo: '12903' },
        { id: 34, trainName: 'Amritsar-Guwahati Express', departure: '18:45', arrival: '09:45 ', duration: '37h', price: 4100, trainNo: '12588' }
    ],
    vadodara: [
        { id: 35, trainName: 'Vadodara-Guwahati Express', departure: '07:30', arrival: '22:15 ', duration: '38h 45m', price: 3900, trainNo: '15636' },
        { id: 36, trainName: 'Sabarmati Express', departure: '20:30', arrival: '11:00 ', duration: '38h 30m', price: 3800, trainNo: '19165' }
    ],
    ludhiana: [
        { id: 37, trainName: 'Jammu Tawi-Guwahati Express', departure: '06:00', arrival: '20:45 ', duration: '38h 45m', price: 4100, trainNo: '15654' },
        { id: 38, trainName: 'Amritsar-Dibrugarh Express', departure: '19:00', arrival: '09:30 ', duration: '38h 30m', price: 4000, trainNo: '15934' }
    ],
    kochi: [
        { id: 39, trainName: 'Kochi-Guwahati Express', departure: '07:45', arrival: '23:15 ', duration: '39h 30m', price: 4200, trainNo: '12516' },
        { id: 40, trainName: 'Ernakulam-Kolkata Express', departure: '20:00', arrival: '11:30 ', duration: '39h 30m', price: 4100, trainNo: '12508' }
    ],
    mysore: [
        { id: 41, trainName: 'Mysore-Guwahati Express', departure: '06:15', arrival: '20:45 ', duration: '38h 30m', price: 4300, trainNo: '12514' },
        { id: 42, trainName: 'Bangalore-Kolkata Express', departure: '19:30', arrival: '10:15 ', duration: '38h 45m', price: 4200, trainNo: '12506' }
    ],
    mangalore: [
        { id: 43, trainName: 'Mangalore-Guwahati Express', departure: '07:00', arrival: '21:45 ', duration: '38h 45m', price: 4400, trainNo: '15624' },
        { id: 44, trainName: 'West Coast Express', departure: '20:15', arrival: '10:30 ', duration: '38h 15m', price: 4300, trainNo: '12655' }
    ],
    ahmedabad: [
        { id: 45, trainName: 'Ahmedabad-Guwahati Express', departure: '07:30', arrival: '22:00 ', duration: '38h 30m', price: 4500, trainNo: '15610' },
        { id: 46, trainName: 'Sabarmati Express', departure: '20:30', arrival: '11:00 ', duration: '38h 30m', price: 4400, trainNo: '19166' }
    ],
    pune: [
        { id: 47, trainName: 'Pune-Guwahati Express', departure: '06:45', arrival: '21:15 ', duration: '38h 30m', price: 4400, trainNo: '15648' },
        { id: 48, trainName: 'Deccan Express', departure: '19:45', arrival: '10:30 ', duration: '38h 45m', price: 4300, trainNo: '11007' }
    ],
    srinagar: [
        { id: 49, trainName: 'Jammu Tawi-Guwahati Express', departure: '07:00', arrival: '21:45 ', duration: '38h 45m', price: 4600, trainNo: '15656' },
        { id: 50, trainName: 'Vaishno Devi-Kolkata Express', departure: '20:15', arrival: '10:30 ', duration: '38h 15m', price: 4500, trainNo: '12331' }
    ],
    nagpur: [
        { id: 51, trainName: 'Nagpur-Guwahati Express', departure: '08:00', arrival: '22:30 ', duration: '38h 30m', price: 4400, trainNo: '12510' },
        { id: 52, trainName: 'Vidarbha Express', departure: '20:30', arrival: '10:45 ', duration: '38h 15m', price: 4300, trainNo: '12105' }
    ],
    varanasi: [
        { id: 53, trainName: 'Varanasi-Guwahati Express', departure: '06:30', arrival: '21:00 ', duration: '38h 30m', price: 4600, trainNo: '15660' },
        { id: 54, trainName: 'Mahananda Express', departure: '19:30', arrival: '10:30 ', duration: '38h 30m', price: 4500, trainNo: '15484' }
    ]
};
let currentPackageType = null;
const destination = 'Darjeeling';

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
                        <span class="city">Darjeeling</span>
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
                        <span class="city">Darjeeling</span>
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
                        <span class="city">Darjeeling</span>
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
                    <span class="city">Darjeeling</span>
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
                    <span class="city">Darjeeling</span>
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
                <span>From: ${flightType === 'outbound' ? fromCity : 'darjeeling'}</span>
                <span>To: ${flightType === 'outbound' ? 'Darjeeling' : fromCity}</span>
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

// Hotel data for different packages in Darjeeling
const hotelData = {
    premium: [
        {
            name: "The Elgin, Darjeeling",
            rating: 5,
            price: 22000,
            features: ["Luxury Heritage Stay", "Mountain View", "Multi-Cuisine Restaurant", "Spa & Wellness Center"],
            distance: "Near Chowrasta, Darjeeling",
            image: "../static/images/hotels/the-elgin.jpg"
        },
        {
            name: "Mayfair Darjeeling",
            rating: 5,
            price: 20000,
            features: ["Spacious Suites", "Panoramic Views", "Bar & Lounge", "24/7 Room Service"],
            distance: "Near Governor House, Darjeeling",
            image: "../static/images/hotels/mayfair.jpg"
        },
        {
            name: "Cedar Inn",
            rating: 5,
            price: 18000,
            features: ["Colonial-Style Rooms", "Kanchenjunga View", "In-house Restaurant", "Bonfire & Barbecue"],
            distance: "2km from Darjeeling Mall",
            image: "../static/images/hotels/cedar-inn.jpg"
        }
    ],
    gold: [
        {
            name: "Sinclairs Darjeeling",
            rating: 4,
            price: 14000,
            features: ["Comfortable Rooms", "Scenic Views", "Gym & Spa", "On-site Restaurant"],
            distance: "1.5km from Darjeeling Railway Station",
            image: "../static/images/hotels/sinclairs.jpg"
        },
        {
            name: "Summit Swiss Heritage Hotel",
            rating: 4,
            price: 12000,
            features: ["Cozy Wooden Cottages", "Garden Café", "Easy Access to Mall Road", "Free Wi-Fi"],
            distance: "Near Gandhi Road, Darjeeling",
            image: "../static/images/hotels/summit-swiss.jpg"
        },
        {
            name: "Hotel Viceroy",
            rating: 4,
            price: 11000,
            features: ["Well-furnished Rooms", "Rooftop Lounge", "Mountain View", "In-house Restaurant"],
            distance: "Close to Darjeeling Mall",
            image: "../static/images/hotels/viceroy.jpg"
        }
    ],
    silver: [
        {
            name: "Hotel Mohit",
            rating: 3,
            price: 8000,
            features: ["Basic Amenities", "Neat & Clean Rooms", "Attached Bathroom", "Near Shopping Area"],
            distance: "Near Clubside, Darjeeling",
            image: "../static/images/hotels/mohit.jpg"
        },
        {
            name: "Hotel Seven Seventeen",
            rating: 3,
            price: 7000,
            features: ["Traditional Hospitality", "Local Cuisine Restaurant", "Wooden Interiors", "Friendly Staff"],
            distance: "Near Darjeeling Mall",
            image: "../static/images/hotels/seven-seventeen.jpg"
        },
        {
            name: "Golden Wind Horse",
            rating: 3,
            price: 6500,
            features: ["Affordable Stay", "Simple & Clean Rooms", "Free Wi-Fi", "24/7 Room Service"],
            distance: "2km from Darjeeling Town Center",
            image: "../static/images/hotels/golden-wind.jpg"
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
        const fromLocation = type === 'outbound' ? fromCity : 'Darjeeling';
        const toLocation = type === 'outbound' ? 'Darjeeling' : fromCity;

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