document.addEventListener("DOMContentLoaded", function () {
  const colorsSelect = document.querySelector("#colors");

  // Initial update based on the selected value
  updateColor();

  // Add event listener for changes in the select element
  colorsSelect.addEventListener("change", updateColor);

  function updateColor() {
    const selectedColor = colorsSelect.value;
    console.log(selectedColor);

    if (selectedColor) {
      document.body.style.backgroundColor = selectedColor;
    }
  }
});
