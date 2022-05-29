const swiper = new Swiper('.swiper', {
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        630: {
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