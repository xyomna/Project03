let count = 0;

const x = document.getElementById("x");
const inc= document.getElementById("inc");
const dec = document.getElementById("dec");
const res = document.getElementById("res");
function updateCounter() {
    x.textContent = count;
    x.classList.remove("positive", "negative");

    if (count > 0) {
        x.classList.add("positive");
    } else if (count < 0) {
        x.classList.add("negative");
    }
}


inc.addEventListener("click", function () {
    count = count+ 1;
    updateCounter();
});

dec.addEventListener("click", function () {
    count = count - 1;
    updateCounter();
});

res.addEventListener("click", function () {
    count = 0;
    updateCounter();

});
