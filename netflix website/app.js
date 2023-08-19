let a = document.querySelector(".mainsite");
let btn = document.querySelector(".btn-getstarted");
a.addEventListener("click", () => {
  console.log("mainsite are pressed");
});
btn.addEventListener("click", () => {
  alert("This is frontnend Project . Your data is safe");
  console.log("get-started was pressed");
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
      console.log("Your Internetspeed is above 4Mbps");
      resolve();
    } else {
      console.log("Your Internetspeed is below 4Mbps");
      reject();
    }
  })
    .then((resolve) => {
      console.log("your data is saved");
    })
    .catch((reject) => {
      console.log("your data is not saved");
    });
});
