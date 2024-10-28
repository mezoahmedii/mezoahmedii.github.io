"use strict";
// Define Classes
class Card {
}
// Define Functions
function generateCards(cardData) {
    var scriptTag = document.scripts[document.scripts.length - 1];
    var parentTag = scriptTag.parentElement;
    let cardText = '<div class="is-justify-content-center columns is-multiline is-vcentered">';
    cardData.forEach((card) => {
        cardText +=
            '<div class="column is-half-tablet is-one-third-desktop"><div class="card">';
        if (card.image)
            cardText += `<div class="card-image"><figure class="image is-fullwidth"><img src="${card.image}" alt="Project Logo" ${card.imagePixelated ? 'style="image-rendering: crisp-edges;"' : ""} /></figure></div>`;
        cardText += `<div class="card-content"><h4 class="title is-4">${card.title || "No Title"}</h4>${card.description != null ? `<p class="subtitle">${card.description}</p>` : ""}</div>`;
        if (card.link || card.altLink) {
            cardText += '<footer class="card-footer is-bruh">';
            if (card.link)
                cardText += `<a class="card-footer-item" href="${card.link[1]}">${card.link[0]}</a>`;
            if (card.altLink)
                cardText += `<a class="card-footer-item" href="${card.altLink[1]}">${card.altLink[0]}</a>`;
            cardText += "</footer>";
        }
        cardText += "</div></div>";
    });
    cardText += "</div>";
    parentTag.innerHTML += cardText;
}
// Define Variables
let navItems;
let navSections;
let menuBarHeight;
document.addEventListener("DOMContentLoaded", () => {
    // Navbar Burger Menus
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
        });
    });
    // Scrollspy
    navItems = document.getElementById("scrollspyItems").firstElementChild.children;
    navSections = new Array(navItems.length);
    for (let i = 0; i < navItems.length; i++)
        navSections[i] = document.getElementById(navItems[i].dataset.target);
    menuBarHeight =
        document.getElementById("scrollspyItems").offsetHeight +
            100;
    activateIfVisible();
});
function isVisible(ele) {
    const r = ele.getBoundingClientRect();
    const h = window.innerHeight || document.documentElement.clientHeight;
    const w = window.innerWidth || document.documentElement.clientWidth;
    return (r.top <= h &&
        r.top + r.height - menuBarHeight >= 0 &&
        r.left <= w &&
        r.left + r.width >= 0);
}
function activateIfVisible() {
    let b = true;
    for (let i = 0; i < navItems.length; i++) {
        if (b && isVisible(navSections[i])) {
            navItems[i].classList.remove("is-inactive");
            b = false;
        }
        else {
            navItems[i].classList.add("is-inactive");
        }
    }
}
let isTicking = null;
window.addEventListener("scroll", () => {
    if (!isTicking) {
        window.requestAnimationFrame(() => {
            activateIfVisible();
            isTicking = false;
        });
        isTicking = true;
    }
}, false);
