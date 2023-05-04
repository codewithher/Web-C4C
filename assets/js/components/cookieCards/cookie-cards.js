// Array containing cookie data
const getCookies = async () => {
  return fetch("./assets/js/components/cookieCards/cookies.json")
    .then(response => response.json());
}

const cookieData = await getCookies();

// Extend the HTMLElement class to create the web component
class CookieCards extends HTMLElement {

  //The constructor() method is a special method in JavaScript classes that is called when an object is created from the class. In this case, the CookieCards class is a subclass of the built-in HTMLElement class, so the super() method is called to initialize the object as an instance of HTMLElement.

  // The constructor then sets an instance variable this.cookies to the value CookieData. CookieData is an array that is made up of several data objects that each contain unique cookie data.

  // TIP: Arrays are setup with brackets, [], Objects are setup with curly brackets, {}

  // By setting this.cookies in the constructor, the array is made available as an instance variable to other methods in the class, such as the connectedCallback() method, which uses it to create the list of cards.

  // So, in summary, the constructor is responsible for initializing the custom element and setting any necessary instance variables.

  constructor() {
    super()
    this.cookies = cookieData;
  }

  connectedCallback() {
    this.render();
  }


  // [EXERCISE] What should we do here to iterate through our cookie data array to output the UI?

  render() {
    this.innerHTML = `
    `;
  }

  // [EXERCISE] How can we clean up our HTML markup to separate the styles from the HTML?

  // MARKUP
  // <li class="cookie-card">
  //   <div class="card-front">
  //       <img src="assets/images/cookies/${cookie.image}.svg" alt="${cookie.name}">
  //       <p><i><u>${cookie.name}</u></i></p>
  //       <p style="color:#737373;">Learn More</p>
  //   </div>
  //   <div class="cookie-back">
  //     <p><i>${cookie.description}</i></p> 
  //     <p1 style="font-size:14px; color:#737373; margin-top: 1rem;">Go Back</p1>
  //   </div>
  // </li>

}

if ('customElements' in window) {
  customElements.define('cookie-cards', CookieCards);
}