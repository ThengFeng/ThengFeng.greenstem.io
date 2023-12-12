function toggleAccordion(id, headerId) {
    var element = document.getElementById(id);
    var header = document.getElementById(headerId);

    if (element.style.transform === 'scaleY(1)') {
        element.style.maxHeight = '0';
        element.style.transform = 'scaleY(0)';
        header.classList.remove('accordion-expanded');
    } else {
        element.style.maxHeight = '100px';
        element.style.transform = 'scaleY(1)';
        header.classList.add('accordion-expanded');
    }
    updateAccordionSymbol(header);
}

function updateAccordionSymbol(header) {
    var symbol = header.querySelector('.accordion-symbol');
    symbol.textContent = header.classList.contains('accordion-expanded') ? 'remove' : 'add';
}