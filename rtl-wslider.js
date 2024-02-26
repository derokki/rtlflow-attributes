// [RTLflow Attributes by Derokki] RTL Webflow Slider
// Attribute: "rf-reverse-wslider" = "slider-manual" or "slider-auto"
// Set on Main Slider Component. This code elegantly reverses the Slider Mask direction, ensuring RTL compatibility.
// "slider-auto" intelligently sets the dir attribute on each slide, aligning with the HTML dir attribute.
// "slider-manual" requires manual setting of the dir attribute on each slide for individual locale control.

document.addEventListener("DOMContentLoaded", function() {
  // Check if the HTML tag has a "dir" attribute set to "rtl"
  const dirAttribute = document.documentElement.getAttribute('dir');

  if (dirAttribute === 'rtl') {
    // Select all elements with the rf-reverse-wslider attribute set to "slider-manual" or "slider-auto"
    const sliders = document.querySelectorAll('[rf-reverse-wslider="slider-manual"], [rf-reverse-wslider="slider-auto"]');

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

      // If rf-reverse-wslider is set to "slider-auto", add dir="rtl" attribute to all children of .w-slider-mask
      if (slider.getAttribute('rf-reverse-wslider') === 'slider-auto') {
        slideChildren.forEach(child => {
          if (child) {
            child.setAttribute('dir', 'rtl');
          }
        });
      }
    });
  }
});
