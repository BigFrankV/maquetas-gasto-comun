document.addEventListener('DOMContentLoaded', function() {
    // Pie Chart Configuration
    if (document.getElementById('pieChart')) {
        const pieCtx = document.getElementById('pieChart').getContext('2d');
        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Agua', 'Luz', 'Gas', 'Mantenimiento', 'Seguridad', 'Multas'],
                datasets: [{
                    data: [25000, 35000, 15000, 45000, 30000, 50000],
                    backgroundColor: [
                        '#3498db',
                        '#2ecc71',
                        '#e74c3c',
                        '#f1c40f',
                        '#9b59b6',
                        '#e67e22'
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            font: { size: 14 }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => `${context.label}: $${context.raw.toLocaleString()}`
                        }
                    }
                }
            }
        });
    }

    // Bar Chart Configuration
    if (document.getElementById('barChart')) {
        const barCtx = document.getElementById('barChart').getContext('2d');
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Pagos Mensuales',
                    data: [150000, 200000, 180000, 190000, 170000, 160000, 185000, 195000, 175000, 180000, 190000, 200000],
                    backgroundColor: '#3498db'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: value => `$${value.toLocaleString()}`
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (context) => `Monto: $${context.raw.toLocaleString()}`
                        }
                    }
                }
            }
        });
    }
});

// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        console.log('Login attempt:', email);
        window.location.href = 'index.html';
    });
}

// Payment Handler
function handlePayment(id, type) {
    console.log(`Procesando pago: ${type} ID: ${id}`);
    alert('Pago procesado correctamente');
}

// Profile Edit Handler
function toggleEdit() {
    const inputs = document.querySelectorAll('.perfil-info input');
    const editBtn = document.querySelector('.edit-btn');
    
    inputs.forEach(input => input.disabled = !input.disabled);
    
    if (editBtn.textContent === 'Editar') {
        editBtn.textContent = 'Guardar';
        editBtn.style.backgroundColor = '#2ecc71';
    } else {
        editBtn.textContent = 'Editar';
        editBtn.style.backgroundColor = '#3498db';
        alert('Cambios guardados correctamente');
    }
}
