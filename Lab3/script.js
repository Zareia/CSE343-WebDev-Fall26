const box = document.getElementById("box")

const quantityBtn = document.getElementById("quantity")
const add_to_cartbtn = document.getElementById("add")
const plus2btn = document.getElementById("plus2")
const plus3btn = document.getElementById("plus3")
const resetbtn = document.getElementById("reset")

let quantity = 0;

function display_quantity() {
    box.textContent = quantity;
}

function add_to_cart() {
    quantity += 1;
} 

function plus2() {
    quantity +=2;
}

function plus3() {
    quantity +=3;
}

function reset() {
    quantity = 0;
}

quantityBtn.addEventListener('click', display_quantity)
add_to_cartbtn.addEventListener('click', add_to_cart)
plus2btn.addEventListener('click', plus2)
plus3btn.addEventListener('click', plus3)
resetbtn.addEventListener('click', reset)