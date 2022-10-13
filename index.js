window.onload = function () {
  createCells();
};

const createCells = function () {
  const boardNode = document.getElementById("board");

  for (i = 0; i < 75; i++) {
    const cellNode = document.createElement("div");
    cellNode.className = "cell";
    // const h3 = document.createElement("h3");
    cellNode.innerText = i + 1;

    // cellNode.appendChild(h3);
    boardNode.appendChild(cellNode);
  }
};

const callNumber = function () {
  const newNumber = Math.floor(Math.random() * 75) + 1; //from 1 to 75(includes)
  console.log(newNumber);

  const cellNode = document.getElementsByClassName("cell");

  for (let cell of cellNode) {
    if (cell.innerText == newNumber) {
      cell.style.backgroundColor = "blueviolet";
    }
  }
};

let numberArr = [];
for (let i = 0; i < 75; i++) {
  numberArr.push(i + 1);
}

const callUniqueNumber = function () {
  if (numberArr.length !== 0) {
    const newNumberIndex = Math.floor(Math.random() * numberArr.length);
    const newNumber = numberArr[newNumberIndex]; //numberArr[index 0 to index 74]

    console.log("new number:", newNumber);

    const cellNode = document.getElementsByClassName("cell");
    for (let cell of cellNode) {
      if (cell.innerText == newNumber) {
        cell.style.backgroundColor = "blue";
      }
    }
    numberArr.splice(newNumberIndex, 1);
  } else {
    console.log("There are no numbers left!");
  }
};
