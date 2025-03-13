// Package details object
const packageDetails = {
    premium: {
        name: 'Premium Package',
        price: 35000,
        features: [
            'Luxury Flight Travel',
            '5-Star Hotel Stay in Mysore',
            'Private Tour Guide',
            'All Mysore Cuisine Meals Included',
            'Priority Access to Mysore Palace & Brindavan Gardens'
        ]
    },
    gold: {
        name: 'Gold Package',
        price: 25000,
        features: [
            'AC Bus Travel',
            '4-Star Resort Stay Near Chamundi Hills',
            'Expert Local Guide',
            'Mysore Breakfast & Dinner',
            'Standard Access to Historical Sites & Museums'
        ]
    },
    silver: {
        name: 'Silver Package',
        price: 15000,
        features: [
            'Train Travel (AC Class)',
            '3-Star Hotel in Mysore',
            'Group Tour Guide',
            'Mysore Breakfast Only',
            'Basic Sightseeing of Mysore Palace & St. Philomena’s Church'
        ]
    }
};

// Updated flight data with more cities and routes
const flightData = {
    delhi: [
        { id: 1, airline: 'IndiGo', departure: '06:00', arrival: '08:15', price: 5800, duration: '2h 15m', flightNo: '6E-102' },
        { id: 2, airline: 'Air India', departure: '14:00', arrival: '16:20', price: 6000, duration: '2h 20m', flightNo: 'AI-345' }
    ],
    mumbai: [
        { id: 3, airline: 'Vistara', departure: '09:30', arrival: '11:45', price: 5000, duration: '2h 15m', flightNo: 'UK-567' },
        { id: 4, airline: 'IndiGo', departure: '18:00', arrival: '20:15', price: 5200, duration: '2h 15m', flightNo: '6E-789' }
    ],
    bangalore: [
        { id: 5, airline: 'Air India', departure: '07:15', arrival: '08:45', price: 4500, duration: '1h 30m', flightNo: 'AI-456' },
        { id: 6, airline: 'SpiceJet', departure: '19:00', arrival: '20:30', price: 4700, duration: '1h 30m', flightNo: 'SG-321' }
    ],
    chennai: [
        { id: 7, airline: 'IndiGo', departure: '10:30', arrival: '12:00', price: 4800, duration: '1h 30m', flightNo: '6E-234' },
        { id: 8, airline: 'Vistara', departure: '21:00', arrival: '22:30', price: 5000, duration: '1h 30m', flightNo: 'UK-678' }
    ],
    kolkata: [
        { id: 9, airline: 'Air India', departure: '06:45', arrival: '09:15', price: 6500, duration: '2h 30m', flightNo: 'AI-567' },
        { id: 10, airline: 'SpiceJet', departure: '15:30', arrival: '18:00', price: 6700, duration: '2h 30m', flightNo: 'SG-789' }
    ],
    hyderabad: [
        { id: 11, airline: 'IndiGo', departure: '08:30', arrival: '10:00', price: 5000, duration: '1h 30m', flightNo: '6E-456' },
        { id: 12, airline: 'Vistara', departure: '19:30', arrival: '21:00', price: 5200, duration: '1h 30m', flightNo: 'UK-123' }
    ],
    kanpur: [
        { id: 13, airline: 'Air India', departure: '09:00', arrival: '11:30', price: 7000, duration: '2h 30m', flightNo: 'AI-890' },
        { id: 14, airline: 'SpiceJet', departure: '16:45', arrival: '19:15', price: 7200, duration: '2h 30m', flightNo: 'SG-654' }
    ],
    surat: [
        { id: 15, airline: 'IndiGo', departure: '07:45', arrival: '09:15', price: 4900, duration: '1h 30m', flightNo: '6E-876' },
        { id: 16, airline: 'Vistara', departure: '17:15', arrival: '18:45', price: 5100, duration: '1h 30m', flightNo: 'UK-432' }
    ],
    indore: [
        { id: 17, airline: 'Air India', departure: '08:00', arrival: '09:30', price: 5300, duration: '1h 30m', flightNo: 'AI-678' },
        { id: 18, airline: 'SpiceJet', departure: '18:30', arrival: '20:00', price: 5500, duration: '1h 30m', flightNo: 'SG-987' }
    ],
    aurangabad: [
        { id: 19, airline: 'IndiGo', departure: '07:00', arrival: '09:30', price: 5600, duration: '2h 30m', flightNo: '6E-201' },
        { id: 20, airline: 'Air India', departure: '16:00', arrival: '18:30', price: 5800, duration: '2h 30m', flightNo: 'AI-789' }
    ],
    coimbatore: [
        { id: 21, airline: 'Vistara', departure: '08:15', arrival: '09:45', price: 4800, duration: '1h 30m', flightNo: 'UK-654' },
        { id: 22, airline: 'SpiceJet', departure: '19:00', arrival: '20:30', price: 5000, duration: '1h 30m', flightNo: 'SG-321' }
    ],
    madurai: [
        { id: 23, airline: 'IndiGo', departure: '06:30', arrival: '08:00', price: 4900, duration: '1h 30m', flightNo: '6E-777' },
        { id: 24, airline: 'Vistara', departure: '17:45', arrival: '19:15', price: 5100, duration: '1h 30m', flightNo: 'UK-890' }
    ],
    visakhapatnam: [
        { id: 25, airline: 'Air India', departure: '09:00', arrival: '11:30', price: 6200, duration: '2h 30m', flightNo: 'AI-234' },
        { id: 26, airline: 'IndiGo', departure: '20:00', arrival: '22:30', price: 6400, duration: '2h 30m', flightNo: '6E-345' }
    ],
    vijayawada: [
        { id: 27, airline: 'SpiceJet', departure: '07:45', arrival: '09:15', price: 5000, duration: '1h 30m', flightNo: 'SG-432' },
        { id: 28, airline: 'Vistara', departure: '18:30', arrival: '20:00', price: 5200, duration: '1h 30m', flightNo: 'UK-567' }
    ],
    vadodara: [
        { id: 29, airline: 'Air India', departure: '08:00', arrival: '10:30', price: 5500, duration: '2h 30m', flightNo: 'AI-678' },
        { id: 30, airline: 'IndiGo', departure: '19:15', arrival: '21:45', price: 5700, duration: '2h 30m', flightNo: '6E-789' }
    ],
    gwalior: [
        { id: 31, airline: 'IndiGo', departure: '06:30', arrival: '09:00', price: 6000, duration: '2h 30m', flightNo: '6E-890' },
        { id: 32, airline: 'SpiceJet', departure: '17:45', arrival: '20:15', price: 6200, duration: '2h 30m', flightNo: 'SG-901' }
    ],
    amritsar: [
        { id: 33, airline: 'Vistara', departure: '07:30', arrival: '10:00', price: 6700, duration: '2h 30m', flightNo: 'UK-234' },
        { id: 34, airline: 'Air India', departure: '21:00', arrival: '23:30', price: 6900, duration: '2h 30m', flightNo: 'AI-345' }
    ],
    ludhiana: [
        { id: 35, airline: 'Air India', departure: '07:30', arrival: '10:00', price: 6200, duration: '2h 30m', flightNo: 'AI-567' },
        { id: 36, airline: 'IndiGo', departure: '18:15', arrival: '20:45', price: 6400, duration: '2h 30m', flightNo: '6E-678' }
    ],
    kochi: [
        { id: 37, airline: 'Vistara', departure: '08:00', arrival: '09:30', price: 5000, duration: '1h 30m', flightNo: 'UK-890' },
        { id: 38, airline: 'SpiceJet', departure: '19:45', arrival: '21:15', price: 5200, duration: '1h 30m', flightNo: 'SG-234' }
    ],
    mysore: [
        { id: 39, airline: 'IndiGo', departure: '09:15', arrival: '10:45', price: 4500, duration: '1h 30m', flightNo: '6E-123' },
        { id: 40, airline: 'Vistara', departure: '20:30', arrival: '22:00', price: 4700, duration: '1h 30m', flightNo: 'UK-456' }
    ],
    mangalore: [
        { id: 41, airline: 'Air India', departure: '07:00', arrival: '08:30', price: 4900, duration: '1h 30m', flightNo: 'AI-789' },
        { id: 42, airline: 'SpiceJet', departure: '18:00', arrival: '19:30', price: 5100, duration: '1h 30m', flightNo: 'SG-567' }
    ],
    ahmedabad: [
        { id: 43, airline: 'IndiGo', departure: '08:30', arrival: '11:00', price: 5500, duration: '2h 30m', flightNo: '6E-345' },
        { id: 44, airline: 'Vistara', departure: '21:00', arrival: '23:30', price: 5700, duration: '2h 30m', flightNo: 'UK-678' }
    ],
    pune: [
        { id: 45, airline: 'Air India', departure: '07:45', arrival: '10:15', price: 5800, duration: '2h 30m', flightNo: 'AI-901' },
        { id: 46, airline: 'IndiGo', departure: '19:30', arrival: '22:00', price: 6000, duration: '2h 30m', flightNo: '6E-234' }
    ],
    srinagar: [
        { id: 47, airline: 'Vistara', departure: '06:15', arrival: '08:45', price: 7500, duration: '2h 30m', flightNo: 'UK-567' },
        { id: 48, airline: 'SpiceJet', departure: '17:30', arrival: '20:00', price: 7700, duration: '2h 30m', flightNo: 'SG-890' }
    ],
    nagpur: [
        { id: 49, airline: 'Air India', departure: '09:00', arrival: '11:30', price: 5300, duration: '2h 30m', flightNo: 'AI-678' },
        { id: 50, airline: 'IndiGo', departure: '20:15', arrival: '22:45', price: 5500, duration: '2h 30m', flightNo: '6E-789' }
    ],
    varanasi: [
        { id: 51, airline: 'SpiceJet', departure: '07:30', arrival: '10:00', price: 6000, duration: '2h 30m', flightNo: 'SG-345' },
        { id: 52, airline: 'Vistara', departure: '19:45', arrival: '22:15', price: 6200, duration: '2h 30m', flightNo: 'UK-901' }
    ]
};

