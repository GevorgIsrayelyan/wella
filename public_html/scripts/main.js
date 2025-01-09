

// Language Modal

const ModalContainer = document.querySelector(".language_modal_container");
const languageBtns = [...document.querySelectorAll(".language_modal .language a")];


let href = location.href;


if (localStorage.getItem('visit') == null) {
    localStorage.setItem('visit', 'true');
}

if (localStorage.getItem('visit') == 'true') {
    ModalContainer.classList.remove("display_none");
    if (href.includes("#")) {
        let selectedSection = href.slice(href.indexOf("#"), href.length);
        languageBtns.forEach((a) => {
            oldHref = a.getAttribute("href");
            a.setAttribute("href", `${oldHref + selectedSection}`);
        })
    }
}

languageBtns.forEach((a) => {
    a.addEventListener("click", () => {
        ModalContainer.classList.add("display_none");
        localStorage.setItem('visit', 'false');
    });
})



// Section Animation

let createAnimateObserver = (className) => {
    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            let elDistanceToTop = window.scrollY + entry.target.getBoundingClientRect().top;
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add(className);
                }, 100)
            } else if (window.scrollY >= elDistanceToTop) {
                setTimeout(() => {
                    entry.target.classList.add(className);
                }, 100)
            } else {
                entry.target.classList.remove(className);
            }
        })
    })
}

const sections = [...document.querySelectorAll("section")].splice(2, document.querySelectorAll("section").length);
const animRightDivs = [...document.querySelectorAll(".for_animate_right")];
const animLeftDivs = [...document.querySelectorAll(".for_animate_left")];
const animScaleDivs = [...document.querySelectorAll(".for_animate_scale")];


const observer = createAnimateObserver("animate");
const elements = [...sections, ...animRightDivs, ...animLeftDivs, ...animScaleDivs];
elements.forEach((el) => observer.observe(el));


const observerLine = createAnimateObserver("animate_line");
const lineAnimateDivs = [...document.querySelectorAll(".for_self_animate")];
lineAnimateDivs.forEach((el) => observerLine.observe(el));

// Slider

const brands_swiper = new Swiper('.brands_swiper', {
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    longSwipes: false,
    grabCursor: true,
    autoplay: {
        delay: 4800,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const history_swiper = new Swiper('.history_swiper', {
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 10,
    centeredSlides: true,
    loop: false,
    longSwipes: false,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

// Burger Button

const burgerBtn = document.querySelector('.burger_button'),
    header_menu = document.querySelector('.header_menu'),
    menu_items = document.querySelectorAll('.menu_item');

burgerBtn.addEventListener("click", () => {
    header_menu.classList.toggle('open');
});

menu_items.forEach((item) => {
    item.addEventListener("click", () => {
        header_menu.classList.toggle('open');
        menu_items.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});

// Up Button 

const upBtn = document.querySelector('.upBtn');

document.addEventListener("scroll", () => {

    if (window.scrollY >= 2000) {
        upBtn.style.transform = "translateY(0px)"
    }
    else {
        upBtn.style.transform = "translateY(100px)"
    }
});




