var inButton = document.getElementById("inBtn")
var deButton = document.getElementById("deBtn")
var neButton = document.getElementById("neBtn")
var value = document.getElementById("counter")

var counter = 0

counter = parseInt(counter)

value.innerHTML = counter;

function increment() {
  counter++;
  value.innerHTML = counter;
}

deButton.addEventListener("click", () => {
  counter--;
  value.innerHTML = counter;
})

neButton.addEventListener("click", () => {
  counter = 0;
  value.innerHTML = counter;
})