// Sample bus data with all cities
const busData = {
    delhi: [
        { id: 1, operator: 'KSRTC Airavat', departure: '06:00', arrival: '14:00', duration: '32h', price: 3200, busNo: 'KA-102' },
        { id: 2, operator: 'VRL Travels', departure: '17:00', arrival: '01:30', duration: '32h 30m', price: 3100, busNo: 'VRL-567' }
    ],
    mumbai: [
        { id: 3, operator: 'VRL Travels', departure: '08:00', arrival: '22:30', duration: '14h 30m', price: 1800, busNo: 'VRL-432' },
        { id: 4, operator: 'SRS Travels', departure: '20:30', arrival: '11:00', duration: '14h 30m', price: 1750, busNo: 'SRS-789' }
    ],
    bangalore: [
        { id: 5, operator: 'KSRTC', departure: '07:30', arrival: '10:30', duration: '3h', price: 450, busNo: 'KA-567' },
        { id: 6, operator: 'SRS Travels', departure: '18:00', arrival: '21:00', duration: '3h', price: 400, busNo: 'SRS-901' }
    ],
    chennai: [
        { id: 7, operator: 'TNSTC', departure: '06:00', arrival: '18:00', duration: '12h', price: 1200, busNo: 'TN-234' },
        { id: 8, operator: 'KPN Travels', departure: '21:00', arrival: '09:00', duration: '12h', price: 1150, busNo: 'KPN-567' }
    ],
    kolkata: [
        { id: 9, operator: 'Royal Cruiser', departure: '05:30', arrival: '07:00', duration: '25h 30m', price: 3500, busNo: 'RC-678' },
        { id: 10, operator: 'GreenLine Travels', departure: '20:00', arrival: '22:30', duration: '26h 30m', price: 3400, busNo: 'GL-789' }
    ],
    hyderabad: [
        { id: 11, operator: 'Orange Travels', departure: '07:00', arrival: '20:00', duration: '13h', price: 1800, busNo: 'OT-123' },
        { id: 12, operator: 'VRL Travels', departure: '21:30', arrival: '10:30', duration: '13h', price: 1750, busNo: 'VRL-456' }
    ],
    kanpur: [
        { id: 13, operator: 'UPSRTC Volvo', departure: '06:30', arrival: '08:30', duration: '26h', price: 3200, busNo: 'UP-234' },
        { id: 14, operator: 'Raj Ratan Travels', departure: '19:30', arrival: '21:30', duration: '26h', price: 3100, busNo: 'RRT-567' }
    ],
    surat: [
        { id: 15, operator: 'Shrinath Travels', departure: '07:00', arrival: '22:30', duration: '15h 30m', price: 2000, busNo: 'ST-678' },
        { id: 16, operator: 'Mahavat Travels', departure: '21:00', arrival: '12:30', duration: '15h 30m', price: 1950, busNo: 'MT-789' }
    ],
    indore: [
        { id: 17, operator: 'Chartered Bus', departure: '06:00', arrival: '21:30', duration: '15h 30m', price: 2100, busNo: 'CB-890' },
        { id: 18, operator: 'Hans Travels', departure: '19:30', arrival: '11:00', duration: '15h 30m', price: 2050, busNo: 'HT-901' }
    ],
    aurangabad: [
        { id: 19, operator: 'VRL Travels', departure: '07:30', arrival: '22:00', duration: '14h 30m', price: 2100, busNo: 'VRL-567' },
        { id: 20, operator: 'SRS Travels', departure: '20:00', arrival: '10:30', duration: '14h 30m', price: 2050, busNo: 'SRS-432' }
    ],
    coimbatore: [
        { id: 21, operator: 'TNSTC', departure: '06:00', arrival: '14:30', duration: '8h 30m', price: 1200, busNo: 'TN-678' },
        { id: 22, operator: 'KPN Travels', departure: '22:00', arrival: '06:30', duration: '8h 30m', price: 1150, busNo: 'KPN-789' }
    ],
    madurai: [
        { id: 23, operator: 'Parveen Travels', departure: '07:00', arrival: '15:00', duration: '8h', price: 1300, busNo: 'PT-123' },
        { id: 24, operator: 'SRM Travels', departure: '21:30', arrival: '05:30', duration: '8h', price: 1250, busNo: 'SRM-456' }
    ],
    visakhapatnam: [
        { id: 25, operator: 'Orange Travels', departure: '08:00', arrival: '22:00', duration: '14h', price: 2000, busNo: 'OT-234' },
        { id: 26, operator: 'VRL Travels', departure: '19:00', arrival: '09:00', duration: '14h', price: 1950, busNo: 'VRL-567' }
    ],
    vijayawada: [
        { id: 27, operator: 'APSRTC', departure: '07:30', arrival: '22:30', duration: '15h', price: 1800, busNo: 'AP-678' },
        { id: 28, operator: 'Kaveri Travels', departure: '21:00', arrival: '12:00', duration: '15h', price: 1750, busNo: 'KT-789' }
    ],
    gwalior: [
        { id: 29, operator: 'Hans Travels', departure: '06:00', arrival: '21:30', duration: '15h 30m', price: 2200, busNo: 'HT-890' },
        { id: 30, operator: 'Chartered Bus', departure: '19:30', arrival: '11:00', duration: '15h 30m', price: 2150, busNo: 'CB-901' }
    ],
    amritsar: [
        { id: 31, operator: 'Royal Travels', departure: '05:30', arrival: '20:00', duration: '14h 30m', price: 2500, busNo: 'RT-345' },
        { id: 32, operator: 'GreenLine Travels', departure: '19:30', arrival: '09:30', duration: '14h 30m', price: 2450, busNo: 'GL-901' }
    ],
    vadodara: [
        { id: 33, operator: 'GSRTC Express', departure: '07:00', arrival: '22:00', duration: '15h', price: 2000, busNo: 'GSRTC-567' },
        { id: 34, operator: 'Shrinath Travels', departure: '20:00', arrival: '11:00', duration: '15h', price: 1950, busNo: 'ST-432' }
    ],
    ludhiana: [
        { id: 35, operator: 'PEPSU Roadways', departure: '06:30', arrival: '21:30', duration: '15h', price: 2500, busNo: 'PRTC-789' },
        { id: 36, operator: 'Royal Travels', departure: '19:30', arrival: '10:30', duration: '15h', price: 2450, busNo: 'RT-901' }
    ],
    kochi: [
        { id: 37, operator: 'KSRTC', departure: '07:30', arrival: '15:30', duration: '8h', price: 1400, busNo: 'KSRTC-234' },
        { id: 38, operator: 'SRS Travels', departure: '22:30', arrival: '06:30', duration: '8h', price: 1350, busNo: 'SRS-567' }
    ],
    mysore: [
        { id: 39, operator: 'KSRTC', departure: '06:00', arrival: '09:00', duration: '3h', price: 450, busNo: 'KSRTC-678' },
        { id: 40, operator: 'VRL Travels', departure: '18:00', arrival: '21:00', duration: '3h', price: 400, busNo: 'VRL-789' }
    ],
    mangalore: [
        { id: 41, operator: 'Durgamba Motors', departure: '08:00', arrival: '12:00', duration: '4h', price: 600, busNo: 'DM-901' },
        { id: 42, operator: 'Sugama Travels', departure: '20:00', arrival: '00:00', duration: '4h', price: 580, busNo: 'ST-234' }
    ],
    ahmedabad: [
        { id: 43, operator: 'GSRTC Volvo', departure: '07:00', arrival: '23:00', duration: '16h', price: 2200, busNo: 'GSRTC-456' },
        { id: 44, operator: 'VRL Travels', departure: '19:00', arrival: '11:00', duration: '16h', price: 2150, busNo: 'VRL-567' }
    ],
    pune: [
        { id: 45, operator: 'MSRTC Shivneri', departure: '06:30', arrival: '21:30', duration: '15h', price: 2000, busNo: 'MSRTC-678' },
        { id: 46, operator: 'National Travels', departure: '20:30', arrival: '11:30', duration: '15h', price: 1950, busNo: 'NT-789' }
    ],
    srinagar: [
        { id: 47, operator: 'JKSRTC', departure: '07:00', arrival: '22:00', duration: '15h', price: 2500, busNo: 'JKSRTC-890' },
        { id: 48, operator: 'Luxury Travels', departure: '19:30', arrival: '10:30', duration: '15h', price: 2450, busNo: 'LT-901' }
    ],
    nagpur: [
        { id: 49, operator: 'Hans Travels', departure: '08:00', arrival: '23:00', duration: '15h', price: 2200, busNo: 'HT-234' },
        { id: 50, operator: 'Orange Travels', departure: '20:00', arrival: '11:00', duration: '15h', price: 2150, busNo: 'OT-345' }
    ],
    varanasi: [
        { id: 51, operator: 'UPSRTC Volvo', departure: '06:30', arrival: '21:30', duration: '15h', price: 2400, busNo: 'UPSRTC-456' },
        { id: 52, operator: 'Raj Ratan Travels', departure: '19:30', arrival: '10:30', duration: '15h', price: 2350, busNo: 'RRT-567' }
    ]
};


