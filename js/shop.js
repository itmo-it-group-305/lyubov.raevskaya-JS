/**
 * Created by Lyubov on 14.12.2015.
 */
jQuery(document).ready(function() {
    //alert ("Работает!");
function Basket () {
    this.price = 0;
    var t = this;
    this.init = function () {
        jQuery ('.button').on('click', this.addGoods);
        jQuery ('body').on('click', '.del', this.delGoods);
    };

    this.addGoods = function(e) {

        var elm = jQuery(e.toElement);
        var name = elm.attr('name');
        var price = elm.attr('price');


        var str = "<span>" + "  " + name + "  " + "<input class='num' type='text'>" + "  " + price  + "  " + "<button class='del'>x</button>" + "  " + "</span>" + "<br>";
        jQuery('#basket').append(jQuery(str));
        console.log(t.price);
        t.reculcPrice(+price);
        //this.addRecord();
        console.log (this);
    };
        this.delGoods = function(e) {
        //var elm = jQuery(e.toElement);
        jQuery(this).parent('span').remove();

            t.price= t.price-price;
        t.reculcPrice(-price);
    };
    this.reculcPrice = function(value) {
        t.price = t.price+value;

        var itog = "<span>" + "  " + "Итого" + "  " + t.price + "</span>";

        jQuery('#price').html(itog);

    };
    console.log (this);

        this.changeAmount = function() {

    };
        this.discount = function() {

    };
        this.print = function(e) {

    };
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
};
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
