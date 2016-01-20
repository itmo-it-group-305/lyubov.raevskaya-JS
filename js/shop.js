/**
 * Created by Lyubov on 14.12.2015.
 */
jQuery(document).ready(function() {
    //alert ("Работает!");
    var template = '{{#goods}}' +
        '<div class="tovar">' +
        '<img class="images" src="{{image}}">' +
        '<h3 class="name" >{{name}}</h3>' +
        '<span class="price">{{price}}</span>'+
        '<p class="description">{{description}}</p>' +
        '<button class="add" name="{{name}}" price="{{price}}">{{but}}' +
        '</div>' +
        '{{/goods}}';

    var data = { "goods": [
        {
            "image": "images/1.jpg",
            "name": "Яблоко",
            "price": "799",

            "description": "Плод яблони, который употребляется в пищу в свежем виде, служит сырьём в кулинарии и для приготовления напитков. Считается, что родиной яблони является Центральная Азия. Наибольшее распространение получила яблоня домашняя. На сегодняшний день существует множество сортов этого вида яблони, произрастающих в различных климатических условиях."
        },

        {
            "image": "images/2.jpg",
            "name": "Груша",
            "price": "999",
            "description": "Pод плодовых и декоративных деревьев и кустарников семейства Розовые. Слово груша в русских письменных источниках встречается с XII века в форме хруша. В XVII веке вместо «груша» употреблялось слово «дуля», заимствованное из польского языка от dula"
        },

        {
            "image": "images/3.png",
            "name": "Мандарин",
            "price": "599",
            "description": "Вечнозелёное растение, вид рода Цитрус (Citrus) семейства Рутовые; это же слово обозначает плод этого растения. Слово «мандарин» заимствовано в русский язык из испанского языка (вероятно, через французский язык). Испанское название mandarino образовано от se mondar («легко очищаться») и содержит указание на свойство кожуры плода легко отделяться от мякоти"
        }
    ],
        "but": "Добавить в корзину"
    };
    var html = Mustache.render(template, data);

    var result = document.getElementById('content');
    result.innerHTML = html;

    function Basket () {
    this.price = 0;
    var t = this;
    this.init = function () {

        jQuery('.add').on('click', this.addGoods);
        //jQuery('.add').on('click', function() {alert('dcdsc');});
        jQuery('body').on('click', '.del', this.delGoods);
        //jQuery('#ff').on('click', function() {alert('dcdsc');});
        jQuery('.val').on('click', '.del', this.changeAmount);
    };

    this.addGoods = function (e) {
        e.preventDefault();
        var name = jQuery(this).attr('name');
        //var price = elm.attr('price');
        var price = jQuery(this).attr('price');

        //console.log(name);
        //var tab = "<table class='tab'>" + "<tr>" + "<th>Наименование</th>" + "<th>Количество</th>" + "<th>Стоимость</th>" + "<th></th>" + "</tr>" + "</table>";
        //jQuery('#basket').append(jQuery(tab));
        //console.log(t.price);
        var str = "<tr id='line'>" + "<td>" + name + "</td>"  + "<td>" + "<input class='num' type='text'>" + "</td>"  + "<td id = 'val'>" + price + "</td>" + "<td>" + "<button class='del'>x</button>" + "</td>" + "</tr>";
        jQuery('.tab').show().append(jQuery(str));
        //    t.reculcPrice(+price)};
        t.reculcPrice(+price);
        //console.log (this);
    };
    this.delGoods = function (e) {
        //var elm = jQuery(e.toElement);
        jQuery(this).parent().parent('tr').remove();
        e.preventDefault();
        var delPrice = parseInt(document.getElementById('val').innerHTML);
        t.reculcPrice(-delPrice);
        //console.log(delPrice);
    };
    this.reculcPrice = function (value) {

        t.price = t.price + value;
        var itog = "<span class='sum'>" + "  " + "Сумма покупок:  "  + t.price + "  " + "p" + "</span>" + '<button class="post">' + 'Оформить заказ' + '</button>';

        jQuery('#itog').html(itog);
        jQuery('.post').show().append(jQuery());


    };
    //console.log (this);

    this.changeAmount = function (e) {
        e.preventDefault();
    var amount =  parseInt(document.getElementsByTagName('input').innerHTML);

        t.price = t.price*value;

        console.log (amount);
        jQuery('basket').html(data);
    };
    //this.discount = function () {
    //
    //};
    //this.print = function (e) {
    //
    //};
    //addRecord = function() {
    //    jQuery.ajax({
    //        'type': 'POST',
    //        'url':'/dir/myscript.php',
    //        'contentType': 'json',
    //        'data': {'login': jQuery('#login').val(),
    //        'passw': jQuery('#passw').val()},
    //        'cache': false,
    //        'succes': function (html) {
    //            if(html.length) {
    //
    //            }
    //        }
    //    });
    //}


}
    var bsk = new Basket('basket');
    bsk.init();
    console.log(bsk);
    });



//jQuery('body').on('click', '.button', function (e) {
//    var elm = jQuery(e.toElement);
//   var name = elm.attr('name');
//    var price = elm.attr('price');
//
//    console.log(price);
//    var str = "<span>" + "  " + name + "  " + "<input class='num' type='text'>" + "  " + price + "  " + "</span>" + "  " + "<button class='del'>x</button>" + "<br>";
//    jQuery('#basket').append(jQuery(str));
//    var sum = parseInt('price'*'.num');
//    var itog = "<span>" + "  " + "Итого" + "  " + sum + "</span>";
//    jQuery('#basket').append(jQuery(itog));
//    //jQuery('#basket').on('click', ".del", function(e) {
//    //    jQuery('#basket').remove(str);
//    //    });
//});
//
////jQuery(e.toElement).attr('name');
//
//});
