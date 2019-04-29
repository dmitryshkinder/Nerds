var open_modal = document.querySelector(".open-modal");
var modal = document.querySelector(".modal-write-us");
var modal_close = document.querySelector(".modal-close");

open_modal.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
});

modal_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modal.classList.contains("modal-show")) {
            evt.preventDefault();
            modal.classList.remove("modal-show");
        }
    }
});
