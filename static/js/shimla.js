// Package details object
const packageDetails = {
    premium: {
        name: 'Premium Package',
        price: 35000,
        features: [
            'Luxury Flight Travel',
            '5-Star Mountain View Resort in Shimla',
            'Private Tour Guide',
            'All Himachali Cuisine Meals Included',
            'Priority Access to Kufri, Mall Road & Ridge'
        ]
    },
    gold: {
        name: 'Gold Package',
        price: 25000,
        features: [
            'AC Bus Travel',
            '4-Star Heritage Hotel Stay in Shimla',
            'Expert Local Guide',
            'Shimla Breakfast & Dinner',
            'Standard Access to Jakhoo Temple & Christ Church'
        ]
    },
    silver: {
        name: 'Silver Package',
        price: 15000,
        features: [
            'Train Travel (AC Class - Kalka-Shimla Toy Train)',
            '3-Star Hotel Stay in Shimla',
            'Group Tour Guide',
            'Shimla Breakfast Only',
            'Basic Sightseeing of Ridge & Local Markets'
        ]
    }
};

// Updated flight data with more cities and routes
const flightData = {
    delhi: [
        { id: 1, airline: 'Air India', departure: '06:00', arrival: '09:11', price: 5000, duration: '1h 30m', flightNo: 'AI-412' },
        { id: 2, airline: 'IndiGo', departure: '14:30', arrival: '15:45', price: 3200, duration: '1h 15m', flightNo: '6E-456' }
    ],
    mumbai: [
        { id: 3, airline: 'SpiceJet', departure: '07:30', arrival: '10:00', price: 4500, duration: '2h 30m', flightNo: 'SG-789' },
        { id: 4, airline: 'Vistara', departure: '13:00', arrival: '15:30', price: 4800, duration: '2h 30m', flightNo: 'UK-101' }
    ],
    bangalore: [
        { id: 5, airline: 'AirAsia', departure: '06:00', arrival: '10:30', price: 5500, duration: '4h 30m', flightNo: 'I5-202' },
        { id: 6, airline: 'GoAir', departure: '11:30', arrival: '16:00', price: 5200, duration: '4h 30m', flightNo: 'G8-303' }
    ],
    chennai: [
        { id: 7, airline: 'IndiGo', departure: '09:00', arrival: '14:00', price: 6000, duration: '5h', flightNo: '6E-404' },
        { id: 8, airline: 'Air India', departure: '15:00', arrival: '20:00', price: 6300, duration: '5h', flightNo: 'AI-505' }
    ],
    kolkata: [
        { id: 9, airline: 'SpiceJet', departure: '07:00', arrival: '12:00', price: 5800, duration: '5h', flightNo: 'SG-606' },
        { id: 10, airline: 'Vistara', departure: '12:30', arrival: '17:30', price: 6100, duration: '5h', flightNo: 'UK-707' }
    ],
    hyderabad: [
        { id: 11, airline: 'AirAsia', departure: '08:30', arrival: '12:30', price: 5000, duration: '4h', flightNo: 'I5-808' },
        { id: 12, airline: 'GoAir', departure: '14:00', arrival: '18:00', price: 4800, duration: '4h', flightNo: 'G8-909' }
    ],
    kanpur: [
        { id: 13, airline: 'IndiGo', departure: '10:00', arrival: '13:30', price: 4200, duration: '3h 30m', flightNo: '6E-110' },
        { id: 14, airline: 'Air India', departure: '16:00', arrival: '19:30', price: 4500, duration: '3h 30m', flightNo: 'AI-221' }
    ],
    surat: [
        { id: 15, airline: 'SpiceJet', departure: '09:30', arrival: '12:30', price: 4000, duration: '3h', flightNo: 'SG-332' },
        { id: 16, airline: 'Vistara', departure: '15:30', arrival: '18:30', price: 4300, duration: '3h', flightNo: 'UK-443' }
    ],
    indore: [
        { id: 17, airline: 'AirAsia', departure: '10:30', arrival: '13:00', price: 3800, duration: '2h 30m', flightNo: 'I5-554' },
        { id: 18, airline: 'GoAir', departure: '16:30', arrival: '19:00', price: 3600, duration: '2h 30m', flightNo: 'G8-665' }
    ],
aurangabad: [
        { id: 19, airline: 'Air India', departure: '07:00', arrival: '11:00', price: 5200, duration: '4h', flightNo: 'AI-667' },
        { id: 20, airline: 'IndiGo', departure: '13:30', arrival: '17:30', price: 4900, duration: '4h', flightNo: '6E-778' }
    ],
    coimbatore: [
        { id: 21, airline: 'SpiceJet', departure: '06:30', arrival: '11:30', price: 5800, duration: '5h', flightNo: 'SG-889' },
        { id: 22, airline: 'Vistara', departure: '12:00', arrival: '17:00', price: 6100, duration: '5h', flightNo: 'UK-990' }
    ],
    madurai: [
        { id: 23, airline: 'AirAsia', departure: '08:00', arrival: '13:00', price: 6300, duration: '5h', flightNo: 'I5-111' },
        { id: 24, airline: 'GoAir', departure: '14:30', arrival: '19:30', price: 6000, duration: '5h', flightNo: 'G8-222' }
    ],
    visakhapatnam: [
        { id: 25, airline: 'IndiGo', departure: '09:30', arrival: '13:30', price: 5500, duration: '4h', flightNo: '6E-333' },
        { id: 26, airline: 'Air India', departure: '15:30', arrival: '19:30', price: 5800, duration: '4h', flightNo: 'AI-444' }
    ],
    vijayawada: [
        { id: 27, airline: 'SpiceJet', departure: '07:30', arrival: '12:30', price: 5300, duration: '5h', flightNo: 'SG-555' },
        { id: 28, airline: 'Vistara', departure: '13:00', arrival: '18:00', price: 5600, duration: '5h', flightNo: 'UK-666' }
    ],
    vadodara: [
        { id: 29, airline: 'AirAsia', departure: '10:00', arrival: '13:00', price: 4800, duration: '3h', flightNo: 'I5-777' },
        { id: 30, airline: 'GoAir', departure: '16:00', arrival: '19:00', price: 4500, duration: '3h', flightNo: 'G8-888' }
    ],
    gwalior: [
        { id: 31, airline: 'IndiGo', departure: '08:30', arrival: '12:00', price: 4700, duration: '3h 30m', flightNo: '6E-999' },
        { id: 32, airline: 'Air India', departure: '14:30', arrival: '18:00', price: 5000, duration: '3h 30m', flightNo: 'AI-101' }
    ],
    amritsar: [
        { id: 33, airline: 'SpiceJet', departure: '07:00', arrival: '08:15', price: 3800, duration: '1h 15m', flightNo: 'SG-202' },
        { id: 34, airline: 'Vistara', departure: '12:30', arrival: '13:45', price: 4100, duration: '1h 15m', flightNo: 'UK-303' }
    ],
vadodara: [
        { id: 29, airline: 'AirAsia', departure: '10:00', arrival: '13:00', price: 4800, duration: '3h', flightNo: 'I5-777' },
        { id: 30, airline: 'GoAir', departure: '16:00', arrival: '19:00', price: 4500, duration: '3h', flightNo: 'G8-888' }
    ],
    ludhiana: [
        { id: 35, airline: 'IndiGo', departure: '07:30', arrival: '08:45', price: 3600, duration: '1h 15m', flightNo: '6E-404' },
        { id: 36, airline: 'Air India', departure: '13:30', arrival: '14:45', price: 3900, duration: '1h 15m', flightNo: 'AI-505' }
    ],
    kochi: [
        { id: 37, airline: 'SpiceJet', departure: '06:00', arrival: '11:00', price: 6500, duration: '5h', flightNo: 'SG-606' },
        { id: 38, airline: 'Vistara', departure: '11:30', arrival: '16:30', price: 6800, duration: '5h', flightNo: 'UK-707' }
    ],
    mysore: [
        { id: 39, airline: 'AirAsia', departure: '08:00', arrival: '13:30', price: 6200, duration: '5h 30m', flightNo: 'I5-808' },
        { id: 40, airline: 'GoAir', departure: '14:00', arrival: '19:30', price: 5900, duration: '5h 30m', flightNo: 'G8-909' }
    ],
    mangalore: [
        { id: 41, airline: 'IndiGo', departure: '09:30', arrival: '14:30', price: 6100, duration: '5h', flightNo: '6E-110' },
        { id: 42, airline: 'Air India', departure: '15:30', arrival: '20:30', price: 6400, duration: '5h', flightNo: 'AI-221' }
    ],
    ahmedabad: [
        { id: 43, airline: 'SpiceJet', departure: '07:00', arrival: '10:00', price: 4200, duration: '3h', flightNo: 'SG-332' },
        { id: 44, airline: 'Vistara', departure: '12:30', arrival: '15:30', price: 4500, duration: '3h', flightNo: 'UK-443' }
    ],
    pune: [
        { id: 45, airline: 'AirAsia', departure: '10:30', arrival: '13:30', price: 4000, duration: '3h', flightNo: 'I5-554' },
        { id: 46, airline: 'GoAir', departure: '16:30', arrival: '19:30', price: 3800, duration: '3h', flightNo: 'G8-665' }
    ],
    srinagar: [
        { id: 47, airline: 'IndiGo', departure: '06:30', arrival: '07:45', price: 3500, duration: '1h 15m', flightNo: '6E-777' },
        { id: 48, airline: 'Air India', departure: '12:30', arrival: '13:45', price: 3800, duration: '1h 15m', flightNo: 'AI-888' }
    ],
    nagpur: [
        { id: 49, airline: 'SpiceJet', departure: '08:30', arrival: '12:30', price: 4700, duration: '4h', flightNo: 'SG-999' },
        { id: 50, airline: 'Vistara', departure: '14:30', arrival: '18:30', price: 5000, duration: '4h', flightNo: 'UK-101' }
    ],
    varanasi: [
        { id: 51, airline: 'AirAsia', departure: '07:00', arrival: '11:00', price: 5300, duration: '4h', flightNo: 'I5-202' },
        { id: 52, airline: 'GoAir', departure: '13:00', arrival: '17:00', price: 5600, duration: '4h', flightNo: 'G8-303' }
    ]
};

