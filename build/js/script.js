
const mediumHouse = {
    annualKwh: 3594,
    annualElectricityCostEuros: 1617,

};

//Code for the slider in solr_calc.html

var solarPanelsSlider = document.getElementById('default-range');
var solarPanelsSliderOutput = document.getElementById('output-m2');


solarPanelsSliderOutput.innerHTML = solarPanelsSlider.value + "m2";

solarPanelsSlider.oninput = function() {
    solarPanelsSliderOutput.innerHTML = this.value + "m2";

}

//-------------------------------------------------------------------

const houses = document.getElementsByClassName('house')

for (var i = 0; i < houses.length; i++) {
    houses[i].addEventListener('click' , calculateAnnualSavings); 
 }

/**
 * Calculates annual savings
 */
function calculateAnnualSavings() {
    let m2SunPanels = parseInt(solarPanelsSlider.value);

    //130kwh was annual production of 1m2 sun panel in Ireland 2022
    let annualOutputKwh = m2SunPanels * 130;

    //this.id is the id of the clicked div which is set to the house's annual kwh
    let clickedHouseAnnualKwhConsumption = parseInt(this.id);
    let annualSavedKwh =  annualOutputKwh - clickedHouseAnnualKwhConsumption;
    
    let annualSavingsEuros = annualSavedKwh / 0.45;

}
