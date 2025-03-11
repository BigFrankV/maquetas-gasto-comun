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
        const selectedDebts = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.id);
            
        if (selectedDebts.length > 0) {
            // Here you would implement the payment processing logic
            alert('Procesando pago de las deudas seleccionadas');
            // After successful payment, you could redirect back to the main page
            // window.location.href = 'pagos.html';
        } else {
            alert('Por favor seleccione al menos una deuda para pagar');
        }
    });
});
