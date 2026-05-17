// Skills Charts using Canvas 2D API

function initSkillsCharts() {
    const radarCanvas = document.getElementById('radar-chart');
    const donutCanvas = document.getElementById('donut-chart');

    if (radarCanvas) {
        const ctx = radarCanvas.getContext('2d');
        const axes = ['Frontend', 'Backend', 'AI/ML', 'Data Science', 'DevOps', 'Blockchain'];
        const values = [0.9, 0.85, 0.95, 0.8, 0.7, 0.75]; // Target values
        let currentScale = 0;

        function drawRadar() {
            const width = radarCanvas.width;
            const height = radarCanvas.height;
            const center = width / 2;
            const radius = center * 0.7;

            ctx.clearRect(0, 0, width, height);

            // Draw web
            ctx.strokeStyle = 'rgba(201, 168, 76, 0.2)';
            ctx.lineWidth = 1;
            for (let i = 1; i <= 5; i++) {
                ctx.beginPath();
                const r = radius * (i / 5);
                for (let j = 0; j < axes.length; j++) {
                    const angle = (j / axes.length) * 2 * Math.PI - Math.PI / 2;
                    const x = center + r * Math.cos(angle);
                    const y = center + r * Math.sin(angle);
                    if (j === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.closePath();
                ctx.stroke();
            }

            // Draw axes
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(201, 168, 76, 0.4)';
            for (let j = 0; j < axes.length; j++) {
                const angle = (j / axes.length) * 2 * Math.PI - Math.PI / 2;
                const x = center + radius * Math.cos(angle);
                const y = center + radius * Math.sin(angle);
                ctx.moveTo(center, center);
                ctx.lineTo(x, y);
                
                // Draw labels
                ctx.fillStyle = '#E8C97A';
                ctx.font = '12px Cinzel';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const labelX = center + (radius + 25) * Math.cos(angle);
                const labelY = center + (radius + 25) * Math.sin(angle);
                ctx.fillText(axes[j], labelX, labelY);
            }
            ctx.stroke();

            // Draw data
            ctx.beginPath();
            ctx.strokeStyle = '#C9A84C';
            ctx.lineWidth = 2;
            ctx.fillStyle = 'rgba(201, 168, 76, 0.3)';
            for (let j = 0; j < axes.length; j++) {
                const angle = (j / axes.length) * 2 * Math.PI - Math.PI / 2;
                const r = radius * values[j] * currentScale;
                const x = center + r * Math.cos(angle);
                const y = center + r * Math.sin(angle);
                if (j === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        function animateRadar() {
            if (currentScale < 1) {
                currentScale += 0.02;
                drawRadar();
                requestAnimationFrame(animateRadar);
            }
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateRadar();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(radarCanvas);
    }

    if (donutCanvas) {
        const ctx = donutCanvas.getContext('2d');
        const data = [
            { label: 'Frontend', value: 0.4, color: '#C9A84C' },
            { label: 'Backend', value: 0.3, color: '#8B6914' },
            { label: 'AI/ML', value: 0.2, color: '#E8C97A' },
            { label: 'DevOps', value: 0.1, color: '#F5E3A0' }
        ];
        let currentScale = 0;

        function drawDonut() {
            const width = donutCanvas.width;
            const height = donutCanvas.height;
            const center = width / 2;
            const radius = center * 0.8;
            const innerRadius = radius * 0.6;

            ctx.clearRect(0, 0, width, height);

            let startAngle = -Math.PI / 2;

            data.forEach(segment => {
                const sliceAngle = segment.value * 2 * Math.PI * currentScale;
                
                ctx.beginPath();
                ctx.arc(center, center, radius, startAngle, startAngle + sliceAngle);
                ctx.arc(center, center, innerRadius, startAngle + sliceAngle, startAngle, true);
                ctx.closePath();
                
                ctx.fillStyle = segment.color;
                ctx.fill();

                startAngle += sliceAngle;
            });

            // Draw center text
            ctx.fillStyle = '#C9A84C';
            ctx.font = '16px Cinzel';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Stack', center, center);
        }

        function animateDonut() {
            if (currentScale < 1) {
                currentScale += 0.02;
                drawDonut();
                requestAnimationFrame(animateDonut);
            }
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateDonut();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(donutCanvas);
    }
}

document.addEventListener('DOMContentLoaded', initSkillsCharts);
