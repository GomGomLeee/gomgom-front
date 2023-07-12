function changeImage() {
    var input = document.getElementsByClassName('worry-text')[0];
    var inputValue = input.value;
    var image = document.querySelector('.image-box img');

    if (inputValue) { 
        image.src = 'bear_ai2.png';
    } else {
        image.src = 'bear_ai.png';
    }
}
