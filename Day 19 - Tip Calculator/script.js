const btn = document.querySelector(".btn"),
  tip = document.querySelector(".tip"),
  total = document.querySelector(".total"),
  error = document.querySelector(".error");

const hideError = () => {
  setTimeout(() => {
    error.style.display = "none";
  }, 3000);
};

const calculateTip = (e) => {
  const bill = document.querySelector(".bill").value;
  const rate = document.querySelector(".rate").value;

  if (bill === "" || rate === "") {
    error.style.display = "block";
    // error.innerHTML = "Please fill in all fields";
    hideError();
    return;
  } else if (isNaN(bill)) {
    error.style.display = "block";
    error.innerHTML = "Please enter a number";
    hideError();
  } else {
    let tipAmt = bill * rate;
    tipAmt = Math.ceil(tipAmt);
    tip.innerHTML = `Tip: ${tipAmt}`;
    total.innerHTML = `Total: ${parseFloat(bill) + tipAmt}`;
  }
};

btn.addEventListener("click", calculateTip);
