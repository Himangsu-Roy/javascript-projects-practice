const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");


const copyText = (e) => {
    e.preventDefault();
    coupon.select();
    coupon.setSelectionRange(0, -1);
    // document.execCommand("copy");

    navigator.clipboard.writeText(coupon.value)

    btn.textContent = "Copying...";
    setTimeout(() => {
        btn.textContent = "Copy";
    }, 1000);
}

btn.addEventListener("click", copyText);
