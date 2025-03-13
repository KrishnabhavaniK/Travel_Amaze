const packageDetails = {
    premium: {
        name: 'Premium Package',
        price: 40000,
        features: [
            'Luxury Flight Travel',
            '5-Star Hotel Accommodation in Mumbai',
            'Private Tour Guide',
            'All Maharashtrian Cuisine Meals Included',
            'Priority Access to Gateway of India, Marine Drive & Bollywood Studio Tour'
        ]
    },
    gold: {
        name: 'Gold Package',
        price: 28000,
        features: [
            'AC Bus Travel',
            '4-Star Resort Stay in Mumbai',
            'Expert Local Guide',
            'Maharashtrian Breakfast & Dinner',
            'Standard Access to Major Tourist Attractions'
        ]
    },
    silver: {
        name: 'Silver Package',
        price: 18000,
        features: [
            'Train Travel (AC Class)',
            '3-Star Hotel in Mumbai',
            'Group Tour Guide',
            'Maharashtrian Breakfast Only',
            'Basic Sightseeing Package'
        ]
    }
};

// Updated flight data with more cities and routes
const flightData = {
    delhi: [
        { id: 1, airline: 'IndiGo', departure: '06:00', arrival: '08:15', duration: '2h 15m', price: 5500, flightNo: '6E-201', via: 'Non-stop' },
        { id: 2, airline: 'Air India', departure: '18:00', arrival: '20:15', duration: '2h 15m', price: 5700, flightNo: 'AI-789', via: 'Non-stop' }
    ],
    bangalore: [
        { id: 3, airline: 'Vistara', departure: '07:30', arrival: '09:45', duration: '2h 15m', price: 5200, flightNo: 'UK-654', via: 'Non-stop' },
        { id: 4, airline: 'IndiGo', departure: '19:00', arrival: '21:15', duration: '2h 15m', price: 5400, flightNo: '6E-789', via: 'Non-stop' }
    ],
    chennai: [
        { id: 5, airline: 'SpiceJet', departure: '08:00', arrival: '10:15', duration: '2h 15m', price: 5000, flightNo: 'SG-321', via: 'Non-stop' },
        { id: 6, airline: 'Air India', departure: '20:00', arrival: '22:15', duration: '2h 15m', price: 5200, flightNo: 'AI-777', via: 'Non-stop' }
    ],
    kolkata: [
        { id: 7, airline: 'IndiGo', departure: '09:00', arrival: '12:00', duration: '3h', price: 6200, flightNo: '6E-456', via: 'Non-stop' },
        { id: 8, airline: 'Vistara', departure: '21:30', arrival: '00:30', duration: '3h', price: 6400, flightNo: 'UK-890', via: 'Non-stop' }
    ],
    hyderabad: [
        { id: 9, airline: 'Air India', departure: '06:45', arrival: '08:00', duration: '1h 15m', price: 4500, flightNo: 'AI-567', via: 'Non-stop' },
        { id: 10, airline: 'IndiGo', departure: '19:15', arrival: '20:30', duration: '1h 15m', price: 4700, flightNo: '6E-678', via: 'Non-stop' }
    ],
    ahmedabad: [
        { id: 11, airline: 'Vistara', departure: '07:15', arrival: '08:45', duration: '1h 30m', price: 4800, flightNo: 'UK-101', via: 'Non-stop' },
        { id: 12, airline: 'SpiceJet', departure: '20:45', arrival: '22:15', duration: '1h 30m', price: 5000, flightNo: 'SG-202', via: 'Non-stop' }
    ],
    pune: [
        { id: 13, airline: 'IndiGo', departure: '09:30', arrival: '10:30', duration: '1h', price: 3900, flightNo: '6E-909', via: 'Non-stop' },
        { id: 14, airline: 'Air India', departure: '22:00', arrival: '23:00', duration: '1h', price: 4100, flightNo: 'AI-808', via: 'Non-stop' }
    ],
    varanasi: [
        { id: 15, airline: 'SpiceJet', departure: '07:00', arrival: '09:30', duration: '2h 30m', price: 6200, flightNo: 'SG-505', via: 'Non-stop' },
        { id: 16, airline: 'Air India', departure: '19:30', arrival: '22:00', duration: '2h 30m', price: 6400, flightNo: 'AI-606', via: 'Non-stop' }
    ],
    srinagar: [
        { id: 17, airline: 'IndiGo', departure: '08:45', arrival: '11:30', duration: '2h 45m', price: 6800, flightNo: '6E-707', via: 'Non-stop' },
        { id: 18, airline: 'Vistara', departure: '21:15', arrival: '23:45', duration: '2h 30m', price: 7000, flightNo: 'UK-808', via: 'Non-stop' }
    ],
    nagpur: [
        { id: 19, airline: 'IndiGo', departure: '09:00', arrival: '10:30', duration: '1h 30m', price: 4500, flightNo: '6E-909', via: 'Non-stop' },
        { id: 20, airline: 'Vistara', departure: '20:00', arrival: '21:30', duration: '1h 30m', price: 4700, flightNo: 'UK-909', via: 'Non-stop' }
    ],
    chennai: [
        { id: 21, airline: 'IndiGo', departure: '07:15', arrival: '08:45', duration: '1h 30m', price: 4500, flightNo: '6E-101', via: 'Direct' },
        { id: 22, airline: 'Air India', departure: '19:00', arrival: '20:30', duration: '1h 30m', price: 4700, flightNo: 'AI-202', via: 'Direct' }
    ],
    kanpur: [
        { id: 23, airline: 'SpiceJet', departure: '08:00', arrival: '12:30', duration: '4h 30m', price: 7200, flightNo: 'SG-303', via: 'Chennai' },
        { id: 24, airline: 'Vistara', departure: '20:15', arrival: '00:45', duration: '4h 30m', price: 7500, flightNo: 'UK-404', via: 'Bangalore' }
    ],
    surat: [
        { id: 25, airline: 'IndiGo', departure: '09:30', arrival: '14:00', duration: '4h 30m', price: 5900, flightNo: '6E-505', via: 'Mumbai' },
        { id: 26, airline: 'Air India', departure: '21:00', arrival: '01:30', duration: '4h 30m', price: 6100, flightNo: 'AI-606', via: 'Bangalore' }
    ],
    indore: [
        { id: 27, airline: 'SpiceJet', departure: '06:45', arrival: '11:00', duration: '4h 15m', price: 6300, flightNo: 'SG-707', via: 'Mumbai' },
        { id: 28, airline: 'Vistara', departure: '18:30', arrival: '22:45', duration: '4h 15m', price: 6500, flightNo: 'UK-808', via: 'Bangalore' }
    ],
    aurangabad: [
        { id: 29, airline: 'IndiGo', departure: '07:15', arrival: '11:30', duration: '4h 15m', price: 6200, flightNo: '6E-909', via: 'Bangalore' },
        { id: 30, airline: 'SpiceJet', departure: '20:30', arrival: '00:45', duration: '4h 15m', price: 6400, flightNo: 'SG-101', via: 'Mumbai' }
    ],
    coimbatore: [
        { id: 31, airline: 'Air India', departure: '06:30', arrival: '08:00', duration: '1h 30m', price: 6000, flightNo: 'AI-202', via: 'Direct' },
        { id: 32, airline: 'Vistara', departure: '20:00', arrival: '21:30', duration: '1h 30m', price: 6200, flightNo: 'UK-303', via: 'Direct' }
    ],
    visakhapatnam: [
        { id: 33, airline: 'IndiGo', departure: '07:45', arrival: '12:00', duration: '4h 15m', price: 6500, flightNo: '6E-404', via: 'Chennai' },
        { id: 34, airline: 'SpiceJet', departure: '21:15', arrival: '01:30', duration: '4h 15m', price: 6700, flightNo: 'SG-505', via: 'Bangalore' }
    ],
    vijayawada: [
        { id: 35, airline: 'Air India', departure: '08:15', arrival: '12:30', duration: '4h 15m', price: 6300, flightNo: 'AI-606', via: 'Chennai' },
        { id: 36, airline: 'Vistara', departure: '22:00', arrival: '02:15', duration: '4h 15m', price: 6500, flightNo: 'UK-707', via: 'Bangalore' }
    ],
    vadodara: [
        { id: 37, airline: 'IndiGo', departure: '09:00', arrival: '14:00', duration: '5h', price: 6600, flightNo: '6E-808', via: 'Mumbai' },
        { id: 38, airline: 'Air India', departure: '21:30', arrival: '02:30', duration: '5h', price: 6800, flightNo: 'AI-909', via: 'Bangalore' }
    ],
    gwalior: [
        { id: 39, airline: 'IndiGo', departure: '07:45', arrival: '12:00', duration: '4h 15m', price: 6200, flightNo: '6E-101', via: 'Delhi' },
        { id: 40, airline: 'SpiceJet', departure: '20:30', arrival: '00:45', duration: '4h 15m', price: 6400, flightNo: 'SG-202', via: 'Mumbai' }
    ],
    amritsar: [
        { id: 41, airline: 'Vistara', departure: '06:30', arrival: '11:00', duration: '4h 30m', price: 6700, flightNo: 'UK-303', via: 'Delhi' },
        { id: 42, airline: 'Air India', departure: '19:15', arrival: '23:45', duration: '4h 30m', price: 6900, flightNo: 'AI-404', via: 'Mumbai' }
    ],
    ludhiana: [
        { id: 43, airline: 'SpiceJet', departure: '08:45', arrival: '13:30', duration: '4h 45m', price: 6500, flightNo: 'SG-505', via: 'Delhi' },
        { id: 44, airline: 'Vistara', departure: '21:00', arrival: '01:45', duration: '4h 45m', price: 6700, flightNo: 'UK-606', via: 'Mumbai' }
    ],
    kochi: [
        { id: 45, airline: 'IndiGo', departure: '07:15', arrival: '08:45', duration: '1h 30m', price: 5800, flightNo: '6E-707', via: 'Direct' },
        { id: 46, airline: 'SpiceJet', departure: '19:30', arrival: '21:00', duration: '1h 30m', price: 6000, flightNo: 'SG-808', via: 'Direct' }
    ],
    mysore: [
        { id: 47, airline: 'Air India', departure: '06:30', arrival: '08:30', duration: '2h', price: 5600, flightNo: 'AI-909', via: 'Bangalore' },
        { id: 48, airline: 'Vistara', departure: '20:30', arrival: '22:30', duration: '2h', price: 5800, flightNo: 'UK-101', via: 'Bangalore' }
    ],
    mangalore: [
        { id: 49, airline: 'IndiGo', departure: '09:15', arrival: '11:30', duration: '2h 15m', price: 6000, flightNo: '6E-202', via: 'Bangalore' },
        { id: 50, airline: 'SpiceJet', departure: '22:15', arrival: '00:30', duration: '2h 15m', price: 6200, flightNo: 'SG-303', via: 'Chennai' }
    ]
};