// Sample train data with all cities
const trainData = {
    delhi: [
        { id: 1, trainName: 'Swarna Jayanti Express', departure: '06:30', arrival: '18:45', duration: '36h 15m', price: 2800, trainNo: '12781' },
        { id: 2, trainName: 'Karnataka Sampark Kranti Express', departure: '20:45', arrival: '10:30', duration: '37h 45m', price: 2900, trainNo: '12649' }
    ],
    mumbai: [
        { id: 3, trainName: 'Sharavati Express', departure: '07:15', arrival: '22:30', duration: '15h 15m', price: 2200, trainNo: '11035' },
        { id: 4, trainName: 'Udyan Express', departure: '20:45', arrival: '12:30', duration: '15h 45m', price: 2300, trainNo: '11301' }
    ],
    bangalore: [
        { id: 5, trainName: 'Mysore Express', departure: '08:00', arrival: '11:30', duration: '3h 30m', price: 500, trainNo: '16232' },
        { id: 6, trainName: 'Chamundi Express', departure: '18:30', arrival: '21:50', duration: '3h 20m', price: 450, trainNo: '16216' }
    ],
    chennai: [
        { id: 7, trainName: 'Shatabdi Express', departure: '06:00', arrival: '14:30', duration: '8h 30m', price: 1800, trainNo: '12007' },
        { id: 8, trainName: 'Kaveri Express', departure: '21:15', arrival: '06:00', duration: '8h 45m', price: 1700, trainNo: '16021' }
    ],
    kolkata: [
        { id: 9, trainName: 'Humsafar Express', departure: '05:45', arrival: '08:30', duration: '26h 45m', price: 3200, trainNo: '12504' },
        { id: 10, trainName: 'Guwhati-Bangalore Express', departure: '19:00', arrival: '22:00', duration: '27h', price: 3100, trainNo: '12510' }
    ],
    hyderabad: [
        { id: 11, trainName: 'Kacheguda Express', departure: '07:30', arrival: '22:00', duration: '14h 30m', price: 2400, trainNo: '12785' },
        { id: 12, trainName: 'Mysore Express', departure: '19:45', arrival: '10:30', duration: '14h 45m', price: 2500, trainNo: '12786' }
    ],
    kanpur: [
        { id: 13, trainName: 'Lucknow-Yeshvantpur Express', departure: '06:00', arrival: '21:00', duration: '39h', price: 2800, trainNo: '12540' },
        { id: 14, trainName: 'Gorakhpur-Yeshvantpur Express', departure: '18:30', arrival: '10:30', duration: '40h', price: 2700, trainNo: '15023' }
    ],
    surat: [
        { id: 15, trainName: 'Gandhidham Express', departure: '08:15', arrival: '20:30', duration: '12h 15m', price: 2100, trainNo: '16507' },
        { id: 16, trainName: 'Ajmer-Mysore Express', departure: '21:00', arrival: '11:30', duration: '14h 30m', price: 2200, trainNo: '16209' }
    ],
    indore: [
        { id: 17, trainName: 'Indore-Yeshvantpur Express', departure: '07:00', arrival: '22:30', duration: '15h 30m', price: 2300, trainNo: '19301' },
        { id: 18, trainName: 'Mysore Express', departure: '20:00', arrival: '11:30', duration: '15h 30m', price: 2400, trainNo: '16230' }
    ],
    aurangabad: [
        { id: 19, trainName: 'Aurangabad Express', departure: '07:30', arrival: '23:00', duration: '15h 30m', price: 2500, trainNo: '17621' },
        { id: 20, trainName: 'Devagiri Express', departure: '20:45', arrival: '12:30', duration: '15h 45m', price: 2400, trainNo: '17058' }
    ],
    coimbatore: [
        { id: 21, trainName: 'Coimbatore-Mysore Express', departure: '06:00', arrival: '14:00', duration: '8h', price: 1500, trainNo: '16608' },
        { id: 22, trainName: 'KSR Bengaluru Express', departure: '22:30', arrival: '06:30', duration: '8h', price: 1400, trainNo: '16526' }
    ],
    madurai: [
        { id: 23, trainName: 'Madurai Express', departure: '07:15', arrival: '15:15', duration: '8h', price: 1600, trainNo: '16159' },
        { id: 24, trainName: 'Tuticorin-Mysore Express', departure: '21:45', arrival: '06:15', duration: '8h 30m', price: 1550, trainNo: '16235' }
    ],
    visakhapatnam: [
        { id: 25, trainName: 'Visakhapatnam Express', departure: '08:30', arrival: '22:30', duration: '14h', price: 2700, trainNo: '18567' },
        { id: 26, trainName: 'Humsafar Express', departure: '19:15', arrival: '09:30', duration: '14h 15m', price: 2600, trainNo: '22833' }
    ],
    vijayawada: [
        { id: 27, trainName: 'Vijayawada-Mysore Express', departure: '07:00', arrival: '21:00', duration: '14h', price: 2600, trainNo: '17255' },
        { id: 28, trainName: 'Rayalaseema Express', departure: '19:45', arrival: '10:00', duration: '14h 15m', price: 2500, trainNo: '12793' }
    ],
    gwalior: [
        { id: 29, trainName: 'Bundelkhand Express', departure: '06:30', arrival: '21:30', duration: '15h', price: 2800, trainNo: '11108' },
        { id: 30, trainName: 'Chambal Express', departure: '20:30', arrival: '11:30', duration: '15h', price: 2700, trainNo: '12176' }
    ],
    amritsar: [
        { id: 31, trainName: 'Golden Temple Express', departure: '05:30', arrival: '20:30', duration: '15h', price: 3000, trainNo: '12904' },
        { id: 32, trainName: 'Amritsar-Bangalore Express', departure: '18:45', arrival: '09:45', duration: '15h', price: 2900, trainNo: '12688' }
    ],
    vadodara: [
        { id: 33, trainName: 'Vadodara-Mysore Express', departure: '06:30', arrival: '21:45', duration: '15h 15m', price: 2700, trainNo: '16502' },
        { id: 34, trainName: 'Gujarat Express', departure: '19:00', arrival: '10:30', duration: '15h 30m', price: 2600, trainNo: '19025' }
    ],
    ludhiana: [
        { id: 35, trainName: 'Punjab-Mysore Express', departure: '07:00', arrival: '22:30', duration: '15h 30m', price: 2800, trainNo: '16036' },
        { id: 36, trainName: 'Ludhiana-Bangalore Express', departure: '20:45', arrival: '11:30', duration: '15h 45m', price: 2750, trainNo: '16598' }
    ],
    kochi: [
        { id: 37, trainName: 'Kochi-Mysore Express', departure: '06:00', arrival: '14:30', duration: '8h 30m', price: 1600, trainNo: '16315' },
        { id: 38, trainName: 'Malabar Express', departure: '21:15', arrival: '06:00', duration: '8h 45m', price: 1500, trainNo: '16629' }
    ],
    mysore: [
        { id: 39, trainName: 'Chamundi Express', departure: '06:30', arrival: '09:30', duration: '3h', price: 500, trainNo: '16215' },
        { id: 40, trainName: 'Mysore Passenger', departure: '18:00', arrival: '21:00', duration: '3h', price: 450, trainNo: '56215' }
    ],
    mangalore: [
        { id: 41, trainName: 'Mangalore-Mysore Express', departure: '07:30', arrival: '16:30', duration: '9h', price: 1700, trainNo: '16540' },
        { id: 42, trainName: 'Karwar-Mysore Express', departure: '22:00', arrival: '07:30', duration: '9h 30m', price: 1600, trainNo: '16524' }
    ],
    ahmedabad: [
        { id: 43, trainName: 'Ahmedabad-Mysore Express', departure: '06:30', arrival: '22:30', duration: '16h', price: 2800, trainNo: '16615' },
        { id: 44, trainName: 'Sabarmati Express', departure: '19:30', arrival: '11:30', duration: '16h', price: 2700, trainNo: '19165' }
    ],
    pune: [
        { id: 45, trainName: 'Pune-Mysore Express', departure: '07:00', arrival: '22:30', duration: '15h 30m', price: 2600, trainNo: '11029' },
        { id: 46, trainName: 'Jodhpur-Mysore Express', departure: '20:45', arrival: '11:30', duration: '15h 45m', price: 2500, trainNo: '16210' }
    ],
    srinagar: [
        { id: 47, trainName: 'Srinagar-Mysore Express', departure: '08:00', arrival: '23:00', duration: '15h', price: 3200, trainNo: '14155' },
        { id: 48, trainName: 'Kashmir Express', departure: '19:30', arrival: '10:30', duration: '15h', price: 3100, trainNo: '14152' }
    ],
    nagpur: [
        { id: 49, trainName: 'Nagpur-Mysore Express', departure: '06:15', arrival: '21:30', duration: '15h 15m', price: 2500, trainNo: '12648' },
        { id: 50, trainName: 'Sampark Kranti Express', departure: '20:30', arrival: '11:30', duration: '15h', price: 2400, trainNo: '12650' }
    ],
    varanasi: [
        { id: 51, trainName: 'Varanasi-Mysore Express', departure: '06:00', arrival: '21:30', duration: '15h 30m', price: 2800, trainNo: '12516' },
        { id: 52, trainName: 'Ganga-Kaveri Express', departure: '20:30', arrival: '11:30', duration: '15h', price: 2700, trainNo: '12670' }
    ],

};

