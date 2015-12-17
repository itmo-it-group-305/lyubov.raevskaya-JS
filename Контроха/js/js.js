/**
 * Created by Lyubov on 11.12.2015.
 */
var teml = "document.getElementById('content').innerHTML" +
    "<h1> {{#headers}}" +
    "<h6>{{#date}} {{/}} {{/accent}}</h6>" +
    "{{/headers}}" +
    "<img> {{#images}}" +
    "<p> {{#about}}";
var data = {
    headers : ["LAST DAY TO JOIN SEE UNIVERSITY","Free SeeU Preview – Jon Acuff Shoot", "7 Steps to Becoming a Working Photographer"],
    date: ["October 30, 2015", "October 29, 2015", "October 27, 2015"],
    accent: ["Announcements", "Announcements, Videos", "Announcements, workshops"],
    images: ['src="img/6A0ieupvyJcW8EpodL_tkux2Ex2zn7Dd96jMsMrxcR0.png"', 'src="img/2.jpg"', 'src="img/3.jpg"'],
    about: ["I have been a photographer for the past 10 years. Through lots of hard work, experimentation and risk, I've been able to make a good living being a full-time professional photographer. Over the years, I've learned a lot about building a high-demand photography business that gets frequent opportunities to shoot celebrities, rock stars, television and movie...", "Today, I'm doing something I've never done with See University: I'm offering one of the longest classes on the site for FREE. This is a full-length, 60-minute photoshoot featuring New York Times bestselling author (and my friend) Jon Acuff. This is really special because I've never offered such an in-depth preview for free before, and it will only be ...", "I’m really excited to talk about a new idea I’ve been working on. In fact, I’d love it if you’d join me as I present it in a FREE live webinar this Thursday at 6pm EST / 3pm PST. I’m calling it the 7 Steps to Becoming a Working Photographer. Click here to reserve a spot. I realize this is a very controversial-sounding topic in this indu..."]
};

var output = Mustache.to_html(teml,data);
document.write(output);

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
//
//var output = Mustache.to_html(teml,data);
//document.write(output);