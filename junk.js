/*
  It's JUNK code!
  It must optimizing with loops!
*/

let snowFlakeSize = 5;

const randomX = () => {
  return Math.floor(Math.random() * window.innerWidth);
};

const randomY = () => {
  return Math.floor(Math.random() * window.innerHeight);
};

let snowFlake1X = randomX();
let snowFlake1Y = randomY();

let snowFlake2X = randomX();
let snowFlake2Y = randomY();

let snowFlake3X = randomX();
let snowFlake3Y = randomY();

let snowFlake4X = randomX();
let snowFlake4Y = randomY();

let snowFlake5X = randomX();
let snowFlake5Y = randomY();

let snowFlake1 = document.createElement("div");
let snowFlake2 = document.createElement("div");
let snowFlake3 = document.createElement("div");
let snowFlake4 = document.createElement("div");
let snowFlake5 = document.createElement("div");

const setCSSProperties = (flake) => {
  flake.style.position = "absolute";
  flake.style.backgroundColor = "white";
  flake.style.borderRadius = "50%";
  flake.style.width = `${snowFlakeSize}px`;
  flake.style.height = `${snowFlakeSize}px`;
};

setCSSProperties(snowFlake1);
setCSSProperties(snowFlake2);
setCSSProperties(snowFlake3);
setCSSProperties(snowFlake4);
setCSSProperties(snowFlake5);

snowFlake1.style.top = `${randomY()}px`;
snowFlake1.style.left = `${randomX()}px`;

snowFlake2.style.top = `${randomY()}px`;
snowFlake2.style.left = `${randomX()}px`;

snowFlake3.style.top = `${randomY()}px`;
snowFlake3.style.left = `${randomX()}px`;

snowFlake4.style.top = `${randomY()}px`;
snowFlake4.style.left = `${randomX()}px`;

snowFlake5.style.top = `${randomY()}px`;
snowFlake5.style.left = `${randomX()}px`;

document.body.append(snowFlake1);
document.body.append(snowFlake2);
document.body.append(snowFlake3);
document.body.append(snowFlake4);
document.body.append(snowFlake5);

const move = setInterval(() => {
  snowFlake1.style.top = `${snowFlake1Y}px`;
  snowFlake1.style.left = `${snowFlake1X}px`;

  snowFlake2.style.top = `${snowFlake2Y}px`;
  snowFlake2.style.left = `${snowFlake2X}px`;

  snowFlake3.style.top = `${snowFlake3Y}px`;
  snowFlake3.style.left = `${snowFlake3X}px`;

  snowFlake4.style.top = `${snowFlake4Y}px`;
  snowFlake4.style.left = `${snowFlake4X}px`;

  snowFlake5.style.top = `${snowFlake5Y}px`;
  snowFlake5.style.left = `${snowFlake5X}px`;

  if (snowFlake1Y > window.innerHeight) {
    snowFlake1.remove();
    snowFlake1X = randomX();
    snowFlake1Y = randomY();
  }
  if (snowFlake2Y > window.innerHeight) {
    snowFlake2.remove();
    snowFlake2X = randomX();
    snowFlake2Y = randomY();
  }
  if (snowFlake3Y > window.innerHeight) {
    snowFlake3X = randomX();
    snowFlake3Y = randomY();
  }
  if (snowFlake4Y > window.innerHeight) {
    snowFlake4X = randomX();
    snowFlake4Y = randomY();
  }
  if (snowFlake5Y > window.innerHeight) {
    snowFlake5X = randomX();
    snowFlake5Y = randomY();
  }

  snowFlake1Y++;
  snowFlake2Y++;
  snowFlake3Y++;
  snowFlake4Y++;
  snowFlake5Y++;
}, 1);
