// const _se = (selector) => (document.querySelector(selector));
// const _sea = (selector) => (document.querySelectorAll(selector));

const filterBtn = _se('#side button')
const filterTypeInputs = _sea('.type input[type=checkbox]')
const filterColorInputs = _sea('.color input[type=checkbox]')
const items = _sea('.item')

let checkedTypes;
let checkedColors;
let dataStar;
filterBtn.addEventListener('click', () => {
    checkedTypes = [];
    filterTypeInputs.forEach((elem) => {
        if (elem.checked) {
            checkedTypes.push(elem.id)
        }
    })
    checkedColors = [];
    filterColorInputs.forEach((elem) => {
        if (elem.checked) {
            checkedColors.push(elem.id)
        }
    })
    dataStar = _se('#horseRate').value
    filterItems()
})
const isChecked = (input) => input.length !== 0;

// returns True if any of check boxes be checked

function filterItems() {
    if (isChecked(checkedTypes) || isChecked(checkedColors) || dataStar !== '0') {
        console.log(isChecked(checkedTypes))
        console.log(isChecked(checkedColors))
        console.log(dataStar !== '0')
        console.log(dataStar)


        Array.from(items).forEach((item) => {

            // check and show's if item has any of Conditions
            if (!isChecked(checkedTypes) && !isChecked(checkedColors) && dataStar !== '0') {//1111111111111
                if (item.getAttribute('data-stars') === dataStar) {
                    item.parentElement.style.display = 'block';
                } else {
                    item.parentElement.style.display = 'none';
                }
            } else if (!isChecked(checkedTypes) && isChecked(checkedColors) && dataStar === '0') {//222222222222
                if (checkedColors.includes(item.classList[2])) {
                    item.parentElement.style.display = 'block';
                } else {
                    item.parentElement.style.display = 'none';
                }
            } else if (!isChecked(checkedTypes) && isChecked(checkedColors) && dataStar !== '0') {//3333333333
                if (checkedColors.includes(item.classList[2]) && item.getAttribute('data-star') === dataStar) {
                    item.parentElement.style.display = 'block';
                } else {
                    item.parentElement.style.display = 'none';
                }
            } else if (isChecked(checkedTypes) && !isChecked(checkedColors) && dataStar === '0') {//4444444444
                if (checkedTypes.includes(item.classList[1])) {
                    item.parentElement.style.display = 'block';
                } else {
                    item.parentElement.style.display = 'none';
                }
            } else if (isChecked(checkedTypes) && !isChecked(checkedColors) && dataStar !== '0') {//555555555555555
                if (checkedTypes.includes(item.classList[1]) && item.getAttribute('data-star') === dataStar) {
                    item.parentElement.style.display = 'block';
                } else {
                    item.parentElement.style.display = 'none';
                }
            } else if (isChecked(checkedTypes) && isChecked(checkedColors) && dataStar === '0') {//666666666666666
                if (checkedTypes.includes(item.classList[1]) && checkedColors.includes(item.classList[2])) {
                    item.parentElement.style.display = 'block';
                } else {
                    item.parentElement.style.display = 'none';
                }
            } else {//77777777777
                if (checkedTypes.includes(item.classList[1]) && checkedColors.includes(item.classList[2]) && item.getAttribute('data-star') === dataStar) {
                    item.parentElement.style.display = 'block';
                } else {
                    item.parentElement.style.display = 'none';
                }
            }
        })
    } else {
        Array.from(items).forEach((item) => {
            item.parentElement.style.display = 'block';
        })
    }
}















