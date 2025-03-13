// Package details object
const packageDetails = {
    premium: {
        name: 'Premium Package',
        price: 35000,
        features: [
            'Luxury Boat Safari through Mangrove Forests',
            '5-Star Resort Stay near Sundarbans National Park',
            'Private Wildlife Expert Guide',
            'All Bengali Cuisine Meals Included',
            'Exclusive Access to Tiger Reserve & Birdwatching Sites'
        ]
    },
    gold: {
        name: 'Gold Package',
        price: 25000,
        features: [
            'AC Ferry Travel & Wildlife Safari',
            '4-Star Eco-Lodge Stay',
            'Expert Local Guide',
            'Traditional Bengali Breakfast & Dinner',
            'Access to Major Watchtowers & Villages'
        ]
    },
    silver: {
        name: 'Silver Package',
        price: 15000,
        features: [
            'Shared Boat Travel',
            '3-Star Hotel Stay near Sundarbans',
            'Group Tour Guide',
            'Bengali Breakfast Only',
            'Basic Sightseeing & Nature Walks'
        ]
    }
};

// Updated flight data with more cities and routes
const flightData = {
    delhi: [
        { id: 1, airline: 'Air India', departure: '06:00', arrival: '08:00', price: 4500, duration: '2h', flightNo: 'AI-101', via: 'Kolkata' },
        { id: 2, airline: 'IndiGo', departure: '14:00', arrival: '16:15', price: 4200, duration: '2h 15m', flightNo: '6E-202', via: 'Kolkata' }
    ],
    mumbai: [
        { id: 3, airline: 'SpiceJet', departure: '07:00', arrival: '10:00', price: 5500, duration: '3h', flightNo: 'SG-303', via: 'Kolkata' },
        { id: 4, airline: 'Vistara', departure: '15:00', arrival: '18:15', price: 5800, duration: '3h 15m', flightNo: 'UK-404', via: 'Kolkata' }
    ],
    bangalore: [
        { id: 5, airline: 'AirAsia', departure: '08:00', arrival: '12:00', price: 6500, duration: '4h', flightNo: 'I5-505', via: 'Kolkata' },
        { id: 6, airline: 'GoAir', departure: '16:00', arrival: '20:30', price: 6200, duration: '4h 30m', flightNo: 'G8-606', via: 'Kolkata' }
    ],
    chennai: [
        { id: 7, airline: 'IndiGo', departure: '09:00', arrival: '13:00', price: 6000, duration: '4h', flightNo: '6E-707', via: 'Kolkata' },
        { id: 8, airline: 'Air India', departure: '17:00', arrival: '21:15', price: 6300, duration: '4h 15m', flightNo: 'AI-808', via: 'Kolkata' }
    ],
    kolkata: [
        { id: 9, airline: 'SpiceJet', departure: '07:30', arrival: '08:30', price: 3000, duration: '1h', flightNo: 'SG-909', via: 'Direct' },
        { id: 10, airline: 'Vistara', departure: '15:30', arrival: '16:30', price: 3200, duration: '1h', flightNo: 'UK-110', via: 'Direct' }
    ],
    hyderabad: [
        { id: 11, airline: 'AirAsia', departure: '08:30', arrival: '11:30', price: 5000, duration: '3h', flightNo: 'I5-111', via: 'Kolkata' },
        { id: 12, airline: 'GoAir', departure: '16:30', arrival: '19:45', price: 4800, duration: '3h 15m', flightNo: 'G8-222', via: 'Kolkata' }
    ],
    kanpur: [
        { id: 13, airline: 'IndiGo', departure: '10:00', arrival: '13:30', price: 4200, duration: '3h 30m', flightNo: '6E-333', via: 'Kolkata' },
        { id: 14, airline: 'Air India', departure: '18:00', arrival: '21:45', price: 4500, duration: '3h 45m', flightNo: 'AI-444', via: 'Kolkata' }
    ],
    surat: [
        { id: 15, airline: 'SpiceJet', departure: '09:30', arrival: '12:30', price: 4000, duration: '3h', flightNo: 'SG-555', via: 'Kolkata' },
        { id: 16, airline: 'Vistara', departure: '17:30', arrival: '20:45', price: 4300, duration: '3h 15m', flightNo: 'UK-666', via: 'Kolkata' }
    ],
    indore: [
        { id: 17, airline: 'AirAsia', departure: '10:30', arrival: '13:30', price: 3800, duration: '3h', flightNo: 'I5-777', via: 'Kolkata' },
        { id: 18, airline: 'GoAir', departure: '18:30', arrival: '21:45', price: 3600, duration: '3h 15m', flightNo: 'G8-888', via: 'Kolkata' }
    ],
aurangabad: [
        { id: 19, airline: 'Air India', departure: '07:00', arrival: '10:30', price: 5200, duration: '3h 30m', flightNo: 'AI-123', via: 'Kolkata' },
        { id: 20, airline: 'IndiGo', departure: '15:00', arrival: '18:45', price: 4900, duration: '3h 45m', flightNo: '6E-456', via: 'Kolkata' }
    ],
    coimbatore: [
        { id: 21, airline: 'SpiceJet', departure: '06:30', arrival: '11:00', price: 5800, duration: '4h 30m', flightNo: 'SG-789', via: 'Kolkata' },
        { id: 22, airline: 'Vistara', departure: '14:30', arrival: '19:15', price: 6100, duration: '4h 45m', flightNo: 'UK-101', via: 'Kolkata' }
    ],
    madurai: [
        { id: 23, airline: 'AirAsia', departure: '08:00', arrival: '12:30', price: 6300, duration: '4h 30m', flightNo: 'I5-202', via: 'Kolkata' },
        { id: 24, airline: 'GoAir', departure: '16:00', arrival: '20:45', price: 6000, duration: '4h 45m', flightNo: 'G8-303', via: 'Kolkata' }
    ],
    visakhapatnam: [
        { id: 25, airline: 'IndiGo', departure: '09:30', arrival: '12:30', price: 5500, duration: '3h', flightNo: '6E-404', via: 'Kolkata' },
        { id: 26, airline: 'Air India', departure: '17:30', arrival: '20:45', price: 5800, duration: '3h 15m', flightNo: 'AI-505', via: 'Kolkata' }
    ],
    vijayawada: [
        { id: 27, airline: 'SpiceJet', departure: '07:30', arrival: '11:30', price: 5300, duration: '4h', flightNo: 'SG-606', via: 'Kolkata' },
        { id: 28, airline: 'Vistara', departure: '15:30', arrival: '19:45', price: 5600, duration: '4h 15m', flightNo: 'UK-707', via: 'Kolkata' }
    ],
    vadodara: [
        { id: 29, airline: 'AirAsia', departure: '10:00', arrival: '13:00', price: 4800, duration: '3h', flightNo: 'I5-808', via: 'Kolkata' },
        { id: 30, airline: 'GoAir', departure: '18:00', arrival: '21:15', price: 4500, duration: '3h 15m', flightNo: 'G8-909', via: 'Kolkata' }
    ],
    gwalior: [
        { id: 31, airline: 'IndiGo', departure: '08:30', arrival: '12:00', price: 4700, duration: '3h 30m', flightNo: '6E-110', via: 'Kolkata' },
        { id: 32, airline: 'Air India', departure: '16:30', arrival: '20:00', price: 5000, duration: '3h 30m', flightNo: 'AI-221', via: 'Kolkata' }
    ],
    amritsar: [
        { id: 33, airline: 'SpiceJet', departure: '07:00', arrival: '10:00', price: 4000, duration: '3h', flightNo: 'SG-332', via: 'Kolkata' },
        { id: 34, airline: 'Vistara', departure: '15:00', arrival: '18:15', price: 4300, duration: '3h 15m', flightNo: 'UK-443', via: 'Kolkata' }
    ],
vadodara: [
        { id: 29, airline: 'AirAsia', departure: '10:00', arrival: '14:00', price: 4800, duration: '4h', flightNo: 'I5-554', via: 'Kolkata' },
        { id: 30, airline: 'GoAir', departure: '18:00', arrival: '22:15', price: 4500, duration: '4h 15m', flightNo: 'G8-665', via: 'Kolkata' }
    ],
    ludhiana: [
        { id: 35, airline: 'IndiGo', departure: '07:30', arrival: '11:45', price: 3600, duration: '4h 15m', flightNo: '6E-777', via: 'Kolkata' },
        { id: 36, airline: 'Air India', departure: '15:30', arrival: '20:00', price: 3900, duration: '4h 30m', flightNo: 'AI-888', via: 'Kolkata' }
    ],
    kochi: [
        { id: 37, airline: 'SpiceJet', departure: '06:00', arrival: '11:00', price: 6500, duration: '5h', flightNo: 'SG-999', via: 'Kolkata' },
        { id: 38, airline: 'Vistara', departure: '14:00', arrival: '19:15', price: 6800, duration: '5h 15m', flightNo: 'UK-101', via: 'Kolkata' }
    ],
    mysore: [
        { id: 39, airline: 'AirAsia', departure: '08:00', arrival: '13:30', price: 6200, duration: '5h 30m', flightNo: 'I5-202', via: 'Kolkata' },
        { id: 40, airline: 'GoAir', departure: '16:00', arrival: '21:45', price: 5900, duration: '5h 45m', flightNo: 'G8-303', via: 'Kolkata' }
    ],
    mangalore: [
        { id: 41, airline: 'IndiGo', departure: '09:30', arrival: '14:30', price: 6100, duration: '5h', flightNo: '6E-404', via: 'Kolkata' },
        { id: 42, airline: 'Air India', departure: '17:30', arrival: '22:45', price: 6400, duration: '5h 15m', flightNo: 'AI-505', via: 'Kolkata' }
    ],
    ahmedabad: [
        { id: 43, airline: 'SpiceJet', departure: '07:00', arrival: '11:00', price: 4200, duration: '4h', flightNo: 'SG-606', via: 'Kolkata' },
        { id: 44, airline: 'Vistara', departure: '15:00', arrival: '19:15', price: 4500, duration: '4h 15m', flightNo: 'UK-707', via: 'Kolkata' }
    ],
    pune: [
        { id: 45, airline: 'AirAsia', departure: '10:30', arrival: '14:30', price: 4000, duration: '4h', flightNo: 'I5-808', via: 'Kolkata' },
        { id: 46, airline: 'GoAir', departure: '18:30', arrival: '22:45', price: 3800, duration: '4h 15m', flightNo: 'G8-909', via: 'Kolkata' }
    ],
    srinagar: [
        { id: 47, airline: 'IndiGo', departure: '06:30', arrival: '10:45', price: 4500, duration: '4h 15m', flightNo: '6E-110', via: 'Kolkata' },
        { id: 48, airline: 'Air India', departure: '14:30', arrival: '19:00', price: 4800, duration: '4h 30m', flightNo: 'AI-221', via: 'Kolkata' }
    ],
    nagpur: [
        { id: 49, airline: 'SpiceJet', departure: '08:30', arrival: '12:30', price: 4700, duration: '4h', flightNo: 'SG-332', via: 'Kolkata' },
        { id: 50, airline: 'Vistara', departure: '16:30', arrival: '20:45', price: 5000, duration: '4h 15m', flightNo: 'UK-443', via: 'Kolkata' }
    ],
    varanasi: [
        { id: 51, airline: 'AirAsia', departure: '07:00', arrival: '12:00', price: 5300, duration: '5h', flightNo: 'I5-554', via: 'Kolkata' },
        { id: 52, airline: 'GoAir', departure: '15:00', arrival: '20:15', price: 5000, duration: '5h 15m', flightNo: 'G8-665', via: 'Kolkata' }
    ]
};

