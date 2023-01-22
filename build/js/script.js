var solarPanelsSlider = document.getElementById('default-range');
var solarPanelsSliderOutput = document.getElementById('output-m2')

solarPanelsSliderOutput.innerHTML = solarPanelsSlider.value;

solarPanelsSlider.oninput = function() {
    solarPanelsSliderOutput.innerHTML = this.value

}

