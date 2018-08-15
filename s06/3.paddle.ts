namespace s06moving {
    let board = document.querySelector('#board') as HTMLCanvasElement;
    let ctx = board.getContext('2d');

    let ballx = 400;
    let bally = 300;
    let ballDx = -15;
    let ballDy = -15;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(ballx, bally, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }

    let paddleX = board.width / 2;
    let paddleW = 100;
    let paddleH = 20;
    let paddleY = 550;

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX - paddleW / 2, paddleY, paddleW, paddleH);
        ctx.fillStyle = "#eee";
        ctx.fill();
        ctx.closePath();
    }

    let leftpressed = false;
    let rightpressed = false;
    window.onkeydown = (evt) => {
        if (evt.keyCode == 37) {
            leftpressed = true;
        }
        else if (evt.keyCode == 39) {
            rightpressed = true;
        }
    }

    window.onkeyup = (evt) => {
        if (evt.keyCode == 37) {
            leftpressed = false;
        }
        else if (evt.keyCode == 39) {
            rightpressed = false;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, board.width, board.height)
        drawBall();
        drawPaddle();
        if (ballx < 0 || ballx > board.width) {
            ballDx *= -1;
        }
        
        if (bally < 0) {
            ballDy *= -1;
        }

        if (bally > paddleY) {
            if (ballx > paddleX - paddleW / 2 &&
                ballx < paddleX + paddleW / 2) {
                ballDy *= -1;
            }
            else {
                alert("!Game Over For You!");
                window.clearInterval(gameLoop);
            }
        }

        ballx += ballDx;
        bally += ballDy;

        if (leftpressed) {
            paddleX -= 25;
        }
        if (rightpressed) {
            paddleX += 25;
        }
    }
    let gameLoop = window.setInterval(draw, 30);
}