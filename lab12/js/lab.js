
pizzaArray = [
  {
    title: "Pepperoni",
    text: "Meety and cheesy with perfect pepperonis. Those chosen to be a Pepperoni pizza are simple yet delicious."
  },
  {
    title: "Hawaiian",
    text: "These folks like to live life ~chillaxed~ Enthusiastic travellers who dont mind to see life through rose-tinted glasses. They live by the phrase 'fu** it yolo'."
  },
  {
    title: "Chicago Style",
    text: "Baked in a pan, served in a pan. These folks are high class and different... Quirky individuals. Chicago style pizzas are always about the business with a little bit of fun. These are the work hard play hard type of people."
  },
  {
    title: "Barbecue Chicken",
    text: "Mozzerella cheese, zesty barbecue, shredded chicken, and sweet pepperocinis. A classic amongst all pizzas. Those chosen to be a Barbecue Chicken slice are "
  }
]

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
}

function chechsum(s) {
  var hash = 0, strlen = s.length, i, c;
  if ( strlen === 0 ) {
    return hash;
  }
  for ( i = 0; i < strlen; i++ ) {
    c = s.charCodeAt( i );
    hash = ((hash << 5) - hash) + c;
    hash = hash & hash;
  }
  return hash;
};

function hasClass(ele,cls) {
  return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if(hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg, ' ');
  }
}

function sortingPizzaHash(str) {
  checksumValue = checksum(str);
  mod = Math.abs(checksumValue) % pizzaArray.length;
  return pizzaArray[mod];
};

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var pizza = sortingPizza(name);
  newText = "<h2>" + pizza.title +"</h2>" +
  introHTML +
  "<p>\"" + pizza.text + "\"</p>";
  var outputArea = document.getElementById("output");
  outputArea.innerHTML = newText;
  removeClass(outputArea, "hidden");
  removeClass(document.getElementById("tail-box"), "hidden");
});

var myInput = document.getElementById("input");
myInput.addEventListener("focus", function() {
  addClass(document.getElementById("output"), "hidden");
  addClass(document.getElementById("tail-box"), "hidden");
});
