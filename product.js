const heart = document.querySelectorAll(".heart");
const car = document.querySelectorAll(".fa-cart-shopping");
const share = document.querySelectorAll(".fa-share");

heart.forEach((action) => {
  action.addEventListener("click", () => {
    alert("Adding to Favorites");
  });
});

car.forEach((action2) => {
  action2.addEventListener("click", () => {
    alert("Adding to Car");
    action2.classlist.toggle("changed");
  });
});

share.forEach((action3) => {
  action3.addEventListener("click", () => {
    alert("Shared success");
  });
});