// Sample bus data with all cities
const busData = {
    delhi: [
        { id: 1, operator: 'WBTC Volvo', departure: '16:00', arrival: '18:00 (2 Days Later)', price: 2500, type: 'AC Sleeper' },
        { id: 2, operator: 'Royal Bengal Travels', departure: '18:00', arrival: '20:30 (2 Days Later)', price: 2200, type: 'AC Semi-Sleeper' }
    ],
    mumbai: [
        { id: 3, operator: 'National Travels', departure: '12:00', arrival: '16:00 (3 Days Later)', price: 3800, type: 'AC Sleeper' },
        { id: 4, operator: 'Kolkata Express Bus', departure: '14:00', arrival: '18:30 (3 Days Later)', price: 3500, type: 'AC Semi-Sleeper' }
    ],
    bangalore: [
        { id: 5, operator: 'SRS Travels', departure: '08:00', arrival: '12:00 (4 Days Later)', price: 4500, type: 'AC Sleeper' },
        { id: 6, operator: 'KSRTC Airavat', departure: '10:00', arrival: '14:30 (4 Days Later)', price: 4200, type: 'AC Multi-Axle' }
    ],
    chennai: [
        { id: 7, operator: 'Parveen Travels', departure: '06:00', arrival: '10:00 (4 Days Later)', price: 4800, type: 'AC Sleeper' },
        { id: 8, operator: 'SRM Travels', departure: '08:00', arrival: '12:30 (4 Days Later)', price: 4600, type: 'AC Semi-Sleeper' }
    ],
    kolkata: [
        { id: 9, operator: 'WBTC Local', departure: '08:00', arrival: '12:00', price: 800, type: 'Non-AC Seater' },
        { id: 10, operator: 'Sundarban Travels', departure: '10:00', arrival: '14:00', price: 1000, type: 'AC Seater' }
    ],
    hyderabad: [
        { id: 11, operator: 'Orange Travels', departure: '10:00', arrival: '14:00 (3 Days Later)', price: 3500, type: 'AC Sleeper' },
        { id: 12, operator: 'Kesineni Travels', departure: '12:00', arrival: '16:30 (3 Days Later)', price: 3300, type: 'AC Semi-Sleeper' }
    ],
    kanpur: [
        { id: 13, operator: 'UPSRTC Volvo', departure: '18:00', arrival: '22:00 (2 Days Later)', price: 2800, type: 'AC Sleeper' },
        { id: 14, operator: 'RSRTC Deluxe', departure: '20:00', arrival: '00:30 (3 Days Later)', price: 2600, type: 'AC Semi-Sleeper' }
    ],
    surat: [
        { id: 15, operator: 'GSRTC Volvo', departure: '16:00', arrival: '20:00 (3 Days Later)', price: 3000, type: 'AC Sleeper' },
        { id: 16, operator: 'Eagle Travels', departure: '18:00', arrival: '22:30 (3 Days Later)', price: 2800, type: 'AC Semi-Sleeper' }
    ],
    indore: [
        { id: 17, operator: 'MPRTC Volvo', departure: '17:00', arrival: '21:00 (3 Days Later)', price: 2900, type: 'AC Sleeper' },
        { id: 18, operator: 'Hans Travels', departure: '19:00', arrival: '23:30 (3 Days Later)', price: 2700, type: 'AC Semi-Sleeper' }
    ],
aurangabad: [
        { id: 19, operator: 'MSRTC Shivshahi', departure: '14:00', arrival: '18:00 (3 Days Later)', price: 3200, type: 'AC Sleeper' },
        { id: 20, operator: 'Royal Safari Travels', departure: '16:00', arrival: '20:30 (3 Days Later)', price: 3000, type: 'AC Semi-Sleeper' }
    ],
    coimbatore: [
        { id: 21, operator: 'KPN Travels', departure: '10:00', arrival: '14:00 (4 Days Later)', price: 3800, type: 'AC Sleeper' },
        { id: 22, operator: 'TNSTC Ultra Deluxe', departure: '12:00', arrival: '16:30 (4 Days Later)', price: 3600, type: 'AC Multi-Axle' }
    ],
    madurai: [
        { id: 23, operator: 'SRS Travels', departure: '08:00', arrival: '12:00 (4 Days Later)', price: 4000, type: 'AC Sleeper' },
        { id: 24, operator: 'Parveen Travels', departure: '10:00', arrival: '14:30 (4 Days Later)', price: 3800, type: 'AC Semi-Sleeper' }
    ],
    visakhapatnam: [
        { id: 25, operator: 'APSRTC Garuda Plus', departure: '13:00', arrival: '17:00 (3 Days Later)', price: 3400, type: 'AC Sleeper' },
        { id: 26, operator: 'Orange Travels', departure: '15:00', arrival: '19:30 (3 Days Later)', price: 3200, type: 'AC Multi-Axle' }
    ],
    vijayawada: [
        { id: 27, operator: 'APSRTC Indra', departure: '12:00', arrival: '16:00 (3 Days Later)', price: 3300, type: 'AC Sleeper' },
        { id: 28, operator: 'Kesineni Travels', departure: '14:00', arrival: '18:30 (3 Days Later)', price: 3100, type: 'AC Semi-Sleeper' }
    ],
    vadodara: [
        { id: 29, operator: 'GSRTC Volvo', departure: '15:00', arrival: '19:00 (3 Days Later)', price: 3100, type: 'AC Sleeper' },
        { id: 30, operator: 'Eagle Travels', departure: '17:00', arrival: '21:30 (3 Days Later)', price: 2900, type: 'AC Semi-Sleeper' }
    ],
    gwalior: [
        { id: 31, operator: 'RSRTC Volvo', departure: '16:00', arrival: '20:00 (2 Days Later)', price: 2600, type: 'AC Sleeper' },
        { id: 32, operator: 'UPSRTC Janrath', departure: '18:00', arrival: '22:30 (2 Days Later)', price: 2400, type: 'AC Multi-Axle' }
    ],
    amritsar: [
        { id: 33, operator: 'PRTC Volvo', departure: '17:00', arrival: '21:00 (2 Days Later)', price: 2200, type: 'AC Sleeper' },
        { id: 34, operator: 'Himachal Travels', departure: '19:00', arrival: '23:30 (2 Days Later)', price: 2000, type: 'AC Semi-Sleeper' }
    ],
vadodara: [
        { id: 29, operator: 'GSRTC Volvo', departure: '15:00', arrival: '01:00 (3 Days Later)', price: 3600, type: 'AC Sleeper' },
        { id: 30, operator: 'Patel Tours and Travels', departure: '17:00', arrival: '03:30 (3 Days Later)', price: 3400, type: 'AC Semi-Sleeper' }
    ],
    ludhiana: [
        { id: 35, operator: 'PRTC Volvo', departure: '16:00', arrival: '02:00 (3 Days Later)', price: 2700, type: 'AC Sleeper' },
        { id: 36, operator: 'Indo Canadian Transport', departure: '18:00', arrival: '04:30 (3 Days Later)', price: 2500, type: 'Non-AC Sleeper' }
    ],
    kochi: [
        { id: 37, operator: 'Kallada Travels', departure: '09:00', arrival: '19:00 (4 Days Later)', price: 4200, type: 'AC Sleeper' },
        { id: 38, operator: 'Kerala Lines', departure: '11:00', arrival: '21:30 (4 Days Later)', price: 4000, type: 'AC Semi-Sleeper' }
    ],
    mysore: [
        { id: 39, operator: 'KSRTC Airavat Club Class', departure: '16:00', arrival: '04:00 (3 Days Later)', price: 3900, type: 'AC Sleeper' },
        { id: 40, operator: 'SRS Travels', departure: '18:00', arrival: '06:30 (3 Days Later)', price: 3700, type: 'AC Multi-Axle' }
    ],
    mangalore: [
        { id: 41, operator: 'Durgamba Motors', departure: '13:00', arrival: '23:00 (3 Days Later)', price: 4400, type: 'AC Sleeper' },
        { id: 42, operator: 'VRL Travels', departure: '15:00', arrival: '01:30 (4 Days Later)', price: 4200, type: 'AC Semi-Sleeper' }
    ],
    ahmedabad: [
        { id: 43, operator: 'GSRTC Volvo', departure: '16:00', arrival: '02:00 (3 Days Later)', price: 3800, type: 'AC Sleeper' },
        { id: 44, operator: 'Patel Tours and Travels', departure: '18:00', arrival: '04:30 (3 Days Later)', price: 3600, type: 'AC Semi-Sleeper' }
    ],
    pune: [
        { id: 45, operator: 'MSRTC Shivneri', departure: '17:00', arrival: '05:00 (3 Days Later)', price: 3400, type: 'AC Sleeper' },
        { id: 46, operator: 'Neeta Tours', departure: '19:00', arrival: '07:30 (3 Days Later)', price: 3200, type: 'AC Semi-Sleeper' }
    ],
    srinagar: [
        { id: 47, operator: 'JKSRTC Deluxe', departure: '07:00', arrival: '17:00 (4 Days Later)', price: 4100, type: 'AC Sleeper' },
        { id: 48, operator: 'Kashmir Travels', departure: '09:00', arrival: '19:30 (4 Days Later)', price: 3900, type: 'AC Semi-Sleeper' }
    ],
    nagpur: [
        { id: 49, operator: 'MSRTC Shivshahi', departure: '12:00', arrival: '00:00 (3 Days Later)', price: 3500, type: 'AC Sleeper' },
        { id: 50, operator: 'Royal Travels', departure: '14:00', arrival: '02:30 (3 Days Later)', price: 3300, type: 'AC Semi-Sleeper' }
    ],
    varanasi: [
        { id: 51, operator: 'UPSRTC Volvo', departure: '15:00', arrival: '23:00 (2 Days Later)', price: 2800, type: 'AC Sleeper' },
        { id: 52, operator: 'Mahalaxmi Travels', departure: '17:00', arrival: '01:30 (3 Days Later)', price: 2600, type: 'AC Semi-Sleeper' }
    ]
};

