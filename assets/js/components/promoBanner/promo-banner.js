/**
 * This script creates the promotion banner for each month
 */

// Describes how to fetch cookie data from file into cookie variable
const getMonthlyCookieData = async () => {
    /** BEGIN - Activity 9: Conditional */
    const BAKERY = "";      // Pick One: "ABC" or "LBBC"
    /** END - Activity 9: Conditional */
    if (BAKERY === "ABC") {
      // ABC Cookies Bakery
      response = await fetch('./assets/js/components/promoBanner/ABC-promotion-banner.json');
    } else {
      // Little Brownie Bakers Cookies Bakery
      response = await fetch("./assets/js/components/cookieCards/LBBC-promotion-banner.json")
    }
    return await response.json();
}

// Asks our function to fetch cookie data
const cookieData = await getMonthlyCookieData();

// Tidies up cookie variable
const chooseCookieByMonth = () => {
    const month = new Date().getMonth();
    const monthlyCookie = {
        name: cookieData[month].name,
        image: cookieData[month].image,
        description: cookieData[month].description
    }
    return monthlyCookie;
}

// Puts cookie variable into promotion banner
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