// add random pattern to section titles
var numberOfPatterns = 6
var mainSection = document.getElementById("main-section")
var randomPatternClass = "background-pattern-" + getRandomInt(numberOfPatterns)

mainSection.classList.add(randomPatternClass);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
