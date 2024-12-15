document.addEventListener('DOMContentLoaded', () => {
    // Select the first card by default
    const firstCard = document.querySelector('.service-card');
    firstCard.classList.add('selected');
    //firstCard.click();

    // Get the service type from the URL (if available)
    const urlParams = new URLSearchParams(window.location.search);
    const selectedService = urlParams.get('service');

    // If a service is specified in the URL, find the corresponding card and select it
    if (selectedService) {
        const selectedCard = document.querySelector(`.service-card[data-service="${selectedService}"]`);
        if (selectedCard) {
            selectedCard.click();
        }
    }
});

// Existing service card click functionality
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        // Remove 'selected' class from all cards
        document.querySelectorAll('.service-card').forEach(card => card.classList.remove('selected'));
        
        // Add 'selected' class to the clicked card
        card.classList.add('selected');

        // Get the service type from the data-service attribute
        const serviceType = card.getAttribute('data-service');
        
        // Select the service details section
        const serviceTitle = document.getElementById('service-title');
        const serviceDescription = document.getElementById('service-description');

        // Change content based on the selected service
        if (serviceType === 'sap') {
            serviceTitle.textContent = 'SAP Consultants';
            serviceDescription.textContent = 'We offer expert solutions for SAP implementations, customizations, and optimizations to help businesses streamline their operations and improve efficiency.';
        } else if (serviceType === 'netsuite') {
            serviceTitle.textContent = 'Netsuite Consultants';
            serviceDescription.textContent = 'Our Netsuite consulting services provide businesses with the expertise needed to implement, customize, and maximize the potential of their ERP and financial management systems.';
        } else if (serviceType === 'ai') {
            serviceTitle.textContent = 'AI & ML Specialists';
            serviceDescription.textContent = 'We provide cutting-edge AI and machine learning solutions designed to help businesses leverage data-driven insights and automate processes to stay ahead of the competition.';
        } else if (serviceType === 'recruitment') {
            serviceTitle.textContent = 'Recruitment Process';
            serviceDescription.textContent = 'Our recruitment process ensures that you find the best talent quickly and efficiently, using a data-driven approach to match candidates with your organization\'s needs.';
        }

        // Display the details section
        document.querySelector('.service-details').style.display = 'block';
    });
});
