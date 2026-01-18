let label = document.querySelectorAll('#lable')
let inp = document.querySelectorAll('#inp')


function up(element) {
    label.forEach(label => {
        if (label.innerText == element) {
            label.style.fontSize = ("14px");
            label.style.left = ("10px")
            label.style.top = ("-5px");
        }
        else {
            label.style.top = "17px";
            label.style.fontSize = "18px";
            label.style.left = ("0px")
        }
    })
}

function down(element) {
    console.log("hellow")
    label.forEach(label => {
        if (label.innerText == element) {
            label.style.top = "17px";
            label.style.fontSize = "18px";
            label.style.left = ("0px")
        }
    })
}

inp.forEach(element => {
    element.addEventListener("focus", () => up(element.name))
    element.addEventListener("blur", () => down(element.name))
});