// Sample train data with all cities
const trainData = {
    delhi: [
        { id: 1, trainName: 'Duronto Express', departure: '12:55', arrival: '10:10 (Next Day)', duration: '21h 15m', price: 2200, trainNo: '12274', via: 'Kolkata' },
        { id: 2, trainName: 'Sealdah Rajdhani', departure: '16:55', arrival: '10:00 (Next Day)', duration: '17h 05m', price: 2500, trainNo: '12314', via: 'Kolkata' }
    ],
    mumbai: [
        { id: 3, trainName: 'Howrah Mail', departure: '20:35', arrival: '06:05 (3 Days Later)', duration: '33h 30m', price: 3500, trainNo: '12809', via: 'Kolkata' },
        { id: 4, trainName: 'Gitanjali Express', departure: '07:35', arrival: '16:30 (Next Day)', duration: '32h 55m', price: 3800, trainNo: '12859', via: 'Kolkata' }
    ],
    bangalore: [
        { id: 5, trainName: 'Howrah Express', departure: '10:15', arrival: '17:45 (3 Days Later)', duration: '55h 30m', price: 4200, trainNo: '12864', via: 'Kolkata' },
        { id: 6, trainName: 'Yesvantpur Howrah Express', departure: '12:40', arrival: '20:10 (3 Days Later)', duration: '55h 30m', price: 4500, trainNo: '12863', via: 'Kolkata' }
    ],
    chennai: [
        { id: 7, trainName: 'Coromandel Express', departure: '08:45', arrival: '16:50 (Next Day)', duration: '28h 05m', price: 3800, trainNo: '12842', via: 'Kolkata' },
        { id: 8, trainName: 'Howrah Mail', departure: '23:45', arrival: '07:50 (3 Days Later)', duration: '28h 05m', price: 4000, trainNo: '12840', via: 'Kolkata' }
    ],
    kolkata: [
        { id: 9, trainName: 'Local Train', departure: '06:00', arrival: '09:00', duration: '3h', price: 300, trainNo: '34711', via: 'Direct' },
        { id: 10, trainName: 'Sundarban Express', departure: '15:00', arrival: '18:00', duration: '3h', price: 500, trainNo: '13331', via: 'Direct' }
    ],
    hyderabad: [
        { id: 11, trainName: 'East Coast Express', departure: '11:00', arrival: '22:00 (Next Day)', duration: '35h', price: 3500, trainNo: '18046', via: 'Kolkata' },
        { id: 12, trainName: 'Falaknuma Express', departure: '09:30', arrival: '20:30 (Next Day)', duration: '35h', price: 3200, trainNo: '12704', via: 'Kolkata' }
    ],
    kanpur: [
        { id: 13, trainName: 'Poorva Express', departure: '17:40', arrival: '09:30 (Next Day)', duration: '15h 50m', price: 2800, trainNo: '12304', via: 'Kolkata' },
        { id: 14, trainName: 'Howrah Express', departure: '14:20', arrival: '06:10 (Next Day)', duration: '15h 50m', price: 2500, trainNo: '12324', via: 'Kolkata' }
    ],
    surat: [
        { id: 15, trainName: 'HWH Surat Express', departure: '12:15', arrival: '19:45 (2 Days Later)', duration: '31h 30m', price: 3300, trainNo: '12917', via: 'Kolkata' },
        { id: 16, trainName: 'Swaraj Express', departure: '14:30', arrival: '22:00 (2 Days Later)', duration: '31h 30m', price: 3000, trainNo: '12471', via: 'Kolkata' }
    ],
    indore: [
        { id: 17, trainName: 'Shipra Express', departure: '17:00', arrival: '00:30 (3 Days Later)', duration: '31h 30m', price: 3100, trainNo: '22911', via: 'Kolkata' },
        { id: 18, trainName: 'Howrah Express', departure: '12:30', arrival: '20:15 (2 Days Later)', duration: '31h 45m', price: 2900, trainNo: '12919', via: 'Kolkata' }
    ],
aurangabad: [
        { id: 19, trainName: 'Deekshabhoomi Express', departure: '11:00', arrival: '23:00 (Next Day)', duration: '36h', price: 3000, trainNo: '11045', via: 'Kolkata' },
        { id: 20, trainName: 'Gitanjali Express', departure: '16:00', arrival: '04:30 (2 Days Later)', duration: '36h 30m', price: 3200, trainNo: '12859', via: 'Kolkata' }
    ],
    coimbatore: [
        { id: 21, trainName: 'Coimbatore Howrah Express', departure: '13:00', arrival: '22:00 (3 Days Later)', duration: '57h', price: 4000, trainNo: '12842', via: 'Kolkata' },
        { id: 22, trainName: 'Nilagiri Express', departure: '18:00', arrival: '03:00 (4 Days Later)', duration: '57h', price: 4200, trainNo: '12671', via: 'Kolkata' }
    ],
    madurai: [
        { id: 23, trainName: 'Madurai Howrah Express', departure: '10:00', arrival: '19:00 (3 Days Later)', duration: '57h', price: 4100, trainNo: '12663', via: 'Kolkata' },
        { id: 24, trainName: 'Vaigai Express', departure: '15:00', arrival: '00:00 (4 Days Later)', duration: '57h', price: 4300, trainNo: '12631', via: 'Kolkata' }
    ],
    visakhapatnam: [
        { id: 25, trainName: 'East Coast Express', departure: '14:00', arrival: '01:00 (Next Day)', duration: '11h', price: 1500, trainNo: '18046', via: 'Direct' },
        { id: 26, trainName: 'Coromandel Express', departure: '17:00', arrival: '04:00 (Next Day)', duration: '11h', price: 1700, trainNo: '12842', via: 'Direct' }
    ],
    vijayawada: [
        { id: 27, trainName: 'Falaknuma Express', departure: '12:00', arrival: '23:00 (Next Day)', duration: '11h', price: 1600, trainNo: '12704', via: 'Direct' },
        { id: 28, trainName: 'Howrah Mail', departure: '15:00', arrival: '02:00 (Next Day)', duration: '11h', price: 1800, trainNo: '12840', via: 'Direct' }
    ],
    vadodara: [
        { id: 29, trainName: 'HWH Surat Express', departure: '10:00', arrival: '17:30 (2 Days Later)', duration: '31h 30m', price: 3100, trainNo: '12917', via: 'Kolkata' },
        { id: 30, trainName: 'Swaraj Express', departure: '13:00', arrival: '20:30 (2 Days Later)', duration: '31h 30m', price: 2900, trainNo: '12471', via: 'Kolkata' }
    ],
    gwalior: [
        { id: 31, trainName: 'Chambal Express', departure: '16:00', arrival: '04:00 (Next Day)', duration: '12h', price: 2000, trainNo: '12176', via: 'Kolkata' },
        { id: 32, trainName: 'Poorva Express', departure: '19:00', arrival: '07:00 (Next Day)', duration: '12h', price: 2200, trainNo: '12304', via: 'Kolkata' }
    ],
    amritsar: [
        { id: 33, trainName: 'Amritsar Howrah Express', departure: '12:00', arrival: '21:00 (2 Days Later)', duration: '33h', price: 3300, trainNo: '13050', via: 'Kolkata' },
        { id: 34, trainName: 'Jallianwala Bagh Express', departure: '15:00', arrival: '00:00 (3 Days Later)', duration: '33h', price: 3500, trainNo: '12379', via: 'Kolkata' }
    ],
 vadodara: [
        { id: 29, trainName: 'HWH Surat Express', departure: '10:00', arrival: '17:30 (2 Days Later)', duration: '31h 30m', price: 3100, trainNo: '12917', via: 'Kolkata' },
        { id: 30, trainName: 'Swaraj Express', departure: '13:00', arrival: '20:30 (2 Days Later)', duration: '31h 30m', price: 2900, trainNo: '12471', via: 'Kolkata' }
    ],
    ludhiana: [
        { id: 35, trainName: 'Howrah Mail', departure: '15:30', arrival: '00:30 (2 Days Later)', duration: '33h', price: 2800, trainNo: '13006', via: 'Kolkata' },
        { id: 36, trainName: 'Amritsar Howrah Express', departure: '18:00', arrival: '03:00 (2 Days Later)', duration: '33h', price: 2600, trainNo: '13050', via: 'Kolkata' }
    ],
    kochi: [
        { id: 37, trainName: 'Guwahati Express', departure: '14:00', arrival: '03:00 (4 Days Later)', duration: '61h', price: 4800, trainNo: '12515', via: 'Kolkata' },
        { id: 38, trainName: 'Howrah Express', departure: '16:30', arrival: '05:30 (4 Days Later)', duration: '61h', price: 4600, trainNo: '12864', via: 'Kolkata' }
    ],
    mysore: [
        { id: 39, trainName: 'Mysore Howrah Express', departure: '11:30', arrival: '20:30 (3 Days Later)', duration: '57h', price: 4300, trainNo: '22818', via: 'Kolkata' },
        { id: 40, trainName: 'Howrah Express', departure: '14:00', arrival: '23:00 (3 Days Later)', duration: '57h', price: 4100, trainNo: '12864', via: 'Kolkata' }
    ],
    mangalore: [
        { id: 41, trainName: 'Mangalore Howrah Express', departure: '13:30', arrival: '22:30 (3 Days Later)', duration: '57h', price: 4400, trainNo: '22852', via: 'Kolkata' },
        { id: 42, trainName: 'Howrah Express', departure: '16:00', arrival: '01:00 (4 Days Later)', duration: '57h', price: 4200, trainNo: '12864', via: 'Kolkata' }
    ],
    ahmedabad: [
        { id: 43, trainName: 'HWH Ahmedabad Express', departure: '11:00', arrival: '18:30 (2 Days Later)', duration: '31h 30m', price: 3200, trainNo: '12834', via: 'Kolkata' },
        { id: 44, trainName: 'Swaraj Express', departure: '13:30', arrival: '21:00 (2 Days Later)', duration: '31h 30m', price: 3000, trainNo: '12471', via: 'Kolkata' }
    ],
    pune: [
        { id: 45, trainName: 'Pune Howrah Express', departure: '12:30', arrival: '20:00 (2 Days Later)', duration: '31h 30m', price: 3300, trainNo: '12141', via: 'Kolkata' },
        { id: 46, trainName: 'Gitanjali Express', departure: '15:00', arrival: '22:30 (2 Days Later)', duration: '31h 30m', price: 3100, trainNo: '12859', via: 'Kolkata' }
    ],
    srinagar: [
        { id: 47, trainName: 'Hemkunt Express', departure: '14:00', arrival: '00:00 (3 Days Later)', duration: '34h', price: 3500, trainNo: '14609', via: 'Kolkata' },
        { id: 48, trainName: 'Jammu Tawi Howrah Express', departure: '16:30', arrival: '02:30 (3 Days Later)', duration: '34h', price: 3300, trainNo: '12332', via: 'Kolkata' }
    ],
    nagpur: [
        { id: 49, trainName: 'Nagpur Howrah Express', departure: '13:00', arrival: '22:00 (Next Day)', duration: '33h', price: 3400, trainNo: '12101', via: 'Kolkata' },
        { id: 50, trainName: 'Gitanjali Express', departure: '15:30', arrival: '00:30 (2 Days Later)', duration: '33h', price: 3200, trainNo: '12859', via: 'Kolkata' }
    ],
    varanasi: [
        { id: 51, trainName: 'Varanasi Howrah Express', departure: '16:00', arrival: '08:00 (Next Day)', duration: '16h', price: 2500, trainNo: '12334', via: 'Kolkata' },
        { id: 52, trainName: 'Poorva Express', departure: '18:30', arrival: '10:30 (Next Day)', duration: '16h', price: 2300, trainNo: '12304', via: 'Kolkata' }
    ]
};

