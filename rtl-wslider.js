// [RTLflow Attributes by Derokki] RTL Webflow Slider
// Attribute: "rf-reverse-wslider" = "slider"
// Set on Main Slider Component. This Code reverses the Slider Mask direction. Make sure to develop Slider in an RTL-friendly way.

document.addEventListener("DOMContentLoaded", function() {
  // Check if the HTML tag has a "dir" attribute set to "rtl"
  const dirAttribute = document.documentElement.getAttribute('dir');

  if (dirAttribute === 'rtl') {
    // Select all elements with the rtl_slider attribute or the .rtl_slider-order class
    const sliders = document.querySelectorAll('[rf-reverse-wslider="slider"]');

    // Loop through each matching element
    sliders.forEach(slider => {
      // Get .w-slider-mask
      const sliderMask = slider.querySelector('.w-slider-mask');

      // Get every child of .w-slide and .w-slider-mask
      const slideChildren = slider.querySelectorAll('.w-slide > *, .w-slider-mask > *');

      // Rotate .w-slider-mask and all children by 180 degrees
      [sliderMask, ...slideChildren].forEach(child => {
        if (child) {
          child.style.transform = 'rotate(180deg)';
        }
      });
    });
  }
});
