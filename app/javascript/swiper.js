const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination1',
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper2-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        680: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,

        },

        950: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,

        },
        1325: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});



const swiper = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper3-button-next',
        prevEl: '.swiper3-button-prev',
    },

    breakpoints: {
        680: {
            slidesPerView: 2,
            slidesPerGroup: 2,

        },


        950: {
            slidesPerView: 3,
            slidesPerGroup: 3,

        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    }
});



