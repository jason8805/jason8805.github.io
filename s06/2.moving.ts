namespace s06moving {
    let board = document.querySelector('#board') as HTMLCanvasElement;
    let ctx = board.getContext('2d');

    let ballx = 400;
    let bally = 300;
    let ballDx = -10;
    let ballDy = -10;

    function drawBall() {
    ctx.beginPath();
    ctx.arc(ballx, bally, 20, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}
function draw(){
    ctx.clearRect(0, 0, board.width, board.height) 
    drawBall();
    if (ballx < 0 || ballx > 800){
        ballDx *= -1;
    }
    if (bally < 0 || bally > 600){
        ballDy *= -1;
    }
    ballx += ballDx;
    bally += ballDy;
}
window.setInterval(draw, 30);
}