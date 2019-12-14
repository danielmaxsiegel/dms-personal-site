// copyright in footer
var copyrightText = '\u00A9 Copyright 2018-' + new Date().getFullYear() + ', Dan Siegel';
document.getElementById('copyright-text').appendChild(document.createTextNode(copyrightText))

// add random pattern to section titles
var numberOfPatterns = 5
var aboutSection = document.getElementById("about")
var randomPatternClass = "background-pattern-" + getRandomInt(numberOfPatterns)

aboutSection.classList.add(randomPatternClass);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
