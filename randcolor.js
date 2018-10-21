var r;
var g;
var b;
let _fixR = false; 
let _fixG = false;
let _fixB = false;

let pushButtenR = document.getElementById("R");

function ChangeColor() {
    var box = document.getElementById("colorSqare");

    if(!_fixR) r = parseInt(Math.random() * 256);       //_fixR이 true일때 실행
    else r = 255;      //false면 255로 고정함
    if(!_fixG)  g = parseInt(Math.random() * 256);
    else g = 255;
    if (!_fixB) b = parseInt(Math.random() * 256);
    else b = 255;
    box.style.backgroundColor ='rgb(' + r + ',' + g + ',' + b + ')';        //js는 css 스타일 적용시켜줄때는 string(문자열)로 넘겨줌

    toHex(r, g, b);
}

//to hex
function toHex(r, g, b)
{
let hex = document.getElementById("colorHex");


let rgb = document.getElementById("printRgb");
rgb.innerHTML = r + ',' + g + ',' + b;

let hexR = r.toString(16);
let hexG = g.toString(16);
let hexB = b.toString(16);

hex.innerHTML = '#' + hexR + hexG + hexB;
}

//

//flex
function fixR (){
    if(!_fixR){      //fixR이 true면 
        _fixR = true;       //flxR을 true로
        pushButtenR.style.backgroundColor = '';
    }
    else        //fixR이 false이면
        _fixR = false;
}
function fixG (){
    if(!_fixG)      
        _fixG = true;
    else        
        _fixG = false;
}
function fixB (){
    if(!_fixB)      
        _fixB = true;
    else       
        _fixB = false;
}