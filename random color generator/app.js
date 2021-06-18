var generateBtn = document.getElementById("generator")
var headingId = document.getElementById("heading")

var red=0, blue=0, green=0;

headingId.innerHTML = "RGB ( " + red + " , "+green+" , " +blue+" )"

function generate() {
  red = Math.floor(Math.random() * 255)
  blue = Math.floor(Math.random() * 255)
  green = Math.floor(Math.random() * 255)
}

generateBtn.addEventListener("click", () => {
  generate()
  headingId.innerHTML = "RGB ( " + red + " , "+green+" , " +blue+" )"
  document.body.style.backgroundColor = "rgb(" + red + ","+green+","+blue+")" ;

})


