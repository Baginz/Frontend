window.onload = function () {
    var navBarToggler = document.querySelector('.header__menu-toggle');
    var navBarClassList = document.querySelector('.header__menu-list').classList;

    navBarToggler.addEventListener('click', function () {
        navBarClassList.toggle('open');
    });

    window.addEventListener('resize', function (event) {
        if (event.target.outerWidth > 767 && navBarClassList.contains('open')) {
            navBarClassList.remove('open');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};