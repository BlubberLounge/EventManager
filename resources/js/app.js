import "./bootstrap";
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

const animateCSS = (element, animation, prefix = "animate__") =>
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve("Animation ended");
        }

        node.addEventListener("animationend", handleAnimationEnd, {
            once: true,
        });
    });
