document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    const botoes = document.querySelectorAll('.btn-proximo');

    botoes.forEach(button => {
        button.addEventListener('click', () => {
            const proximo = button.getAttribute('data-proximo');
            passos.forEach(passo => passo.classList.remove('ativo'));
            document.getElementById(`passo-${proximo}`).classList.add('ativo');
        });
    });
});
