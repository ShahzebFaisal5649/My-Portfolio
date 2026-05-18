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

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    // Limit pixel ratio to max 2 for performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 4;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Gold tinted light
    const pointLight = new THREE.PointLight(0xC9A84C, 3, 10);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(0xE8C97A, 2, 10);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Geometry - Morphing Sphere
    const geometry = new THREE.IcosahedronGeometry(2, 32); // Increased detail for fluid look
    
    // Liquid Gold Material
    const material = new THREE.MeshPhysicalMaterial({
        color: 0xC9A84C,
        emissive: 0x8B6914,
        emissiveIntensity: 0.2,
        roughness: 0.1,
        metalness: 0.9,
        transmission: 0.6,
        thickness: 1.0,
        transparent: true,
        opacity: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        ior: 2.5
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Gold Particle Trails
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const goldColor = new THREE.Color('#F5E3A0');
    
    for(let i=0; i<particleCount*3; i+=3) {
        const radius = 2.5 + Math.random() * 0.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        positions[i] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i+1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i+2] = radius * Math.cos(phi);
        
        colors[i] = goldColor.r;
        colors[i+1] = goldColor.g;
        colors[i+2] = goldColor.b;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

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

                const noise = Math.sin(x * 1.5 + time * 0.001) *
                    Math.cos(y * 1.5 + time * 0.001) *
                    Math.sin(z * 1.5 + time * 0.001) * 0.25;

                positions[i] = x * (1 + noise);
                positions[i + 1] = y * (1 + noise);
                positions[i + 2] = z * (1 + noise);
            }
            geometry.attributes.position.needsUpdate = true;
            lastTime = time;
        }

        sphere.rotation.y += 0.002;
        sphere.rotation.x += 0.001;
        
        particles.rotation.y += 0.003;
        particles.rotation.x += 0.001;

        if (window._konamiActive) {
          sphere.rotation.y += 0.12;
          sphere.rotation.x += 0.06;
          particles.rotation.y += 0.15;
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
        const revealElements = section.querySelectorAll('.section-header, .about-content-centered, .about-info-centered, .project-card, .timeline-item, .cert-card, .skill-category');

        if (revealElements.length > 0) {
            gsap.from(revealElements, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 90%',
                }
            });
        }
    });
}
