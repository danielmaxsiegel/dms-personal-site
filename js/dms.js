// copyright in footer
var copyrightText = '\u00A9 Copyright 2018-' + new Date().getFullYear() + ', Dan Siegel';
document.getElementById('copyright-text').appendChild(document.createTextNode(copyrightText))

// add random pattern to section titles
var sectionTitles = document.getElementsByClassName("section-title");

var randomPatternClass = "section-title-style-" + getRandomInt(4)

for (var i = 0; i < sectionTitles.length; ++i) {
  sectionTitles[i].classList.add(randomPatternClass);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