// Sample bus data with all cities
const busData = {
    chennai: [
        { id: 1, operator: 'VRL Travels', departure: '15:00', arrival: '11:30', duration: '20h 30m', price: 2200, busType: 'AC Sleeper' },
        { id: 2, operator: 'SRS Travels', departure: '18:00', arrival: '14:00', duration: '20h', price: 2400, busType: 'AC Seater/Sleeper' }
    ],
    kanpur: [
        { id: 3, operator: 'UPSRTC', departure: '12:00', arrival: '10:00', duration: '22h', price: 2000, busType: 'Non-AC Sleeper' },
        { id: 4, operator: 'Eagle Travels', departure: '19:30', arrival: '17:30', duration: '22h', price: 2200, busType: 'AC Sleeper' }
    ],
    surat: [
        { id: 5, operator: 'Shreenath Travels', departure: '08:00', arrival: '13:00', duration: '5h', price: 800, busType: 'AC Seater' },
        { id: 6, operator: 'Gujarat Travels', departure: '20:00', arrival: '01:00', duration: '5h', price: 900, busType: 'AC Sleeper' }
    ],
    indore: [
        { id: 7, operator: 'Hans Travels', departure: '21:00', arrival: '09:00', duration: '12h', price: 1300, busType: 'AC Sleeper' },
        { id: 8, operator: 'Verma Travels', departure: '18:30', arrival: '06:30', duration: '12h', price: 1400, busType: 'AC Seater/Sleeper' }
    ],
    aurangabad: [
        { id: 9, operator: 'MSRTC', departure: '07:00', arrival: '14:00', duration: '7h', price: 700, busType: 'Non-AC Seater' },
        { id: 10, operator: 'Neeta Travels', departure: '22:00', arrival: '05:00', duration: '7h', price: 900, busType: 'AC Sleeper' }
    ],
    coimbatore: [
        { id: 11, operator: 'KPN Travels', departure: '16:00', arrival: '14:30', duration: '22h 30m', price: 2500, busType: 'AC Sleeper' },
        { id: 12, operator: 'SRS Travels', departure: '20:30', arrival: '18:30', duration: '22h', price: 2700, busType: 'AC Seater/Sleeper' }
    ],
    visakhapatnam: [
        { id: 13, operator: 'Orange Travels', departure: '17:00', arrival: '15:30', duration: '22h 30m', price: 2600, busType: 'AC Sleeper' },
        { id: 14, operator: 'VRL Travels', departure: '21:00', arrival: '19:00', duration: '22h', price: 2800, busType: 'AC Seater/Sleeper' }
    ],
    vijayawada: [
        { id: 15, operator: 'SVR Travels', departure: '15:30', arrival: '14:00', duration: '22h 30m', price: 2400, busType: 'AC Sleeper' },
        { id: 16, operator: 'Kaveri Travels', departure: '19:30', arrival: '17:30', duration: '22h', price: 2600, busType: 'AC Seater/Sleeper' }
    ],
    vadodara: [
        { id: 17, operator: 'Shreenath Travels', departure: '09:00', arrival: '15:00', duration: '6h', price: 900, busType: 'AC Seater' },
        { id: 18, operator: 'Gujarat Travels', departure: '21:00', arrival: '03:00', duration: '6h', price: 1000, busType: 'AC Sleeper' }
    ],
    gwalior: [
        { id: 19, operator: 'Rajasthan Travels', departure: '17:30', arrival: '14:00', duration: '20h 30m', price: 2200, busType: 'AC Sleeper' },
        { id: 20, operator: 'Eagle Travels', departure: '22:00', arrival: '18:30', duration: '20h 30m', price: 2400, busType: 'AC Seater/Sleeper' }
    ],
    amritsar: [
        { id: 21, operator: 'PRTC', departure: '10:00', arrival: '08:00', duration: '22h', price: 2500, busType: 'AC Sleeper' },
        { id: 22, operator: 'Rajdhani Travels', departure: '19:00', arrival: '17:00', duration: '22h', price: 2700, busType: 'AC Seater/Sleeper' }
    ],
    ludhiana: [
        { id: 23, operator: 'Northern Travels', departure: '09:30', arrival: '07:30', duration: '22h', price: 2400, busType: 'AC Sleeper' },
        { id: 24, operator: 'PUNBUS', departure: '21:00', arrival: '19:00', duration: '22h', price: 2600, busType: 'AC Seater/Sleeper' }
    ],
    kochi: [
        { id: 25, operator: 'KPN Travels', departure: '14:00', arrival: '12:30', duration: '22h 30m', price: 2600, busType: 'AC Sleeper' },
        { id: 26, operator: 'SRS Travels', departure: '20:30', arrival: '18:30', duration: '22h', price: 2800, busType: 'AC Seater/Sleeper' }
    ],
    mysore: [
        { id: 27, operator: 'VRL Travels', departure: '16:30', arrival: '14:00', duration: '21h 30m', price: 2300, busType: 'AC Sleeper' },
        { id: 28, operator: 'SRS Travels', departure: '22:00', arrival: '19:30', duration: '21h 30m', price: 2500, busType: 'AC Seater/Sleeper' }
    ],
    mangalore: [
        { id: 29, operator: 'Orange Travels', departure: '08:00', arrival: '06:30', duration: '22h 30m', price: 2700, busType: 'AC Sleeper' },
        { id: 30, operator: 'VRL Travels', departure: '21:30', arrival: '20:00', duration: '22h 30m', price: 2900, busType: 'AC Seater/Sleeper' }
    ],
    delhi: [
        { id: 31, operator: 'UPSRTC', departure: '18:00', arrival: '12:30', duration: '18h 30m', price: 2200, busType: 'AC Sleeper' },
        { id: 32, operator: 'Eagle Travels', departure: '20:00', arrival: '14:00', duration: '18h', price: 2400, busType: 'AC Seater/Sleeper' }
    ],
    mumbai: [
        { id: 33, operator: 'VRL Travels', departure: '17:30', arrival: '09:30', duration: '16h', price: 2100, busType: 'AC Sleeper' },
        { id: 34, operator: 'SRS Travels', departure: '19:00', arrival: '11:00', duration: '16h', price: 2300, busType: 'AC Seater/Sleeper' }
    ],
    bangalore: [
        { id: 35, operator: 'KPN Travels', departure: '16:00', arrival: '12:00', duration: '20h', price: 2500, busType: 'AC Sleeper' },
        { id: 36, operator: 'VRL Travels', departure: '22:00', arrival: '18:00', duration: '20h', price: 2700, busType: 'AC Seater/Sleeper' }
    ],
    chennai: [
        { id: 37, operator: 'SRM Travels', departure: '14:00', arrival: '10:30', duration: '20h 30m', price: 2400, busType: 'AC Sleeper' },
        { id: 38, operator: 'Parveen Travels', departure: '21:00', arrival: '17:30', duration: '20h 30m', price: 2600, busType: 'AC Seater/Sleeper' }
    ],
    kolkata: [
        { id: 39, operator: 'Royal Cruiser', departure: '12:30', arrival: '08:00', duration: '19h 30m', price: 2800, busType: 'AC Sleeper' },
        { id: 40, operator: 'GreenLine Travels', departure: '19:30', arrival: '15:00', duration: '19h 30m', price: 3000, busType: 'AC Seater/Sleeper' }
    ],
    hyderabad: [
        { id: 41, operator: 'Orange Travels', departure: '16:30', arrival: '10:30', duration: '18h', price: 2200, busType: 'AC Sleeper' },
        { id: 42, operator: 'Kaveri Travels', departure: '21:00', arrival: '14:00', duration: '17h', price: 2400, busType: 'AC Seater/Sleeper' }
    ],
    madurai: [
        { id: 43, operator: 'KPN Travels', departure: '18:00', arrival: '12:00', duration: '18h', price: 2600, busType: 'AC Sleeper' },
        { id: 44, operator: 'SRS Travels', departure: '22:30', arrival: '16:30', duration: '18h', price: 2800, busType: 'AC Seater/Sleeper' }
    ],
    ahmedabad: [
        { id: 45, operator: 'Shreenath Travels', departure: '09:00', arrival: '15:00', duration: '6h', price: 900, busType: 'AC Seater' },
        { id: 46, operator: 'Gujarat Travels', departure: '21:30', arrival: '03:30', duration: '6h', price: 1000, busType: 'AC Sleeper' }
    ],
    pune: [
        { id: 47, operator: 'Neeta Travels', departure: '07:00', arrival: '13:00', duration: '6h', price: 800, busType: 'AC Seater' },
        { id: 48, operator: 'Purple Travels', departure: '21:00', arrival: '03:00', duration: '6h', price: 900, busType: 'AC Sleeper' }
    ],
    srinagar: [
        { id: 49, operator: 'JKSRTC', departure: '12:00', arrival: '06:00', duration: '18h', price: 2500, busType: 'Non-AC Sleeper' },
        { id: 50, operator: 'Eagle Travels', departure: '19:00', arrival: '13:00', duration: '18h', price: 2700, busType: 'AC Sleeper' }
    ],
    nagpur: [
        { id: 51, operator: 'Hans Travels', departure: '17:00', arrival: '07:00', duration: '14h', price: 2000, busType: 'AC Sleeper' },
        { id: 52, operator: 'VRL Travels', departure: '21:00', arrival: '11:00', duration: '14h', price: 2200, busType: 'AC Seater/Sleeper' }
    ]
};

