/**
 * Sets the snowflake's X position
 * @returns random X position
 */
const randomX = () => {
  return Math.floor(Math.random() * window.innerWidth);
};

/**
 * Sets the snowflake's Y position
 * @returns random Y position
 */
const randomY = () => {
  return Math.floor(Math.random() * window.innerHeight);
};

/**
 * Sets the snowflake's size
 * @returns random size
 */
const randomSize = (min, max) => {
  return Math.random() * (max - min) + min;
};

/**
 * Sets the snowflake's CSS properties
 * @param {*} flake
 */
const setCSSProperties = (flake) => {
  flake.style.position = "absolute";
  flake.style.backgroundColor = "white";
  flake.style.borderRadius = "50%";
  flake.style.width = `${snowFlakeSize}px`;
  flake.style.height = `${snowFlakeSize}px`;
};

let snowFlakeSize = randomSize(1, 9);
const snowFlakeCount = 100;

for (let i = 1; i <= snowFlakeCount; i++) {
  snowFlakeSize = randomSize(3, 7);
  let snowFlakeX = randomX();
  let snowFlakeY = randomY();

  let snowFlake = document.createElement("div");
  setCSSProperties(snowFlake);

  document.body.append(snowFlake);

  setInterval(() => {
    snowFlake.style.top = `${snowFlakeY}px`;
    snowFlake.style.left = `${snowFlakeX}px`;

    if (snowFlakeY > window.innerHeight) {
      snowFlakeX = randomX();
      snowFlakeY = randomY();
    }
    
    snowFlakeY++;
  }, 1);
}
