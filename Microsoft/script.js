const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const dotsContainer = document.querySelector('.dots');
    let index = 0;
    const total = images.length;

    // create dots
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot');

    function showSlide() {
      slides.style.transform = `translateX(${-index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    function nextSlide() {
      index = (index + 1) % total;
      showSlide();
    }

    function goTo(i) {
      index = i;
      showSlide();
      resetTimer();
    }

    let timer = setInterval(nextSlide, 5000);

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(nextSlide, 5000);
    }



    //Back to top button Code

      const backToTop = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollPosition > windowHeight / 5) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
