function openTab(evt, stageId) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    document.getElementById(stageId).classList.add("active");
    evt.currentTarget.classList.add("active");
}

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const alphabet = '01';
const fontSize = 14; 
const columns = Math.floor(canvas.width / fontSize);

const rainDrops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(12, 14, 18, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.shadowBlur = 8;
    ctx.shadowColor = '#10b981';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        
        if (Math.random() > 0.98) {
            ctx.fillStyle = '#ffffff';
        } else {
            ctx.fillStyle = '#10b981';
        }
        
        ctx.font = 'bold ' + fontSize + 'px monospace';
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
    ctx.shadowBlur = 0; 
}

setInterval(drawMatrix, 30);