// Sample bus data with all cities
const busData = {
    delhi: [
        { id: 1, operator: 'HRTC Volvo', departure: '18:00', arrival: '06:00 (Next Day)', price: 1500, type: 'AC Sleeper' },
        { id: 2, operator: 'Himachal Travels', departure: '20:00', arrival: '08:00 (Next Day)', price: 1300, type: 'AC Semi-Sleeper' }
    ],
    mumbai: [
        { id: 3, operator: 'Paulo Travels', departure: '14:00', arrival: '22:00 (Next Day)', price: 2800, type: 'AC Sleeper' },
        { id: 4, operator: 'Neeta Tours', departure: '16:00', arrival: '00:00 (2 Days Later)', price: 2500, type: 'AC Semi-Sleeper' }
    ],
    bangalore: [
        { id: 5, operator: 'SRS Travels', departure: '10:00', arrival: '12:00 (2 Days Later)', price: 3500, type: 'AC Sleeper' },
        { id: 6, operator: 'KSRTC Airavat', departure: '12:00', arrival: '14:00 (2 Days Later)', price: 3200, type: 'AC Multi-Axle' }
    ],
    chennai: [
        { id: 7, operator: 'Parveen Travels', departure: '08:00', arrival: '14:00 (2 Days Later)', price: 3800, type: 'AC Sleeper' },
        { id: 8, operator: 'SRM Travels', departure: '10:00', arrival: '16:00 (2 Days Later)', price: 3600, type: 'AC Semi-Sleeper' }
    ],
    kolkata: [
        { id: 9, operator: 'Royal Cruiser', departure: '16:00', arrival: '04:00 (3 Days Later)', price: 4200, type: 'AC Sleeper' },
        { id: 10, operator: 'Bengal Tiger Tours', departure: '18:00', arrival: '06:00 (3 Days Later)', price: 4000, type: 'AC Multi-Axle' }
    ],
    hyderabad: [
        { id: 11, operator: 'Orange Travels', departure: '12:00', arrival: '18:00 (Next Day)', price: 2500, type: 'AC Sleeper' },
        { id: 12, operator: 'Kesineni Travels', departure: '14:00', arrival: '20:00 (Next Day)', price: 2300, type: 'AC Semi-Sleeper' }
    ],
    kanpur: [
        { id: 13, operator: 'UPSRTC Janrath', departure: '19:00', arrival: '07:00 (Next Day)', price: 1800, type: 'AC Multi-Axle' },
        { id: 14, operator: 'RSRTC Deluxe', departure: '21:00', arrival: '09:00 (Next Day)', price: 1600, type: 'AC Semi-Sleeper' }
    ],
    surat: [
        { id: 15, operator: 'GSRTC Volvo', departure: '17:00', arrival: '05:00 (Next Day)', price: 2000, type: 'AC Sleeper' },
        { id: 16, operator: 'Eagle Travels', departure: '19:00', arrival: '07:00 (Next Day)', price: 1800, type: 'AC Semi-Sleeper' }
    ],
    indore: [
        { id: 17, operator: 'MPRTC Volvo', departure: '18:00', arrival: '06:00 (Next Day)', price: 1900, type: 'AC Sleeper' },
        { id: 18, operator: 'Hans Travels', departure: '20:00', arrival: '08:00 (Next Day)', price: 1700, type: 'AC Semi-Sleeper' }
    ],
aurangabad: [
        { id: 19, operator: 'MSRTC Shivshahi', departure: '15:00', arrival: '03:00 (2 Days Later)', price: 2600, type: 'AC Sleeper' },
        { id: 20, operator: 'Royal Safari Travels', departure: '17:00', arrival: '05:00 (2 Days Later)', price: 2400, type: 'AC Semi-Sleeper' }
    ],
    coimbatore: [
        { id: 21, operator: 'KPN Travels', departure: '11:00', arrival: '17:00 (2 Days Later)', price: 3200, type: 'AC Sleeper' },
        { id: 22, operator: 'TNSTC Ultra Deluxe', departure: '13:00', arrival: '19:00 (2 Days Later)', price: 3000, type: 'AC Multi-Axle' }
    ],
    madurai: [
        { id: 23, operator: 'SRS Travels', departure: '09:00', arrival: '15:00 (2 Days Later)', price: 3400, type: 'AC Sleeper' },
        { id: 24, operator: 'Parveen Travels', departure: '11:00', arrival: '17:00 (2 Days Later)', price: 3200, type: 'AC Semi-Sleeper' }
    ],
    visakhapatnam: [
        { id: 25, operator: 'APSRTC Garuda Plus', departure: '14:00', arrival: '02:00 (2 Days Later)', price: 2800, type: 'AC Sleeper' },
        { id: 26, operator: 'Orange Travels', departure: '16:00', arrival: '04:00 (2 Days Later)', price: 2600, type: 'AC Multi-Axle' }
    ],
    vijayawada: [
        { id: 27, operator: 'APSRTC Indra', departure: '13:00', arrival: '01:00 (2 Days Later)', price: 2700, type: 'AC Sleeper' },
        { id: 28, operator: 'Kesineni Travels', departure: '15:00', arrival: '03:00 (2 Days Later)', price: 2500, type: 'AC Semi-Sleeper' }
    ],
    vadodara: [
        { id: 29, operator: 'GSRTC Volvo', departure: '16:00', arrival: '04:00 (Next Day)', price: 2100, type: 'AC Sleeper' },
        { id: 30, operator: 'Eagle Travels', departure: '18:00', arrival: '06:00 (Next Day)', price: 1900, type: 'AC Semi-Sleeper' }
    ],
    gwalior: [
        { id: 31, operator: 'RSRTC Volvo', departure: '17:00', arrival: '05:00 (Next Day)', price: 2200, type: 'AC Sleeper' },
        { id: 32, operator: 'UPSRTC Janrath', departure: '19:00', arrival: '07:00 (Next Day)', price: 2000, type: 'AC Multi-Axle' }
    ],
    amritsar: [
        { id: 33, operator: 'PRTC Volvo', departure: '18:00', arrival: '06:00 (Next Day)', price: 1600, type: 'AC Sleeper' },
        { id: 34, operator: 'Himachal Travels', departure: '20:00', arrival: '08:00 (Next Day)', price: 1400, type: 'AC Semi-Sleeper' }
    ],
vadodara: [
    { id: 29, operator: 'GSRTC Volvo', departure: '16:00', arrival: '04:00 (Next Day)', price: 2100, type: 'AC Sleeper' },
    { id: 30, operator: 'Eagle Travels', departure: '18:00', arrival: '06:00 (Next Day)', price: 1900, type: 'AC Semi-Sleeper' }
  ],
  ludhiana: [
    { id: 35, operator: 'PRTC Volvo', departure: '19:00', arrival: '07:00 (Next Day)', price: 1700, type: 'AC Sleeper' },
    { id: 36, operator: 'Indo Canadian Transport', departure: '21:00', arrival: '09:00 (Next Day)', price: 1500, type: 'AC Semi-Sleeper' }
  ],
  kochi: [
    { id: 37, operator: 'Kallada Travels', departure: '10:00', arrival: '20:00 (2 Days Later)', price: 3600, type: 'AC Sleeper' },
    { id: 38, operator: 'Kerala Lines', departure: '12:00', arrival: '22:00 (2 Days Later)', price: 3400, type: 'AC Semi-Sleeper' }
  ],
  mysore: [
    { id: 39, operator: 'KSRTC Airavat Club Class', departure: '17:00', arrival: '05:00 (Next Day)', price: 2400, type: 'AC Sleeper' },
    { id: 40, operator: 'SRS Travels', departure: '19:00', arrival: '07:00 (Next Day)', price: 2200, type: 'AC Multi-Axle' }
  ],
  mangalore: [
    { id: 41, operator: 'Durgamba Motors', departure: '14:00', arrival: '02:00 (2 Days Later)', price: 3000, type: 'AC Sleeper' },
    { id: 42, operator: 'VRL Travels', departure: '16:00', arrival: '04:00 (2 Days Later)', price: 2800, type: 'AC Semi-Sleeper' }
  ],
  ahmedabad: [
    { id: 43, operator: 'GSRTC Volvo', departure: '17:00', arrival: '05:00 (Next Day)', price: 2300, type: 'AC Sleeper' },
    { id: 44, operator: 'Patel Tours and Travels', departure: '19:00', arrival: '07:00 (Next Day)', price: 2100, type: 'AC Semi-Sleeper' }
  ],
  pune: [
    { id: 45, operator: 'MSRTC Shivneri', departure: '18:00', arrival: '06:00 (Next Day)', price: 2000, type: 'AC Sleeper' },
    { id: 46, operator: 'Neeta Tours', departure: '20:00', arrival: '08:00 (Next Day)', price: 1800, type: 'AC Semi-Sleeper' }
  ],
  srinagar: [
    { id: 47, operator: 'JKSRTC Deluxe', departure: '08:00', arrival: '18:00 (3 Days Later)', price: 4500, type: 'AC Sleeper' },
    { id: 48, operator: 'Kashmir Travels', departure: '10:00', arrival: '20:00 (3 Days Later)', price: 4300, type: 'AC Semi-Sleeper' }
  ],
  nagpur: [
    { id: 49, operator: 'MSRTC Shivshahi', departure: '13:00', arrival: '01:00 (2 Days Later)', price: 2900, type: 'AC Sleeper' },
    { id: 50, operator: 'Royal Travels', departure: '15:00', arrival: '03:00 (2 Days Later)', price: 2700, type: 'AC Semi-Sleeper' }
  ],
  varanasi: [
    { id: 51, operator: 'UPSRTC Volvo', departure: '16:00', arrival: '04:00 (2 Days Later)', price: 3100, type: 'AC Sleeper' },
    { id: 52, operator: 'Mahalaxmi Travels', departure: '18:00', arrival: '06:00 (2 Days Later)', price: 2900, type: 'AC Semi-Sleeper' }
  ]
};

