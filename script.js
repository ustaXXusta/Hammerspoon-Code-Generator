"use strict";
const copyContent = async () => {
  let text = document.getElementById("mainCode").innerText;
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
function updateKeys(SactKey, SsecKey, SresKey) {
  document.getElementById("actKey").innerHTML = SactKey;
  document.getElementById("secKey").innerHTML = SsecKey;
  document.getElementById("resKey").innerHTML = SresKey;
}
document.getElementById("generate").addEventListener("click", () => {
  let SactKey = document.getElementById("actSelect").value;
  let SsecKey = document.getElementById("secSelect").value;
  let SresKey = document.getElementById("resSelect").value;

  let answer = document.getElementById("answer");

  if (SactKey === "Choose" || SsecKey === "Choose" || SresKey === "Choose") {
    answer.innerHTML = "Please choose all the keys";
  } else {
    updateKeys(SactKey, SsecKey, SresKey);
  }
});

function alerty() {
  alert(
    "if you want to change aphostrophe dont forget to change change aphostrophes that keeps resKey to single quotes"
  );
}
function alertyy() {
  alert("if some symbols doesn't work you can check hammerspoon keymap docs");
}
