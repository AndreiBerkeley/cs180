document.querySelectorAll('.method-select').forEach((select) => {
    const initialOption = document.createElement('option');
    initialOption.value = 'initial';
    initialOption.textContent = 'Unaligned';
    select.prepend(initialOption);
    select.value = 'l2';

    select.addEventListener('change', () => {
        const card = select.closest('.result-card');
        const image = card.querySelector('.result-image');
        const chip = card.querySelector('.method-chip');
        const shiftValues = card.querySelector('.shift-values');
        const method = select.value;

        if (method === 'initial') {
            image.src = image.dataset.l2.replace('-l2.jpg', '-initial.jpg');
            shiftValues.textContent = 'No channel displacement';
            chip.textContent = 'UNALIGNED';
        } else {
            image.src = image.dataset[method];
            shiftValues.textContent = image.dataset[`${method}Shift`];
            chip.textContent = method.toUpperCase();
        }
    });
});

const approachGrid = document.querySelector('.approach-grid');
const approachToggle = document.querySelector('.approach-toggle');

if (approachGrid && approachToggle) {
    approachToggle.addEventListener('click', () => {
        const expanded = approachGrid.classList.toggle('is-expanded');
        const label = approachToggle.querySelector('.approach-toggle-label');
        const icon = approachToggle.querySelector('.approach-toggle-icon');

        approachToggle.setAttribute('aria-expanded', String(expanded));
        label.textContent = expanded ? 'Show less' : 'Show more';
        icon.textContent = expanded ? '−' : '+';
    });
}
