const todayWorryLeftBtn = document.querySelectorAll('.todayWorryContent-two-buttons-left');
const todayWorryRightBtn = document.querySelectorAll('.todayWorryContent-two-buttons-right');
const todayWorrySmallBtn = document.querySelectorAll('.todayWorryContent-four-buttons-choice-btn');
const myWorryBtn1 = document.querySelector('.myWorry-button-1');
const myWorryBtn2 = document.querySelector('.myWorry-button-2');
const myWorryBtn3 = document.querySelector('.myWorry-button-3');
const myWorryBtnTitle = document.querySelector('#myWorry-btn-title');
const myWorryBtnCount = document.querySelector('#myWorry-btn-count');

// 색상
const brownColor =  '#67594C';
const whiteColor = '#FAF9F6';
const lightBrownColor = '#E9E5DA';
const cgBtnOriginFontColor = 'rgba(103, 89, 76, 0.50)';
const notchosenBtnColor = '#D2CDBC';

todayWorryLeftBtn.forEach((todayWorryLeftBtn, index) => {
    let isClicked = false;
  
    todayWorryLeftBtn.addEventListener('click', function() {
      const hiddenElement = this.querySelector('.ratio');
      if (isClicked) {
        this.style.backgroundColor = whiteColor;
        this.style.color = brownColor;
        todayWorryRightBtn.style.color = brownColor;
        hiddenElement.classList.add('hidden');
      } else {
        this.style.backgroundColor = brownColor;
        this.style.color = whiteColor;
        todayWorryRightBtn.style.color = notchosenBtnColor;
        hiddenElement.classList.remove('hidden');
      }
  
      isClicked = !isClicked;
    });
});
  
todayWorryRightBtn.forEach((todayWorryRightBtn, index) => {
    let isClicked = false;
  
    todayWorryRightBtn.addEventListener('click', function() {
      const hiddenElement = this.querySelector('.ratio');
      if (isClicked) {
        this.style.backgroundColor = whiteColor;
        this.style.color = brownColor;
        todayWorryLeftBtn.style.color = brownColor;
        hiddenElement.classList.add('hidden');
      } else {
        this.style.backgroundColor = brownColor;
        this.style.color = whiteColor;
        todayWorryLeftBtn.style.color = notchosenBtnColor;
        hiddenElement.classList.remove('hidden');
      }
  
      isClicked = !isClicked;
    });
});
todayWorrySmallBtn.forEach((button, index) => {
    let isClicked = false;
    
    button.addEventListener('click', function() {
      todayWorrySmallBtn.forEach((btn, btnIndex) => {
        const hiddenElement = btn.querySelector('.ratio');
        if (btnIndex !== index) {
            if(isClicked) {
                btn.style.color = brownColor;
            }
            else {
                btn.style.color = notchosenBtnColor;
            }
        } else {
          if (isClicked) {
            btn.style.backgroundColor = whiteColor;
            btn.style.color = brownColor;
            hiddenElement.classList.add('hidden');
          } else {
            btn.style.backgroundColor = brownColor;
            btn.style.color = whiteColor;
            hiddenElement.classList.remove('hidden');
          }
        }
      });
    
      isClicked = !isClicked;
    });
});

// 두 번째 버튼 클릭 상태 변수
let isButton2Clicked = false;

// 두 번째 버튼을 클릭했을 때의 동작
document.querySelector('.myWorry-button-2').addEventListener('click', function() {
  if (!isButton2Clicked) {
    // 배경색과 폰트색 변경
    this.classList.add('myWorry-button-1');
    this.classList.remove('myWorry-button-2');
    document.querySelector('.myWorry-button-text__title-2').style.color = whiteColor;
    document.querySelector('.myWorry-button-text__count-2').style.color = whiteColor;
    myWorryBtnCount.style.color = 'var(--67594-c, rgba(103, 89, 76, 0.50))';
    // 다른 버튼 찾아서 배경색과 폰트색 변경
    const otherButtons = document.querySelectorAll('.myWorry-buttons > div:not(.myWorry-button-2)');
    for (let i = 0; i < otherButtons.length; i++) {
      const button = otherButtons[i];
      button.classList.add('myWorry-button-2');
      button.querySelector('.myWorry-button-text__title-1').style.color = brownColor;
      button.querySelector('.myWorry-button-text__title-3').style.color = brownColor;
    }
  } 
});
// 두 번째 버튼 클릭 상태 변수
let isButton3Clicked = false;

// 두 번째 버튼을 클릭했을 때의 동작
document.querySelector('.myWorry-button-3').addEventListener('click', function() {
  if (!isButton2Clicked) {
    // 배경색과 폰트색 변경
    this.classList.add('myWorry-button-1');
    this.classList.remove('myWorry-button-3');
    document.querySelector('.myWorry-button-text__title-3').style.color = whiteColor;
    document.querySelector('.myWorry-button-text__count-3').style.color = whiteColor;
    myWorryBtnCount.style.color = 'var(--67594-c, rgba(103, 89, 76, 0.50))';
    // 다른 버튼 찾아서 배경색과 폰트색 변경
    const otherButtons = document.querySelectorAll('.myWorry-buttons > div:not(.myWorry-button-3)');
    for (let i = 0; i < otherButtons.length; i++) {
      const button = otherButtons[i];
      button.classList.add('myWorry-button-3');
      button.querySelector('.myWorry-button-text__title-1').style.color = brownColor;
      button.querySelector('.myWorry-button-text__title-2').style.color = brownColor;
    }
  } 
});
// 두 번째 버튼 클릭 상태 변수
let isButton1Clicked = false;

// 두 번째 버튼을 클릭했을 때의 동작
document.querySelector('.myWorry-button-1').addEventListener('click', function() {
  if (!isButton2Clicked) {
    // 배경색과 폰트색 변경
    this.style.backgroundColor = brownColor;
    document.querySelector('.myWorry-button-text__title-1').style.color = whiteColor;
    document.querySelector('.myWorry-button-text__count-1').style.color = whiteColor;
    // 다른 버튼 찾아서 배경색과 폰트색 변경
    const otherButtons = document.querySelectorAll('.myWorry-buttons > div:not(.myWorry-button-1)');
    for (let i = 0; i < otherButtons.length; i++) {
      const button = otherButtons[i];
      button.style.backgroundColor = lightBrownColor;
      button.querySelector('.myWorry-button-text__title-1').style.color = brownColor;
      button.querySelector('.myWorry-button-text__title-3').style.color = brownColor;
      button.querySelector('.myWorry-button-text__count-1').style.color = lightBrownColor;
      button.querySelector('.myWorry-button-text__count-3').style.color = lightBrownColor;
    }

    isButton2Clicked = true;
  } 
});

