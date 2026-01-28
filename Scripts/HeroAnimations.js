/**
 * HeroAnimations.js
 * Handles 3D Morphing Sphere and Scroll Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeroSphere();
    initScrollAnimations();
});

function initHeroSphere() {
    const canvas = document.querySelector('#hero-canvas');
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xcbff00, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Geometry - Morphing Sphere
    const geometry = new THREE.IcosahedronGeometry(2, 64);
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        roughness: 0,
        metalness: 0.1,
        transmission: 1,
        thickness: 0.5,
        transparent: true,
        opacity: 0.5,
        clearcoat: 1,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Initial positions for morphing
    const initialPositions = geometry.attributes.position.array.slice();

    function animate(time) {
        requestAnimationFrame(animate);

        const positions = geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            const x = initialPositions[i];
            const y = initialPositions[i + 1];
            const z = initialPositions[i + 2];

            const noise = Math.sin(x * 2 + time * 0.001) *
                Math.cos(y * 2 + time * 0.001) *
                Math.sin(z * 2 + time * 0.001) * 0.2;

            positions[i] = x * (1 + noise);
            positions[i + 1] = y * (1 + noise);
            positions[i + 2] = z * (1 + noise);
        }
        geometry.attributes.position.needsUpdate = true;

        sphere.rotation.y += 0.005;
        sphere.rotation.x += 0.002;

        renderer.render(scene, camera);
    }

    animate(0);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Profile Pic Zoom
    gsap.to('.profile-img-container', {
        scale: 1.5,
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'top top',
            scrub: true
        }
    });

    // Section reveals
    gsap.utils.toArray('section').forEach(section => {
        // Find revealable elements (excluding headers if they have visibility issues)
        const revealElements = section.querySelectorAll('.about-content-centered, .about-info-centered, .project-card, .timeline-item');

        if (revealElements.length > 0) {
            gsap.from(revealElements, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                }
            });
        }
    });
}
