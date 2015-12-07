/**
 * Created by Lyubov on 02.12.2015.
 */
var city = [];
city[100] = 'Санкт-Петербург';
city[200] = 'Москва';
city[300] = 'Новгород';
parent = document.getElementById('city');
function buildOption (val, name) {
    var node = document.createElement('option');
    node.setAttribute('value',val);
    node.innerHTML = name;
    return node;
}
    for (i in city) {
        child = buildOption(i, city[i]);
        parent.appendChild(child);
    }

document.getElementById('button').onclick = function(){alert('Клик!');}

function doSomething(event) {
    console.log(event);
}
button.onclick = doSomething;
