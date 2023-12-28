import './style.scss'
$(document).ready(function() {
    function handleMenuSlider() {
        const slider = document.getElementById('slider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let isDown = false;
        let startX;
        let scrollLeft;
        let slideIndex = 0;
        const moveSlide = (direction) => {
            const slides = document.querySelectorAll('.slide');
            const slideWidth = slides[0].clientWidth;
            if (direction === 'next' && slideIndex < slides.length - 1) {
                slideIndex++;
            } else if (direction === 'prev' && slideIndex > 0) {
                slideIndex--;
            }
            slider.scrollLeft = slideWidth * slideIndex;
        };

        const updateButtonVisibility = () => {
            const isOverflowing = slider.scrollWidth > slider.clientWidth;
            nextBtn.style.display = isOverflowing ? 'block' : 'none';
            prevBtn.style.display = (isOverflowing && slider.scrollLeft > 0) ? 'block' : 'none';
        };

        prevBtn.addEventListener('click', () => {
            moveSlide('prev');
            updateButtonVisibility();
        });

        nextBtn.addEventListener('click', () => {
            moveSlide('next');
            updateButtonVisibility();
        });

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3;
            slider.scrollLeft = scrollLeft - walk;
            updateButtonVisibility();
        });

        slider.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('touchend', () => {
            isDown = false;
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = (x - startX) * 3;
            slider.scrollLeft = scrollLeft - walk;
            updateButtonVisibility();
        });

        slider.addEventListener('scroll', updateButtonVisibility);

        window.addEventListener('resize', updateButtonVisibility);

        // Inizializza la visibilità delle frecce
        updateButtonVisibility();
    }

    handleMenuSlider();

});