let currentPackageType = null;
const destination = 'Mysore';

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
                        <span class="city">Mysore</span>
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
                        <span class="city">Mysore</span>
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
                        <span class="city">Mysore</span>
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
                    <span class="city">Mysore</span>
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
                    <span class="city">Mysore</span>
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
                <span>From: ${flightType === 'outbound' ? fromCity : 'Mysore'}</span>
                <span>To: ${flightType === 'outbound' ? 'Mysore' : fromCity}</span>
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

// Hotel data for different packages in Mysore
const hotelData = {
    premium: [
        {
            name: "The Windflower Resort & Spa",
            rating: 5,
            price: 25000,
            features: ["Luxury Villas", "Spa & Wellness Center", "Infinity Pool", "Nature Walks"],
            distance: "Near Mysore Zoo",
            image: "../static/images/hotels/windflower-resort.jpg"
        },
        {
            name: "Radisson Blu Plaza Hotel",
            rating: 5,
            price: 22000,
            features: ["Luxury Rooms", "Multi-Cuisine Restaurant", "Fitness Center", "Swimming Pool"],
            distance: "Mysore Palace",
            image: "../static/images/hotels/radisson-blu.jpg"
        },
        {
            name: "Silent Shores Resort & Spa",
            rating: 5,
            price: 20000,
            features: ["Lake View Rooms", "Private Villas", "Yoga & Wellness Center", "Fine Dining"],
            distance: "Hinkal, Mysore",
            image: "../static/images/hotels/silent-shores.jpg"
        }
    ],
    gold: [
        {
            name: "Laika Heritage Stay",
            rating: 4,
            price: 15000,
            features: ["Heritage Style Rooms", "Restaurant", "Outdoor Pool", "24/7 Room Service"],
            distance: "Mysore",
            image: "../static/images/hotels/laika-heritage.jpg"
        },
        {
            name: "Country Inn & Suites by Radisson",
            rating: 4,
            price: 13000,
            features: ["Spacious Rooms", "Restaurant & Bar", "Fitness Center", "Meeting Facilities"],
            distance: "Mysore",
            image: "../static/images/hotels/country-inn-suites.jpg"
        },
        {
            name: "Hotel Pai Vista",
            rating: 4,
            price: 12000,
            features: ["Comfortable Rooms", "Restaurant", "Event Facilities", "Pool"],
            distance: "Near Mysore Palace",
            image: "../static/images/hotels/pai-vista.jpg"
        }
    ],
    silver: [
        {
            name: "Hotel Comfort Inn",
            rating: 3,
            price: 7000,
            features: ["Basic Rooms", "Restaurant", "24/7 Room Service", "Budget-Friendly"],
            distance: "Mysore",
            image: "../static/images/hotels/comfort-inn.jpg"
        },
        {
            name: "Mysore Mansion",
            rating: 3,
            price: 6500,
            features: ["Affordable Rooms", "Simple Amenities", "Restaurant", "Comfortable Stay"],
            distance: "Mysore",
            image: "../static/images/hotels/mysore-mansion.jpg"
        },
        {
            name: "Royal Orchid Metropole",
            rating: 3,
            price: 6000,
            features: ["Traditional Rooms", "Restaurant", "Event Space", "Comfortable Stay"],
            distance: "Mysore City Center",
            image: "../static/images/hotels/royal-orchid-metropole.jpg"
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
        const fromLocation = type === 'outbound' ? fromCity : 'Mysore';
        const toLocation = type === 'outbound' ? 'Mysore' : fromCity;

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