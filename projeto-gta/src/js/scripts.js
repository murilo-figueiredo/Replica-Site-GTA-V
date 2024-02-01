const btnGTA = document.querySelector('.btn-plataforma-gta');
const btnOnline = document.querySelector('.btn-plataforma-online');
const platGTA = document.querySelector('.btn-plataforma-gta .plataformas');
const platOnline = document.querySelector('.btn-plataforma-online .plataformas');

const links = document.querySelectorAll('.scroll');


links.forEach(ancora => {
    ancora.addEventListener('click', function(evento)
    {
        evento.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


btnGTA.addEventListener('click', () => {
    if(platOnline.classList.contains('ativo')) { platOnline.classList.remove('ativo'); }

    platGTA.classList.toggle('ativo');
});

btnOnline.addEventListener('click', () => {
    if(platGTA.classList.contains('ativo')) { platGTA.classList.remove('ativo'); }

    platOnline.classList.toggle('ativo');
});