
// Package details object
const packageDetails = {
    premium: {
        name: 'Premium Package',
        price: 25000,
        features: [
            'Luxury Flight Travel',
            '5-Star Hotel Accommodation',
            'Private Tour Guide',
            'All Meals Included',
            'Priority Access to Attractions'
        ]
    },
    gold: {
        name: 'Gold Package',
        price: 15000,
        features: [
            'AC Bus Travel',
            '4-Star Hotel Accommodation',
            'Group Tour Guide',
            'Breakfast & Dinner',
            'Standard Access to Attractions'
        ]
    },
    silver: {
        name: 'Silver Package',
        price: 10000,
        features: [
            'Train Travel (AC Class)',
            '3-Star Hotel Accommodation',
            'Group Tour Guide',
            'Breakfast Only',
            'Standard Access to Attractions'
        ]
    }
};

// Updated flight data with more cities and routes
const flightData = {
    delhi: [
        { id: 1, airline: 'Air India', departure: '06:00', arrival: '07:30', price: 5000, duration: '1h 30m', flightNo: 'AI-412' },
        { id: 2, airline: 'IndiGo', departure: '09:30', arrival: '11:00', price: 4500, duration: '1h 30m', flightNo: '6E-891' },
        { id: 3, airline: 'SpiceJet', departure: '14:00', arrival: '15:30', price: 4800, duration: '1h 30m', flightNo: 'SG-731' }
    ],
    mumbai: [
        { id: 4, airline: 'Air India', departure: '07:00', arrival: '09:30', price: 6000, duration: '2h 30m', flightNo: 'AI-621' },
        { id: 5, airline: 'Vistara', departure: '10:30', arrival: '13:00', price: 5500, duration: '2h 30m', flightNo: 'UK-945' },
        { id: 6, airline: 'IndiGo', departure: '15:00', arrival: '17:30', price: 5800, duration: '2h 30m', flightNo: '6E-237' }
    ],
    bangalore: [
        { id: 7, airline: 'IndiGo', departure: '08:00', arrival: '10:30', price: 7000, duration: '2h 30m', flightNo: '6E-445' },
        { id: 8, airline: 'Air India', departure: '11:30', arrival: '14:00', price: 6500, duration: '2h 30m', flightNo: 'AI-857' },
        { id: 9, airline: 'Vistara', departure: '16:00', arrival: '18:30', price: 6800, duration: '2h 30m', flightNo: 'UK-772' }
    ],
    chennai: [
        { id: 10, airline: 'SpiceJet', departure: '07:30', arrival: '10:00', price: 6000, duration: '2h 30m', flightNo: 'SG-328' },
        { id: 11, airline: 'IndiGo', departure: '12:30', arrival: '15:00', price: 5500, duration: '2h 30m', flightNo: '6E-567' },
        { id: 12, airline: 'Air India', departure: '17:00', arrival: '19:30', price: 5800, duration: '2h 30m', flightNo: 'AI-549' }
    ],
    kolkata: [
        { id: 13, airline: 'Air India', departure: '06:30', arrival: '09:00', price: 7000, duration: '2h 30m', flightNo: 'AI-764' },
        { id: 14, airline: 'Vistara', departure: '11:30', arrival: '14:00', price: 6500, duration: '2h 30m', flightNo: 'UK-823' },
        { id: 15, airline: 'IndiGo', departure: '16:00', arrival: '18:30', price: 6800, duration: '2h 30m', flightNo: '6E-912' }
    ],
    hyderabad: [
        { id: 16, airline: 'IndiGo', departure: '08:30', arrival: '11:00', price: 5500, duration: '2h 30m', flightNo: '6E-234' },
        { id: 17, airline: 'SpiceJet', departure: '13:30', arrival: '16:00', price: 5000, duration: '2h 30m', flightNo: 'SG-456' },
        { id: 18, airline: 'Air India', departure: '18:00', arrival: '20:30', price: 5300, duration: '2h 30m', flightNo: 'AI-789' }
    ],
    ahmedabad: [
        { id: 19, airline: 'Air India', departure: '07:00', arrival: '09:00', price: 4800, duration: '2h', flightNo: 'AI-345' },
        { id: 20, airline: 'IndiGo', departure: '12:00', arrival: '14:00', price: 4500, duration: '2h', flightNo: '6E-678' },
        { id: 21, airline: 'SpiceJet', departure: '16:30', arrival: '18:30', price: 4300, duration: '2h', flightNo: 'SG-901' }
    ],
    pune: [
        { id: 22, airline: 'Vistara', departure: '08:30', arrival: '11:00', price: 5200, duration: '2h 30m', flightNo: 'UK-567' },
        { id: 23, airline: 'IndiGo', departure: '13:30', arrival: '16:00', price: 4900, duration: '2h 30m', flightNo: '6E-890' },
        { id: 24, airline: 'Air India', departure: '17:30', arrival: '20:00', price: 5100, duration: '2h 30m', flightNo: 'AI-432' }
    ],
    srinagar: [ // Jammu & Kashmir
        { id: 25, airline: 'Air India', departure: '06:30', arrival: '09:15', price: 7500, duration: '2h 45m', flightNo: 'AI-234' },
        { id: 26, airline: 'IndiGo', departure: '10:00', arrival: '12:45', price: 7000, duration: '2h 45m', flightNo: '6E-567' }
    ],
    // Additional Cities
    nagpur: [ // Maharashtra
        { id: 27, airline: 'Air India', departure: '08:15', arrival: '10:45', price: 6500, duration: '2h 30m', flightNo: 'AI-789' },
        { id: 28, airline: 'IndiGo', departure: '12:45', arrival: '15:15', price: 6000, duration: '2h 30m', flightNo: '6E-890' }
    ],
    varanasi: [ // Uttar Pradesh
        { id: 29, airline: 'SpiceJet', departure: '07:30', arrival: '09:45', price: 5800, duration: '2h 15m', flightNo: 'SG-234' },
        { id: 30, airline: 'Vistara', departure: '11:00', arrival: '13:15', price: 5300, duration: '2h 15m', flightNo: 'UK-567' }
    ],
    kanpur: [ // Uttar Pradesh
        { id: 31, airline: 'Air India', departure: '06:45', arrival: '08:45', price: 5500, duration: '2h', flightNo: 'AI-345' },
        { id: 32, airline: 'IndiGo', departure: '10:15', arrival: '12:15', price: 5000, duration: '2h', flightNo: '6E-678' }
    ],
    coimbatore: [ // Tamil Nadu
        { id: 33, airline: 'IndiGo', departure: '07:15', arrival: '10:30', price: 8200, duration: '3h 15m', flightNo: '6E-901' },
        { id: 34, airline: 'SpiceJet', departure: '11:45', arrival: '15:00', price: 7700, duration: '3h 15m', flightNo: 'SG-234' }
    ],
    madurai: [ // Tamil Nadu
        { id: 35, airline: 'Air India', departure: '08:30', arrival: '11:45', price: 7900, duration: '3h 15m', flightNo: 'AI-567' },
        { id: 36, airline: 'Vistara', departure: '12:00', arrival: '15:15', price: 7400, duration: '3h 15m', flightNo: 'UK-890' }
    ],
    visakhapatnam: [ // Andhra Pradesh
        { id: 37, airline: 'IndiGo', departure: '07:45', arrival: '10:45', price: 7500, duration: '3h', flightNo: '6E-432' },
        { id: 38, airline: 'SpiceJet', departure: '11:15', arrival: '14:15', price: 7000, duration: '3h', flightNo: 'SG-765' }
    ],
    vijayawada: [ // Andhra Pradesh
        { id: 39, airline: 'Air India', departure: '08:00', arrival: '11:00', price: 7200, duration: '3h', flightNo: 'AI-678' },
        { id: 40, airline: 'IndiGo', departure: '12:30', arrival: '15:30', price: 6700, duration: '3h', flightNo: '6E-123' }
    ],
    surat: [ // Gujarat
        { id: 41, airline: 'SpiceJet', departure: '07:30', arrival: '10:15', price: 6300, duration: '2h 45m', flightNo: 'SG-456' },
        { id: 42, airline: 'Vistara', departure: '11:00', arrival: '13:45', price: 5800, duration: '2h 45m', flightNo: 'UK-789' }
    ],
    vadodara: [ // Gujarat
        { id: 43, airline: 'Air India', departure: '08:45', arrival: '11:30', price: 6000, duration: '2h 45m', flightNo: 'AI-234' },
        { id: 44, airline: 'IndiGo', departure: '12:15', arrival: '15:00', price: 5500, duration: '2h 45m', flightNo: '6E-567' }
    ],
    indore: [ // Madhya Pradesh
        { id: 45, airline: 'IndiGo', departure: '07:00', arrival: '09:30', price: 5800, duration: '2h 30m', flightNo: '6E-890' },
        { id: 46, airline: 'SpiceJet', departure: '11:30', arrival: '14:00', price: 5300, duration: '2h 30m', flightNo: 'SG-123' }
    ],
    gwalior: [ // Madhya Pradesh
        { id: 47, airline: 'Air India', departure: '08:15', arrival: '10:30', price: 5500, duration: '2h 15m', flightNo: 'AI-456' },
        { id: 48, airline: 'Vistara', departure: '12:45', arrival: '15:00', price: 5000, duration: '2h 15m', flightNo: 'UK-789' }
    ],
    amritsar: [ // Punjab
        { id: 49, airline: 'SpiceJet', departure: '06:30', arrival: '09:00', price: 6200, duration: '2h 30m', flightNo: 'SG-234' },
        { id: 50, airline: 'IndiGo', departure: '10:00', arrival: '12:30', price: 5700, duration: '2h 30m', flightNo: '6E-567' }
    ],
    ludhiana: [ // Punjab
        { id: 51, airline: 'Air India', departure: '07:45', arrival: '10:15', price: 5900, duration: '2h 30m', flightNo: 'AI-890' },
        { id: 52, airline: 'Vistara', departure: '11:15', arrival: '13:45', price: 5400, duration: '2h 30m', flightNo: 'UK-123' }
    ],
    kochi: [ // Kerala
        { id: 53, airline: 'IndiGo', departure: '07:30', arrival: '11:15', price: 8500, duration: '3h 45m', flightNo: '6E-456' },
        { id: 54, airline: 'SpiceJet', departure: '11:00', arrival: '14:45', price: 8000, duration: '3h 45m', flightNo: 'SG-789' }
    ],
    kozhikode: [ // Kerala
        { id: 55, airline: 'Air India', departure: '08:45', arrival: '12:30', price: 8200, duration: '3h 45m', flightNo: 'AI-234' },
        { id: 56, airline: 'Vistara', departure: '12:15', arrival: '16:00', price: 7700, duration: '3h 45m', flightNo: 'UK-567' }
    ],
    nashik: [ // Maharashtra
        { id: 57, airline: 'SpiceJet', departure: '07:15', arrival: '09:45', price: 6800, duration: '2h 30m', flightNo: 'SG-890' },
        { id: 58, airline: 'IndiGo', departure: '11:45', arrival: '14:15', price: 6300, duration: '2h 30m', flightNo: '6E-123' }
    ],
    aurangabad: [ // Maharashtra
        { id: 59, airline: 'Air India', departure: '08:30', arrival: '11:00', price: 6500, duration: '2h 30m', flightNo: 'AI-456' },
        { id: 60, airline: 'Vistara', departure: '12:00', arrival: '14:30', price: 6000, duration: '2h 30m', flightNo: 'UK-789' }
    ],
    mangalore: [ // Karnataka
        { id: 61, airline: 'IndiGo', departure: '07:45', arrival: '10:45', price: 7800, duration: '3h', flightNo: '6E-234' },
        { id: 62, airline: 'SpiceJet', departure: '11:15', arrival: '14:15', price: 7300, duration: '3h', flightNo: 'SG-567' }
    ],
    mysore: [ // Karnataka
        { id: 63, airline: 'Air India', departure: '08:00', arrival: '11:00', price: 7500, duration: '3h', flightNo: 'AI-890' },
        { id: 64, airline: 'Vistara', departure: '12:30', arrival: '15:30', price: 7000, duration: '3h', flightNo: 'UK-123' }
    ]
};

