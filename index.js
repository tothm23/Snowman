setInterval(() => {
  // create snow
  const snow = document.createElement("div");

  // set styles
  snow.style.position = "absolute";
  snow.style.width = "10px";
  snow.style.height = "10px";
  snow.style.backgroundColor = "white";
  snow.style.borderRadius = "50%";
  snow.style.zIndex = 40;

  // add snow class
  snow.classList.add("snow");

  // positioning the snow
  let topPosition = Math.floor(Math.random() * 10);

  setInterval(() => {
    snow.style.top = `${topPosition}px`;
    topPosition += 20;
  }, 100);

  snow.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;

  // add to the body
  document.body.appendChild(snow);

  if (topPosition > window.innerHeight) {
    let snows = document.getElementsByClassName("snow");
    snows.forEach((element) => {
      element.remove();
    });
  }
}, 100);
