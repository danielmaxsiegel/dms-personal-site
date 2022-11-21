// copyright in footer
var copyrightText = '\u00A9 Copyright 2018-' + new Date().getFullYear() + ', Daniel Max Siegel';
document.getElementById('copyright-text').appendChild(document.createTextNode(copyrightText))

// add random pattern to section titles
var numberOfPatterns = 6
var mainSection = document.getElementById("main-section")
var randomPatternClass = "background-pattern-" + getRandomInt(numberOfPatterns)

mainSection.classList.add(randomPatternClass);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
