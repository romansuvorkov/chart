const db = {
    purchase: [
        {
            managerName: 'Менеджер 1',
            purchases: [
                {
                    date: '01.10.21',
                    weight: 120,
                    product: 'Товар 1',
                    price: 1650,
                    yAxisID: 'LME'
                },
                {
                    date: '02.10.21',
                    weight: 100,
                    product: 'Товар 2',
                    price: 1700,
                    yAxisID: 'LME'
                },
                {
                    date: '03.10.21',
                    weight: 80,
                    product: 'Товар 1',
                    price: 1730,
                    yAxisID: 'LME'
                },
                {
                    date: '04.10.21',
                    weight: 110,
                    product: 'Товар 1',
                    price: 1750,
                    yAxisID: 'LME'
                },                 {
                    date: '05.10.21',
                    weight: 50,
                    product: 'Товар 3',
                    price: 1800,
                    yAxisID: 'LME'
                },
                {
                    date: '06.10.21',
                    weight: 70,
                    product: 'Товар 1',
                    price: 1765,
                    yAxisID: 'LME'
                },
                {
                    date: '06.10.21',
                    weight: 25,
                    product: 'Товар 1',
                    price: 1730,
                    yAxisID: 'LME'
                }
            ]
        },
        {
            managerName: 'Менеджер 2',
            purchases: [
                {
                    date: '01.10.21',
                    weight: 100,
                    product: 'Товар 1',
                    price: 1720,
                    yAxisID: 'LME'
                },
                {
                    date: '02.10.21',
                    weight: 50,
                    product: 'Товар 2',
                    price: 1750,
                    yAxisID: 'LME'
                },
                {
                    date: '03.10.21',
                    weight: 40,
                    product: 'Товар 1',
                    price: 1800,
                    yAxisID: 'LME'
                },
                {
                    date: '04.10.21',
                    weight: 55,
                    product: 'Товар 1',
                    price: 1770,
                    yAxisID: 'LME'
                },                 {
                    date: '05.10.21',
                    weight: 60,
                    product: 'Товар 3',
                    price: 1750,
                    yAxisID: 'LME'
                },
                {
                    date: '06.10.21',
                    weight: 35,
                    product: 'Товар 1',
                    price: 1715,
                    yAxisID: 'LME'
                },
                {
                    date: '05.10.21',
                    weight: 35,
                    product: 'Товар 1',
                    price: 1710,
                    yAxisID: 'LME'
                },
            ]
        }
    ],
    lmeOfficial: [
        {
            date: '01.10.21',
            price: 1750,
            yAxisID: 'LME'
        },
        {
            date: '02.10.21',
            price: 1650,
            yAxisID: 'LME'
        },
        {
            date: '03.10.21',
            price: 1750,
            yAxisID: 'LME'
        },
        {
            date: '04.10.21',
            price: 1800,
            yAxisID: 'LME'
        },
        {
            date: '05.10.21',
            price: 1730,
            yAxisID: 'LME'
        },
        {
            date: '06.10.21',
            price: 1690,
            yAxisID: 'LME'
        }
    ],
    lmeBidding: [
        {
            date: '01.10.21',
            price: 1680,
            yAxisID: 'LME'
        },
        {
            date: '02.10.21',
            price: 1730,
            yAxisID: 'LME'
        },
        {
            date: '03.10.21',
            price: 1800,
            yAxisID: 'LME'
        },
        {
            date: '04.10.21',
            price: 1745,
            yAxisID: 'LME'
        },
        {
            date: '05.10.21',
            price: 1770,
            yAxisID: 'LME'
        },
        {
            date: '06.10.21',
            price: 1790,
            yAxisID: 'LME'
        }
    ],
    usdBidding: [
        {
            date: '01.10.21',
            price: 71,
            yAxisID: 'USD'
        },
        {
            date: '02.10.21',
            price: 73,
            yAxisID: 'USD'
        },
        {
            date: '03.10.21',
            price: 72,
            yAxisID: 'USD'
        },
        {
            date: '04.10.21',
            price: 71,
            yAxisID: 'USD'
        },
        {
            date: '05.10.21',
            price: 75,
            yAxisID: 'USD'
        },
        {
            date: '06.10.21',
            price: 77,
            yAxisID: 'USD'
        }
    ],
    usdOfficial: [
        {
            date: '01.10.21',
            price: 72,
            yAxisID: 'USD'
        },
        {
            date: '02.10.21',
            price: 74,
            yAxisID: 'USD'
        },
        {
            date: '03.10.21',
            price: 71,
            yAxisID: 'USD'
        },
        {
            date: '04.10.21',
            price: 73,
            yAxisID: 'USD'
        },
        {
            date: '05.10.21',
            price: 71,
            yAxisID: 'USD'
        },
        {
            date: '06.10.21',
            price: 72,
            yAxisID: 'USD'
        }
    ],
    lmeCalendar: [
        {
            date: '01.10.21',
            work: true,
            trend: 'grow',
            news: 'Новость приведет к росту'
        },
        {
            date: '02.10.21',
            work: true,
            trend: 'no',
            news: 'Нет новостей'
        },
        {
            date: '03.10.21',
            work: true,
            trend: 'no',
            news: 'Нет новостей'
        },
        {
            date: '04.10.21',
            work: true,
            trend: 'fall',
            news: 'Новость приведет к падению'
        },
        {
            date: '05.10.21',
            work: false,
            trend: 'fall',
            news: 'Новость приведет к падению'
        },
        {
            date: '06.10.21',
            work: true,
            trend: 'no',
            news: 'Нет новостей'
        }
    ]
}

export default db;