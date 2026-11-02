"use strict";
let tasks = [];
const AddBtn = document.getElementById("AddBtn");
const input = document.getElementById("todo");
const task_space = document.getElementById("task_space");
AddBtn === null || AddBtn === void 0 ? void 0 : AddBtn.addEventListener("click", () => {
    const text = input.value;
    tasks.push(text);
    render();
});
function render() {
    const p = document.createElement("p");
    p.textContent = tasks[tasks.length - 1];
    task_space === null || task_space === void 0 ? void 0 : task_space.appendChild(p);
}
//# sourceMappingURL=index.js.map