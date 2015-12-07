/**
 * Created by Lyubov on 04.12.2015.
 */
function greenOn(){

    var gr = document.getElementById('green');
    gr.style.backgroundColor='green';
}
//var time = Date.now();
//var intervalGr = setInterval(greenOn(), 1000);
window.setInterval(greenOn, 1000);
//if (time == 1000)
//var intervalID
//clearInterval(intervalID);

function redOn(){

    var rd = document.getElementById('red');
    rd.style.backgroundColor='red';
}

window.setInterval(redOn, 2000);

clearInterval(intervalID);