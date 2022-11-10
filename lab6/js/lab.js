var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var pizza = sortingPizza(name);
  newText = <h2>The pizza has Sorted you into "+ pizza +"</h2>";
  document.getElementById("output").innerHTML = newText;