// Sample bus data with all cities
const busData = {
    delhi: [
        { id: 1, operator: 'UPSRTC Volvo', departure: '06:00', arrival: '10:00', price: 1200, type: 'AC Sleeper' },
        { id: 2, operator: 'Hans Travels', departure: '08:30', arrival: '12:30', price: 1000, type: 'AC Seater' },
        { id: 3, operator: 'Prasanna Purple', departure: '15:00', arrival: '19:00', price: 1100, type: 'AC Sleeper' }
    ],
    mumbai: [
        { id: 4, operator: 'Neeta Travels', departure: '18:00', arrival: '12:00', price: 2200, type: 'AC Sleeper' },
        { id: 5, operator: 'Purple Bus', departure: '19:30', arrival: '13:30', price: 2000, type: 'AC Seater' },
        { id: 6, operator: 'Hans Travels', departure: '20:00', arrival: '14:00', price: 2100, type: 'AC Sleeper' }
    ],
    bangalore: [
        { id: 7, operator: 'SRS Travels', departure: '17:00', arrival: '13:00', price: 2500, type: 'AC Sleeper' },
        { id: 8, operator: 'VRL Travels', departure: '18:30', arrival: '14:30', price: 2300, type: 'AC Seater' },
        { id: 9, operator: 'Greenline', departure: '19:00', arrival: '15:00', price: 2400, type: 'AC Sleeper' }
    ],
    chennai: [
        { id: 10, operator: 'KPN Travels', departure: '16:00', arrival: '12:00', price: 2300, type: 'AC Sleeper' },
        { id: 11, operator: 'YBM Travels', departure: '17:30', arrival: '13:30', price: 2100, type: 'AC Seater' }
    ],
    kolkata: [
        { id: 12, operator: 'Bengal Travels', departure: '15:00', arrival: '11:00', price: 2400, type: 'AC Sleeper' },
        { id: 13, operator: 'Eagle Travels', departure: '16:30', arrival: '12:30', price: 2200, type: 'AC Seater' }
    ],
    hyderabad: [
        { id: 14, operator: 'Orange Travels', departure: '16:00', arrival: '12:00', price: 2000, type: 'AC Sleeper' },
        { id: 15, operator: 'Kaveri Travels', departure: '17:30', arrival: '13:30', price: 1800, type: 'AC Seater' }
    ],
    ahmedabad: [
        { id: 16, operator: 'Gujarat Travels', departure: '14:00', arrival: '10:00', price: 1800, type: 'AC Sleeper' },
        { id: 17, operator: 'Royal Travels', departure: '15:30', arrival: '11:30', price: 1600, type: 'AC Seater' }
    ],
    pune: [
        { id: 18, operator: 'Purple Travels', departure: '17:00', arrival: '13:00', price: 2100, type: 'AC Sleeper' },
        { id: 19, operator: 'Prasanna Travels', departure: '18:30', arrival: '14:30', price: 1900, type: 'AC Seater' }
    ],
    srinagar: [
        { id: 20, operator: 'Kashmir Travels', departure: '12:00', arrival: '08:00', price: 2800, type: 'AC Sleeper' },
        { id: 21, operator: 'Valley Express', departure: '13:30', arrival: '09:30', price: 2600, type: 'AC Seater' }
    ],
    nagpur: [
        { id: 22, operator: 'Orange City Travels', departure: '15:00', arrival: '11:00', price: 1900, type: 'AC Sleeper' },
        { id: 23, operator: 'Maharashtra Travels', departure: '16:30', arrival: '12:30', price: 1700, type: 'AC Seater' }
    ],
    varanasi: [
        { id: 24, operator: 'UP Tourism', departure: '13:00', arrival: '09:00', price: 1500, type: 'AC Sleeper' },
        { id: 25, operator: 'Ganga Travels', departure: '14:30', arrival: '10:30', price: 1300, type: 'AC Seater' }
    ],
    kanpur: [
        { id: 26, operator: 'UP Express', departure: '12:00', arrival: '08:00', price: 1400, type: 'AC Sleeper' },
        { id: 27, operator: 'City Express', departure: '13:30', arrival: '09:30', price: 1200, type: 'AC Seater' }
    ],
    coimbatore: [
        { id: 28, operator: 'KPN Travels', departure: '16:00', arrival: '12:00', price: 2400, type: 'AC Sleeper' },
        { id: 29, operator: 'Tamil Express', departure: '17:30', arrival: '13:30', price: 2200, type: 'AC Seater' }
    ],
    madurai: [
        { id: 30, operator: 'Tamil Nadu Travels', departure: '15:00', arrival: '11:00', price: 2300, type: 'AC Sleeper' },
        { id: 31, operator: 'Madurai Express', departure: '16:30', arrival: '12:30', price: 2100, type: 'AC Seater' }
    ],
    visakhapatnam: [
        { id: 32, operator: 'Andhra Travels', departure: '14:00', arrival: '10:00', price: 2200, type: 'AC Sleeper' },
        { id: 33, operator: 'Vizag Express', departure: '15:30', arrival: '11:30', price: 2000, type: 'AC Seater' }
    ],
    vijayawada: [
        { id: 34, operator: 'Krishna Travels', departure: '13:00', arrival: '09:00', price: 2100, type: 'AC Sleeper' },
        { id: 35, operator: 'Andhra Express', departure: '14:30', arrival: '10:30', price: 1900, type: 'AC Seater' }
    ],
    surat: [
        { id: 36, operator: 'Gujarat Express', departure: '12:00', arrival: '08:00', price: 1800, type: 'AC Sleeper' },
        { id: 37, operator: 'Diamond City Express', departure: '13:30', arrival: '09:30', price: 1600, type: 'AC Seater' }
    ],
    vadodara: [
        { id: 38, operator: 'Baroda Express', departure: '11:00', arrival: '07:00', price: 1700, type: 'AC Sleeper' },
        { id: 39, operator: 'Gujarat Travels', departure: '12:30', arrival: '08:30', price: 1500, type: 'AC Seater' }
    ],
    indore: [
        { id: 40, operator: 'MP Travels', departure: '10:00', arrival: '06:00', price: 1600, type: 'AC Sleeper' },
        { id: 41, operator: 'Indore Express', departure: '11:30', arrival: '07:30', price: 1400, type: 'AC Seater' }
    ],
    gwalior: [
        { id: 42, operator: 'MP Express', departure: '09:00', arrival: '05:00', price: 1500, type: 'AC Sleeper' },
        { id: 43, operator: 'Gwalior Travels', departure: '10:30', arrival: '06:30', price: 1300, type: 'AC Seater' }
    ],
    amritsar: [
        { id: 44, operator: 'Punjab Travels', departure: '08:00', arrival: '04:00', price: 2000, type: 'AC Sleeper' },
        { id: 45, operator: 'Golden Express', departure: '09:30', arrival: '05:30', price: 1800, type: 'AC Seater' }
    ],
    ludhiana: [
        { id: 46, operator: 'Punjab Express', departure: '07:00', arrival: '03:00', price: 1900, type: 'AC Sleeper' },
        { id: 47, operator: 'Ludhiana Travels', departure: '08:30', arrival: '04:30', price: 1700, type: 'AC Seater' }
    ],
    kochi: [
        { id: 48, operator: 'Kerala Travels', departure: '16:00', arrival: '12:00', price: 2600, type: 'AC Sleeper' },
        { id: 49, operator: 'Kochi Express', departure: '17:30', arrival: '13:30', price: 2400, type: 'AC Seater' }
    ],
    kozhikode: [
        { id: 50, operator: 'Malabar Travels', departure: '15:00', arrival: '11:00', price: 2500, type: 'AC Sleeper' },
        { id: 51, operator: 'Calicut Express', departure: '16:30', arrival: '12:30', price: 2300, type: 'AC Seater' }
    ],
    nashik: [
        { id: 52, operator: 'Maharashtra Express', departure: '14:00', arrival: '10:00', price: 1900, type: 'AC Sleeper' },
        { id: 53, operator: 'Nashik Travels', departure: '15:30', arrival: '11:30', price: 1700, type: 'AC Seater' }
    ],
    aurangabad: [
        { id: 54, operator: 'Ajanta Travels', departure: '13:00', arrival: '09:00', price: 1800, type: 'AC Sleeper' },
        { id: 55, operator: 'Ellora Express', departure: '14:30', arrival: '10:30', price: 1600, type: 'AC Seater' }
    ],
    mangalore: [
        { id: 56, operator: 'Mangalore Express', departure: '16:00', arrival: '12:00', price: 2400, type: 'AC Sleeper' },
        { id: 57, operator: 'Karavali Travels', departure: '17:30', arrival: '13:30', price: 2200, type: 'AC Seater' }
    ],
    mysore: [
        { id: 58, operator: 'Karnataka Express', departure: '15:00', arrival: '11:00', price: 2300, type: 'AC Sleeper' },
        { id: 59, operator: 'Mysore Travels', departure: '16:30', arrival: '12:30', price: 2100, type: 'AC Seater' }
    ]
};

