canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 10;
background_image = "race road.jpg";
console.log("background_image = " + background_image);

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadcar1;
    rover_imgTag.onload = uploadcar2;
    rover_imgTag.src = car2_image, car1_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(rover_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(rover_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keycode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up")
    }
    if (keyPressed == '40') {
        up();
        console.log("down")
    }
    if (keyPressed == '37') {
        up();
        console.log("left")
    }
    if (keyPressed == '39') {
        up();
        console.log("right")
    }
    if (keyPressed == '87') {
        up();
        console.log("w")
    }
    if (keyPressed == '69') {
        up();
        console.log("e")
    }
    if (keyPressed == '65') {
        up();
        console.log("a")
    }
    if (keyPressed == '83') {
        up();
        console.log("s")
    }
    if (keyPressed == '68') {
        up();
        console.log("d")
    }
}