exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://yandex.by',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './mainPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'testsYandexBy'
}