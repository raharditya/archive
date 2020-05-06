const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-wrapper');
    const links = document.querySelectorAll('.nav-link-wrapper');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.2}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();