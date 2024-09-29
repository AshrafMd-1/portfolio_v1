import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const lenis = new Lenis();

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);
const elementsDivs = document.querySelectorAll(".elem");

elementsDivs.forEach((elem) => {
  const image = elem.querySelector("img");
  const tl = gsap.timeline();
  const xTransform = gsap.utils.random(-100, 100);

  tl.set(image, { transformOrigin: `${xTransform < 0 ? 0 : "100%"}` })
    .to(
      image,
      {
        scale: 0,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
      "start",
    )
    .to(elem, {
      xPercent: xTransform,
      ease: "none",
      scrollTrigger: {
        trigger: image,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
});
