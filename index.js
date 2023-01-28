const backToHome = document.querySelector(".back-to-home");
const observerTarget = document.querySelector("#home");

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 900) {
//     backToHome.style.visibility = "visible";
//   } else {
//     backToHome.style.visibility = "hidden";
//   }
// });

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      backToHome.classList.add("visible");
    } else {
      backToHome.classList.remove("visible");
    }
  });
});
observer.observe(observerTarget);
