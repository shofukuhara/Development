const Rellax = require("../../node/node_modules/rellax/");
document.addEventListener("DOMContentLoaded", function () {
  const rellax = new Rellax(".bg", {
    breakpoints: [375, 768, 1200],
  });
});
