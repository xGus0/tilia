document.addEventListener('DOMContentLoaded', function () {
    // Brilho que acompanha o cursor
    const cursorLight = document.querySelector('.cursor-light');
    document.addEventListener('mousemove', (e) => {
        cursorLight.style.left = `${e.clientX}px`;
        cursorLight.style.top = `${e.clientY}px`;
        cursorLight.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        cursorLight.style.opacity = '0';
    });

    // Abrir e fechar categorias de comandos
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const commandList = header.parentElement.querySelector('.command-list');
            const arrow = header.querySelector('.arrow');
            commandList.classList.toggle('open');
            arrow.style.transform = commandList.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });

    // Mostrar descrição do comando ao clicar
    const commandItems = document.querySelectorAll('.command-item');
    commandItems.forEach(item => {
        item.addEventListener('click', () => {
            commandItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });
});