// Sample train data with all cities
const trainData = {
    delhi: [
        { id: 1, trainName: 'Gatimaan Express', departure: '08:10', arrival: '09:50', price: 1500, type: 'AC First Class' },
        { id: 2, trainName: 'Bhopal Shatabdi', departure: '06:00', arrival: '07:40', price: 1200, type: 'AC 2 Tier' },
        { id: 3, trainName: 'Taj Express', departure: '07:10', arrival: '08:50', price: 800, type: 'AC 3 Tier' }
    ],
    mumbai: [
        { id: 4, trainName: 'Mumbai-Agra Express', departure: '20:00', arrival: '08:30', price: 2200, type: 'AC First Class' },
        { id: 5, trainName: 'Deccan Express', departure: '21:30', arrival: '10:00', price: 1800, type: 'AC 2 Tier' },
        { id: 6, trainName: 'Maharashtra Express', departure: '19:00', arrival: '07:30', price: 1500, type: 'AC 3 Tier' }
    ],
    bangalore: [
        { id: 7, trainName: 'Karnataka Express', departure: '18:00', arrival: '10:30', price: 2500, type: 'AC First Class' },
        { id: 8, trainName: 'Bengaluru Express', departure: '19:30', arrival: '12:00', price: 2000, type: 'AC 2 Tier' },
        { id: 9, trainName: 'South Express', departure: '17:00', arrival: '09:30', price: 1700, type: 'AC 3 Tier' }
    ],
    chennai: [
        { id: 10, trainName: 'Chennai Express', departure: '17:00', arrival: '09:30', price: 2200, type: 'AC First Class' },
        { id: 11, trainName: 'Tamil Nadu Express', departure: '18:30', arrival: '11:00', price: 1800, type: 'AC 2 Tier' }
    ],
    kolkata: [
        { id: 12, trainName: 'Howrah Express', departure: '16:00', arrival: '08:30', price: 2300, type: 'AC First Class' },
        { id: 13, trainName: 'Bengal Express', departure: '17:30', arrival: '10:00', price: 1900, type: 'AC 2 Tier' }
    ],
    hyderabad: [
        { id: 14, trainName: 'Hyderabad Express', departure: '17:00', arrival: '09:30', price: 1900, type: 'AC First Class' },
        { id: 15, trainName: 'Telangana Express', departure: '18:30', arrival: '11:00', price: 1500, type: 'AC 2 Tier' }
    ],
    ahmedabad: [
        { id: 16, trainName: 'Gujarat Express', departure: '15:00', arrival: '07:30', price: 1700, type: 'AC First Class' },
        { id: 17, trainName: 'Ahmedabad Mail', departure: '16:30', arrival: '09:00', price: 1300, type: 'AC 2 Tier' }
    ],
    pune: [
        { id: 18, trainName: 'Pune Express', departure: '18:00', arrival: '10:30', price: 2000, type: 'AC First Class' },
        { id: 19, trainName: 'Deccan Queen', departure: '19:30', arrival: '12:00', price: 1600, type: 'AC 2 Tier' }
    ],
    srinagar: [
        { id: 20, trainName: 'Kashmir Express', departure: '13:00', arrival: '05:30', price: 2600, type: 'AC First Class' },
        { id: 21, trainName: 'Valley Queen', departure: '14:30', arrival: '07:00', price: 2200, type: 'AC 2 Tier' }
    ],
    nagpur: [
        { id: 22, trainName: 'Nagpur Express', departure: '16:00', arrival: '08:30', price: 1800, type: 'AC First Class' },
        { id: 23, trainName: 'Vidarbha Express', departure: '17:30', arrival: '10:00', price: 1400, type: 'AC 2 Tier' }
    ],
    varanasi: [
        { id: 24, trainName: 'Varanasi Express', departure: '14:00', arrival: '06:30', price: 1400, type: 'AC First Class' },
        { id: 25, trainName: 'Ganga Express', departure: '15:30', arrival: '08:00', price: 1000, type: 'AC 2 Tier' }
    ],
    kanpur: [
        { id: 26, trainName: 'Kanpur Express', departure: '13:00', arrival: '05:30', price: 1300, type: 'AC First Class' },
        { id: 27, trainName: 'UP Sampark Kranti', departure: '14:30', arrival: '07:00', price: 900, type: 'AC 2 Tier' }
    ],
    coimbatore: [
        { id: 28, trainName: 'Coimbatore Express', departure: '17:00', arrival: '09:30', price: 2300, type: 'AC First Class' },
        { id: 29, trainName: 'Kovai Express', departure: '18:30', arrival: '11:00', price: 1900, type: 'AC 2 Tier' }
    ],
    madurai: [
        { id: 30, trainName: 'Madurai Express', departure: '16:00', arrival: '08:30', price: 2200, type: 'AC First Class' },
        { id: 31, trainName: 'Pandian Express', departure: '17:30', arrival: '10:00', price: 1800, type: 'AC 2 Tier' }
    ],
    visakhapatnam: [
        { id: 32, trainName: 'Vizag Express', departure: '15:00', arrival: '07:30', price: 2100, type: 'AC First Class' },
        { id: 33, trainName: 'Coastal Express', departure: '16:30', arrival: '09:00', price: 1700, type: 'AC 2 Tier' }
    ],
    vijayawada: [
        { id: 34, trainName: 'Vijayawada Express', departure: '14:00', arrival: '06:30', price: 2000, type: 'AC First Class' },
        { id: 35, trainName: 'Krishna Express', departure: '15:30', arrival: '08:00', price: 1600, type: 'AC 2 Tier' }
    ],
    surat: [
        { id: 36, trainName: 'Surat Express', departure: '13:00', arrival: '05:30', price: 1700, type: 'AC First Class' },
        { id: 37, trainName: 'Diamond Express', departure: '14:30', arrival: '07:00', price: 1300, type: 'AC 2 Tier' }
    ],
    vadodara: [
        { id: 38, trainName: 'Vadodara Express', departure: '12:00', arrival: '04:30', price: 1600, type: 'AC First Class' },
        { id: 39, trainName: 'Baroda Express', departure: '13:30', arrival: '06:00', price: 1200, type: 'AC 2 Tier' }
    ],
    indore: [
        { id: 40, trainName: 'Indore Express', departure: '11:00', arrival: '03:30', price: 1500, type: 'AC First Class' },
        { id: 41, trainName: 'Malwa Express', departure: '12:30', arrival: '05:00', price: 1100, type: 'AC 2 Tier' }
    ],
    gwalior: [
        { id: 42, trainName: 'Gwalior Express', departure: '10:00', arrival: '02:30', price: 1400, type: 'AC First Class' },
        { id: 43, trainName: 'Chambal Express', departure: '11:30', arrival: '04:00', price: 1000, type: 'AC 2 Tier' }
    ],
    amritsar: [
        { id: 44, trainName: 'Amritsar Express', departure: '09:00', arrival: '01:30', price: 1900, type: 'AC First Class' },
        { id: 45, trainName: 'Golden Temple Mail', departure: '10:30', arrival: '03:00', price: 1500, type: 'AC 2 Tier' }
    ],
    ludhiana: [
        { id: 46, trainName: 'Ludhiana Express', departure: '08:00', arrival: '00:30', price: 1800, type: 'AC First Class' },
        { id: 47, trainName: 'Punjab Mail', departure: '09:30', arrival: '02:00', price: 1400, type: 'AC 2 Tier' }
    ],
    kochi: [
        { id: 48, trainName: 'Kochi Express', departure: '17:00', arrival: '09:30', price: 2500, type: 'AC First Class' },
        { id: 49, trainName: 'Kerala Express', departure: '18:30', arrival: '11:00', price: 2100, type: 'AC 2 Tier' }
    ],
    kozhikode: [
        { id: 50, trainName: 'Kozhikode Express', departure: '16:00', arrival: '08:30', price: 2400, type: 'AC First Class' },
        { id: 51, trainName: 'Malabar Express', departure: '17:30', arrival: '10:00', price: 2000, type: 'AC 2 Tier' }
    ],
    nashik: [
        { id: 52, trainName: 'Nashik Express', departure: '15:00', arrival: '07:30', price: 1800, type: 'AC First Class' },
        { id: 53, trainName: 'Godavari Express', departure: '16:30', arrival: '09:00', price: 1400, type: 'AC 2 Tier' }
    ],
    aurangabad: [
        { id: 54, trainName: 'Aurangabad Express', departure: '14:00', arrival: '06:30', price: 1700, type: 'AC First Class' },
        { id: 55, trainName: 'Ajanta Express', departure: '15:30', arrival: '08:00', price: 1300, type: 'AC 2 Tier' }
    ],
    mangalore: [
        { id: 56, trainName: 'Mangalore Express', departure: '17:00', arrival: '09:30', price: 2300, type: 'AC First Class' },
        { id: 57, trainName: 'Konkan Express', departure: '18:30', arrival: '11:00', price: 1900, type: 'AC 2 Tier' }
    ],
    mysore: [
        { id: 58, trainName: 'Mysore Express', departure: '16:00', arrival: '08:30', price: 2200, type: 'AC First Class' },
        { id: 59, trainName: 'Palace Queen', departure: '17:30', arrival: '10:00', price: 1800, type: 'AC 2 Tier' }
    ]
};

