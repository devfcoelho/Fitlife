document.addEventListener('DOMContentLoaded', () => {
    const btnAdd = document.querySelector('.btn-water-add');
    const btnReset = document.querySelector('.btn-water-reset');
    const progressBar = document.querySelector('.progress-bar');
    const totalSpan = document.querySelector('span');

    const meta = 2500;
    let total = 0;

    btnAdd.addEventListener('click', () => {
        total += 250;
        if (total > meta) total = meta;

        const porcentagem = (total / meta) * 100;

        progressBar.style.width = porcentagem + '%';
        progressBar.textContent = porcentagem.toFixed(0) + '%';
        totalSpan.textContent = total;
    });

    btnReset.addEventListener('click', () => {
        total = 0;
        progressBar.style.width = '0%';
        progressBar.textContent = '0%';
        totalSpan.textContent = 0;
    });
});