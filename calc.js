// -- memory --

let memory = [];

function storeResult() {
  let equation = display.value;
  let result = eval(equation);
  display.value = result;
memoryStore(equation, result);
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
// memory display button
document.getElementById('toggleMem').addEventListener('click', function() {




}

}
