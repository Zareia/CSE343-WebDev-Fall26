"use strict";
const form = document.getElementById("todo_form");
const input = document.getElementById("todo_input");
const filterBtns = document.querySelectorAll(".filter");
const list = document.getElementById("todo_list");
const count = document.getElementById("count");
const clearCompletedBtn = document.getElementById("clear_completed");
const clearAllBtn = document.getElementById("clear_all");
let todos = [];
let filter = "all";
function render() {
    list === null || list === void 0 ? void 0 : list.innerHTML = "";
    const visible = todos.filter(todo_item => filter === "all" ? true : filter === "active" ? !todo_item.done : todo_item.done);
    visible.forEach(todo => {
        const li = document.createElement("li");
        if (todo.done)
            li.classList.add("done");
        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = todo.done;
        check.addEventListener("change", () => {
            todo.done = check.checked;
            render();
        });
        const span = document.createElement("span");
        span.textContent = todo.text;
        span.addEventListener("dblclick", () => startEdit(todo, li, span));
        const del = document.createElement("button");
        del.className = "delete";
        del.textContent = "🗑";
        del.addEventListener("click", () => {
            todos = todos.filter(t => t.id !== todo.id);
            render();
        });
        li.append(check, span, del);
        list.appendChild(li);
    });
    const left = todos.filter(t => !t.done).length;
    count.textContent = `${left} ${left === 1 ? "item" : "items"} left`;
}
function startEdit(todo, li, span) {
    const edit = document.createElement("input");
    edit.className = "edit";
    edit.value = todo.text;
    li.replaceChild(edit, span);
    edit.focus();
    edit.addEventListener("keydown", e => {
        if (e.key === "Enter")
            edit.blur();
    });
    edit.addEventListener("blur", () => {
        const value = edit.value.trim();
        if (value)
            todo.text = value;
        render();
    });
}
form.addEventListener("submit", e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text)
        return;
    todos.push({ id: Date.now(), text, done: false });
    input.value = "";
    render();
});
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filter = btn.dataset.filter;
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        render();
    });
});
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(t => !t.done);
    render();
});
clearAllBtn.addEventListener("click", () => {
    todos = [];
    render();
});
render();
//# sourceMappingURL=index.js.map