var slider = document.getElementById("myRange3");

var output = document.getElementById("demo3");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}