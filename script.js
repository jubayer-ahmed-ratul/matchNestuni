
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'shadow-md');
                navbar.classList.remove('bg-transparent', 'shadow-none');
            } else {
                navbar.classList.add('bg-transparent', 'shadow-none');
                navbar.classList.remove('bg-white', 'shadow-md');
            }
        });
