
            const slideWrapper = document.querySelector('.wholeimgpart');
            const slides = document.querySelectorAll('.slides');
            const dotsContainer = document.querySelector('.dot-container');
            const totalSlides = slides.length;

            let currentIndex = 0;

            // create dots dynamically
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    updateCarousel();
                });
                dotsContainer.appendChild(dot);
            }

            function updateCarousel() {
                slideWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
                document.querySelectorAll('.dot').forEach((dot, idx) => {
                    dot.classList.toggle('active', idx === currentIndex);
                });
            }
            function scrollDown(){
                document.getElementById('target').scrollIntoView({behavior:"smooth"})
            }
            function screenTop(){
                document.getElementById('target1').scrollIntoView({behavior:"smooth"})
            }
    