/**
 * Created by А on 01.10.2015.
 */
var priceWidget = {
    price: { //Price for calculation. Won't change.
        econom: 100,
        medium: 200,
        premium: 300
    },
    newPrice: { //User setted price. Will be changed.
        econom,
        medium,
        premium
    },
    currency: { //Currency for calculation. Won't change.
        usd: 1,
        hrn: 22.5,
        ru: 68.49,
        euro: 0.9,
        yen: 6.36,
        bitcoin: 0.0041
    },
    order: {
        id: '', //Will help to show the user, which product has been chosen.
        product: ''
    },
    changeCurrency: function () { //If user changes currency, then set new values to it in newPrice and refresh button values.
        priceWidget.newPrice.econom = (priceWidget.price.econom * priceWidget.currency[userCurrency]).toFixed(2);
        priceWidget.newPrice.
            medium = (priceWidget.price.medium * priceWidget.currency[userCurrency]).toFixed(2);
        priceWidget.newPrice.premium = (priceWidget.price.premium * priceWidget.currency[userCurrency]).toFixed(2);


        $('#econom').text(priceWidget.newPrice.econom + " " + userCurrency); //Change price on buttons.
        $('#medium').text(priceWidget.newPrice.medium + " " + userCurrency);
        $('#premium').text(priceWidget.newPrice.premium + " " + userCurrency);
    },
    sendOrder: function () { //Put user setted values in the 'order' object and alert 'order' object.
        if (priceWidget.order.product == "") { //If order variable is empty.
            alert("Заказ не может быть принят. Выберите сначала товар.");
        } else {
            alert("Спасибо. Вы заказали " + priceWidget.order.id + ". Общая стоимость составит " + priceWidget.order.product);

        }
    }
}




/*If currency was changed.*/
$('select#currencyType').on('change', function () {
    userCurrency = $(this).val(); //Set new currency.
    priceWidget.changeCurrency();
});

/*If product has been chosen.*/
$('button.priceWidget-order').on('click', function () {
    priceWidget.order.product = $(this).text();
    priceWidget.order.id = $(this).attr('id')
});

/*If order was cliked.*/
$('input#order').on('click', function () {
    priceWidget.sendOrder();
});