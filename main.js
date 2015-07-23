function addItems(num, tag, text) {
  if (num) {
    for (i = 0; i < num; i++) {
      var newElement = document.createElement(tag);
      var firstEl = document.body.appendChild(newElement);
      newElement.innerText = text
    };
  }
};

function clickToConsole(tag, elementNum) {
  var element = document.getElementsByTagName(tag)
  if (element[elementNum]) {
    element[elementNum].addEventListener("click", function() {
      console.log(element[elementNum].innerText)
    })
  }
}

function changeText(tag, elementNum, text) {
  var element = document.getElementsByTagName(tag)
  if (element[elementNum]) {

    element[elementNum].innerHTML = text;
  }}

  function changeColor(tag, elementNum, color) {
    var element = document.getElementsByTagName(tag)
    if (element[elementNum]) {
      element[elementNum].style.backgroundColor = color;
    }}
