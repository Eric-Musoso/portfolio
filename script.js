const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr = ScrollReveal ({
    distance: '25px',
    duration: 250,
    reset: true
})
function showSubNavbar() {
    document.getElementById("sub-navbar").style.display = "flex";
}
function hideSubNavbar() {
document.getElementById("sub-navbar").style.display = "none";
}

 // Toggle mobile menu
 document.getElementById('menu-icon').onclick = function() {
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav.style.display === 'none' || mobileNav.style.display === '') {
        mobileNav.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
    }
};

// Language switcher event
document.getElementById('language-select').onchange = function() {
    const selectedLanguage = this.value;
    alert('Language switched to ' + selectedLanguage); // Replace this with actual language switch functionality
};
sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})
