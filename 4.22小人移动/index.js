
    var i = 0, clc = null, flage;
    var images = document.getElementById('img');

    var oGoUp = document.getElementById('goUp');
    var oGoDown = document.getElementById('goDown');
    var oGoLeft = document.getElementById('goLeft');
    var oGoRight = document.getElementById('goRight');
    var oLeftUp = document.getElementById('leftUp');
    var oLeftDown = document.getElementById('leftDown');
    var oRightUp = document.getElementById('rightUp');
    var oRightDown = document.getElementById('rightDown');
    var oStop = document.getElementById('stop');

    images.style.top = '300px';
    images.style.left = '300px';

    //停止 
    oStop.onclick = function () {
        switch (flage) {
            case 1: images.src = 'images/up-0.png'; break;
            case 2: images.src = 'images/down-0.png'; break;
            case 3: images.src = 'images/left-0.png'; break;
            case 4: images.src = 'images/right-0.png'; break;
            case 5: images.src = 'images/rightUp-0.png'; break;
            case 6: images.src = 'images/rd-0.png'; break;
            case 7: images.src = 'images/ld-0.png'; break;
            case 8: images.src = 'images/lu-0.png'; break;
        }
        clearInterval(clc);
    }
    //向上 
    oGoUp.onclick = function () {
        i = 0;
        clearInterval(clc);
        clc = setInterval("goUp(i++)2;", 100);
    }
    function goUp() {
        i = i % 4;
        var name = "images/up-" + i + "." + "png";
        images.src = name;
        images.style.top = parseInt(images.style.top) - 10 + 'px';
        flage = 1;
    }
    //向下 
    oGoDown.onclick = function () {
        i = 0;
        clearInterval(clc);
        clc = setInterval("goDown(i++);", 100);
    }
    function goDown() {
        i = i % 4;
        var name = "images/down-" + i + "." + "png";
        images.src = name;
        images.style.top = parseInt(images.style.top) + 10 + 'px';
        flage = 2;
    }
    //向左 
    oGoLeft.onclick = function () {
        i = 0;
        clearInterval(clc);
        clc = setInterval("goLeft(i++);", 100);
    }
    function goLeft() {
        i = i % 4;
        var name = "images/left-" + i + "." + "png";
        images.src = name;
        images.style.left = parseInt(images.style.left) - 10 + 'px';
        flage = 3;
    }
    //向右 
    oGoRight.onclick = function () {
        i = 0;
        clearInterval(clc);
        clc = setInterval("goRight(i++);", 100);
    }
    function goRight() {
        i = i % 4;
        var name = "images/right-" + i + "." + "png";
        images.src = name;
        images.style.left = parseInt(images.style.left) + 10 + 'px';
        flage = 4;
    }
    //向右上 
    oRightUp.onclick = function () {
        i = 0;
        clearInterval(clc);
        clc = setInterval("goRightUp(i++);", 100);
    }
    function goRightUp() {
        i = i % 4;
        var name = "images/rightUp-" + i + "." + "png";
        images.src = name;
        images.style.left = parseInt(images.style.left) + 10 + 'px';
        images.style.top = parseInt(images.style.top) - 10 + 'px';
        flage = 5;
    }
    //向右下 
    oRightDown.onclick = function () {
        i = 0;
        clearInterval(clc);
        clc = setInterval("goRightDown(i++);", 100);
    }
    function goRightDown() {
        i = i % 4;
        var name = "images/rd-" + i + "." + "png";
        images.src = name;
        images.style.left = parseInt(images.style.left) + 10 + 'px';
        images.style.top = parseInt(images.style.top) + 10 + 'px';
        flage = 6;
    }
    //向左下 
    oLeftDown.onclick = function () {
        i = 0;
        clearInterval(clc);
        clc = setInterval("goLeftDown(i++);", 100);
    }
    function goLeftDown() {
        i = i % 4;
        var name = "images/ld-" + i + "." + "png";
        images.src = name;
        images.style.left = parseInt(images.style.left) - 10 + 'px';
        images.style.top = parseInt(images.style.top) + 10 + 'px';
        flage = 7;
    }
    //向左上 
    oLeftUp.onclick = function () {
        i = 0;
        clearInterval(clc);
        clc = setInterval("goLeftUp(i++);", 100);
    }
    function goLeftUp() {
        i = i % 4;
        var name = "images/lu-" + i + "." + "png";
        images.src = name;
        images.style.left = parseInt(images.style.left) - 10 + 'px';
        images.style.top = parseInt(images.style.top) - 10 + 'px';
        flage = 8;
    }