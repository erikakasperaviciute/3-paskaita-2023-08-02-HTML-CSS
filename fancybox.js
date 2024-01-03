import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";

import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import "./style.css";

const container = document.getElementById("myCarousel");
const options = {
  Thumbs: {
    type: "modern",
  },
};

new Carousel(container, options, { Thumbs });

// new Carousel(
//   document.getElementById("myCarousel"),
//   {
//     // Custom Carousel options
//     Dots: false,
//   },
//   {
//     Thumbs,
//   }
// );

Fancybox.bind('[data-fancybox="gallery"]', {
  // Custom Fancybox options
});
