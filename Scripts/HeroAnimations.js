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

    // Check if mobile/tablet - disable 3D sphere for performance
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // Hide canvas on mobile for performance
        canvas.style.display = 'none';
        return;
    }

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    // Limit pixel ratio to max 2 for performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

    // Geometry - Morphing Sphere (reduced from 64 to 24 for performance)
    const geometry = new THREE.IcosahedronGeometry(2, 24);
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
    let lastTime = 0;
    const frameInterval = 1000 / 30; // Limit to 30fps for morphing calculations

    function animate(time) {
        requestAnimationFrame(animate);

        // Throttle morphing calculations
        if (time - lastTime >= frameInterval) {
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
            lastTime = time;
        }

        sphere.rotation.y += 0.005;
        sphere.rotation.x += 0.002;

        if (window._konamiActive) {
          sphere.rotation.y += 0.12;
          sphere.rotation.x += 0.06;
        }

        renderer.render(scene, camera);
    }

    animate(0);

    window.addEventListener('resize', () => {
        // Check if resized to mobile
        if (window.innerWidth <= 768) {
            canvas.style.display = 'none';
            return;
        }
        canvas.style.display = 'block';
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function initScrollAnimations() {
    // Disable ALL scroll animations on mobile/tablet for performance
    const isMobile = window.innerWidth <= 992 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // Skip all GSAP animations on mobile
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Profile Pic Zoom - desktop only
    gsap.to('.profile-img-container', {
        scale: 1.3,
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            end: 'top top',
            scrub: true
        }
    });

    // Section reveals - desktop only
    gsap.utils.toArray('section').forEach(section => {
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
