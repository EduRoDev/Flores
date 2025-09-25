onload = () => {
    // Timeline principal para controlar toda la secuencia
    const tl = gsap.timeline();
    
    // Animación de las letras apareciendo una por una
    tl.to(".letter", {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "back.out(1.7)",
        stagger: 0.1, // Cada letra aparece con 0.1s de diferencia
    })
    // Las letras permanecen visibles por 2 segundos
    .to({}, { duration: 2 })
    // Las letras desaparecen con una animación elegante
    .to(".letter", {
        duration: 0.6,
        opacity: 0,
        y: -30,
        scale: 0.8,
        ease: "power2.in",
        stagger: 0.05,
    })
    // Callback para mostrar las flores después de que desaparezcan las letras
    .call(() => {
        document.body.classList.remove("container");
    });
};
