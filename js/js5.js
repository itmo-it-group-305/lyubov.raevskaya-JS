/**
 * Created by Lyubov on 04.12.2015.
 */
//setInterval('alert("Прошла секнда")',1000);
function  sec() {
    alert("Прошла секунда");
}
var intervalID = setInterval(sec, 1000);
clearInterval(intervalID);