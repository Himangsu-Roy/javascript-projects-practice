// window.addEventListener("load", (event) => {
//     const statusDisplay = document.getElementById("status");
//     statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
// })

// window.addEventListener("offline", (event) => {
//     const statusDisplay = document.getElementById("status");
//     statusDisplay.textContent = "Offline";
// })

// window.addEventListener("online", (event) => {
//     const statusDisplay = document.getElementById("status");
//     statusDisplay.textContent = "Online";
// })


const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor() {
    bgColor.classList.add("online");
}

async function connectionStatus() {
    try{
        const fetchResult = await fetch("https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=" + (new Date()).getTime());
        image.src = "./images/online.png";
        setColor();
        return fetchResult.status >= 200 && status < 300;
    }catch(error) {
        console.log(error)
        statusDisplay.textContent = "OOps Your internet connection is down";
        image.src = "./images/offline.png";
        bgColor.classList.remove("online");
    }
}


// monitor the connection
setInterval(async () => {
    const result = await connectionStatus();
    if(result) {
        statusDisplay.textContent = "You are Online, Connetion Good"
        setColor();
    }
}, 5000);


// check connection when the page loads
window.addEventListener("load", async (event) => {
    if(connectionStatus()) {
        statusDisplay.textContent = "You are Online"

    }else {
        statusDisplay.textContent = "You are Offline"
    }
}) 