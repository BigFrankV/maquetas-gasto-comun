document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.debt-checkbox');
    const processButton = document.getElementById('processPayment');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.nextElementSibling;
            if (this.checked) {
                label.classList.add('checked');
            } else {
                label.classList.remove('checked');
            }
        });
    });

    processButton.addEventListener('click', function() {
        const selectedFines = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.id);
            
        if (selectedFines.length > 0) {
            alert('Procesando pago de las multas seleccionadas');
            // After successful payment, redirect back
            // window.location.href = 'multas.html';
        } else {
            alert('Por favor seleccione al menos una multa para pagar');
        }
    });
});
