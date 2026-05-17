document.addEventListener('DOMContentLoaded', () => {
    // ═══════════ RADAR CHART ═══════════
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    const radarLabels = ['Frontend', 'Backend', 'AI/ML', 'Data Science', 'DevOps', 'Blockchain'];
    const radarValues = [75, 65, 85, 80, 50, 40];

    function drawRadar() {
        const cx = 200;
        const cy = 200;
        const radius = 150;
        const sides = radarLabels.length;

        radarCtx.clearRect(0, 0, 400, 400);

        // Draw background polygons
        for (let j = 5; j > 0; j--) {
            radarCtx.beginPath();
            const r = (radius / 5) * j;
            for (let i = 0; i < sides; i++) {
                const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
                const x = cx + r * Math.cos(angle);
                const y = cy + r * Math.sin(angle);
                if (i === 0) radarCtx.moveTo(x, y);
                else radarCtx.lineTo(x, y);
            }
            radarCtx.closePath();
            radarCtx.strokeStyle = 'rgba(201,168,76,0.1)';
            radarCtx.stroke();
        }

        // Draw axes and labels
        radarCtx.font = "12px 'Outfit', sans-serif";
        radarCtx.fillStyle = '#9A8870';
        radarCtx.textAlign = 'center';

        for (let i = 0; i < sides; i++) {
            const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
            const x = cx + radius * Math.cos(angle);
            const y = cy + radius * Math.sin(angle);

            // Axis
            radarCtx.beginPath();
            radarCtx.moveTo(cx, cy);
            radarCtx.lineTo(x, y);
            radarCtx.strokeStyle = 'rgba(201,168,76,0.2)';
            radarCtx.stroke();

            // Label
            const labelX = cx + (radius + 20) * Math.cos(angle);
            const labelY = cy + (radius + 20) * Math.sin(angle);
            radarCtx.fillText(radarLabels[i], labelX, labelY);
        }

        // Draw data polygon
        radarCtx.beginPath();
        for (let i = 0; i < sides; i++) {
            const angle = (Math.PI * 2 / sides) * i - Math.PI / 2;
            const r = (radius * radarValues[i]) / 100;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            if (i === 0) radarCtx.moveTo(x, y);
            else radarCtx.lineTo(x, y);
        }
        radarCtx.closePath();
        radarCtx.strokeStyle = '#C9A84C';
        radarCtx.lineWidth = 2;
        radarCtx.stroke();
        radarCtx.fillStyle = 'rgba(201,168,76,0.2)';
        radarCtx.fill();
    }
    drawRadar();

    // ═══════════ DONUT CHART ═══════════
    const donutCtx = document.getElementById('donutChart').getContext('2d');
    const donutData = [
        { label: 'Frontend', value: 40, color: '#C9A84C' },
        { label: 'Backend', value: 30, color: '#8B6914' },
        { label: 'AI/ML', value: 20, color: '#E8C97A' },
        { label: 'DevOps', value: 10, color: '#4A3B12' }
    ];

    function drawDonut() {
        const cx = 200;
        const cy = 200;
        const radius = 120;
        const innerRadius = 70;
        let startAngle = -Math.PI / 2;

        donutCtx.clearRect(0, 0, 400, 400);

        donutData.forEach(segment => {
            const sliceAngle = (segment.value / 100) * (Math.PI * 2);

            donutCtx.beginPath();
            donutCtx.arc(cx, cy, radius, startAngle, startAngle + sliceAngle);
            donutCtx.arc(cx, cy, innerRadius, startAngle + sliceAngle, startAngle, true);
            donutCtx.closePath();

            donutCtx.fillStyle = segment.color;
            donutCtx.fill();

            startAngle += sliceAngle;
        });

        // Legend
        const legendContainer = document.getElementById('donutLegend');
        if (legendContainer) {
            legendContainer.innerHTML = '';
            donutData.forEach(segment => {
                const item = document.createElement('div');
                item.innerHTML = `<span style="display:inline-block; width:12px; height:12px; background:${segment.color}; border-radius:50%; margin-right:5px;"></span>${segment.label} (${segment.value}%)`;
                legendContainer.appendChild(item);
            });
        }
    }
    drawDonut();

    // ═══════════ SORTABLE TABLE ═══════════
    window.sortTable = function(n) {
        const table = document.getElementById("skillsTable");
        let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        switching = true;
        dir = "asc";
        
        // Remove active class from all headers
        const headers = table.getElementsByTagName("TH");
        for (let h = 0; h < headers.length; h++) {
            headers[h].classList.remove("sorted-asc", "sorted-desc");
            const cells = table.querySelectorAll(`td:nth-child(${h + 1})`);
            cells.forEach(c => c.classList.remove("sorted-col"));
        }

        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];
                
                let xVal = x.innerHTML.toLowerCase();
                let yVal = y.innerHTML.toLowerCase();
                
                // For Years column, compare as numbers
                if (n === 3) {
                    xVal = parseFloat(xVal) || 0;
                    yVal = parseFloat(yVal) || 0;
                }

                if (dir === "asc") {
                    if (xVal > yVal) {
                        shouldSwitch = true;
                        break;
                    }
                } else if (dir === "desc") {
                    if (xVal < yVal) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                if (switchcount === 0 && dir === "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
        
        // Add classes for styling
        headers[n].classList.add(dir === "asc" ? "sorted-asc" : "sorted-desc");
        const cells = table.querySelectorAll(`td:nth-child(${n + 1})`);
        cells.forEach(c => c.classList.add("sorted-col"));
    };
});
