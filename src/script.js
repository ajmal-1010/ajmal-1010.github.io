document.addEventListener('DOMContentLoaded', function() {
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, options);

    document.querySelectorAll('.fade, .fade-slide, .fade-slide-left').forEach(element => {
        observer.observe(element);
    });
});
