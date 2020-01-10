const listings = [
    {
        title: 'City Cars',
        boldTitle: false,
        showAddToFav: true,
        listings: [
            {
                id: 1,
                photo: require('./photos/CityCars/listing1.png'),
                type: 'Manual, Gas, 4 doors, 5 seats',
                title: 'Volkswagen up!',
                location: 'Paris, France',
                price: 60,
                priceType: 'per day',
                stars: 29,
            },
            {
                id: 2,
                photo: require('./photos/CityCars/listing2.png'),
                type: 'Manual, Gas, 2 doors, 5 seats',
                title: 'Seat Mii',
                location: 'Tokyo, Japan',
                price: 70,
                priceType: 'per day',
                stars: 4,
            },
            {
                id: 3,
                photo: require('./photos/CityCars/listing3.png'),
                type: 'Manual, Gas, 4 doors, 5 seats',
                title: 'Kia Picanto',
                location: 'Sydney, Australia',
                price: 80,
                priceType: 'per day',
                stars: 4,
            },
            {
                id: 4,
                photo: require('./photos/CityCars/listing4.png'),
                type: 'Automatic, Gas, 4 doors, 5 seats',
                title: 'Hyundai i10',
                location: 'Paris, France',
                price: 47,
                priceType: 'per day',
                stars: 4,
            },
            {
                id: 5,
                photo: require('./photos/CityCars/listing5.png'),
                type: 'Manual, Gas, 4 doors, 5 seats',
                title: 'Toyota Aygo',
                location: 'Sydney, Australia',
                price: 47,
                priceType: 'per day',
                stars: 9,
            },
            {
                id: 6,
                photo: require('./photos/CityCars/listing6.png'),
                type: 'Automatic, Gas, 4 doors, 5 seats',
                title: 'Peugeot 108',
                location: 'Seoul, South Korea',
                price: 61,
                priceType: 'per day',
                stars: 15,
            },
        ],
    },
    {
        title: 'Minivans',
        boldTitle: false,
        showAddToFav: true,
        listings: 
        [
            {
                id: 7,
                photo: require('./photos/Minivans/listing1.png'),
                type: 'Manual, Gas, 4 doors, 7 seats',
                title: 'Honda Odyssey',
                location: 'Paris, France',
                price: 61,
                priceType: 'per day',
                stars: 101,
            },
            {
                id: 8,
                photo: require('./photos/Minivans/listing2.png'),
                type: 'Automatic, Gas, 4 doors, 7 seats',
                title: 'Chrysler Pacifica',
                location: 'Sydney, Australia',
                price: 70,
                priceType: 'per day',
                stars: 119,
            },
            {
                id: 9,
                photo: require('./photos/Minivans/listing3.png'),
                type: 'Manual, Gas, 4 doors, 7 seats',
                title: 'Kia Sedona',
                location: 'Paris, France',
                price: 91,
                priceType: 'per day',
                stars: 119,
            },
            {
                id: 10,
                photo: require('./photos/Minivans/listing4.png'),
                type: 'Manual, Electric, 4 doors, 7 seats',
                title: 'Toyota Sienna',
                location: 'Sydney, Australia',
                price: 55,
                priceType: 'per day',
                stars: 100,
            },
            {
                id: 11,
                photo: require('./photos/Minivans/listing5.png'),
                type: 'Manual, Gas, 4 doors, 7 seats',
                title: 'Dodge Grand Caravan',
                location: 'Seoul, South Korea',
                price: 64,
                priceType: 'per day',
                stars: 116,
            },
        ],
    },
    {
        title: 'Luxury & Exotic',
        boldTitle: false,
        showAddToFav: true,
        listings: [
            {
                id: 12,
                photo: require('./photos/Luxury/listing1.png'),
                type: 'Manual, Gas, 4 doors, 5 seats',
                title: 'BMW X1',
                location: 'Paris, France',
                price: 212,
                priceType: 'per day',
                stars: 116,
            }, 
            {
                id: 13,
                photo: require('./photos/Luxury/listing2.png'),
                type: 'Manual, Gas, 4 doors, 5 seats',
                title: 'Porsche Macan',
                location: 'Sydney, Australia',
                price: 230,
                priceType: 'per day',
                stars: 149,
            }, 
            {
                id: 13,
                photo: require('./photos/Luxury/listing3.png'),
                type: 'Manual, Gas, 4 doors, 5 seats',
                title: 'Audi A6',
                location: 'Paris, France',
                price: 189,
                priceType: 'per day',
                stars: 149,
            }, 
            {
                id: 14,
                photo: require('./photos/Luxury/listing4.png'),
                type: 'Manual, Gas, 4 doors, 5 seats',
                title: 'BMW M5',
                location: 'Sydney, Australia',
                price: 200,
                priceType: 'per day',
                stars: 129,
            },  
            {
                id: 15,
                photo: require('./photos/Luxury/listing5.png'),
                type: 'Manual, Electric, 4 doors, 5 seats',
                title: 'Tesla Model 3',
                location: 'Paris, France',
                price: 240,
                priceType: 'per day',
                stars: 144,
            }, 
        ],
    },
    {
        title: 'Popular Reservations',
        boldTitle: true,
        showAddToFav: false,
        listings: [
            {
                id: 12,
                photo: require('./photos/Luxury/listing1.png'),
                type: 'Manual, Gas, 4 doors, 5 seats',
                title: 'BMW X1',
                location: 'Paris, France',
                price: 212,
                priceType: 'per day',
                stars: 116,
            }, 
            {
                id: 15,
                photo: require('./photos/Luxury/listing5.png'),
                type: 'Manual, Electric, 4 doors, 5 seats',
                title: 'Tesla Model 3',
                location: 'Paris, France',
                price: 240,
                priceType: 'per day',
                stars: 144,
            },  
            {
                id: 7,
                photo: require('./photos/Minivans/listing1.png'),
                type: 'Manual, Gas, 4 doors, 7 seats',
                title: 'Honda Odyssey',
                location: 'Paris, France',
                price: 61,
                priceType: 'per day',
                stars: 101,
            },
            {
                id: 8,
                photo: require('./photos/Minivans/listing2.png'),
                type: 'Automatic, Gas, 4 doors, 7 seats',
                title: 'Chrysler Pacifica',
                location: 'Sydney, Australia',
                price: 70,
                priceType: 'per day',
                stars: 119,
            },
            {
                id: 3,
                photo: require('./photos/CityCars/listing3.png'),
                type: 'Manual, Gas, 4 doors, 5 seats',
                title: 'Kia Picanto',
                location: 'Sydney, Australia',
                price: 80,
                priceType: 'per day',
                stars: 4,
            },
        ],
    },
];

export default listings;