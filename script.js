let counterElement = document.getElementById("counterValue");

function onDecrease() {
    let previousElement = counterElement.textContent;
    let updatedElement = parseInt(previousElement) - 1;
    if (updatedElement > 0) {
        counterElement.style.color = "green";
    } else if (updatedElement < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    counterElement.textContent = updatedElement;
}

function onIncrease() {
    let previousElement = counterElement.textContent;
    let updatedElement = parseInt(previousElement) + 1;
    if (updatedElement > 0) {
        counterElement.style.color = "green";
    } else if (updatedElement < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
    counterElement.textContent = updatedElement;

}

function onReset() {
    let counterValue = 0;
    counterElement.textContent = counterValue;
    counterElement.style.color = "black";
}