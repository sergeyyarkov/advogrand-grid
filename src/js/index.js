// Слайдер Comments
$('.comments').owlCarousel({
    loop: false,
    margin: 20,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        480: {
            items: 2,
            dots: true
        },
        800: {
            items: 3,
            dots: true
        },
        1135: {
            nav: true
        }
    }
});
// Слайдер Partners
$('.partners').owlCarousel({
    loop: false,
    margin: 20,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        445: {
            items: 1,
            dots: true
        },
        450: {
            items: 2,
            dots: true
        },
        670: {
            items: 2,
            dots: true
        },
        675: {
            items: 3,
            dots: true
        },
        1135: {
            items: 4,
            nav: true
        }
    }
});
// Partner Cards
const itemsPartner = document.querySelectorAll('.item-partner');
itemsPartner.forEach((partner) => {
    partner.addEventListener('mouseover', () => {
        const partnerInfo = partner.querySelector('.partner-info');
        partnerInfo.style.display = 'block';
        partnerInfo.classList.add('fade');
        partner.addEventListener('mouseout', () => {
            const partnerInfo = partner.querySelector('.partner-info');
            partnerInfo.style.display = 'none';
            partnerInfo.classList.remove('fade');
        });
    });
});