// [RTLflow Attributes by Derokki] RTLflow Navbar Open
// Attribute (reverse on RTL): "rf-reverse-navbarmenu" = "rtl-navbar"
// Attribute (reverse on LTR): "rf-reverse-navbarmenu" = "ltr-navbar"
// Set on main Navbar element

document.addEventListener("DOMContentLoaded", function() {

	// Check if the HTML tag has a "dir" attribute set to "rtl"
	const dirAttribute = document.documentElement.getAttribute('dir');
	if (dirAttribute === 'rtl') {

		// Get all elements that either have the attribute Attribute: "rf-reverse-navbarmenu" = "navbar"
		const elements = document.querySelectorAll('[rf-reverse-navbarmenu="ltr-navbar"]');

		// Loop through each element and update attributes
		elements.forEach(element => {
		  const currentAnimation = element.getAttribute('data-animation');
			// Toggle between 'over-right' and 'over-left'
			element.setAttribute( 
    		'data-animation', currentAnimation === 'over-right' ? 'over-left' : 'over-right'
  	  );
		});
	}
  
  else if (dirAttribute === 'ltr') {

		// Get all elements that either have the attribute Attribute: "rf-reverse-navbarmenu" = "navbar"
		const elements = document.querySelectorAll('[rf-reverse-navbarmenu="rtl-navbar"]');

		// Loop through each element and update attributes
		elements.forEach(element => {
		  const currentAnimation = element.getAttribute('data-animation');
			// Toggle between 'over-right' and 'over-left'
			element.setAttribute( 
    		'data-animation', currentAnimation === 'over-right' ? 'over-left' : 'over-right'
  	  );
		});
	}
});
