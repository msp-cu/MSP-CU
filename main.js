document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.getElementById('main-nav');

    menuBtn.addEventListener('click', function () {
        nav.classList.toggle('open');
        // Update aria-expanded for accessibility
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !expanded);
    });
});

function animateCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach((counter, index) => {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || "";
        let start = 0;
        const duration = 2000;
        const startTime = performance.now() + index * 300; // stagger each by 300ms

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            if (elapsed < 0) {
                requestAnimationFrame(updateCounter);
                return;
            }

            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.floor(eased * target);

            counter.innerText = value + (progress === 1 ? suffix : "");

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        // add fade-in + slide effect with delay
        setTimeout(() => {
            counter.classList.add("visible");
            requestAnimationFrame(updateCounter);
        }, index * 300); // delay matches stagger
    });
}

// Trigger only once on scroll
const impactSection = document.querySelector('.impact');
let started = false;

window.addEventListener('scroll', () => {
    const sectionTop = impactSection.offsetTop - window.innerHeight + 100;
    if (!started && window.scrollY > sectionTop) {
        animateCounters();
        started = true;
    }
});
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close when clicking outside modal
window.onclick = function(event) {
  document.querySelectorAll(".modal").forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
