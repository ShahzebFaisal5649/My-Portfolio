/* ═══════════════════════════════════════════════════════════
   NeuralBackground.js - 3D Neural Network with Three.js
   ═══════════════════════════════════════════════════════════ */

class NeuralBackground {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.init();
        this.animate();
        this.handleResize();
    }

    init() {
        const width = this.canvas.parentElement.offsetWidth;
        const height = this.canvas.parentElement.offsetHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.z = 400;

        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.group = new THREE.Group();
        this.scene.add(this.group);

        // Create nodes
        const nodeCount = 100;
        const geometry = new THREE.SphereGeometry(2, 8, 8);
        const material = new THREE.MeshBasicMaterial({ color: 0xC9A84C });

        this.nodes = [];
        for (let i = 0; i < nodeCount; i++) {
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(
                (Math.random() - 0.5) * 600,
                (Math.random() - 0.5) * 600,
                (Math.random() - 0.5) * 600
            );
            this.group.add(mesh);
            this.nodes.push(mesh);
        }

        // Create lines
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xC9A84C, transparent: true, opacity: 0.2 });
        const lineGeometry = new THREE.BufferGeometry();
        const positions = [];

        for (let i = 0; i < nodeCount; i++) {
            for (let j = i + 1; j < nodeCount; j++) {
                const dist = this.nodes[i].position.distanceTo(this.nodes[j].position);
                if (dist < 100) {
                    positions.push(
                        this.nodes[i].position.x, this.nodes[i].position.y, this.nodes[i].position.z,
                        this.nodes[j].position.x, this.nodes[j].position.y, this.nodes[j].position.z
                    );
                }
            }
        }

        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
        this.group.add(lineSegments);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.group.rotation.y += 0.001;
        this.group.rotation.x += 0.0005;

        // Pulse nodes
        const time = Date.now() * 0.002;
        this.nodes.forEach((node, i) => {
            const scale = 1 + Math.sin(time + i) * 0.3;
            node.scale.set(scale, scale, scale);
        });

        this.renderer.render(this.scene, this.camera);
    }

    handleResize() {
        window.addEventListener('resize', () => {
            const width = this.canvas.parentElement.offsetWidth;
            const height = this.canvas.parentElement.offsetHeight;
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width, height);
        });
    }
}

window.initNeuralBackground = (id) => new NeuralBackground(id);
