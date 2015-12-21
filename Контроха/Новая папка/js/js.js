var template = '<h1>{{title}}</h1>{{#goods}}<div class="content"><h3>{{name}}</h3><p>{{image}}</p><p>{{description}}</p><button>{{but}}</div>{{/goods}}';
                

var data = { "title": "Goods",
    "goods": [
            {
                "name": "Name 1",
                "image": "image 1",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorum, facilis, id in laborum magni nihil officia perspiciatis porro praesentium quas quo sit suscipit. Nostrum porro quia quo quod voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
             
            {
                "name": "Name 2",
                "image": "image 2",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorum, facilis, id in laborum magni nihil officia perspiciatis porro praesentium quas quo sit suscipit. Nostrum porro quia quo quod voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            },
           
            {
                "name": "Name 3",
                "image": "image 3",
                "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorum, facilis, id in laborum magni nihil officia perspiciatis porro praesentium quas quo sit suscipit. Nostrum porro quia quo quod voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            }
        ],
  "but": "Добавить"
               };
var result = Mustache.render(template, data);
//var cont = document.getElementById('con');
//cont.innerHTML=template;
document.write(result);
                