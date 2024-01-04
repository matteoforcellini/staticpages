document.addEventListener('DOMContentLoaded', () => {
    const defaultOpenIndex = 5; // Imposta l'indice dell'elemento da aprire all'avvio

    const buttons = document.querySelectorAll('.mYaccordion-button');
    const items = document.querySelectorAll('.mYaccordion-item');

    // Funzione per aprire l'elemento specificato
    function openAccordion(item) {
        const content = item.querySelector('.mYaccordion-content');
        content.style.display = 'block';
        item.classList.add('visible');
    }

    // Funzione per chiudere tutti gli elementi tranne quello specificato
    function closeOthers(exceptItem) {
        items.forEach(item => {
            if (item !== exceptItem) {
                item.querySelector('.mYaccordion-content').style.display = 'none';
                item.classList.remove('visible');
            }
        });
    }

    // Aprire l'elemento predefinito all'avvio
    if (items[defaultOpenIndex]) {
        openAccordion(items[defaultOpenIndex]);
    }

    // Event listener per i bottoni
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const item = items[index];

            if (item.classList.contains('visible')) {
                item.querySelector('.mYaccordion-content').style.display = 'none';
                item.classList.remove('visible');
            } else {
                closeOthers(item);
                openAccordion(item);
            }
        });
    });
});
