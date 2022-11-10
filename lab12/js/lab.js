//return pepperoni, hawaiian, chicago-style and bbq Chicken
//depending on the length of mod 4
function sortingPizza(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Pepperoni";
  }
  else if (mod == 1) {
    return "Hawaiian";
  }
  else if (mod == 2) {
    return "Chicago-style"
  }
  else if (mod == 3) {
    return "BBQ Chicken"
  }
};


var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var pizza = sortingPizza(name);
  newText = "<h2>The pizza has Sorted you into "+ pizza +"</h2>";
  document.getElementById("output").innerHTML = newText;
});