// Sample train data with all cities
const trainData = {
    delhi: [
        { id: 1, trainName: 'Rajdhani Express', departure: '16:30', arrival: '08:35', duration: '16h 5m', price: 3200, type: 'AC 2-Tier' },
        { id: 2, trainName: 'Mumbai Express', departure: '20:45', arrival: '12:20', duration: '15h 35m', price: 2400, type: 'Sleeper' }
    ],
    bangalore: [
        { id: 3, trainName: 'Udyan Express', departure: '20:15', arrival: '07:45', duration: '35h 30m', price: 2800, type: 'AC 3-Tier' },
        { id: 4, trainName: 'LTT Express', departure: '21:00', arrival: '09:50', duration: '36h 50m', price: 1800, type: 'Sleeper' }
    ],
    chennai: [
        { id: 5, trainName: 'Chennai Express', departure: '18:20', arrival: '05:50', duration: '35h 30m', price: 3000, type: 'AC 2-Tier' },
        { id: 6, trainName: 'Mumbai Mail', departure: '22:30', arrival: '10:30', duration: '36h', price: 2000, type: 'Sleeper' }
    ],
    kolkata: [
        { id: 7, trainName: 'Gitanjali Express', departure: '13:50', arrival: '20:35', duration: '30h 45m', price: 3200, type: 'AC 2-Tier' },
        { id: 8, trainName: 'Howrah Express', departure: '18:00', arrival: '23:55', duration: '29h 55m', price: 2500, type: 'Sleeper' }
    ],
    hyderabad: [
        { id: 9, trainName: 'Hussain Sagar Express', departure: '14:50', arrival: '05:35', duration: '14h 45m', price: 2200, type: 'AC 3-Tier' },
        { id: 10, trainName: 'Mumbai Express', departure: '21:30', arrival: '10:20', duration: '12h 50m', price: 1600, type: 'Sleeper' }
    ],
    madurai: [
        { id: 11, trainName: 'Madurai Express', departure: '06:00', arrival: '18:50', duration: '36h 50m', price: 3500, type: 'AC 2-Tier' },
        { id: 12, trainName: 'Mumbai SF Express', departure: '19:00', arrival: '07:30', duration: '36h 30m', price: 2600, type: 'Sleeper' }
    ],
    ahmedabad: [
        { id: 13, trainName: 'Gujarat Mail', departure: '22:00', arrival: '06:30', duration: '8h 30m', price: 1700, type: 'AC 3-Tier' },
        { id: 14, trainName: 'Mumbai Express', departure: '23:30', arrival: '08:00', duration: '8h 30m', price: 1200, type: 'Sleeper' }
    ],
    pune: [
        { id: 15, trainName: 'Deccan Queen', departure: '07:15', arrival: '11:30', duration: '4h 15m', price: 900, type: 'AC Chair Car' },
        { id: 16, trainName: 'Indrayani Express', departure: '18:35', arrival: '22:55', duration: '4h 20m', price: 800, type: 'AC Chair Car' }
    ],
    srinagar: [
        { id: 17, trainName: 'Jammu Tawi Express', departure: '07:00', arrival: '22:30', duration: '39h 30m', price: 3500, type: 'AC 3-Tier' },
        { id: 18, trainName: 'Mumbai SF Express', departure: '19:45', arrival: '10:15', duration: '38h 30m', price: 2700, type: 'Sleeper' }
    ],
    nagpur: [
        { id: 19, trainName: 'Vidarbha Express', departure: '17:30', arrival: '08:15', duration: '14h 45m', price: 2000, type: 'AC 3-Tier' },
        { id: 20, trainName: 'Mumbai Express', departure: '23:00', arrival: '13:30', duration: '14h 30m', price: 1500, type: 'Sleeper' }
    ],
    kanpur: [
        { id: 21, trainName: 'LTT Kanpur Express', departure: '16:40', arrival: '08:15', duration: '15h 35m', price: 2800, type: 'AC 2-Tier' },
        { id: 22, trainName: 'Mumbai Express', departure: '22:10', arrival: '14:50', duration: '16h 40m', price: 1900, type: 'Sleeper' }
    ],
    surat: [
        { id: 23, trainName: 'Surat Mumbai Express', departure: '07:30', arrival: '11:50', duration: '4h 20m', price: 1200, type: 'AC Chair Car' },
        { id: 24, trainName: 'Gujarat Mail', departure: '23:15', arrival: '03:45', duration: '4h 30m', price: 1000, type: 'Sleeper' }
    ],
    indore: [
        { id: 25, trainName: 'Avantika Express', departure: '18:10', arrival: '06:50', duration: '12h 40m', price: 2200, type: 'AC 3-Tier' },
        { id: 26, trainName: 'Indore Mumbai Express', departure: '21:00', arrival: '10:30', duration: '13h 30m', price: 1600, type: 'Sleeper' }
    ],
    aurangabad: [
        { id: 27, trainName: 'Devagiri Express', departure: '19:35', arrival: '05:30', duration: '9h 55m', price: 1500, type: 'AC 3-Tier' },
        { id: 28, trainName: 'Nandigram Express', departure: '21:15', arrival: '07:00', duration: '9h 45m', price: 1200, type: 'Sleeper' }
    ],
    coimbatore: [
        { id: 29, trainName: 'Coimbatore Express', departure: '15:50', arrival: '06:30', duration: '38h 40m', price: 3400, type: 'AC 2-Tier' },
        { id: 30, trainName: 'Kanyakumari Express', departure: '21:45', arrival: '11:30', duration: '37h 45m', price: 2700, type: 'Sleeper' }
    ],
    madhurai: [
        { id: 31, trainName: 'Madurai Express', departure: '06:00', arrival: '18:50', duration: '36h 50m', price: 3500, type: 'AC 2-Tier' },
        { id: 32, trainName: 'Mumbai SF Express', departure: '19:00', arrival: '07:30', duration: '36h 30m', price: 2600, type: 'Sleeper' }
    ],
    visakhapatnam: [
        { id: 33, trainName: 'Vizag Mumbai Express', departure: '14:25', arrival: '08:00', duration: '17h 35m', price: 3200, type: 'AC 3-Tier' },
        { id: 34, trainName: 'Konark Express', departure: '22:30', arrival: '14:15', duration: '15h 45m', price: 2500, type: 'Sleeper' }
    ],
    vijayawada: [
        { id: 35, trainName: 'Vijayawada Express', departure: '17:00', arrival: '10:15', duration: '17h 15m', price: 2900, type: 'AC 3-Tier' },
        { id: 36, trainName: 'Mumbai Express', departure: '20:50', arrival: '12:30', duration: '15h 40m', price: 2200, type: 'Sleeper' }
    ],
    vadodara: [
        { id: 37, trainName: 'Vadodara Express', departure: '09:00', arrival: '15:00', duration: '6h', price: 1400, type: 'AC 3-Tier' },
        { id: 38, trainName: 'Mumbai Shatabdi', departure: '18:00', arrival: '23:00', duration: '5h', price: 2000, type: 'AC Chair Car' }
    ],
    gwalior: [
        { id: 39, trainName: 'Gwalior Mumbai Express', departure: '16:10', arrival: '08:50', duration: '16h 40m', price: 2600, type: 'AC 3-Tier' },
        { id: 40, trainName: 'Bundelkhand Express', departure: '20:20', arrival: '12:30', duration: '16h 10m', price: 1900, type: 'Sleeper' }
    ],
    amritsar: [
        { id: 41, trainName: 'Golden Temple Mail', departure: '18:55', arrival: '11:15', duration: '16h 20m', price: 3200, type: 'AC 2-Tier' },
        { id: 42, trainName: 'Amritsar Mumbai Express', departure: '21:00', arrival: '13:30', duration: '16h 30m', price: 2500, type: 'Sleeper' }
    ],
    ludhiana: [
        { id: 43, trainName: 'Punjab Mail', departure: '17:30', arrival: '09:15', duration: '15h 45m', price: 2800, type: 'AC 3-Tier' },
        { id: 44, trainName: 'Mumbai Superfast Express', departure: '22:15', arrival: '14:45', duration: '16h 30m', price: 2300, type: 'Sleeper' }
    ],
    varanasi: [
        { id: 45, trainName: 'Varanasi Express', departure: '19:10', arrival: '12:50', duration: '17h 40m', price: 2900, type: 'AC 2-Tier' },
        { id: 46, trainName: 'Mahanagari Express', departure: '22:40', arrival: '16:10', duration: '17h 30m', price: 2100, type: 'Sleeper' }
    ],
    mangalore: [
        { id: 47, trainName: 'Mangalore Express', departure: '14:30', arrival: '06:00', duration: '15h 30m', price: 2600, type: 'AC 3-Tier' },
        { id: 48, trainName: 'Matsyagandha Express', departure: '20:45', arrival: '11:20', duration: '14h 35m', price: 2200, type: 'Sleeper' }
    ]
};
let currentPackageType = null;
const destination = 'Mumbai';

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
                        <span class="city">Araku</span>
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
                        <span class="city">Araku</span>
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
                        <span class="city">Araku</span>
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
                    <span class="city">Araku</span>
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
                    <span class="city">Araku</span>
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
                <span>From: ${flightType === 'outbound' ? fromCity : 'Araku'}</span>
                <span>To: ${flightType === 'outbound' ? 'Araku' : fromCity}</span>
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

