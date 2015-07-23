addItems(3, "p", "fuck yeah");
function addItems(num, tag, text) {
  console.log(tag);


  for (i = 0; i < num; i++) {
    var newElement = document.createElement(tag);
    var firstEl = document.body.appendChild(newElement);
    newElement.innerText = text;
  };
};

function clickToConsole(tag, elementNum) {

  var element = document.getElementsByTagName(tag)
    element[elementNum].addEventListener("click", function() {
    console.log(tag[elementNum].innerText)
  });
};

function changeText(tag, elementNum, text) {
  var element = document.getElementsByTagName(tag)
    element[elementNum].innerHTML = text;
};

changeText("p", 1, "I be rolling");
changeText("p", 0, "Changed first LI text");
changeText("p", 2, "Changed third LI text");

function changeColor(tag, elementNum, color) {
    var element = document.getElementsByTagName(tag)
    element[elementNum].style.backgroundColor = color;
  };
clickToConsole("p", 1);
changeColor("p", 3, "red");
changeColor("p", 1, "blue");
changeColor("p", 0, "green");
