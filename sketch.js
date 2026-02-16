let mode = 0;
let gravity;
let baseline;
let player;
let balls = [];
let lastBallTime;
let startTime;
let scoreTime;

function setup() {
    createCanvas(600, 400);
    angleMode(DEGREES);
    gravity = 1;
    baseline = height - 10;
    initGame();
}

function draw() {
    background(255);
    stroke("black");
    line(0, baseline, width, baseline);

    if (mode == 0) {
        showStartScreen();
    } else if (mode == 1) {
        playGame();
    } else if (mode == 2) {
        showGameOver();
    }
}

function keyPressed() {
    if (mode == 0 && key == " ") {
        initGame();
        mode = 1;
    } else if (mode == 1 && key == " ") {
        playerJump();
    } else if (mode == 2 && key == " ") {
        mode = 0;
    }
}

function showStartScreen() {
    textAlign(CENTER);
    textSize(16);
    fill("black");
    text("Press SPACE Key", width / 2, height / 2);
    drawPlayer();
    drawBalls();
    drawScore();
}

function playGame() {
    updatePlayer();
    addBalls();
    updateBalls();
    checkHits();
    updateScore();
    drawPlayer();
    drawBalls();
    drawScore();
}

function showGameOver() {
    textAlign(CENTER);
    textSize(20);
    fill("black");
    text("GAME OVER", width / 2, height / 2);
    drawPlayer();
    drawBalls();
    drawScore();
}

// ゲームを初期化する (02)
function initGame() {

}

// カービィを表示する (03)
function drawPlayer() {
    
}

// カービィが転がるようにする (03)
function updatePlayer() {

}

// カービィのジャンプ (03)
function playerJump() {

}

// モンスターボールを表示する (04)
function drawBalls() {

}

// モンスターボールを増やす (04)
function addBalls() {

}

// モンスターボールに動きをつける (04)
function updateBalls() {

}

// カービィとモンスターボールの当たり判定 (05)
function checkHits() {

}

// スコアの値を更新する (06)
function updateScore() {

}

// スコアを表示する (06)
function drawScore() {
    
}

function kirby(x, y, radius, angle) {
    push();
    translate(x, y);
    rotate(angle);

    stroke("black");
    fill("#F8BBD0");
    circle(0, 0, radius * 2);

    fill("black");
    ellipse(-8, -5, 8, 15);
    ellipse(8, -5, 8, 15);

    fill("white");
    ellipse(-8, -7, 6, 8);
    ellipse(8, -7, 6, 8);

    noStroke();
    fill("#EC407A");
    ellipse(-18, 2, 12, 6);
    ellipse(18, 2, 12, 6);

    pop();
}

function monsterBall(x, y, radius, angle) {
    push();
    translate(x, y);
    rotate(angle);

    fill("red");
    circle(0, 0, radius * 2);
    fill("white");
    arc(0, 0, radius * 2, radius * 2, 0, 180);

    strokeWeight(floor(radius / 10));
    fill("black");
    line(-radius + 3, 0, radius - 3, 0);
    fill("white");
    circle(0, 0, radius / 2);

    pop();
}
