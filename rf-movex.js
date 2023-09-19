// [RTLflow Attributes by Derokki] RTLflow Move X
// Attribute (reverse on RTL): "rf-reverse-movex" = "rtl-element"
// Attribute (reverse on LTR): "rf-reverse-movex" = "ltr-element"
// set on element where you want to reverse Transform Move X

document.addEventListener('DOMContentLoaded', () => {

// Check if the HTML tag has a "dir" attribute set to "rtl"
const dirAttribute = document.documentElement.getAttribute('dir');
	if (dirAttribute === 'rtl') {

      const elements = document.querySelectorAll('[rf-reverse-movex="rtl-element"]');

      elements.forEach(element => {
        const transformValue = getComputedStyle(element).transform;
        const matrixValues = transformValue.match(/matrix\(([^\)]+)\)/)[1].split(', ');

        if (matrixValues.length >= 6) {
          const a = parseFloat(matrixValues[0]);
          const b = parseFloat(matrixValues[1]);
          const c = parseFloat(matrixValues[2]);
          const d = parseFloat(matrixValues[3]);
          const e = parseFloat(matrixValues[4]);
          const f = parseFloat(matrixValues[5]);

          // Apply modification to translateX (e) while keeping other values unchanged
          element.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${-e}, ${f})`;
        }
      });
	}
  
  else if (dirAttribute === 'ltr') {

      const elements = document.querySelectorAll('[rf-reverse-movex="ltr-element"]');

      elements.forEach(element => {
        const transformValue = getComputedStyle(element).transform;
        const matrixValues = transformValue.match(/matrix\(([^\)]+)\)/)[1].split(', ');

        if (matrixValues.length >= 6) {
          const a = parseFloat(matrixValues[0]);
          const b = parseFloat(matrixValues[1]);
          const c = parseFloat(matrixValues[2]);
          const d = parseFloat(matrixValues[3]);
          const e = parseFloat(matrixValues[4]);
          const f = parseFloat(matrixValues[5]);

          // Apply modification to translateX (e) while keeping other values unchanged
          element.style.transform = `matrix(${a}, ${b}, ${c}, ${d}, ${-e}, ${f})`;
        }
      });
	}
});
