const getMonthlyCookieData = async () => {
    const response = await fetch('./assets/js/components/promoBanner/cookie-month.json');
    return response.json();
}
const cookieData = await getMonthlyCookieData();

const chooseCookieByMonth = () => {
    const month = new Date().getMonth();
    const monthlyCookie = {
        name: cookieData[month].name,
        image: cookieData[month].image,
        description: cookieData[month].description
    }
    return monthlyCookie;
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