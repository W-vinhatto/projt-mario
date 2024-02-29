
const form = document.querySelector(".formulario_name")
const mascara = document.querySelector(".mascara_formulario")


function contato() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)"
    mascara.style.display = "block"
}

function escForm() {
    form.style.left = "-277px";
    form.style.transform = "translateX(0)"
    mascara.style.display = "none"
}