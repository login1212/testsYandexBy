export const config = {
timeout: 10000,
tests: './test.js',

helpers: {
    Puppeteer: {
    url:'https://yandex.by',
    restart: false,
    },
},
include: {
    mainPage: './mainPage.js'
}
}