const {I} = inject();

module.exports = {
    globalElements = {
        buttonLocation: '.geolink__button_manual_yes',
        buttonTransitionYandexBy: '.button_theme_normal',
        inputLocationCity: '.input__control',
        buttonYet: '.home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher dropdown2__switcher i-bem _popup2-destructor _popup2-destructor_js_inited',
        MenuItemYet: 'a[class="home-link home-tabs_more-link home-link_black_yes"]',
    },
    setLocationPage(LocationCity) 
    {
        I.click(this.globalElements.buttonLocation);
        I.fillField(this.globalElements.inputLocationCity, LocationCity);
        I.pressKey("ENTER");
        I.click(this.globalElements.buttonTransitionYandexBy);        
    },
    async checkYetYandexBy() {
        I.click(this.globalElements.buttonYet);
        ArrayMenuItemsYet = await I.grabTextFrom(this.globalElements.MenuItemYet);
        return ArrayMenuItemsYet;
    },
    
}