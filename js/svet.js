/**
 * Created by Lyubov on 04.12.2015.
 */
function On(){

    var gr = document.getElementById('green');
    var rd = document.getElementById('red');
    if (gr.style.backgroundColor != 'green') { 
        gr.style.backgroundColor = 'green';
    rd.style.backgroundColor = 'rgba(225, 0, 0, 0.3)'}
    else { rd.style.backgroundColor = 'red';
         gr.style.backgroundColor = 'rgba(0, 128, 0, 0.3)'}
}

window.setInterval(On, 1000);


/*function redOn(){

    
    rd.style.backgroundColor='red';
}

window.setInterval(redOn, 2000);*/

//clearInterval(intervalID);