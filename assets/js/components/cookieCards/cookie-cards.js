// Fetch cookie data
const getCookies = async () => {
  const response = await fetch("./assets/js/components/cookieCards/cookies.json");
  return await response.json();
}

const cookieData = await getCookies();

// Extend the HTMLElement class to create the web component
class CookieCards extends HTMLElement {

  constructor() {
    super()
    this.cookies = cookieData;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML =
      `<ul class="cookie-list">
        ${this.cookies.map(cookie =>
        `
          <li class="cookie-card">
            <div class="cookie-card-ui cookie-card-front">
                <div class="cookie-image-container">
                  <img class="cookie-image" src="assets/images/cookies/${cookie.image}.png" alt="${cookie.name}">
                </div>
                  <h3 class="cookie-name">
                    ${cookie.name}
                  </h3>
                <div class="cookie-card-front-cta-container">
                  <button class="cookie-card-button cookie-card-front-cta">See Details</button>
                </div>
            </div>
            <div class="cookie-card-ui cookie-card-back">
                <p class="cookie-description">${cookie.description}</p> 
              <button class="cookie-card-button cookie-card-back-cta"><img src="closeBtn.png" alt="Close Button"></button>
            </div>
          </li>
        `).join('')}
      </ul>`
  };
}

if ('customElements' in window) {
  customElements.define('cookie-cards', CookieCards);
}