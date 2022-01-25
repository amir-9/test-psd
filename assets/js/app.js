const _se = (selector) => (document.querySelector(selector));

const _sea = (selector) => (document.querySelectorAll(selector));

const search = _se('.search');
const searchBox = _se('.search-box');
const closeBtn = _se('.close-search');
const body = _se('body');

const searchControl = () => {
    searchBox.classList.toggle('opacity-0');
    searchBox.classList.toggle('opacity-100');
    if (searchBox.classList.contains('d-flex')) {
        setTimeout(() => {
            searchBox.classList.toggle('d-flex')
            searchBox.classList.toggle('d-none')
        }, 250);
    } else {
        searchBox.classList.toggle('d-flex')
        searchBox.classList.toggle('d-none')
    }
}

search.addEventListener('click', searchControl)
closeBtn.addEventListener('click', searchControl)

const isClickInside = (theList, e) => {
    for (let item of theList) {
        if (item === e.target) {
            return false;
        }
    }
    return true;
}

body.addEventListener("click", (e) => {
    if (
        searchBox.classList.contains('d-flex') &&
        e.target !== searchBox &&
        isClickInside(_sea('.search-box *'), e) &&
        e.target !== search &&
        isClickInside(_sea('.search *'), e)
    ) {
        searchControl();
    }
});

/////////////////

const rate = _sea('.inputs [name="rating"]');
Array.from(rate).forEach((star) => {
    star.addEventListener('click', () => {
        localStorage.setItem('rate', star.id);
    })
})

function clickRate(id) {
    _se('#' + id).click();
}

clickRate(localStorage.getItem('rate'));
///////////////////////////////////////////////////
const searchText = _se('.blog-search-box input');
const searchButton = _se('.blog-search-box button');

searchButton.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
    let text = searchText.value;
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4) return;
        if (this.status === 200) {
        }
    };

    xhr.open('GET', "https://horsepedia.ir/?s=" + text, false);
    xhr.send(null);
    body.innerHTML = xhr.responseText;
    return xhr.responseText;

})

const description = _se('#description');
const leftCharacters = _se('#leftCharacters')

function leftChar() {
    leftCharacters.innerHTML = (1500 - (description.value.length))
    if ((1500 - (description.value.length)) < 0) {
        leftCharacters.style.color = 'red'
    } else {
        leftCharacters.style.color = ''
    }
}

description.addEventListener('keydown', leftChar)
description.addEventListener('keyup', leftChar)

/////////////////////////////////////////////////

const clickCmStar = (number, place) => {

    const bgColor = 'yellow';
    let i;
    for (i = 0; i < (number / 2) - 0.5; i++) {
        place.children[i].style.background = bgColor;
        if (number % 2 !== 0 && i + 1 === (number / 2) - 0.5) {
            place.children[i + 1].classList.add('half')
        }
    }
}


////////////////////////////////////////
const commentForm = _se('.comment form');
let comment = {
    name: '',
    mail: '',
    deck: '',
    star: ''
}
commentForm.addEventListener('submit', () => {
    comment.name = _se('#name').value;
    comment.mail = _se('#mail').value;
    comment.deck = description.value;
    comment.star = localStorage.getItem('rate');
    let savedComment = undefined;
    let i;
    for (i = 0; savedComment !== null; i++) {
        savedComment = localStorage.getItem('comment' + i);
    }
    localStorage.setItem('comment' + (i - 1), JSON.stringify(comment));

})

const commentsLength=_se('.comment h5 span')
function showCommentsFunc() {
    let x = undefined;
    let i;
    for (i = 0; x !== null; i++) {
        x = localStorage.getItem('comment' + i);
    }
    i--;
    /////////////////////
    let temp;
    for (let j = 0; j < i; j++) {
        ////
        const showComments = _se('#showComments');
        const savedComment = document.createElement('div');
        savedComment.classList.add('saved-comment');
        const name = document.createElement('div');
        name.classList.add('name');
        const savedDescription = document.createElement('div');
        savedDescription.classList.add('description');

        const p = document.createElement('p');

        const h6 = document.createElement('h6');
        const star = document.createElement('div');
        star.classList.add('star');
        ////

        temp = JSON.parse(localStorage.getItem('comment' + j));
        h6.textContent = temp.name;
        name.appendChild(h6);

        ///bull-shit code area +18
        const commentStars = document.createElement('div')
        commentStars.classList.add('comment-stars')

        const span = document.createElement('span')
        span.classList.add('star-' + (j + 1))

        const img = document.createElement('img');
        img.setAttribute('src', '../assets/images/horse-page/staroutline.png')
        for (let x = 0; x < 5; x++) {
            const img = document.createElement('img');
            img.setAttribute('src', '../assets/images/horse-page/staroutline.png')
            span.appendChild(img)
        }
        commentStars.appendChild(span)
        // myFunc(temp.star[6]);
        ///end of bull-shit code area +3

        star.appendChild(commentStars)

        name.appendChild(star);

        p.innerText = temp.deck;
        savedDescription.appendChild(p);

        savedComment.appendChild(name);
        savedComment.appendChild(savedDescription);
        showComments.appendChild(savedComment);


    }
    for (let j = 0; j < i; j++) {

        if (JSON.parse(localStorage.getItem('comment' + j)).star[7] !== '0') {
            clickCmStar(JSON.parse(localStorage.getItem('comment' + j)).star[6], _se(('.star-' + (j + 1))))
        } else {

            clickCmStar('10', _se(('.star-' + (j + 1))))
        }
    }
    commentsLength.innerText=i;
}

window.onload = showCommentsFunc;


























