"use strict";
class Card {
}
function generateCards(cardData) {
    var scriptTag = document.scripts[document.scripts.length - 1];
    var parentTag = scriptTag.parentElement;
    let cardText = '<div class="justify-content-center row">';
    cardData.forEach((card) => {
        cardText +=
            '<div class="col-lg-4 col-md-6" style="margin-bottom: 3%"><div class="card">';
        if (card.image)
            cardText += `<img class="card-img-top" src="${card.image}" alt="Project Logo" ${card.imagePixelated ? 'style="image-rendering: crisp-edges;"' : ""} />`;
        cardText += `<div class="card-body"><h4 class="card-title">${card.title || "No Title"}</h4>${card.description != null ? `<p class="card-text">${card.description}</p>` : ""}</div>`;
        if (card.link || card.altLink) {
            cardText += '<div class="card-footer">';
            if (card.link)
                cardText += `<a class="btn btn-primary" href="${card.link[1]}">${card.link[0]}</a>`;
            if (card.altLink)
                cardText += `<a class="btn btn-outline-primary" href="${card.altLink[1]}">${card.altLink[0]}</a>`;
            cardText += "</div>";
        }
        cardText += "</div></div>";
    });
    cardText += "</div>";
    parentTag.innerHTML += cardText;
}
