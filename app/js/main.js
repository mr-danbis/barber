document.addEventListener("DOMContentLoaded", function () {
  class Slider {
    constructor(owlElement, owlOptions) {
      this.owlElement = owlElement;
      this.owlOptions = owlOptions;
    }

    addSlider(owlElement, owlOptions) {
      $(owlElement).owlCarousel(owlOptions);
    }
  }
  const gallerySlider = new Slider();
  

  gallerySlider.addSlider(".gallery__slider", {
    responsive: {
      0: {
        items:1,
        margin: 10,
      },

      500: {
        items: 2,
        margin: 10,
      },

      750: {
        items: 3,
        margin: 20,
      },

      1300: {
        items: 4,
        margin: 40,
      },
    },
  });

  
});
