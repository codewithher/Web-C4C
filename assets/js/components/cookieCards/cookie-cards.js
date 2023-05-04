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


  // [EXERCISE] What should we do here to iterate through our cookie data array to output the markup?
  
  // MARKUP
  // <li class="cookie-card">
  //   <div class="card-front">
  //       <img class="cookie-image" src="assets/images/cookies/${cookie.image}.png" alt="${cookie.name}">
  //       <p class="cookie-name">${cookie.name}</p>
  //       <button class="cookie-front-cta">Learn More</button>
  //   </div>
  //   <div class="cookie-back">
  //     <p class="cookie-description">${cookie.description}</p> 
  //     <button class="cookie-back-cta" />
  //   </div>
  // </li>
  
  render() {
    this.innerHTML = ``;
  }

  // [EXERCISE] Using the CSS classes defined in the markup, create the styling for each element in cookies.css

}

if ('customElements' in window) {
  customElements.define('cookie-cards', CookieCards);
}