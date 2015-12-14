/**
 * Created by Lyubov on 11.12.2015.
 */
//var teml = "<h1>{{header}}</h1> <p>{{{content}}}</p>" +
//    "<ul> {{#authors}}" +
//    "<li>{{#accent}} {{.}} {{/accent}}</li>" +
//    "{{/authors}}" +
//    " {{^authors}} <li>anonymous</li> {{/authors}}" +
//    "</ul>";
//var data = {
//    header : "Новый пост",
//    content: "Первая строка <br/> вторая",
//    authors: ["alex", "daemon", "john"],
//    accent : function () {
//        return function (text, render) {
//            text = render(text);
//            return '<strong>' + text + '</strong>';
//        }
//    }
//};

//var output = Mustache.to_html(teml,data);
//document.write(output);

var teml = "<h1>{{header}}</h1> <p>{{{content}}}</p>" +
    "<ul> {{#authors}}" +
    "<li>{{#accent}} {{.}} {{/accent}}</li>" +
    "{{/authors}}" +
    " {{^authors}} <li>anonymous</li> {{/authors}}" +
    "</ul>";
var data = {
    header : "Новый пост",
    content: "Первая строка <br/> вторая",
    authors: ["alex", "daemon", "john"],
    accent : function () {
        return function (text, render) {
            text = render(text);
            return '<strong>' + text + '</strong>';
        }
    }
};

var output = Mustache.to_html(teml,data);
document.write(output);