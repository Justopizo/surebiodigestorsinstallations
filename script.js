// Initialize tooltips
document.addEventListener('DOMContentLoaded', function() {
    // Enable tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            
            const targetId = this.getAttribute('href')
            if (targetId === '#') return
            
            const targetElement = document.querySelector(targetId)
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        })
    })
    
    // Form submission handling
    const forms = document.querySelectorAll('form')
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault()
            
            // Here you would typically send the form data to your server
            // For this example, we'll just show an alert
            alert('Thank you for your message! We will contact you shortly.')
            form.reset()
        })
    })
})