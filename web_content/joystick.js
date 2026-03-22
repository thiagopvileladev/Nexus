// CÓDIGO JOYSTICK ADAPTADO

let scanInterval;
let lastMove = 0; 
// --- NOVO: Objeto para rastrear o estado anterior dos botões ---
let lastButtonStates = {}; 

window.addEventListener("gamepadconnected", (e) => {
    console.log("Controle conectado: " + e.gamepad.id);
    startGamepadLoop();
});

window.addEventListener("gamepaddisconnected", (e) => {
    stopGamepadLoop();
});

function startGamepadLoop() {
    if (!scanInterval) {
        scanInterval = setInterval(updateGamepadStatus, 100);
    }
}

function stopGamepadLoop() {
    clearInterval(scanInterval);
    scanInterval = null;
}

function updateGamepadStatus() {
    const gamepads = navigator.getGamepads();
    const gp = gamepads[0]; 
    if (!gp) return;

    const now = Date.now();
    const buttons = gp.buttons;
    const axes = gp.axes;

    // --- LÓGICA PARA O BOTÃO A (Índice 0) ---
    const isAPressed = buttons[0].pressed;
    if (isAPressed) {
        // Só clica se no ciclo anterior ele NÃO estava pressionado
        if (!lastButtonStates[0]) {
            document.activeElement.click();
            lastButtonStates[0] = true; // "Trava" o botão
        }
    } else {
        lastButtonStates[0] = false; // "Destrava" quando soltar
    }

    // --- LÓGICA PARA O BOTÃO B (Índice 1) ---
    const isBPressed = buttons[1].pressed;
    if (isBPressed) {
        if (!lastButtonStates[1]) {
            const backBtn = document.getElementById('playGameBack');
            if (playGame.style.transform === "translateX(0px)") {
                backBtn.click();
            }
            lastButtonStates[1] = true; // "Trava" o botão
        }
    } else {
        lastButtonStates[1] = false; // "Destrava" quando soltar
    }

    // 3. Movimentação (Mantida com delay de tempo para facilitar scroll continuo)
    if (now - lastMove > 150) {
        const up = buttons[12]?.pressed || axes[1] < -0.5;
        const down = buttons[13]?.pressed || axes[1] > 0.5;
        const left = buttons[14]?.pressed || axes[0] < -0.5;
        const right = buttons[15]?.pressed || axes[0] > 0.5;

        if (up) moveFocus('up');
        if (down) moveFocus('down');
        if (left) moveFocus('left');
        if (right) moveFocus('right');
        
        if (up || down || left || right) lastMove = now;
    }
}

// ... (Restante da sua função moveFocus permanece igual)

function moveFocus(direction) {
    const current = document.activeElement;
    if (!current) return;

// DENTRO DA FUNÇÃO moveFocus
const focusable = Array.from(document.querySelectorAll('button, input, .card, [tabindex="0"]'))
    .filter(el => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        
        // NOVO: Ignorar elementos que estão dentro de containers com 'inert'
        const isInert = el.closest('[inert]'); 

        return rect.width > 0 && rect.height > 0 && 
               style.visibility !== 'hidden' && 
               style.display !== 'none' &&
               rect.left >= -10 &&
               !isInert; // Se for inert, o joystick ignora
    });
        

    const currentRect = current.getBoundingClientRect();
    let bestNextElement = null;
    let minDistance = Infinity;

    focusable.forEach(target => {
        if (target === current) return;
        const targetRect = target.getBoundingClientRect();

        const curCenterX = currentRect.left + currentRect.width / 2;
        const curCenterY = currentRect.top + currentRect.height / 2;
        const tarCenterX = targetRect.left + targetRect.width / 2;
        const tarCenterY = targetRect.top + targetRect.height / 2;

        let isCorrectDirection = false;

        // Regras de direção
        if (direction === 'right') isCorrectDirection = tarCenterX > curCenterX + 10;
        if (direction === 'left') isCorrectDirection = tarCenterX < curCenterX - 10;
        if (direction === 'down') isCorrectDirection = tarCenterY > curCenterY + 10;
        if (direction === 'up') isCorrectDirection = tarCenterY < curCenterY - 10;

        if (isCorrectDirection) {
            // --- NOVO: PROTEÇÃO CONTRA SALTOS LATERAIS ---
            // Se estou em um card e tento mover para esquerda/direita,
            // ignoro elementos que não sejam cards (como o menu lateral ou botões do topo)
            if (current.classList.contains('card') && (direction === 'left' || direction === 'right')) {
                if (!target.classList.contains('card')) return; 
            }

            const xDiff = Math.abs(curCenterX - tarCenterX);
            const yDiff = Math.abs(curCenterY - tarCenterY);
            
            let distance = (direction === 'left' || direction === 'right') 
                ? xDiff + (yDiff * 5)  // Aumentei o peso vertical para 5 para travar mais na linha
                : yDiff + (xDiff * 2.5);

            if (distance < minDistance) {
                minDistance = distance;
                bestNextElement = target;
            }
        }


    });

    if (bestNextElement) {
        console.log('elemento focado')
        bestNextElement.focus();
        bestNextElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}






