const body = document.querySelector('body');

const inputBox = document.querySelector('.row input');

const btn = document.querySelector('button');

const listContainer = document.getElementById('list-container');

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

function addTask() {
    if (inputBox.value === '') {
        alert('Write something...');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

btn.addEventListener('click', addTask);
inputBox.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
        addTask();
    };
});

listContainer.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('checked');
    }
    else if (evt.target.tagName === 'SPAN') {
        evt.target.parentElement.remove();
    }
    saveData();
}, false);

showTask();