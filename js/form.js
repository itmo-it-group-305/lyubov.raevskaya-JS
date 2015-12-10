/**
 * Created by Lyubov on 04.12.2015.
 */
var form = {
    tag: 'form',
        child: [{tag: 'button', text: 'x', id: 'close'},
            {tag: 'label', text: 'Имя'},
            {tag: 'input', type: 'text', id: 'name'},
            {tag: 'label', text: 'Телефон'},
            {tag: 'input', type: 'text', id: 'telephone'},
            {tag: 'label', text: 'e-mail'},
            {tag: 'input', type: 'text', id: 'email'},
            {tag: 'button', text: 'Отправить', id: 'send'}
        ]
};
function builderHtml(obj) {
    for (i in obj) {
        if (i=='tag') {
            elm = document.createElement(obj[i]);
        }
        if (i=='text') {
            elm.innerHTML = obj[i];
        }
        if(i=='type' || i=='id'){
            elm.setAttribute(i, obj[i]);
        }
    }
    return elm;
    }

function buildForm (obj) {
    for (i in obj) {

        if (i=='tag'){
            parent = document.createElement(obj[i]);

        }

        if (i=='child'){

            for (j in obj.child) {
                console.log('child');
                var br = document.createElement('br');
                parent.appendChild(builderHtml(obj.child[j]));
                parent.appendChild(br);
            }
        }

    }
    return parent;

}
parent = document.getElementById('form');
parent.appendChild(buildForm(form));

//напишем функцию, которая будет проверять, что все поля заполнены

function checkEmptyField (field) {
    //if(field.value) return true;
    //или:
    return Boolean(field.value);
}
//получение полей формы
document.getElementById('send').onclick =
    function getFieldForm(){
    var field = ['name', 'telephone', 'email'];
    for (i in field) {

        var obj = document.getElementById(field[i]);

        if (checkEmptyField(obj)) {
            // 1. снять красную рамку
            obj.style.borderColor = "green";
            obj.style.backgroundColor = "none";

        }
        else {
            //установить красную рамку
            obj.style.borderColor = "red";
            obj.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
            continue; //если поле пустое, нет смысла выполнять код дальше
        }
        if (field[i] == 'telephone') {
            console.log(checkPhone(obj));
            if (checkPhone(obj.value)) {

                obj.style.borderColor = "green";
                obj.style.backgroundColor = "none";
            }
            else {

                obj.style.borderColor = "red";
                obj.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
            }

        }
         if (field[i] == 'email') {
            console.log(checkEmail(obj));
            if (checkEmail(obj.value)) {

                obj.style.borderColor = "green";
                obj.style.backgroundColor = "none";
            }
            else {

                obj.style.borderColor = "red";
                obj.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
            }

        }
    }
    return false;
};
function checkPhone (str) {
    ptr = /\b7\(\d{3}\)\d{3}-\d{2}-\d{2}\b/;
    return ptr.test(str);
}
function checkEmail (str) {
    ptr = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;
    return ptr.test(str);
}
document.getElementById('close').onclick =
    function closeForm() {
var forma = document.getElementById('form');
    forma.style.display = "none";
    return false;
}