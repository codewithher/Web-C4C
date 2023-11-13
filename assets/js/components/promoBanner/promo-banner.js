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
        <div class="promo-banner-container">
            <img class='promo-banner-image'src="assets/images/cookies/${this.cookie.image}.png" alt="Monthly Cookie Image"/>
            <div class="promo-banner-content">
                <p>${this.cookie.description}</p>
                <a class="button navigation-btn" href="cookies.html">
                    <h1 class="promo-cookie button-hover-underline">${this.cookie.name}</h1>
                </a>
            </div>
            <img class='promo-banner-image'src="assets/images/cookies/${this.cookie.image}.png" alt="Monthly Cookie Image"/>
            
        </div>`
    }

}

customElements.define('promo-banner', PromoBanner);