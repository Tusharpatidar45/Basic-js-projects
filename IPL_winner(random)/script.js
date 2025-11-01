let arr = [
  {
    team: "CSK",
    primary: "yellow",
    secondary: "green",
  },
  {
    team: "RCB",
    primary: "red",
    secondary: "black",
  },
  {
    team: "MI",
    primary: "blue",
    secondary: "gold",
  },
  {
    team: "KKR",
    primary: "purple",
    secondary: "gold",
  },
  {
    team: "SRH",
    primary: "orange",
    secondary: "black",
  },
  {
    team: "DC",
    primary: "blue",
    secondary: "black",
  },
];

let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * arr.length);
  let winner = arr[num];

  h1.innerHTML = winner.team;
  h1.style.backgroundColor = winner.primary;
  h1.style.color = winner.secondary;
});
