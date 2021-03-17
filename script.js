let a = 1;
const p = document.getElementById("principal")
const i = document.getElementById('rate')
const y = document.getElementById('years')
const compute = (e) => {
    e.preventDefault();
    if (p.value < 1 || y.value < 0) {
        alert('amount must be positive');
        return;
    }
    if (typeof y.value !== 'number') {
        alert('must type in a year')
        return;
    }
    document.getElementById('results').innerHTML =
        `<p>If you deposit <span class = 'yellow'>${p.value}</span></p>
           <p>at an interest rate of <span class = 'yellow'>${i.value}%</span></p>
           <p>You will receive an amount of <span class = 'yellow'>${p.value * i.value / 100 * y.value}</span></p>
           <p>In the year <span class = 'yellow'>${2021 + parseInt(y.value, 10)}</span></p>`;

}
const button = document.getElementById('button1');
button.addEventListener('click', compute);
const range = document.getElementById('rate');
const interestRateDisplay = document.getElementsByClassName('interest-rate-display')[0];
interestRateDisplay.innerHTML = 10;
range.addEventListener('input', () => interestRateDisplay.innerHTML = i.value);


