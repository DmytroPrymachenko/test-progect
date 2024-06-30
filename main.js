document.addEventListener("DOMContentLoaded", function () {
  const testButton = document.getElementById("test");
  const testNumber = document.getElementById("testnumber");

  testButton.addEventListener("click", () => {
    let currentValue = parseInt(testNumber.textContent);
    testNumber.textContent = currentValue + 1;
  });
});
