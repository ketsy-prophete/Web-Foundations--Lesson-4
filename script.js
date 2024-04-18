function decreasedWidth() {
    let divItem = document.getElementById('rectangle');
    let currentWidth = divItem.style.width;
    let prsdWidth = parseInt(currentWidth);
    let myWidth = prsdWidth - 10; 

    divItem.style.width = myWidth + "px";
}

function increasedWidth() {
    let divItem = document.getElementById('rectangle');
    let currentWidth = divItem.style.width;
    let prsdWidth = parseInt(currentWidth);
    let myWidth = prsdWidth + 10;
     
    divItem.style.width = myWidth + "px";
}


//TESTS
// console.log(divItem);
// console.log(currentWidth);
// console.log(myWidth);
// console.log(prsdWidth);
// divItem.style.width = "25px";