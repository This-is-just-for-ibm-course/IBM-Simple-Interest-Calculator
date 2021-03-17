let a = 1;

const compute = (e) => {
    e.preventDefault();
    p = document.getElementById("principal").value;
    i = document.getElementById('rate').value;
    y = document.getElementById('years').value;
    document.getElementById('result').innerHTML = y * i * r;

}
const button = document.getElementById('button');
button.addEventListener('click', compute);
const range = document.getElementById('rate');
const interestRateDisplay = document.getElementsByClassName('interest-rate-display')[0];
range.addEventListener('change', () => interestRateDisplay.innerHTML = range.value);


const milk = document.getElementById('milk');
const silk = document.getElementById('silk');
milk.addEventListener('change', (e) => silk.value = e.target.value);
