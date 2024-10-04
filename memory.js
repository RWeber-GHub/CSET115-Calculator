let memory = [];

function storeResult() {
  let equation = display.value;
  let result = eval(equation);
  memory.push({ equation, result });
}

function displayMem() {
  let memDisplay = document.getElementById("memDisplay");
  memDisplay.innerHTML = "";

  if (memory.length > 0) {
    for (let i = 0; i < memory.length; i++) {
      const equationResult = `${memory[i].equation} = ${memory[i].result}}`;
      const div = document.createElement("div");
      div.textContent = equationResult;
      memDisplay.appendChild(div);
    }
  }
}
