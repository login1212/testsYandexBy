const {I, mainPage}= inject();

Scenario('Тест', async (I) => {
await mainPage.setLocationPage('Лондон');
await mainPage.checkYetYandexBy();
let arrayMenuItemsYetLondon = await mainPage.checkYetYandexBy();
await mainPage.setLocationPage('Париж');
let arrayMenuItemsYetParis = await mainPage.checkYetYandexBy();
expect(arrayMenuItemsYetLondon).to.have.all.members(arrayMenuItemsYetParis);
});