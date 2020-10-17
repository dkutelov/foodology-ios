import add from 'date-fns/add';

export const professionals = [
    {
        gender: 'male',
        categories: [1, 2],
        timeTable: [
            {
                date: new Date().toJSON(),
                timeSlots: [
                    { slot: '10:00', available: true },
                    { slot: '10:30', available: true },
                    { slot: '11:00', available: true },
                    { slot: '11:30', available: true },
                    { slot: '12:00', available: true },
                    { slot: '14:00', available: true },
                    { slot: '14:30', available: true },
                    { slot: '15:00', available: true },
                    { slot: '15:30', available: true },
                    { slot: '16:00', available: true },
                ],
            },
            {
                date: add(new Date(), { days: 1 }).toJSON(),
                timeSlots: [
                    { slot: '10:00', available: true },
                    { slot: '10:30', available: true },
                    { slot: '11:00', available: true },
                    { slot: '11:30', available: true },
                    { slot: '12:00', available: true },
                    { slot: '14:00', available: true },
                    { slot: '14:30', available: true },
                    { slot: '15:00', available: true },
                    { slot: '15:30', available: true },
                    { slot: '16:00', available: true },
                ],
            },
            {
                date: add(new Date(), { days: 2 }).toJSON(),
                timeSlots: [
                    { slot: '10:00', available: true },
                    { slot: '10:30', available: true },
                    { slot: '11:00', available: true },
                    { slot: '11:30', available: true },
                    { slot: '12:00', available: true },
                    { slot: '14:00', available: true },
                    { slot: '14:30', available: true },
                    { slot: '15:00', available: true },
                    { slot: '15:30', available: true },
                    { slot: '16:00', available: true },
                ],
            },
            {
                date: add(new Date(), { days: 3 }).toJSON(),
                timeSlots: [
                    { slot: '10:00', available: true },
                    { slot: '10:30', available: true },
                    { slot: '11:00', available: true },
                    { slot: '11:30', available: true },
                    { slot: '12:00', available: true },
                    { slot: '14:00', available: true },
                    { slot: '14:30', available: true },
                    { slot: '15:00', available: true },
                    { slot: '15:30', available: true },
                    { slot: '16:00', available: true },
                ],
            },
            {
                date: add(new Date(), { days: 4 }).toJSON(),
                timeSlots: [
                    { slot: '10:00', available: true },
                    { slot: '10:30', available: true },
                    { slot: '11:00', available: true },
                    { slot: '11:30', available: true },
                    { slot: '12:00', available: true },
                    { slot: '14:00', available: true },
                    { slot: '14:30', available: true },
                    { slot: '15:00', available: true },
                    { slot: '15:30', available: true },
                    { slot: '16:00', available: true },
                ],
            },
            {
                date: add(new Date(), { days: 5 }).toJSON(),
                timeSlots: [
                    { slot: '10:00', available: true },
                    { slot: '10:30', available: true },
                    { slot: '11:00', available: true },
                    { slot: '11:30', available: true },
                    { slot: '12:00', available: true },
                    { slot: '14:00', available: true },
                    { slot: '14:30', available: true },
                    { slot: '15:00', available: true },
                    { slot: '15:30', available: true },
                    { slot: '16:00', available: true },
                ],
            },
            {
                date: add(new Date(), { days: 6 }).toJSON(),
                timeSlots: [],
            },
        ],
        name: {
            title: 'Mr',
            first: 'Nermin',
            last: 'Koch',
        },
        location: {
            street: {
                number: 4906,
                name: 'Bellefleurhof',
            },
            city: 'Pietersbierum',
            state: 'Groningen',
            country: 'Netherlands',
            postcode: 67313,
            coordinates: {
                latitude: '43.3266',
                longitude: '-79.2848',
            },
            timezone: {
                offset: '+6:00',
                description: 'Almaty, Dhaka, Colombo',
            },
        },
        email: 'nermin.koch@example.com',
        login: {
            uuid: 'a6c71a5a-eddc-490a-97f5-76fed301fae7',
            username: 'whitefrog501',
            password: 'johnny5',
            salt: '612VMdP2',
            md5: 'a12fce6c732b1e484d889509a47a531b',
            sha1: '89113a871458580af9d7cae32bbbf9e53f263eca',
            sha256:
                '7c5dca5a294224f6d45044dd2f6675cc234acdf2ecb844eb4927b45046abd723',
        },
        dob: {
            date: '1965-11-19T12:19:34.610Z',
            age: 55,
        },
        registered: {
            date: '2019-01-09T20:35:56.509Z',
            age: 1,
        },
        phone: '(810)-096-9400',
        cell: '(367)-193-9623',
        id: {
            name: 'BSN',
            value: '05091372',
        },
        picture: {
            large: 'https://randomuser.me/api/portraits/men/92.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/92.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/92.jpg',
        },
        nat: 'NL',
    },
    {
        gender: 'female',
        categories: [1],
        name: {
            title: 'Mrs',
            first: 'Cathy',
            last: 'Jordan',
        },
        location: {
            street: {
                number: 3918,
                name: 'Groveland Terrace',
            },
            city: 'Adelaide',
            state: 'Queensland',
            country: 'Australia',
            postcode: 7521,
            coordinates: {
                latitude: '-79.7159',
                longitude: '119.7153',
            },
            timezone: {
                offset: '+10:00',
                description: 'Eastern Australia, Guam, Vladivostok',
            },
        },
        email: 'cathy.jordan@example.com',
        login: {
            uuid: '277f6507-6872-4c7c-b303-e0ce5bdae55c',
            username: 'bluetiger112',
            password: '1950',
            salt: 'GClVBVBn',
            md5: 'f43db352c937c8ce9abd553c098763da',
            sha1: '54ff090b759065b235b47777825eb1fc5f6e2478',
            sha256:
                'cc74847dab5887c14e4dad627334255bf954cdca387c9c1539306ad87b2b452a',
        },
        dob: {
            date: '1985-06-24T13:45:16.421Z',
            age: 35,
        },
        registered: {
            date: '2017-08-29T01:59:03.709Z',
            age: 3,
        },
        phone: '07-8693-3724',
        cell: '0457-577-806',
        id: {
            name: 'TFN',
            value: '502107529',
        },
        picture: {
            large: 'https://randomuser.me/api/portraits/women/30.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/30.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/30.jpg',
        },
        nat: 'AU',
    },
    {
        gender: 'female',
        categories: [1, 3],
        name: {
            title: 'Ms',
            first: 'Ibtisam',
            last: 'Peijs',
        },
        location: {
            street: {
                number: 5040,
                name: 'Hazelberg',
            },
            city: 'Ter Aar',
            state: 'Noord-Brabant',
            country: 'Netherlands',
            postcode: 18882,
            coordinates: {
                latitude: '46.1986',
                longitude: '178.1548',
            },
            timezone: {
                offset: '-7:00',
                description: 'Mountain Time (US & Canada)',
            },
        },
        email: 'ibtisam.peijs@example.com',
        login: {
            uuid: '68b28ad8-19fe-4297-8824-b69adf73dcc2',
            username: 'crazypanda469',
            password: 'bordeaux',
            salt: 'K04kJBWH',
            md5: 'ba8aeffd466ba7ad2fa12398000e2954',
            sha1: '7bd38b0a165a48d60684fe47f45ef50ee7ac1fb8',
            sha256:
                '1675e9db27a73cacb4bdcec380224bfc324d04ad75ec1352e1d29183b63928f1',
        },
        dob: {
            date: '1977-04-22T07:25:29.321Z',
            age: 43,
        },
        registered: {
            date: '2013-06-16T05:38:11.508Z',
            age: 7,
        },
        phone: '(941)-877-1548',
        cell: '(370)-256-1523',
        id: {
            name: 'BSN',
            value: '67709889',
        },
        picture: {
            large: 'https://randomuser.me/api/portraits/women/83.jpg',
            medium: 'https://randomuser.me/api/portraits/med/women/83.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/women/83.jpg',
        },
        nat: 'NL',
    },
    {
        gender: 'male',
        categories: [1, 2, 3, 4],
        name: {
            title: 'Mr',
            first: 'Francisco',
            last: 'Vargas',
        },
        location: {
            street: {
                number: 2655,
                name: 'Lone Wolf Trail',
            },
            city: 'Orange',
            state: 'Victoria',
            country: 'Australia',
            postcode: 3032,
            coordinates: {
                latitude: '-84.6836',
                longitude: '-23.2981',
            },
            timezone: {
                offset: '-5:00',
                description: 'Eastern Time (US & Canada), Bogota, Lima',
            },
        },
        email: 'francisco.vargas@example.com',
        login: {
            uuid: '5e347ac1-c603-4322-831d-2592aaf18b12',
            username: 'beautifulsnake259',
            password: 'christi',
            salt: 'VzdnoilF',
            md5: 'fe1e17976543f012f3b6ab81f734f4ed',
            sha1: '0c1141d669c6d1cf0143d0ef05b7103f9f2b2800',
            sha256:
                'f40654a683aab6d6f903f3dc61f4b26adbd4e8ebbad4f65bfd3305aefa208849',
        },
        dob: {
            date: '1962-07-22T17:50:14.067Z',
            age: 58,
        },
        registered: {
            date: '2012-10-23T05:28:49.942Z',
            age: 8,
        },
        phone: '06-6905-7010',
        cell: '0470-405-851',
        id: {
            name: 'TFN',
            value: '093402636',
        },
        picture: {
            large: 'https://randomuser.me/api/portraits/men/13.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/13.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/13.jpg',
        },
        nat: 'AU',
    },
    {
        gender: 'male',
        categories: [1, 2],
        name: {
            title: 'Mr',
            first: 'Øystein',
            last: 'Rein',
        },
        location: {
            street: {
                number: 5024,
                name: 'Frølichs vei',
            },
            city: 'Askje',
            state: 'Trøndelag',
            country: 'Norway',
            postcode: '6642',
            coordinates: {
                latitude: '57.0820',
                longitude: '-129.6763',
            },
            timezone: {
                offset: '-12:00',
                description: 'Eniwetok, Kwajalein',
            },
        },
        email: 'oystein.rein@example.com',
        login: {
            uuid: 'fa0830e6-31f4-4ae1-bd54-d6f94c54a844',
            username: 'greenfrog858',
            password: 'stalker',
            salt: 'mh9rO5hR',
            md5: 'bb5c305cb68345956ea27cc334a050ec',
            sha1: 'ce5320058bc84d47dd63ad83cd7a193a52c06873',
            sha256:
                '3a4c3f88d3d3bb4b51527389b40cd960bc7aa711e8538ea0f95a1f0e92a7574b',
        },
        dob: {
            date: '1967-03-16T08:36:49.059Z',
            age: 53,
        },
        registered: {
            date: '2019-02-09T12:25:40.156Z',
            age: 1,
        },
        phone: '37326532',
        cell: '91116662',
        id: {
            name: 'FN',
            value: '16036707716',
        },
        picture: {
            large: 'https://randomuser.me/api/portraits/men/61.jpg',
            medium: 'https://randomuser.me/api/portraits/med/men/61.jpg',
            thumbnail: 'https://randomuser.me/api/portraits/thumb/men/61.jpg',
        },
        nat: 'NO',
    },
];
