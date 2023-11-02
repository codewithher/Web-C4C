const chooseCookieByMonth = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[new Date().getMonth()];
    console.log(month);
    let cookieData = {
        name: '',
        image: '',
        description: ''
    }
    switch(month) {
        case 'January':
            cookieData.name="S'mores";
            cookieData.image="smores";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        case 'February':
            cookieData.name="Adventurefuls";
            cookieData.image="adventurefuls";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        case 'March':
            cookieData.name="Do-si-dos";
            cookieData.image="dosidos";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        case 'April':
            cookieData.name="Thin Mints";
            cookieData.image="thinmints";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        case 'May':
            cookieData.name="Tagalongs";
            cookieData.image="tagalongs";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        case 'June':
            cookieData.name="Trefoils";
            cookieData.image="trefoils";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        case 'July':
            cookieData.name="Lemon-ups";
            cookieData.image="lemonups";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        case 'August':
            cookieData.name="Raspberry Rallys";
            cookieData.image="raspberyrally";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        case 'September':
            cookieData.name="Toffeetastic";
            cookieData.image="toffetastic";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        case 'October':
            cookieData.name="Samoas";
            cookieData.image="samoas";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        case 'November':
            cookieData.name="Adventurefuls";
            cookieData.image="adventurefuls";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        case 'December':
            cookieData.name="Raspberry Rallys";
            cookieData.image="raspberryrally";
            cookieData.description="Feeling adventurous? Try this month's signature cookie...";
            break;
        default:
            cookieData.name="No cookie";
            cookieData.image="adventurefuls";
            cookieData.description="no cookie right now";
            break;
    }
    return cookieData;

}

class PromoBanner extends HTMLElement {

    constructor() {
        super();
        
        this.cookie = chooseCookieByMonth();
        this.innerHTML = 
        `<div class="promo-banner-ribbon">
            <span class="ribbon-content">
                Monthly Promo
            </span>
        </div>
        <div class="promo-banner-container flex ai-c js-c">
            <img class='promo-banner-image'src="assets/images/cookies/${this.cookie.image}.png" alt="Monthly Cookie Image"/>
            <div class="promo-banner-content">
                <p>${this.cookie.description}</p>
                <h1 class="promo-cookie">${this.cookie.name}</h1>
            </div>
            <a class="button promo-banner-btn" href="cookies.html">
                <span class="button-text button-hover-underline">
                    Learn More
                </span>
            </a>
        </div>`
    }

}

customElements.define('promo-banner', PromoBanner);