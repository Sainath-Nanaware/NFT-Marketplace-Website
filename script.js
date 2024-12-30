var qtnButton = document.querySelectorAll(".qtn-button");
var qtn=document.getElementsByClassName("qtn");
var ans=document.getElementsByClassName("ans");

function addAns(){
    console.log("Button click")
    for (let i = 0; i < qtnButton.length; i++) {
      qtnButton[i].addEventListener("click", () => {
        console.log("Button clicked");

        // Toggle visibility of the corresponding "ans"
        ans[i].style.display =
          ans[i].style.display === "block" ? "none" : "block";

        // Toggle the border style of the corresponding "qtn"
        qtn[i].style.borderBottom =
          qtn[i].style.borderBottom === "0px"
            ? "3px solid var(--desc-font-color)"
            : "0px";
      });
    }
}