// Sample train data with all cities
const trainData = {
    delhi: [
        { id: 1, trainName: 'Himachal Express', departure: '22:50', arrival: '04:20 (Next Day)', duration: '5h 30m', price: 800, trainNo: '14053', via: 'Chandigarh' },
        { id: 2, trainName: 'Kalka Shatabdi', departure: '07:40', arrival: '11:55', duration: '4h 15m', price: 1200, trainNo: '12011', via: 'Chandigarh' }
    ],
    mumbai: [
        { id: 3, trainName: 'Paschim Express', departure: '11:35', arrival: '18:15 (Next Day)', duration: '30h 40m', price: 2500, trainNo: '12925', via: 'Delhi, Chandigarh' },
        { id: 4, trainName: 'Golden Temple Mail', departure: '21:30', arrival: '04:10 (2 Days Later)', duration: '30h 40m', price: 2300, trainNo: '12903', via: 'Delhi, Chandigarh' }
    ],
    bangalore: [
        { id: 5, trainName: 'Karnataka Express', departure: '20:20', arrival: '07:30 (3 Days Later)', duration: '59h 10m', price: 3800, trainNo: '12627', via: 'Delhi, Chandigarh' },
        { id: 6, trainName: 'Kerala Express', departure: '11:00', arrival: '22:10 (3 Days Later)', duration: '61h 10m', price: 3600, trainNo: '12625', via: 'Delhi, Chandigarh' }
    ],
    chennai: [
        { id: 7, trainName: 'Tamil Nadu Express', departure: '22:00', arrival: '11:45 (3 Days Later)', duration: '61h 45m', price: 4000, trainNo: '12621', via: 'Delhi, Chandigarh' },
        { id: 8, trainName: 'Grand Trunk Express', departure: '17:00', arrival: '06:30 (3 Days Later)', duration: '61h 30m', price: 3900, trainNo: '12615', via: 'Delhi, Chandigarh' }
    ],
    kolkata: [
        { id: 9, trainName: 'Howrah Kalka Mail', departure: '21:40', arrival: '05:20 (3 Days Later)', duration: '55h 40m', price: 3500, trainNo: '12311', via: 'Delhi, Chandigarh' },
        { id: 10, trainName: 'Poorva Express', departure: '08:15', arrival: '16:00 (3 Days Later)', duration: '55h 45m', price: 3300, trainNo: '12303', via: 'Delhi, Chandigarh' }
    ],
    hyderabad: [
        { id: 11, trainName: 'Andhra Pradesh Express', departure: '06:00', arrival: '17:00 (2 Days Later)', duration: '35h', price: 2800, trainNo: '12723', via: 'Delhi, Chandigarh' },
        { id: 12, trainName: 'Dakshin Express', departure: '23:00', arrival: '11:30 (3 Days Later)', duration: '36h 30m', price: 2600, trainNo: '12721', via: 'Delhi, Chandigarh' }
    ],
    kanpur: [
        { id: 13, trainName: 'Kalindi Express', departure: '17:30', arrival: '01:00 (Next Day)', duration: '7h 30m', price: 900, trainNo: '14723', via: 'Delhi, Chandigarh' },
        { id: 14, trainName: 'Prayagraj Express', departure: '21:10', arrival: '04:30 (Next Day)', duration: '7h 20m', price: 1100, trainNo: '12417', via: 'Delhi, Chandigarh' }
    ],
    surat: [
        { id: 15, trainName: 'Gujarat Sampark Kranti', departure: '12:15', arrival: '19:45 (Next Day)', duration: '31h 30m', price: 2700, trainNo: '12917', via: 'Delhi, Chandigarh' },
        { id: 16, trainName: 'Swaraj Express', departure: '14:30', arrival: '22:00 (Next Day)', duration: '31h 30m', price: 2500, trainNo: '12471', via: 'Delhi, Chandigarh' }
    ],
    indore: [
        { id: 17, trainName: 'Malwa Express', departure: '12:30', arrival: '20:15 (Next Day)', duration: '31h 45m', price: 2600, trainNo: '12919', via: 'Delhi, Chandigarh' },
        { id: 18, trainName: 'Chandigarh Express', departure: '17:00', arrival: '00:30 (2 Days Later)', duration: '31h 30m', price: 2400, trainNo: '19307', via: 'Delhi, Chandigarh' }
    ],
aurangabad: [
        { id: 19, trainName: 'Sachkhand Express', departure: '13:35', arrival: '22:10 (Next Day)', duration: '32h 35m', price: 2900, trainNo: '12715', via: 'Delhi, Chandigarh' },
        { id: 20, trainName: 'Marathwada Sampark Kranti', departure: '22:45', arrival: '07:50 (2 Days Later)', duration: '33h 05m', price: 2700, trainNo: '12753', via: 'Delhi, Chandigarh' }
    ],
    coimbatore: [
        { id: 21, trainName: 'Kongu Express', departure: '14:15', arrival: '03:45 (3 Days Later)', duration: '61h 30m', price: 4200, trainNo: '12647', via: 'Delhi, Chandigarh' },
        { id: 22, trainName: 'Nilagiri Express', departure: '21:00', arrival: '10:30 (3 Days Later)', duration: '61h 30m', price: 4100, trainNo: '12671', via: 'Delhi, Chandigarh' }
    ],
    madurai: [
        { id: 23, trainName: 'Tamil Nadu Sampark Kranti', departure: '17:45', arrival: '07:15 (3 Days Later)', duration: '61h 30m', price: 4300, trainNo: '12651', via: 'Delhi, Chandigarh' },
        { id: 24, trainName: 'Vaigai Express', departure: '13:15', arrival: '02:45 (3 Days Later)', duration: '61h 30m', price: 4200, trainNo: '12631', via: 'Delhi, Chandigarh' }
    ],
    visakhapatnam: [
        { id: 25, trainName: 'AP Express', departure: '08:20', arrival: '19:30 (2 Days Later)', duration: '35h 10m', price: 3000, trainNo: '12805', via: 'Delhi, Chandigarh' },
        { id: 26, trainName: 'Swarna Jayanti Express', departure: '14:30', arrival: '01:40 (3 Days Later)', duration: '35h 10m', price: 2900, trainNo: '12803', via: 'Delhi, Chandigarh' }
    ],
    vijayawada: [
        { id: 27, trainName: 'Pinakini Express', departure: '14:10', arrival: '01:20 (3 Days Later)', duration: '35h 10m', price: 2950, trainNo: '12711', via: 'Delhi, Chandigarh' },
        { id: 28, trainName: 'Ratnachal Express', departure: '17:30', arrival: '04:40 (3 Days Later)', duration: '35h 10m', price: 2850, trainNo: '12717', via: 'Delhi, Chandigarh' }
    ],
    vadodara: [
        { id: 29, trainName: 'Gujarat Mail', departure: '19:15', arrival: '02:45 (Next Day)', duration: '31h 30m', price: 2800, trainNo: '12901', via: 'Delhi, Chandigarh' },
        { id: 30, trainName: 'Aravali Express', departure: '17:00', arrival: '00:30 (2 Days Later)', duration: '31h 30m', price: 2600, trainNo: '14701', via: 'Delhi, Chandigarh' }
    ],
    gwalior: [
        { id: 31, trainName: 'Taj Express', departure: '18:15', arrival: '01:45 (Next Day)', duration: '7h 30m', price: 1000, trainNo: '12279', via: 'Delhi, Chandigarh' },
        { id: 32, trainName: 'Punjab Mail', departure: '22:00', arrival: '05:30 (Next Day)', duration: '7h 30m', price: 950, trainNo: '12137', via: 'Delhi, Chandigarh' }
    ],
    amritsar: [
        { id: 33, trainName: 'Paschim Express', departure: '10:35', arrival: '18:15', duration: '7h 40m', price: 1100, trainNo: '12925', via: 'Chandigarh' },
        { id: 34, trainName: 'Golden Temple Mail', departure: '20:30', arrival: '04:10 (Next Day)', duration: '7h 40m', price: 1050, trainNo: '12903', via: 'Chandigarh' }
    ],
vadodara: [
        { id: 29, trainName: 'Gujarat Mail', departure: '19:15', arrival: '02:45 (Next Day)', duration: '31h 30m', price: 2800, trainNo: '12901', via: 'Delhi, Chandigarh' },
        { id: 30, trainName: 'Aravali Express', departure: '17:00', arrival: '00:30 (2 Days Later)', duration: '31h 30m', price: 2600, trainNo: '14701', via: 'Delhi, Chandigarh' }
    ],
    ludhiana: [
        { id: 35, trainName: 'Shatabdi Express', departure: '06:25', arrival: '10:45', duration: '4h 20m', price: 1300, trainNo: '12057', via: 'Chandigarh' },
        { id: 36, trainName: 'Himachal Express', departure: '21:05', arrival: '04:20 (Next Day)', duration: '7h 15m', price: 950, trainNo: '14553', via: 'Chandigarh' }
    ],
    kochi: [
        { id: 37, trainName: 'Mangala Lakshadweep Express', departure: '13:25', arrival: '02:55 (3 Days Later)', duration: '63h 30m', price: 4500, trainNo: '12617', via: 'Delhi, Chandigarh' },
        { id: 38, trainName: 'Kerala Sampark Kranti', departure: '11:15', arrival: '23:45 (3 Days Later)', duration: '64h 30m', price: 4400, trainNo: '12283', via: 'Delhi, Chandigarh' }
    ],
    mysore: [
        { id: 39, trainName: 'Swarna Jayanthi Express', departure: '14:30', arrival: '01:40 (3 Days Later)', duration: '61h 10m', price: 4100, trainNo: '12781', via: 'Delhi, Chandigarh' },
        { id: 40, trainName: 'Karnataka Sampark Kranti', departure: '10:00', arrival: '21:10 (3 Days Later)', duration: '63h 10m', price: 4000, trainNo: '12649', via: 'Delhi, Chandigarh' }
    ],
    mangalore: [
        { id: 41, trainName: 'Matsyagandha Express', departure: '14:20', arrival: '03:50 (3 Days Later)', duration: '61h 30m', price: 4200, trainNo: '12619', via: 'Delhi, Chandigarh' },
        { id: 42, trainName: 'Mangalore Express', departure: '20:10', arrival: '09:40 (3 Days Later)', duration: '61h 30m', price: 4100, trainNo: '12685', via: 'Delhi, Chandigarh' }
    ],
    ahmedabad: [
        { id: 43, trainName: 'Gujarat Express', departure: '21:05', arrival: '04:35 (Next Day)', duration: '31h 30m', price: 2900, trainNo: '19031', via: 'Delhi, Chandigarh' },
        { id: 44, trainName: 'Ashram Express', departure: '18:55', arrival: '02:25 (Next Day)', duration: '31h 30m', price: 2700, trainNo: '12915', via: 'Delhi, Chandigarh' }
    ],
    pune: [
        { id: 45, trainName: 'Jhelum Express', departure: '17:20', arrival: '00:50 (2 Days Later)', duration: '31h 30m', price: 2800, trainNo: '11077', via: 'Delhi, Chandigarh' },
        { id: 46, trainName: 'Maharashtra Sampark Kranti', departure: '11:00', arrival: '18:30 (Next Day)', duration: '31h 30m', price: 2600, trainNo: '12449', via: 'Delhi, Chandigarh' }
    ],
    srinagar: [
        { id: 47, trainName: 'Hemkunt Express', departure: '14:00', arrival: '22:30 (2 Days Later)', duration: '32h 30m', price: 3000, trainNo: '14609', via: 'Delhi, Chandigarh' },
        { id: 48, trainName: 'Jammu Mail', departure: '18:10', arrival: '02:40 (3 Days Later)', duration: '32h 30m', price: 2900, trainNo: '14033', via: 'Delhi, Chandigarh' }
    ],
    nagpur: [
        { id: 49, trainName: 'Goa Express', departure: '13:30', arrival: '01:00 (2 Days Later)', duration: '35h 30m', price: 3100, trainNo: '12779', via: 'Delhi, Chandigarh' },
        { id: 50, trainName: 'Karnataka Express', departure: '10:00', arrival: '21:30 (2 Days Later)', duration: '35h 30m', price: 3000, trainNo: '12627', via: 'Delhi, Chandigarh' }
    ],
    varanasi: [
        { id: 51, trainName: 'Kashi Vishwanath Express', departure: '12:30', arrival: '20:00 (Next Day)', duration: '31h 30m', price: 2700, trainNo: '15127', via: 'Delhi, Chandigarh' },
        { id: 52, trainName: 'Shiv Ganga Express', departure: '18:45', arrival: '02:15 ', duration: '31h 30m', price: 2500, trainNo: '12559', via: 'Delhi, Chandigarh' }
    ]
};

