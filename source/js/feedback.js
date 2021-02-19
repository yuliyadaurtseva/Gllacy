var feedbackOpen = document.querySelector(".btn-feedback");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var overlay = document.querySelector(".site-overlay");
var myName = document.querySelector("[id=feedback-name]")

feedbackOpen.addEventListener("click", function (evt) {
    feedbackPopup.classList.add("modal-show");
    overlay.classList.add("site-overlay-show");
    myName.focus();
})

feedbackClose.addEventListener("click", function (evt) {
    feedbackPopup.classList.remove("modal-show");
    overlay.classList.remove("site-overlay-show");
})

overlay.addEventListener("click", function (evt) {
    feedbackPopup.classList.remove("modal-show");
    overlay.classList.remove("site-overlay-show");
})

document.addEventListener("keydown",function(evt) { 
    if (evt.keyCode === 27){ 
        if (feedbackPopup.classList.contains("modal-show")) {
            feedbackPopup.classList.remove("modal-show");
            overlay.classList.remove("site-overlay-show");
        } 
    }
});
