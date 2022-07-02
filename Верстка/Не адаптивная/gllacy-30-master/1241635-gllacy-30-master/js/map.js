var myMap;
ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса

function init() {
    myMap = new ymaps.Map("yandex-map", {
        center: [
            59.938635, 30.323118
        ], // Координаты центра карты
        zoom: 17 // Zoom
    }),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: "Собственный значок метки"
    }, {
        // Опции. Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "img/index/pin.svg",
        // Размеры метки.
        iconImageSize: [
            80, 140
        ],
        iconImageOffset: [-40, -140]
    });

    myMap.geoObjects.add(myPlacemark)
};