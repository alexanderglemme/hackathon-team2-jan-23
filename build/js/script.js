var slider = document.getElementById('default-range');
var sliderOutput = document.getElementById('output-m2')

sliderOutput.innerHTML = slider.value;

slider.oninput = function() {
    sliderOutput.innerHTML = this.value

}