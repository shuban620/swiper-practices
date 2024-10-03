const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'cube',
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// effect:
// Slide(default ): This is the default sliding effect where slides move horizontally or vertically.

//Fade: The slides fade in and out without moving.

//Cube: This effect creates a 3D cube rotation transition between slides.

//Coverflow: It creates a cover flow effect with depth and scaling, often used in galleries.

//Flip: The slides flip as if they are flipping cards in 3D space.

//Creative: This effect allows you to define custom transitions by combining various animations like scaling, translating, and rotating.

//Cards: Mimics card - like sliding, where slides stack and push over each other.

//Zoom: It allows zooming into slides when they are active, with zoom -in and zoom - out transitions.

//These effects can be customized further by adding parameters and using different configuration options.
// You can choose the one that fits the design and experience you want to create.



// direction:
// 1.horizontal
// 2.vertical
// loop: true/false
// pagination: true/false
// navigation: true/false
// scrollbar: true/false
