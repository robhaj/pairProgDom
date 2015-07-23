function addItems(num, tag, text) {
  if (num) {
    for (i = 0; i < num; i++) {
      var newElement = document.createElement(tag);
      var firstEl = document.body.appendChild(newElement);
      newElement.innerText = text
    };
  }
};

function actionToConsole(tag, elementNum, action) {
  var element = document.getElementsByTagName(tag)
  if (element[elementNum]) {
    element[elementNum].addEventListener(action, function() {
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
