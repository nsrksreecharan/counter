let a = document.getElementById("Value");

function decrement() {
    a.textContent = parseInt(a.textContent) - 1;
    if (a.textContent < 0) {
        a.style.color = "red";
    } else if (a.textContent > 0) {
        a.style.color = "green";
    } else {
        a.style.color = "black";
    }
}

function increment() {
    a.textContent = parseInt(a.textContent) + 1;
    if (a.textContent < 0) {
        a.style.color = "red";
    } else if (a.textContent > 0) {
        a.style.color = "green";
    } else {
        a.style.color = "black";
    }
}

function reset() {
    a.textContent = "0";
    a.style.color = "black";
}
