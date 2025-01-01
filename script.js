document.addEventListener('DOMContentLoaded', function () {
    // Brilho que acompanha o cursor
    const cursorLight = document.querySelector('.cursor-light');
    if (cursorLight) {
        document.addEventListener('mousemove', (e) => {
            cursorLight.style.left = `${e.clientX}px`;
            cursorLight.style.top = `${e.clientY}px`;
            cursorLight.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursorLight.style.opacity = '0';
        });
    }

    // Abrir e fechar categorias de comandos
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const commandList = header.parentElement.querySelector('.command-list');
            const arrow = header.querySelector('.arrow i'); // Ajuste para o ícone dentro do span
            if (commandList && arrow) {
                commandList.classList.toggle('open');
                arrow.classList.toggle('fa-chevron-down');
                arrow.classList.toggle('fa-chevron-up');
            }
        });
    });

    // Mostrar descrição do comando ao clicar
    const commandItems = document.querySelectorAll('.command-item');
    commandItems.forEach(item => {
        item.addEventListener('click', () => {
            // Fecha a descrição de outros itens
            commandItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Abre ou fecha a descrição do item clicado
            item.classList.toggle('active');
        });
    });
});