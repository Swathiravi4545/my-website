 
            document.getElementById('another').addEventListener('click', function () {
                window.location.href = "portfolio.html";
            });
            const links = document.querySelectorAll('.middlenav a');
            const contents = document.querySelectorAll('.content');
            links.forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    links.forEach(l => l.classList.remove("active"));
                    contents.forEach(c => c.classList.remove("active"));
                    link.classList.add("active");
                    const targetId = link.getAttribute("data-target");
                    document.getElementById(targetId).classList.add("active");
                });
            });
            const works = document.querySelector(".works");
            const line = document.querySelector(".line");
            const dots = document.querySelectorAll(".backblue");

            window.addEventListener("scroll", () => {
                const sectionTop = works.offsetTop;
                const sectionHeight = works.offsetHeight;
                const scrollY = window.scrollY + window.innerHeight;

                // Calculate scroll progress through the `.works` section
                let progress = (scrollY - sectionTop) / sectionHeight;
                progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1

                const progressPercent = Math.floor(progress * 100);
                line.style.background = `linear-gradient(to bottom, #00c3ff 0%, #00c3ff ${progressPercent}%, #ccc ${progressPercent}%, #ccc 100%)`;

                // If user scrolled through 90% of section, activate all
                if (progress > 0.9) {
                    dots.forEach(dot => dot.classList.add("filled"));
                } else {
                    dots.forEach(dot => dot.classList.remove("filled"));
                }
            });
            const questions = document.querySelectorAll('.question');

            questions.forEach(q => {
                q.addEventListener('click', () => {
                    const answer = q.nextElementSibling;
                    const arrow = q.querySelector('.arrow');

                    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
                    arrow.classList.toggle('rotate');
                });
            });


        