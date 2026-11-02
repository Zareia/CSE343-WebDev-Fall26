let tasks = [];

const AddBtn = document.getElementById("AddBtn");
const input = document.getElementById("todo") as HTMLInputElement;
const task_space = document.getElementById("task_space")


AddBtn?.addEventListener("click", () => {
    const text = input.value
    tasks.push(text);
    render()
} )

function render(){
    const p = document.createElement("p");
    p.textContent = tasks[tasks.length - 1];
    task_space?.appendChild(p);
}