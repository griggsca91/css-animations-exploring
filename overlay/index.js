setTimeout(displayOverlay, 0);

function hideOverlay(e) {
    console.log(e.parentNode);
    e.parentNode.className = "overlay hide";
}

function displayOverlay() {
    document.querySelector(".overlay").className = "overlay overlay-display";
}
