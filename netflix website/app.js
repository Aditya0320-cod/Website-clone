let a = document.querySelector(".mainsite");
let btn = document.querySelector(".btn-getstarted");
let btn1 = document.querySelector(".btn-top");

btn1.addEventListener("click", () => {
  alert("Page par kaam chal rha hai ");
  console.log("Page par kaam chl rha hai");
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed >= 5) {
      console.log("your internetspeed is greater than or equal to the 5");
      resolve();
    } else {
      console.log("your internetspeed is smallet than 5");
      reject();
    }
  })
    .then((resolve) => {
      console.log("resolve solved", resolve);
    })
    .catch((reject) => {
      console.log("reject error", reject);
    });
});

a.addEventListener("click", () => {
  console.log("mainsite are pressed");
});

btn.addEventListener("click", () => {
  alert("This is frontnend Project, Page par kaam chl rha hai ");
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
