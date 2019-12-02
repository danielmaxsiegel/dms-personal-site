// add random pattern to section titles
var sectionTitles = document.getElementsByClassName("section-title");

var randomPatternClass = "section-title-style-" + getRandomInt(4)

for (var i = 0; i < sectionTitles.length; ++i) {
  sectionTitles[i].classList.add(randomPatternClass);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// email address copying
document.getElementById("copyEmailButton").addEventListener("click", function() {
    copyToClipboardMsg(document.getElementById("dmsEmailAddress"), "msg");
});

function copyToClipboardMsg(elem, msgElem) {
	  var succeed = copyToClipboard(elem)
    var msg

    if (!succeed) {
        msg = "Copy not supported or blocked. Sorry!"
    } else {
        msg = "You've just copied my email address. Speak to you soon!"
    }

    if (typeof msgElem === "string") {
        msgElem = document.getElementById(msgElem);
    }

    msgElem.innerHTML = msg

    setTimeout(function() {
        msgElem.innerHTML = ""
    }, 5000)
}

function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_"
    var origSelectionStart, origSelectionEnd

    target = elem

    origSelectionStart = elem.selectionStart
    origSelectionEnd = elem.selectionEnd
    // must use a temporary form element for the selection and copy
    target = document.getElementById(targetId)

    if (!target) {
        var target = document.createElement("textarea")
        target.style.position = "absolute"
        target.style.left = "-9999px"
        target.style.top = "0"
        target.id = targetId
        document.body.appendChild(target)
    }

    target.textContent = elem.textContent;

    // select the content
    var currentFocus = document.activeElement;
    target.focus()
    target.setSelectionRange(0, target.value.length)

    // copy the selection
    var succeed

    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    target.textContent = ""

    return succeed
}
