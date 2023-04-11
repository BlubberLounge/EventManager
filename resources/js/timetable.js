/**
 * @author Maximilian Mewes
 *
 *
 */
$(function() {
    const el = document.querySelector(".detectSticky")
    const observer = new IntersectionObserver(
      ([e]) => {
        let el = $(".timeTableUser");
        el.toggleClass("isStuck", e.intersectionRatio < 1);
    },
      { threshold: [1] }
    );

    observer.observe(el);
});
