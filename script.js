let a = 1;

const compute = (e) => {
    e.preventDefault();
    const p = document.getElementById("principal").value;
    const i = document.getElementById('rate').value / 100;
    const y = document.getElementById('years').value;
    const r = document.getElementById('result').innerHTML = y * i * p;

}
const button = document.getElementById('button1');
button.addEventListener('click', compute);
const range = document.getElementById('rate');
const interestRateDisplay = document.getElementsByClassName('interest-rate-display')[0];
range.addEventListener('input', () => interestRateDisplay.innerHTML = range.value);


const milk = document.getElementById('milk');
const silk = document.getElementById('silk');
milk.addEventListener('change', (e) => silk.value = e.target.value);
