// document.getElementById("count-el").innerText = 5;

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;

// console.log(count)
let countEl = document.getElementById("count-el");
// let welcomeEl = document.getElementById('welcome-el');
let saveEl = document.getElementById('save-el');
let name = 'Soanadso';
let greeting = 'Welcome back';
let count = 0;

// welcomeEl.innerText = ` ${greeting}, ${name} `;

function increment() {
    count++;
    countEl.textContent = count;
}

function save() {
    saveEl.textContent = `${saveEl.textContent} ${count} -`;
    count = 0;
    countEl.textContent = count;
}