let currentPackageType = null;
const destination = 'Shimla';

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
                        <span class="city">Shimla</span>
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
                        <span class="city">shimla</span>
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
                        <span class="city">shimla</span>
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
                    <span class="city">shimla</span>
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
                    <span class="city">Shimla</span>
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
                <span>From: ${flightType === 'outbound' ? fromCity : 'Shimla'}</span>
                <span>To: ${flightType === 'outbound' ? 'Shimla' : fromCity}</span>
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


// Hotel data for different packages in Shimla
const hotelData = {
    premium: [
        {
            name: "Wildflower Hall, An Oberoi Resort",
            rating: 5,
            price: 30000,
            features: ["Mountain View Rooms", "Spa & Wellness", "Indoor Pool", "Fine Dining"],
            distance: "Mashobra, Shimla",
            image: "../static/images/hotels/wildflower-hall.jpg"
        },
        {
            name: "The Oberoi Cecil",
            rating: 5,
            price: 25000,
            features: ["Luxury Rooms", "Heated Swimming Pool", "Heritage Charm", "World-Class Dining"],
            distance: "Shimla",
            image: "../static/images/hotels/oberoi-cecil.jpg"
        },
        {
            name: "Radisson Hotel Shimla",
            rating: 5,
            price: 22000,
            features: ["Luxury Rooms", "Rooftop Pool", "Fitness Center", "Multi-Cuisine Restaurant"],
            distance: "Shimla",
            image: "../static/images/hotels/radisson-shimla.jpg"
        }
    ],
    gold: [
        {
            name: "Club Mahindra Mashobra",
            rating: 4,
            price: 15000,
            features: ["Mountain View Rooms", "Family-Friendly", "Recreational Activities", "Restaurant"],
            distance: "Mashobra, Shimla",
            image: "../static/images/hotels/club-mahindra-mashobra.jpg"
        },
        {
            name: "Shilon Resort",
            rating: 4,
            price: 13000,
            features: ["Comfortable Rooms", "Outdoor Pool", "Restaurant", "Nature Walks"],
            distance: "Shimla",
            image: "../static/images/hotels/shilon-resort.jpg"
        },
        {
            name: "Snow Valley Resorts",
            rating: 4,
            price: 12000,
            features: ["Hill View Rooms", "Restaurant", "Bar", "Indoor Games"],
            distance: "Shimla",
            image: "../static/images/hotels/snow-valley-resorts.jpg"
        }
    ],
    silver: [
        {
            name: "Hotel Kufri Holiday Resort",
            rating: 3,
            price: 8000,
            features: ["Basic Rooms", "Restaurant", "Room Service", "Budget-Friendly"],
            distance: "Kufri, Shimla",
            image: "../static/images/hotels/kufri-holiday-resort.jpg"
        },
        {
            name: "Hotel Combermere",
            rating: 3,
            price: 7000,
            features: ["Comfortable Rooms", "Restaurant", "Free WiFi", "City Center Location"],
            distance: "Shimla",
            image: "../static/images/hotels/combermere-shimla.jpg"
        },
        {
            name: "Hotel Shimla Heritage",
            rating: 3,
            price: 6000,
            features: ["Simple Rooms", "Restaurant", "Room Service", "Budget Accommodation"],
            distance: "Shimla",
            image: "../static/images/hotels/shimla-heritage.jpg"
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
        const fromLocation = type === 'outbound' ? fromCity : 'Shimla';
        const toLocation = type === 'outbound' ? 'Shimla' : fromCity;

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