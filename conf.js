include: {
    mainPage: './mainPage.js'
    tests: './test.js'
}
export const config = {
timeout: 10000,

helpers: {
    Puppeteer: {
    url:'https://yandex.by',
    restart: false,
    },
},
}