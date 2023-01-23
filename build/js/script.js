
//Code for the slider in solr_calc.html

var solarPanelsSlider = document.getElementById('default-range');
var solarPanelsSliderOutput = document.getElementById('output-m2');


solarPanelsSliderOutput.innerHTML = solarPanelsSlider.value + "m2";

solarPanelsSlider.oninput = function () {
    solarPanelsSliderOutput.innerHTML = this.value + "m2";

}

//-------------------------------------------------------------------

const houses = document.getElementsByClassName('house')

for (let i = 0; i < houses.length; i++) {
    houses[i].addEventListener('click', calculateAnnualSavings);
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

    let annualSavedKwh = annualOutputKwh - clickedHouseAnnualKwhConsumption;

    let annualElectricityCostEuros = clickedHouseAnnualKwhConsumption / 0.45;

    let annualGeneratedEurosFromPanels = annualSavedKwh / 0.45;

    let annualSavingsEuros = annualElectricityCostEuros - annualGeneratedEurosFromPanels;

    reportCalculations(annualSavingsEuros)

}

function reportCalculations(num) {
    let heading = document.getElementById('report-heading');
    let paragraph = document.getElementById('report-paragraph');

    heading.innerHTML = "Your total estimated annual savings comes up to: " + "€" + Math.round(num);
    paragraph.innerHTML = `
    Note that this is an estimate.
    The way we calculated these figures was by; (1)
    taking the average annual electricity consumption 
    of your inputed household and dividing that with 
    the average price for electicity (€0.45/kWh); 
    (2) calculated the expected output of solar panels 
    and multipluing that by the area of the panels that
     you could have installed and (3) subtracting that 
     with your estimated annual electricity cost.
     `
}
