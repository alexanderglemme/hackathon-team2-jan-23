
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

    let annualCostOfElectricity = clickedHouseAnnualKwhConsumption * 0.45;

    let annualSavingsEuros = annualOutputKwh * 0.45;

    reportCalculations(annualSavingsEuros, annualCostOfElectricity)

}

function reportCalculations(savings, costs) {
    let heading = document.getElementById('report-heading');
    let paragraph = document.getElementById('report-paragraph');
    let earnings;
    if (costs - savings < 0) {
        earnings = Math.abs(costs - savings)
        heading.innerHTML = "If you install " + solarPanelsSlider.value
            + "m2 of solar panels, you'll be selling energy for a value of "
            + "€" + Math.round(earnings) + " annually!"
        paragraph.innerHTML = `
                               This means that you are producing more green
                               energy than you are consuming, and that you'll 
                               be making money off of the surplus that you're 
                               providing to the regional energy grid.
                              `
    } else {
        heading.innerHTML = "Your total estimated annual savings comes up to: "
            + "€" + Math.round(savings);
        paragraph.innerHTML = `
                               Note that this is an estimate.
                               The way we calculated these figures was by 
                               taking the expected kWh output of your
                               solar panels and multiplying that by the 
                               average cost of electricity in Ireland 
                               (45 cent per kWh).
                             `
    }
}

//Code for animated navigation button
const initApp = () => {
    const mobileNavButton = document.getElementById('mobile-nav-button');
    const mobileNav = document.getElementById('mobile-menu');

    const toggleMobileNav = () => {
        mobileNav.classList.toggle('hidden');
        mobileNav.classList.toggle('flex');
    }

    mobileNavButton.addEventListener('click', toggleMobileNav);
    mobileNav.addEventListener('click', toggleMobileNav);

}

document.addEventListener('DOMContentLoaded', initApp);