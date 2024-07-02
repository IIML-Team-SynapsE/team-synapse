AOS.init();

VANTA.NET({
	el: '#vanta-background',
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.0,
	minWidth: 200.0,
	scale: 1.0,
	scaleMobile: 1.0,
	color: 0x1a276c,
	backgroundColor: 0x0a192f,
	points: 8.0,
	maxDistance: 25.0,
	spacing: 20.0,
});

document.querySelector('.scroll-arrow').addEventListener('click', function (e) {
	e.preventDefault();
	const aboutSection = document.querySelector('#about');
	aboutSection.scrollIntoView({ behavior: 'smooth' });
});

// const modeToggle = document.getElementById('mode-toggle');
// const body = document.body;

// modeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');

//     // Update Vanta effect colors for dark mode
//     if (body.classList.contains('dark-mode')) {
//         vantaEffect.setOptions({
//             color: 0x64b5f6,
//             backgroundColor: 0x1a237e
//         });
//     } else {
//         vantaEffect.setOptions({
//             color: 0x3f51b5,
//             backgroundColor: 0x0a192f
//         });
//     }
// });

// const modeToggle = document.getElementById('mode-toggle');
// const body = document.body;

// modeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
// });

// particlesJS('particles-js', {
//     particles: {
//         number: { value: 80, density: { enable: true, value_area: 800 } },
//         color: { value: "#ffffff" },
//         shape: { type: "circle" },
//         opacity: { value: 0.5, random: false },
//         size: { value: 3, random: true },
//         line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
//         move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
//     },
//     interactivity: {
//         detect_on: "canvas",
//         events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
//         modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
//     },
//     retina_detect: true
// });