let currentPackageType = null;
const destination = 'Taj Mahal';

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
    const TravelDate = document.getElementById('TravelDate');

    // Set minimum dates
    departDate.min = today.toISOString().split('T')[0];
    returnDate.min = today.toISOString().split('T')[0];
    TravelDate.min = today.toISOString().split('T')[0];

    // Set default values to empty
    departDate.value = '';
    returnDate.value = '';
    TravelDate.value = '';
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
                                    <span class="city">Agra</span>
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
                                    <span class="city">Agra</span>
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
                                    <span class="city">Agra</span>
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
                                <span class="city">Agra</span>
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
                                <span class="city">Agra</span>
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
                            <span>From: ${flightType === 'outbound' ? fromCity : 'Agra'}</span>
                            <span>To: ${flightType === 'outbound' ? 'Agra' : fromCity}</span>
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
                    <span>${document.getElementById('TravelDate').value || 'Not selected'}</span>
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
    document.getElementById('TravelDate').addEventListener('change', updateSummary);
    document.getElementById('transportPassengers').addEventListener('change', function () {
        const selectedTransport = getSelectedTransport();
        if (selectedTransport) {
            updateTransportSummary(selectedTransport, currentPackageType);
        }
    });

    // Add event listeners for date inputs
    const dateInputs = ['departDate', 'returnDate', 'TravelDate'];
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

