/* eslint-disable */
// document.getElementById("ok").onclick = okayClick; //null
// function okClick() { alert("you clocked ok!"); }

function pageLoad() { document.getElementById("ok").onclick = okayClick; }

function okayClick() {
    alert("you clocked ok!");
    okButton = documentGetElementById("ok");
    setTimeout(reset, 3000);
}

function reset() {
    const okButton = documentGetElementByID("ok");
    okButton.className = "";
}
window.onload = pageLoad; //// global code