var slider = document.getElementById("myRange2");

var output = document.getElementById("demo2");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}