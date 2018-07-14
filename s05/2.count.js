var counter = 0;
        function countup(){
            counter += 1;
            document.querySelector('#display').innerHTML = counter;
        }
        function countdown(){
            counter -= 1;
            document.querySelector('#display').innerHTML = counter;
        }

document.querySelector('#btnCountUp').onclick = () => {
    countup();
};

document.querySelector('#btnCountDown').onclick = () => {
    countdown();
};