/**
 * Created by Lyubov on 14.12.2015.
 */
jQuery(document).ready(function() {
    //alert ("Работает!");

jQuery('body').on('click', '.button', function (e) {
    var elm = jQuery(e.toElement);
   var name = elm.attr('name');
    var price = elm.attr('price');

    console.log(price);
    var str = "<span>" + "  " + name + "  " + "<input class='num' type='text'>" + "  " + price + "  " + "</span>" + "  " + "<button class='del'>x</button>" + "<br>";
    jQuery('#basket').append(jQuery(str));
    var sum = parseInt('price'*'.num');
    var itog = "<span>" + "  " + "Итого" + "  " + sum + "</span>";
    jQuery('#basket').append(jQuery(itog));
    //jQuery('#basket').on('click', ".del", function(e) {
    //    jQuery('#basket').remove(str);
    //    });
});

//jQuery(e.toElement).attr('name');

});
