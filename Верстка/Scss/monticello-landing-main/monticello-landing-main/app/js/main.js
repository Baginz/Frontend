$(function () {
    $('.header__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    $('.news__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $(".header__menu-toggle").on('click', function () {
        $(".header__menu-list").toggleClass("open");
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest('.header__menu-toggle').length) {
            return;
        }
        $(".header__menu-list").removeClass("open");
    });

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    var navBarClassList = document.querySelector('.header__menu-list').classList;

    window.addEventListener('resize', function (event) {
        if (event.target.outerWidth > 1130 && navBarClassList.contains('open')) {
            navBarClassList.remove('open');
        }
    });
});

// function initMap() {
//     const uluru = { lat: 49.10, lng: 24.02 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 8,
//         center: uluru
//     });

//     const marker = new google.maps.Marker({
//         position: { lat: 49.84, lng: 24.02 },
//         map: map,
//         icon: 'images/marker.png',
//         title: '91 Nolan'
//     });
//     const infowindow = new google.maps.InfoWindow({
//         content: 'Uniquely visualize distinctive web-readiness via cross-unit networks.',
//     });

//     marker.addListener("click", () => {
//         infowindow.open(map, marker);
//     });
// }

function initMap() {

    const uluru = { lat: 49.834, lng: 24.02 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
    });

    const marker = new google.maps.Marker({
        position: { lat: 49.84, lng: 24.02 },
        map: map,
        icon: 'images/marker.png',
        title: '91 Nolan'
    });
}















