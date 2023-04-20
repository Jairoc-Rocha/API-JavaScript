// Estado da aplicação
let tabCountries = null;
let tabFavorites = null;
let allCountries = [];
let favoriteCountries = [];
let countCountries = 0;
let countFavorites = 0;
let totalPopulationList = 0;
let totalPopulationFavorite = 0;
let numberFormat = null;

window.addEventListener('load', () => {
    tabCountries = document.querySelector('#tabCountries');
    tabFavorites = document.querySelector('#tabFavorites');
    countCountries = document.querySelector('#countCountries');
    countFavorites = document.querySelector('#countFavorites');
    totalPopulationList = document.querySelector('#totalPopulationList');
    totalPopulationFavorite = document.querySelector('#totalPopulationFavorite');
    numberFormat - Intl.NumberFormat('pt-BR');

    fetchCountries();

});

async function fetchCountries() {
    const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json();
    allCountries = data.map(country => {
        const {numericCode, translations,population, flag } = country;
        return {
            id: numericCode,
            name: translations.pt,
            population,
            flag,
        };
    });

    render();
}

function render() {
    renderCountryList();
    renderFavorites();
    renderSummary();
    handleCountryButtons();
}

function renderCountryList(){
   let countriesHTML = 'div';
   
   allCountries.forEach(country => {
    const {name, flag, id, population} = country;

    const countryHTML = `
        <div class='country'>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    
    `

   })
}
function renderFavorites(){}
function renderSummary(){}
function handleCountryButtons(){}
