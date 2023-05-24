// Fetch cookie data
//this didn't work
/*
const getCookies = async () => {
  const response = await fetch("./assets/js/components/cookieCards/cookies.json");
  return await response.json();
}

const cookieData = await getCookies();
*/

const CookieData = [
  {
    name: "Adventurefules",
    description: "Two graham cracker cookies with chocolate and marshmallow in between.",
    image: "adventurefuls"
  },
  {
    name: "Do-si-dos",
    description: "An oatmeal sandwich cookie with a peanut butter filling.",
    image: "dosido"
  },
  {
    name: "Lemon-ups",
    description: "A lemon flavored cookie with citrus frosting on the bottom and inspirational messages on top.",
    image: "lemonups"
  },
  {
    name: "Raspberry Rallys",
    description: "A new flavor to try! Treat yourself with a raspberry flavored cookie!",
    image: "raspberryrally"
  },
  {
    name: "S'mores",
    description: "Two graham cracker cookies with chocolate and marshmallow in between.",
    image: "smores"
  },
  {
    name: "Samoas",
    description: "A caramel dipped cookie with coconut shaving topped with a chocolate drizzle.",
    image: "samoas"
  },
  {
    name: "Tagalongs",
    description: "A chocolate covered cookie patty with a peanut butter filling.",
    image: "tagalongs"
  },
  {
    name: "Thin Mints",
    description: "A chocolate mint cookie covered in extra mint chocolate frosting.",
    image: "thinmints"
  },
  {
    name: "Toffeetastic",
    description: "A gluten-free shortbread cookie with toffee bits.",
    image: "toffeetastic"
  },
  {
    name: "Trefoils",
    description: "A traditional shortbread sugar cookie.",
    image: "trefoils"
  }
]

class CookieCards extends HTMLElement {

  constructor() {
    super();
    this.cookies = CookieData;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      ${this.cookies.map(cookie =>
      `
          <li class="cookie-card">
            <div class="card-front">
                <img class="cookie-image" src="assets/images/cookies/${cookie.image}.png" alt="${cookie.name}">
                <p class="cookie-name">${cookie.name}</p>
                <button class="cookie-front-cta" onclick="show()">See Details</button>
            </div>
            <div class="card-back">
                <p class="cookie-description">${cookie.description}</p> 
              <button class="cookie-back-cta" onclick="hide()"><img src="closeBtn.png" alt="Close Button"></button>
            </div>
          </li>
        `)
      }
    `;
  }
}
if ('customElements' in window) {
  customElements.define('cookie-cards', CookieCards);
}


function show() {
  
  var nodes = document.getElementsByClassName('cookie-front-cta');

  for (let i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener('click', function(i) {
        return function(){
          document.getElementsByClassName('card-back')[i].style.display = 'block';
          document.getElementsByClassName('card-front')[i].style.display = 'none';
        }
      }(i))
  }
}

function hide() {
  var nodes = document.getElementsByClassName('cookie-back-cta');

  for (let i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener('click', function(i) {
        return function(){
          document.getElementsByClassName('card-back')[i].style.display = 'none';
          document.getElementsByClassName('card-front')[i].style.display = 'block';
        }
      }(i))
  }
}

