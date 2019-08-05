const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

function showTime() {
    let now = new Date(),
        hour = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds();

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBackground() {
    let now = new Date(),
        hour = now.getHours();

    if (hour < 12) {
        document.querySelector('#show').style.backgroundImage = "url('https://w.wallhaven.cc/full/nr/wallhaven-nr87kq.jpg')";
        document.querySelector('#show').style.color = 'white';
        greeting.textContent = 'Добрай раніцы,';
    } else if (hour < 18) {
        document.querySelector("#show").style.backgroundImage = "url('https://w.wallhaven.cc/full/83/wallhaven-83dqz1.jpg')";
        greeting.textContent = 'Добры дзень,';

    } else {
        document.querySelector('#show').style.backgroundImage = "url('https://w.wallhaven.cc/full/3k/wallhaven-3k927d.jpg')";
        document.querySelector('#show').style.color = 'white';
        greeting.textContent = 'Добры вечар,';
    }
}

function getName () {
    if (localStorage.getItem('name') === null) {
        name.textContent = 'Вандроўнік';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

function getGoal () {
    if (localStorage.getItem('focus') === null ) {
        focus.innerText = 'Learn something new';
    } else {
        focus.innerText = localStorage.getItem('focus');
    }
}
function setGoal (e) {
    if (e.type === 'keypres') {
        if (e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setGoal);
focus.addEventListener('blur', setGoal);
showTime();
setBackground();
getName();
getGoal();