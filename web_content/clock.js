// CLOCK
function atualizarRelogio() {
    const agora = new Date();
    
    // 1. Pega as horas e minutos diretamente
    let horas = agora.getHours(); 
    let minutos = agora.getMinutes();
    
    // 2. Formatar para ter sempre 2 dígitos (ex: 05:08 em vez de 5:8)
    // O padStart adiciona um "0" à esquerda se a string tiver menos de 2 caracteres
    const horasFormatadas = String(horas).padStart(2, '0');
    const minutosFormatados = String(minutos).padStart(2, '0');

    // 3. Montar a string de horário (HH:MM)
    const horarioFormatado = `${horasFormatadas}:${minutosFormatados}`;

    // 4. Atualizar o elemento HTML
    const relogioElemento = document.getElementById('relogio');
    relogioElemento.textContent = horarioFormatado; 
}

// Inicia o relógio imediatamente e define o intervalo de 1 segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);