let currentPackageType = null;
const destination = 'Sundarbans';

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
                        <span class="city">Sundarbans</span>
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
                        <span class="city">Sundarbans</span>
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
                        <span class="city">Sundarbans</span>
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
                    <span class="city">Sundarbans</span>
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
                    <span class="city">Sundarbans</span>
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
                <span>From: ${flightType === 'outbound' ? fromCity : 'Sundarbans'}</span>
                <span>To: ${flightType === 'outbound' ? 'Sundarbans' : fromCity}</span>
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
// Hotel data for different packages in Sundarbans
const hotelData = {
    premium: [
        {
            name: "Sundarbans Tiger Camp",
            rating: 5,
            price: 25000,
            features: ["Luxury Tented Cottages", "Private Boat Safari", "Gourmet Dining", "Nature Walks"],
            distance: "Sundarbans National Park",
            image: "../static/images/hotels/tiger-camp.jpg"
        },
        {
            name: "The Sundarbans Gateway Resort",
            rating: 5,
            price: 23000,
            features: ["River View Rooms", "Private Boat Rides", "Outdoor Dining", "Eco-Friendly Practices"],
            distance: "Sundarbans",
            image: "../static/images/hotels/sundarbans-gateway.jpg"
        },
        {
            name: "Mangrove Eco Resort",
            rating: 5,
            price: 22000,
            features: ["Nature-Inspired Villas", "Wildlife Sightseeing", "Spa", "Restaurant with Local Cuisine"],
            distance: "Sundarbans",
            image: "../static/images/hotels/mangrove-eco-resort.jpg"
        }
    ],
    gold: [
        {
            name: "Sundarbans Wild Resort",
            rating: 4,
            price: 16000,
            features: ["Comfortable Rooms", "Riverfront Views", "Nature Trails", "Outdoor Dining"],
            distance: "Sundarbans",
            image: "../static/images/hotels/sundarbans-wild-resort.jpg"
        },
        {
            name: "Jungle Mahal Resort",
            rating: 4,
            price: 14000,
            features: ["Standard Rooms", "Restaurant", "Boat Safari", "Outdoor Activities"],
            distance: "Sundarbans",
            image: "../static/images/hotels/jungle-mahal-resort.jpg"
        },
        {
            name: "The Royal Sundarbans",
            rating: 4,
            price: 13000,
            features: ["Luxury Rooms", "Forest Viewing", "Recreational Activities", "Delicious Cuisine"],
            distance: "Sundarbans",
            image: "../static/images/hotels/royal-sundarbans.jpg"
        }
    ],
    silver: [
        {
            name: "Sundarban Tiger Camp",
            rating: 3,
            price: 9000,
            features: ["Simple Rooms", "Eco-Friendly", "Affordable Boat Safari", "Restaurant"],
            distance: "Sundarbans",
            image: "../static/images/hotels/sundarban-tiger-camp.jpg"
        },
        {
            name: "Hotel Sundarban Guest House",
            rating: 3,
            price: 7000,
            features: ["Basic Rooms", "Budget-Friendly", "Local Cuisine", "Room Service"],
            distance: "Sundarbans",
            image: "../static/images/hotels/sundarban-guest-house.jpg"
        },
        {
            name: "Shonar Bangla",
            rating: 3,
            price: 6000,
            features: ["Comfortable Rooms", "Affordable Dining", "Room Service", "Boat Tours"],
            distance: "Sundarbans",
            image: "../static/images/hotels/shonar-bangla.jpg"
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
        const fromLocation = type === 'outbound' ? fromCity : 'Sundarbans';
        const toLocation = type === 'outbound' ? 'Sundarbans' : fromCity;

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