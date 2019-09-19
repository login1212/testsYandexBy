const {I} = inject();
export {expect} from 'chai';

module.exports = {
    globalElements = {
        buttonLocation: '.geolink__button_manual_yes',
        buttonTransitionYandexBy: '.button_theme_normal',
        inputLocationCity: '.input__control',
        buttonYet: '.home-link home-link_blue_yes home-tabs__link home-tabs__more-switcher dropdown2__switcher i-bem _popup2-destructor _popup2-destructor_js_inited',
        MenuItemYet: '.home-link home-tabs__more-link home-link_black_yes',
    },
    setLocationPage(LocationCity) 
    {
        I.click(this.globalElements.buttonLocation);
        I.fileField(this.globalElements.inputLocationCity, LocationCity);
        I.press("ENTER");
        I.click(this.globalElements.buttonTransitionYandexBy);        
    },
    checkYetYandexBy()
    {
        I.click(this.globalElements.buttonYet);
        ArrayMenuItemsYet = await I.grabTextFrom(this.globalElements.MenuItemYet);
        return ArrayMenuItemsYet;
    },
    
}