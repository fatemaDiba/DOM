// index page theke new page reload
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputnum = getElementNum("inputNum");
    const inputpass = getElementNum("inputPass");
    if (typeof inputnum === "number" || typeof inputpass === "number") {
      window.location.href = "home.html";
    } else {
      alert("Please give valid input");
    }
  });

// add money
//  document.getElementById("btn-cashIn").addEventListener("click", function (event) {
//     event.preventDefault();

//     const inputAmount = getElementNum("amount-input");
//     const inputPin = getElementNum("inputPin");

//     if (inputPin === 1234) {
//       const Balance = document.getElementNum("balance");
//       const newBalance = Balance + inputAmount;
//       document.getElementById("balance").innerText = newBalance;
//     } else {
//       alert("wrong input");
//     }
//   });

let a = document.getElementById("btn-cashIn");
console.log(a);
