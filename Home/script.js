document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".flashcard", {
        duration: 1.5,       // Animation duration in seconds
        opacity: 0,          // Starts from transparent
        y: 50,               // Starts 50 pixels below the final position
        ease: "power2.out"   // Easing function for a smooth effect
    });

    gsap.from(".navigation a", {
        duration: 1,         // Slightly faster duration for each link
        opacity: 0,
        y: 50,
        stagger: 0.2,        // Delays the start of each subsequent animation
        ease: "power2.out",
        delay: 0.5           // Delay the start of this animation after the card
    });
});
