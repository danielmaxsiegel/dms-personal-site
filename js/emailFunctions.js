document.getElementById("copyEmailButton").addEventListener("click", function() {
  copyToClipboardMsg(document.getElementById("dmsEmailAddress"), "emailCopiedMessage");
});

function copyToClipboardMsg(element, messageElement) {
  var copySucceeded = copyToClipboard(element)
  var userMessage

  if (copySucceeded) {
    userMessage = "You've just copied my email address. Speak to you soon!"
  } else {
    userMessage = "Copy not supported or blocked. Sorry!"
  }

  if (typeof messageElement === "string") {
    messageElement = document.getElementById(messageElement);
  }

  messageElement.innerHTML = userMessage

  setTimeout(function() {
    messageElement.innerHTML = ""
  }, 6000)
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
