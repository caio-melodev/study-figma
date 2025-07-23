        const ctx = document.getElementById('myDoughnutChart').getContext('2d');
        const myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Afternoon', 'Evening', 'Morning'],
                datasets: [{
                    data: [1890, 1512, 1323],
                    label: 'orders',
                    backgroundColor: [
                        '#5A6ACF',
                        '#8593ED',
                        '#C7CEFF'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%' // Makes it look more doughnut-like
            }
        });