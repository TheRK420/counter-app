const counter = document.getElementById("counter");
      const addbutton = document.getElementById("plus");
      const removebutton = document.getElementById("minus");
      const resetButton = document.getElementById("reset");

      let count = 0;

      addbutton.addEventListener("click", () => {
        count++;
        updateCounter();
        animateCounter();
      });

      removebutton.addEventListener("click", () => {
        if (count > 0) {
          count--;
          updateCounter();
          animateCounter();
        }
      });

      resetButton.addEventListener("click", () => {
        count = 0;
        updateCounter();
        animateCounter();
      });

      function updateCounter() {
        counter.textContent = count;
      }

      function animateCounter() {
        counter.classList.add("animate");
        setTimeout(() => {
          counter.classList.remove("animate");
        }, 300);
      }