// Hotel data for different packages
const hotelData = {
    premium: [
        {
            name: "The Oberoi Amarvilas",
            rating: 5,
            price: 35000,
            features: ["King Size Bed", "Premium Bathroom Amenities", "24/7 Room Service", "Mini Bar"],
            distance: "600m from Taj Mahal",
            image: "../static/images/hotels/oberoi.jpg"
        },
        {
            name: "Taj Hotel & Convention",
            rating: 5,
            price: 28000,
            features: ["King Size Bed", "Luxury Bathroom", "In-room Safe", "Smart TV"],
            distance: "2km from Taj Mahal",
            image: "../static/images/hotels/taj-hotel.jpg"
        },
        {
            name: "ITC Mughal",
            rating: 5,
            price: 25000,
            features: ["King Size Bed", "Premium Toiletries", "Coffee Maker", "Work Desk"],
            distance: "3km from Taj Mahal",
            image: "../static/images/hotels/itc-mughal.jpg"
        }
    ],
    gold: [
        {
            name: "Crystal Sarovar Premiere",
            rating: 4,
            price: 12000,
            features: ["Queen Size Bed", "Modern Bathroom", "Tea/Coffee Maker", "LED TV"],
            distance: "2.5km from Taj Mahal",
            image: "../static/images/hotels/crystal-sarovar.jpg"
        },
        {
            name: "Howard Plaza The Fern",
            rating: 4,
            price: 10000,
            features: ["Queen Size Bed", "En-suite Bathroom", "Mini Fridge", "Work Area"],
            distance: "3.5km from Taj Mahal",
            image: "../static/images/hotels/howard-plaza.jpg"
        },
        {
            name: "Ramada Plaza",
            rating: 4,
            price: 9500,
            features: ["Queen Size Bed", "Modern Amenities", "Room Safe", "Desk Space"],
            distance: "4km from Taj Mahal",
            image: "../static/images/hotels/ramada.jpg"
        }
    ],
    silver: [
        {
            name: "Hotel Clarks Shiraz",
            rating: 3,
            price: 7000,
            features: ["Double Bed", "Private Bathroom", "TV", "Air Conditioning"],
            distance: "3.8km from Taj Mahal",
            image: "../static/images/hotels/clarks-shiraz.jpg"
        },
        {
            name: "Hotel Atulyaa Taj",
            rating: 3,
            price: 5500,
            features: ["Double Bed", "Bathroom", "Cable TV", "Fan/AC"],
            distance: "4.2km from Taj Mahal",
            image: "../static/images/hotels/atulyaa-taj.jpg"
        },
        {
            name: "Hotel Marina Agra",
            rating: 3,
            price: 4500,
            features: ["Double Bed", "Attached Bath", "TV Set", "Basic Amenities"],
            distance: "4.5km from Taj Mahal",
            image: "../static/images/hotels/marina.jpg"
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
        const fromLocation = type === 'outbound' ? fromCity : 'Agra';
        const toLocation = type === 'outbound' ? 'Agra' : fromCity;

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

