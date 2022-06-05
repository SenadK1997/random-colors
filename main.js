const button = document.querySelector('button');
const h2El = document.querySelector('h2');
const bgEl = document.querySelector('section');
const rgbDisplay = document.getElementById('rgb-display');
const timesClicked = document.getElementById('timesClicked');

button.addEventListener('click', () => {
  let hex = '#';
  hex += Math.random().toString(16).slice(2,8);
  bgEl.style.backgroundColor = hex;
  h2El.innerText = hex;
  rgbDisplay.innerText = hexToRgb(hex);

  function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}
})

let count = 0;
button.addEventListener('click', () => {
  count++;
  timesClicked.innerText = count;
})