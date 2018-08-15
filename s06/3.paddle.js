var s06moving;
(function (s06moving) {
    var board = document.querySelector('#board');
    var ctx = board.getContext('2d');
    var ballx = 400;
    var bally = 300;
    var ballDx = -15;
    var ballDy = -15;
    function drawBall() {
        ctx.beginPath();
        ctx.arc(ballx, bally, 10, 0, Math.PI * 2, false);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
    var paddleX = board.width / 2;
    var paddleW = 100;
    var paddleH = 20;
    var paddleY = 550;
    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX - paddleW / 2, paddleY, paddleW, paddleH);
        ctx.fillStyle = "#eee";
        ctx.fill();
        ctx.closePath();
    }
    var leftpressed = false;
    var rightpressed = false;
    window.onkeydown = function (evt) {
        if (evt.keyCode == 37) {
            leftpressed = true;
        }
        else if (evt.keyCode == 39) {
            rightpressed = true;
        }
    };
    window.onkeyup = function (evt) {
        if (evt.keyCode == 37) {
            leftpressed = false;
        }
        else if (evt.keyCode == 39) {
            rightpressed = false;
        }
    };
    function draw() {
        ctx.clearRect(0, 0, board.width, board.height);
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
            paddleX -= 10;
        }
        if (rightpressed) {
            paddleX += 10;
        }
    }
    var gameLoop = window.setInterval(draw, 45);
})(s06moving || (s06moving = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5wYWRkbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIzLnBhZGRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLFNBQVMsQ0FvRmxCO0FBcEZELFdBQVUsU0FBUztJQUNmLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFzQixDQUFDO0lBQ2xFLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakMsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUNoQixJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUNqQixJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUVqQjtRQUNJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN4QixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNsQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDakIsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBRWxCO1FBQ0ksR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRCxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN2QixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQztJQUN4QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDekIsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFDLEdBQUc7UUFDbkIsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUNuQixXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO2FBQ0ksSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQyxDQUFBO0lBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQUc7UUFDakIsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUNuQixXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQ0ksSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTtZQUN4QixZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQyxDQUFBO0lBRUQ7UUFDSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDOUMsUUFBUSxFQUFFLENBQUM7UUFDWCxVQUFVLEVBQUUsQ0FBQztRQUNiLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNsQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDaEI7UUFFRCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDaEI7UUFFRCxJQUFJLEtBQUssR0FBRyxPQUFPLEVBQUU7WUFDakIsSUFBSSxLQUFLLEdBQUcsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDO2dCQUM3QixLQUFLLEdBQUcsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNoQjtpQkFDSTtnQkFDRCxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsQztTQUNKO1FBRUQsS0FBSyxJQUFJLE1BQU0sQ0FBQztRQUNoQixLQUFLLElBQUksTUFBTSxDQUFDO1FBRWhCLElBQUksV0FBVyxFQUFFO1lBQ2IsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNqQjtRQUNELElBQUksWUFBWSxFQUFFO1lBQ2QsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUFDRCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoRCxDQUFDLEVBcEZTLFNBQVMsS0FBVCxTQUFTLFFBb0ZsQiJ9