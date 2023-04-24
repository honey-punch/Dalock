alert('현재는 상단 메뉴의 지점 안내/투어예약 혹은 하단의 지점안내/투어예약하러가기 버튼을 통해서 지점 정보만 보실 수 있습니다.');

// ham-menu
const ham = document.querySelector(".ham");
const menu = document.querySelector(".menu");

ham.addEventListener('click', () => {
    menu.classList.toggle("flex");
})

window.addEventListener('resize', () => {
    if (window.outerWidth > 1100) {
        menu.classList.remove("flex")
    }
});

// section3
// fade in & out
const cards = document.querySelectorAll('.card');

const time = 3000;
let i = 0;

function fadeInAndOut(element) {
    element.classList.add('fade');
    setTimeout(() => {
        element.classList.remove('fade');
    }, time);

    i++;

    if(i == cards.length) {
        i = 0;
    }
}

fadeInAndOut(cards[i]);

setInterval(() => {
    fadeInAndOut(cards[i]);
}, time);

// section4
// tab frist icon color & img & info
document.querySelector(".tabmenu li:first-child svg").classList.add('fill-blue');
document.querySelector(".unit-img img:first-child").classList.add('block');
document.querySelector(".tabmenu li:first-child .unit-info").classList.add('block');

// tab icon & unit img & unit info
const tabIconList = document.querySelectorAll(".tab-icon");
const tabIconSvgList = document.querySelectorAll(".tab-icon svg");
const unitImgList = document.querySelectorAll(".unit-img img");
const unitInfoList = document.querySelectorAll(".unit-info");

// auto tab menu
let index = 0;

function autoTab() {
    tabIconSvgList.forEach((value, i) => {
        unitImgList[i].classList.remove('block');
        unitInfoList[i].classList.remove('block');
        tabIconSvgList[i].classList.remove('fill-blue');
    });

    unitImgList[index].classList.add('block');
    unitInfoList[index].classList.add('block');
    tabIconSvgList[index].classList.add('fill-blue');

    index++;

    if (index === tabIconSvgList.length) {
        index = 0;
    }
}

let intervalId = setInterval(autoTab, 5000);

for (let i = 0; i < tabIconList.length; i++) {
    tabIconList[i].addEventListener('click', (e) => {
        e.preventDefault();
    
        clearInterval(intervalId);
    
        index = i;
    
        autoTab();
    
        intervalId = setInterval(autoTab, 5000);
    });
}