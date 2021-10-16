canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

imgs_array = ["mars.jpg","marsss.jfif","marsuno.jfif","socool.jpg","wooow.jpg"];
randomn = Math.floor(Math.random()*5);

rw = 100;
rh = 90;
bi = imgs_array[randomn];
ri = "rover.png";

rx = 100;
ry = 150;

function add() {
    bci = new Image();
    bci.onload = upb;
    bci.src = bi;

    rit = new Image();
    rit.onload = upr;
    rit.src = ri;
}

function upb() {
    ctx.drawImage(bci,0,0,canvas.width,canvas.height);
}

function upr() {
    ctx.drawImage(rit,rx,ry,rw,rh);
}

window.addEventListener("keydown", kd);
function kd(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38"){
        up();
        console.log("up is pressed");
    }
    if(keyPressed == "40"){
        down();
        console.log("down is pressed");
    }
    if(keyPressed == "37"){
        left();
        console.log("left is pressed");
    }
    if(keyPressed == "39"){
        right();
        console.log("right is pressed");
    }
}
function up() {
if (ry >= 0){
    ry = ry-10;
    console.log("When up arrow is pressed, x = "+ rx + ", y = " + ry);
    upb();
    upr();
}

}

function down() {
    if (ry <= 250){
        ry = ry+10;
        console.log("When down arrow is pressed, x = "+ rx + ", y = " + ry);
        upb();
        upr();
    }
    
    }

    function left() {
        if (rx >= 0){
            rx = rx-10;
            console.log("When left arrow is pressed, x = "+ rx + ", y = " + ry);
            upb();
            upr();
        }
        
        }

        
    function right() {
        if (rx <= 350){
            rx = rx+10;
            console.log("When right arrow is pressed, x = "+ rx + ", y = " + ry);
            upb();
            upr();
        }
        
        }