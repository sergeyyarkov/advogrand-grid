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
// Price Tabs
const priceTabs = document.querySelectorAll('.section-price_wrap'),
    linkTariffs = document.getElementById('tariffs'),
    linkCompare = document.getElementById('compare');

function hideTab(a) {
    priceTabs[a].style.display = 'none';
}

function showTab(b) {
    priceTabs[b].style.display = '';
}
hideTab(0);
linkTariffs.addEventListener('click', () => {
    hideTab(0);
    showTab(1);
    linkCompare.classList.remove('active');
    linkTariffs.classList.add('active');
});
linkCompare.addEventListener('click', () => {
    hideTab(1);
    showTab(0);
    linkCompare.classList.add('active');
    linkTariffs.classList.remove('active');
});
// Modals
const modalPhone = document.querySelector('.modal-phone-wrap');
const modalContact = document.querySelector('.modal-contact-wrap');

function showModalPhone() {
    modalPhone.classList.add('fade');
    modalPhone.style.display = 'block';
    document.body.style.overflow = 'hidden';
    const closeBtn = modalPhone.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        modalPhone.classList.remove('fade');
        modalPhone.style.display = 'none';
        document.body.style.overflow = '';
    });
}

function showModalContact() {
    const btn = document.querySelectorAll('.btn-red');
    btn.forEach((btn) => {
        btn.addEventListener('click', () => {
            modalContact.classList.add('fade');
            modalContact.style.display = 'block';
            document.body.style.overflow = 'hidden';
            const closeBtn = modalContact.querySelector('.modal-close');
            closeBtn.addEventListener('click', () => {
                modalContact.classList.remove('fade');
                modalContact.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
    });

}
showModalContact();
setTimeout(showModalPhone, 1000);
// Mobile Navigation
const btnNav = document.querySelector('.btn-nav');
const navContent = document.querySelector('.nav-content');
btnNav.addEventListener('click', () => {
    const btnActive = btnNav.querySelector('span');
    btnActive.classList.toggle('active');

    if (btnActive.classList.contains('active')) {
        navContent.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        navContent.style.display = 'none';
        document.body.style.overflow = '';
    }
});