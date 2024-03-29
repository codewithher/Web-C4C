/**
 * This script creates all the cookie cards
 */

// Describes how to fetch cookie data into cookie variable
const getCookies = async () => {
  /** BEGIN - Activity 9: Conditional */
  const BAKERY = "CHANGEME";      // Pick One: "ABC" or "LBBC"
  /** END - Activity 9: Conditional */
  if (BAKERY === "ABC") {
    // ABC Cookies Bakery
    const response = await fetch("./assets/js/components/cookieCards/ABC-cookies.json");
    return await response.json();
  } 
  if (BAKERY === "LBBC") {
    // Little Brownie Bakers Cookies Bakery
    const response = await fetch("./assets/js/components/cookieCards/LBBC-cookies.json");
    return await response.json();
  }
  const response = await fetch("./assets/js/components/cookieCards/empty.json");
  return await response.json();
}

// Asks out function to fetch cookie data
const cookieData = await getCookies();

// Puts cookie variable into cookie cards
class CookieCards extends HTMLElement {

  constructor() {
    super();
    this.cookies = cookieData;
    this.innerHTML = 
      `<ul class="cookie-list">
        ${this.cookies.map(cookie =>
        `
          <li class="cookie-card">
            <div class="cookie-card-ui ${cookie.popular ? 'popular-cookie' : 'regular-cookie'} cookie-card-front">
                <div class="cookie-image-container">
                  <img class="cookie-image" src="assets/images/cookies/${cookie.image}.png" alt="${cookie.name}">
                </div>
                  <h3 class="cookie-name ellipsis" title="${cookie.name}">
                    ${cookie.name}
                  </h3>
                <div class="cookie-card-front-cta-container">
                  <button class="cookie-card-button cookie-card-front-cta">See Details</button>
                </div>
            </div>
            <div class="cookie-card-ui ${cookie.popular ? 'popular-cookie' : 'regular-cookie'} cookie-card-back">
                <p1>${cookie.description}</p1> 
              <button class="cookie-card-button cookie-card-back-cta"><img src="assets/images/cookies/cookie-card-close-button.png" alt="Close Button"></button>
            </div>
          </li>
        `).join('')}
      </ul>`
  }

  clickHandler(event) {
    let card = event.target.closest('.cookie-card');
    card.classList.toggle('card-flip');
  }

  connectedCallback() {
    const cardFrontCta = this.getElementsByClassName('cookie-card-front-cta');
    const cardBackCta = this.getElementsByClassName('cookie-card-back-cta');
    if (!cardFrontCta) return;
    if (!cardBackCta) return;
    for (let i = 0; i < cardFrontCta.length; i++) {
      cardFrontCta[i].addEventListener('click', this.clickHandler);
    }
    for (let i = 0; i < cardBackCta.length; i++) {
      cardBackCta[i].addEventListener('click', this.clickHandler);
    }
  }
}

if ('customElements' in window) {
  customElements.define('cookie-cards', CookieCards);
}