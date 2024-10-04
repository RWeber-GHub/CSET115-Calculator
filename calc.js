// -- memory --

let memory = [];
let display = getElementById("display");

function storeResult() {
  let equation = display.value;
  let result = eval(equation);
  display.value = result;
  storeInMemory(equation, result);
}

function storeInMemory(equation, result) {
  memory.push({ equation, result });
}

function displayMem() {
  let memDisplay = document.getElementById("memDisplay");
  memDisplay.innerHTML = "";

  if (memory.length > 0) {
    for (let i = 0; i < memory.length; i++) {
      const equationResult = `${memory[i].equation} = ${memory[i].result}`;
      const div = document.createElement("div");
      div.textContent = equationResult;
      memDisplay.appendChild(div);
    }
  }

  //call equal button to start
  document.getElementById("equalBtn").addEventListener("click", storeResult);

  // memory display button
  var button = document.getElementById("toggleMem");

  button.onclick = function () {
    var div = document.getElementById("memDisplay");
    if (div.style.display === "none" || div.style.display === "") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  };
  //
}
