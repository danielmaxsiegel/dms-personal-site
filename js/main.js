// add random pattern to section titles
var sectionTitles = document.getElementsByClassName("section-title");

var randomPatternClass = "section-title-style-" + getRandomInt(3)

for (var i = 0; i < sectionTitles.length; ++i) {
  sectionTitles[i].classList.add(randomPatternClass);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
