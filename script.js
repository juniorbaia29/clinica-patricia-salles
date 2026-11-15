document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-agendamento");
    const msgConfirmacao = document.getElementById("mensagem-confirmacao");

    // Define a data mínima como hoje para evitar agendamentos no passado
    const inputData = document.getElementById("data");
    const hoje = new Date().toISOString().split("T")[0];
    inputData.setAttribute("min", hoje);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const servico = document.getElementById("servico").value;
        const data = document.getElementById("data").value;
        const horario = document.getElementById("horario").value;

        // Formata a data de AAAA-MM-DD para DD/MM/AAAA
        const dataFormatada = data.split("-").reverse().join("/");

        // Exibe mensagem na tela
        msgConfirmacao.innerHTML = `
            <strong>Solicitação enviada com sucesso, ${nome}!</strong><br>
            Serviço: ${servico} | Data: ${dataFormatada} (${horario}).<br>
            Entraremos em contato pelo número ${telefone} para confirmar.
        `;
        msgConfirmacao.classList.remove("hidden");

        // Opcional: Redirecionar para o WhatsApp da clínica
        // Substitua 5511999999999 pelo número real do consultório
        const numeroClinica = "5511999999999";
        const textoWhatsApp = `Olá! Gostaria de agendar uma consulta.%0A*Nome:* ${nome}%0A*Serviço:* ${servico}%0A*Data:* ${dataFormatada} (${horario})`;
        
        // Descomente a linha abaixo se quiser abrir o WhatsApp automaticamente ao enviar
        // window.open(`https://wa.me{numeroClinica}?text=${textoWhatsApp}`, "_blank");

        form.reset();
    });
});
