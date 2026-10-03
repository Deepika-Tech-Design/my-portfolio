/* =====================================================
   CHARACTER 3D TILT
   ===================================================== */

const interactiveCard =
    document.getElementById("characterImage");


document.addEventListener("mousemove", (event) => {

    if (!interactiveCard) return;


    const rect =
        interactiveCard.getBoundingClientRect();


    const centerX =
        rect.left + rect.width / 2;

    const centerY =
        rect.top + rect.height / 2;


    const distanceX =
        event.clientX - centerX;

    const distanceY =
        event.clientY - centerY;


    const rotateX =
        (distanceY / rect.height) * -20;

    const rotateY =
        (distanceX / rect.width) * 20;


    interactiveCard.style.transform =
        `rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;
});


document.addEventListener("mouseleave", () => {

    if (!interactiveCard) return;

    interactiveCard.style.transform =
        "rotateX(0deg) rotateY(0deg)";
});


/* =====================================================
   SNOW
   ===================================================== */

const snowContainer =
    document.getElementById("snowContainer");


const snowCount = 90;


for (let i = 0; i < snowCount; i++) {

    const snowflake =
        document.createElement("div");


    snowflake.className =
        "snowflake";


    const size =
        Math.random() * 5 + 2;


    snowflake.style.width =
        size + "px";


    snowflake.style.height =
        size + "px";


    snowflake.style.left =
        Math.random() * 100 + "%";


    snowflake.style.opacity =
        Math.random() * 0.7 + 0.3;


    snowflake.style.animationDuration =
        Math.random() * 8 + 6 + "s";


    snowflake.style.animationDelay =
        Math.random() * 10 + "s";


    snowContainer.appendChild(
        snowflake
    );
}


/* =====================================================
   PARTICLES
   ===================================================== */

const particleContainer =
    document.getElementById("particleContainer");


for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("div");


    particle.className =
        "particle";


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.animationDuration =
        Math.random() * 12 + 8 + "s";


    particle.style.animationDelay =
        Math.random() * 10 + "s";


    particleContainer.appendChild(
        particle
    );
}


/* =====================================================
   LIGHTNING
   ===================================================== */

const lightningElements =
    document.querySelectorAll(".lightning");


function createLightning() {

    const randomLightning =
        lightningElements[
            Math.floor(
                Math.random() *
                lightningElements.length
            )
        ];


    randomLightning.classList.remove(
        "active"
    );


    void randomLightning.offsetWidth;


    randomLightning.classList.add(
        "active"
    );
}


/* Random lightning */

setInterval(() => {

    if (Math.random() > 0.45) {

        createLightning();

    }

}, 3500);


/* =====================================================
   BACKGROUND VIDEO PARALLAX
   ===================================================== */

const backgroundVideo =
    document.querySelector(
        ".background-video"
    );


window.addEventListener("scroll", () => {

    if (!backgroundVideo) return;


    const scroll =
        window.scrollY;


    backgroundVideo.style.transform =
        `scale(1.04)
         translateY(${scroll * 0.025}px)`;
});


/* =====================================================
   NUMBER COUNTER
   ===================================================== */

const statNumbers =
    document.querySelectorAll(
        ".stat-card strong"
    );


const observer =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;


                const element =
                    entry.target;


                const target =
                    Number(
                        element.dataset.target
                    );


                let current = 0;


                const increment =
                    Math.max(
                        1,
                        Math.ceil(
                            target / 50
                        )
                    );


                const counter =
                    setInterval(() => {

                        current += increment;


                        if (current >= target) {

                            current =
                                target;

                            clearInterval(
                                counter
                            );

                        }


                        element.textContent =
                            current + "+";

                    }, 30);


                observer.unobserve(
                    element
                );

            });

        },
        {
            threshold: 0.6
        }
    );


statNumbers.forEach(
    number => observer.observe(number)
);


/* =====================================================
   REVEAL ANIMATION
   ===================================================== */

const revealElements =
    document.querySelectorAll(
        ".glass-card, .stat-card, .skill-card, .service-card, .project-card, .contact-box"
    );


revealElements.forEach(
    element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    }
);


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    element =>
        revealObserver.observe(element)
);


/* =====================================================
   VIDEO AUTOPLAY
   ===================================================== */

if (backgroundVideo) {

    backgroundVideo
        .play()
        .catch(() => {
            // Browser may delay autoplay.
        });

}


/* =====================================================
   NAVBAR ACTIVE GLOW
   ===================================================== */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.forEach(
                item =>
                    item.style.textShadow =
                        "none"
            );


            link.style.textShadow =
                "0 0 12px #00d2ff";

        }
    );

});