// Hotel data for different packages in mumbai
const hotelData = {
    premium: [
        {
            name: "The Taj Mahal Palace",
            rating: 5,
            price: 50000,
            features: ["Luxury Heritage Stay", "Sea View Suites", "Fine Dining Restaurants", "World-Class Spa"],
            distance: "Near Gateway of India",
            image: "../static/images/hotels/taj-mahal-palace.jpg"
        },
        {
            name: "The Oberoi Mumbai",
            rating: 5,
            price: 35000,
            features: ["Luxury Waterfront Stay", "Gourmet Restaurants", "Personalized Butler Service", "Outdoor Pool"],
            distance: "Marine Drive",
            image: "../static/images/hotels/oberoi-mumbai.jpg"
        },
        {
            name: "JW Marriott Mumbai Juhu",
            rating: 5,
            price: 32000,
            features: ["Beachfront Luxury", "Multiple Pools", "Spa & Fitness Center", "Fine Dining"],
            distance: "Juhu Beach",
            image: "../static/images/hotels/jw-marriott.jpg"
        }
    ],
    gold: [
        {
            name: "Trident Nariman Point",
            rating: 4,
            price: 18000,
            features: ["Luxury Business Stay", "Sea View Rooms", "Fitness & Spa", "Fine Dining Options"],
            distance: "Nariman Point",
            image: "../static/images/hotels/trident-mumbai.jpg"
        },
        {
            name: "Sahara Star",
            rating: 4,
            price: 16000,
            features: ["Iconic Glass Dome Design", "Multiple Themed Restaurants", "Luxury Suites", "Close to Airport"],
            distance: "Near Mumbai Airport",
            image: "../static/images/hotels/sahara-star.jpg"
        },
        {
            name: "ITC Maratha",
            rating: 4,
            price: 15000,
            features: ["Heritage Luxury Stay", "Ayurvedic Spa", "Fine Dining", "Grand Architecture"],
            distance: "Near Mumbai Airport",
            image: "../static/images/hotels/itc-maratha.jpg"
        }
    ],
    silver: [
        {
            name: "The Orchid Mumbai",
            rating: 3,
            price: 9000,
            features: ["Eco-Friendly Luxury", "Rooftop Pool", "Fitness Center", "Multi-Cuisine Dining"],
            distance: "Near Domestic Airport",
            image: "../static/images/hotels/orchid-mumbai.jpg"
        },
        {
            name: "Hotel Marine Plaza",
            rating: 3,
            price: 8500,
            features: ["Sea-Facing Rooms", "Rooftop Pool", "Business & Leisure Stay", "24/7 Dining"],
            distance: "Marine Drive",
            image: "../static/images/hotels/marine-plaza.jpg"
        },
        {
            name: "Ramada Plaza Palm Grove",
            rating: 3,
            price: 8000,
            features: ["Beachfront Stay", "Swimming Pool", "Modern Rooms", "Business Facilities"],
            distance: "Juhu Beach",
            image: "../static/images/hotels/ramada-palm.jpg"
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
        const fromLocation = type === 'outbound' ? fromCity : 'Araku';
        const toLocation = type === 'outbound' ? 'Araku' : fromCity;

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
    emailjs.init("cO6FMRGcjSWg044-O"); // Replace with your actual EmailJS public key
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
                'service_8a2mn4v', // Replace with your EmailJS service ID
                'template_thr31a9', // Replace with your EmailJS template ID
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