const inputs = document.querySelectorAll(".input");


function focusFuntion() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function blurFuntion() {
    let parent = this.parentNode.parentNode;
    if (this.value == '') {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFuntion);
    input.addEventListener("blur", blurFuntion);
})