/**
 * Created by Lyubov on 02.12.2015.
 */
elem = document.getElementById('container');

function handler(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.id);
    if (event.target.id == 'red') {console.log("Красненький квадратик");}
    if (event.target.id == 'yellow') {console.log("Желтенький квадратик");}
    if (event.target.id == 'green') {console.log("Зелененький квадратик");}

    return false;
}
elem.addEventListener('click',handler,false);