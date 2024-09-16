let enddate = "30 july 2023 1:33 am"
document.getElementById("end-date").innerText = enddate;
let inputs = document.querySelectorAll("input");


function clock() {
    let end = new Date(enddate);
    let now = new Date("30 july 2023 2:33 am");
    let diff = (end - now) / 1000;
    if(diff < 0)return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
    //convert into days

};
//initianl call
clock()

setInterval(
      () => {
            clock()
        },
        1000
);
      



