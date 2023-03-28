const countTo = "1 Jan 2024";

const c = setInterval(() => {
    const endDate = new Date(countTo);
    const currentDate = new Date();
    const totalSecounds = (endDate - currentDate) / 1000;


    const days = Math.floor(totalSecounds / 3600 / 24);
    const hours = Math.floor(totalSecounds / 3600) % 24;
    const minutes = Math.floor(totalSecounds / 60) % 60;
    const seconds = Math.floor(totalSecounds) % 60;

    const countDown = document.getElementById("countdown");

    countDown.textContent = `${format(days)} Days ${format(hours)} Hours : Minutes: ${format(minutes)} Seconds : ${format(seconds)}`;
    
    if (totalSecounds < 0) { 
        clearInterval(c);
        countDown.textContent = "EXPIRED";
    } else {
        countDown += " ";
    } 
}, 1000);


function format(t) {
    return t < 10? `0${t}` : t;
}