import Glide from "@glidejs/glide";

var glide = new Glide("#glide", {
    type: "slider",
    startAt: 0,
    perView: 1,
    focusAt: "center",
    touchAngle: 30,
    swipeThreshold: 40,
    breakpoints: {
        800: {
            perView: 2,
        },
        480: {
            perView: 1,
        },
    },
});

glide.mount();
