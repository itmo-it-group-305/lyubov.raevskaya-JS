/**
 * Created by Lyubov on 04.12.2015.
 */
var form = {
    tag: 'form',
    jjj:4444,
        child: [{tag: 'button', text: 'x'},
            {tag: 'label', text: 'имя'},
            {tag: 'input', type: 'text', id: 'name'}

        ]
}
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
                parent.appendChild(builderHtml(obj.child[j]));

            }
        }

    }
    return parent;

}
parent = document.getElementById('form');
parent.appendChild(buildForm(form));